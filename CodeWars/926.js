import {memo, useCallback, useEffect, useMemo, useState} from "react";
import {classNames} from "@shared/lib/classNames/classNames";
import cls from "./OfertaCountrySwitcher.module.scss";
import {useDebounce} from "@shared/lib/hooks";
import {VStack} from "@shared/ui/Stack";
import {CountrySelect} from "@entities/Geo";
import {AutoComplete, TUiAutoCompleteOptionProps} from "@shared/ui/AutoCompletes";
import {GeoCountry, GeoLocality, Subdomain} from "@shared/api/axios-client";

type CountryCitySwitcherProps = {
   className?: string
   data: GeoLocality[] | undefined
   countryId: number | undefined
   onChange?: (data?: Subdomain) => void
   onDebouncedSearchChange: (search: string | undefined) => void
   setCountry: (countryId: number) => void
   value: number
}

export const OfertaCountryCitySwitcher = memo((props: CountryCitySwitcherProps) => {
   const {className, onChange, countryId, setCountry, data, value, onDebouncedSearchChange} = props;

   const [search, setSearch] = useState<string>();

   const debouncedSearch = useDebounce(search, 500);

   console.log("countryId: ", countryId);
   console.log("data: ", data);
   console.log("value: ", value);

   useEffect(() => {
      onDebouncedSearchChange(debouncedSearch);
   }, [debouncedSearch, onDebouncedSearchChange]);

   const onChangeCountrySelect = useCallback((data: GeoCountry) => {
      setCountry(data.id);
   }, [setCountry]);

   const onAutoCompleteSelect = useCallback((props: TUiAutoCompleteOptionProps) => {
      const selectedItem = data?.find(item => item.id === +props.value);
      if (selectedItem) {
         setSearch(selectedItem.name as string);
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

   const getCityFromCountry = (value: number) => {
      switch (value) {
         case 1:
            return "Новосибирск";
         case 2:
            return "Ankara";
         case 3:
            return "กรุงเทพฯ";
         default:
            return "Новосибирск";
      }
   };

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
               defaultValue={getCityFromCountry(props.value)}
               // onBlur={() => setSearch(city)}
            />
         </VStack>
      </VStack>
   );
});