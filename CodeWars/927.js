import {memo, useCallback, useEffect, useMemo, useState} from "react";
import {classNames} from "@shared/lib/classNames/classNames";
import cls from "./OfertaCountrySwitcher.module.scss";
import {useDebounce} from "@shared/lib/hooks";
import {VStack} from "@shared/ui/Stack";
import {CountrySelect} from "@entities/Geo";
import {AutoComplete, TUiAutoCompleteOptionProps} from "@shared/ui/AutoCompletes";
import {GeoCountry, GeoLocality, Subdomain} from "@shared/api/axios-client";

type CountryCitySwitcherProps = {
   className?: string;
   city: GeoLocality | undefined;
   data: GeoLocality[] | undefined;
   countryId: number | undefined;
   onChange?: (data?: Subdomain) => void;
onDebouncedSearchChange: (search: string | undefined) => void;
setCountry: (countryId: number) => void;
};

export const OfertaCountryCitySwitcher = memo((props: CountryCitySwitcherProps) => {
   const {
      className,
      city,
      onChange,
      countryId,
      setCountry, data,
      onDebouncedSearchChange
   } = props;

   const [search, setSearch] = useState<string | undefined>(city?.name);
   const [initialCitySet, setInitialCitySet] = useState<boolean>(false);

   const debouncedSearch = useDebounce(search, 500);

   useEffect(() => {
      onDebouncedSearchChange(debouncedSearch);
   }, [debouncedSearch, onDebouncedSearchChange]);

   useEffect(() => {
      if (!initialCitySet && city) {
         setSearch(city.name);
         const selectedItem = data?.find(item => item.name === city.name);
         if (selectedItem) {
            onChange?.(selectedItem as unknown as Subdomain);
         }
         setInitialCitySet(true);
      }
   }, [city, data, onChange, initialCitySet]);

   const onChangeCountrySelect = useCallback((data: GeoCountry) => {
      setCountry(data.id);
      setSearch("");
   }, [setCountry]);

   const onAutoCompleteSelect = useCallback((props: TUiAutoCompleteOptionProps) => {
      const selectedItem = data?.find(item => item.id === +props.value);
      if (selectedItem) {
         setSearch(selectedItem.name);
         onChange?.(selectedItem as unknown as Subdomain);
      }
   }, [data, onChange]);

   const options = useMemo(() => {
      return data?.map(item => {
         return {
            label: <div className={cls.item}>
               <div className={cls.geoLocality}>{item.name}</div>
               <div className={cls.geoCounty}>{item.autocomplete_name}</div>
            </div>,
            value: item.id.toString()
         };
      });
   }, [data]);

   return (
      <VStack justify="between" className={classNames(cls.content, {}, [className])}>
         <VStack max gap={30}>
            <CountrySelect
               onChange={onChangeCountrySelect}
               value={countryId?.toString()}
            />
            <AutoComplete
               className={classNames(cls.LocalityAutocomplete, {}, [className])}
               value={search}
               onSearch={(data) => setSearch(data.value ?? undefined)}
               onFocus={() => setSearch("")}
               options={options ?? []}
               onSelect={onAutoCompleteSelect}
               placeholder="Введите название города"
               prefixIcon={<div className="icon-search"/>}
               allowClear
               defaultValue={city?.name}
            />
         </VStack>
      </VStack>
   );
});