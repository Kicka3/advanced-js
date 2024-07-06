import React, { ChangeEvent, ComponentProps, ComponentPropsWithoutRef, forwardRef, useState } from "react";
import "./multi-input.scss";
import { SvgSearchIcon } from "../../svg/icon-components/search-icon";

export type TextFieldProps = {
   errorMessage?: string;
   label?: string;
   labelProps?: ComponentProps<"label">;
   onValueChange?: (value: string) => void;
   rootContainerProps?: ComponentProps<"div">;
   type?: "password" | "search" | "text";
   autoFocus?: boolean,
} & ComponentPropsWithoutRef<"input">;

type PropsType = TextFieldProps & Omit<ComponentPropsWithoutRef<"input">, keyof TextFieldProps>;

export const MultiInput = forwardRef<HTMLInputElement, PropsType>(
   (
      {
         className,
         errorMessage,
         label,
         labelProps,
         onChange,
         onValueChange,
         placeholder,
         rootContainerProps,
         type = "text",
         value,
         autoFocus= true,
         ...restProps
      },
      ref
   ) => {
      const [showPassword, setShowPassword] = useState(false);
      const [isFocused, setIsFocused] = useState(false);

      const isShowPasswordButton = type === "password";
      const isSearch = type === "search";

      const setShowPasswordHandler = () => setShowPassword(prevValue => !prevValue);

      const getCurrentInputType = (type: TextFieldProps["type"], showPassword: boolean) => {
         if (type === "password" && showPassword) {
            return "text";
         }

         return type;
      };

      const currentInputType = getCurrentInputType(type, showPassword);

      const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
         onChange?.(e);
         onValueChange?.(e.currentTarget.value);
      };

      const classNames = {
         field: `field ${errorMessage ? "error" : ""} ${isSearch ? "hasSearchIcon" : ""} ${className || ""}`,
         inputWrapper: "inputWrapper",
         label: `label ${restProps.disabled ? "disabled" : ""} ${labelProps?.className || ""}`,
         passwordButton: `passwordButton ${restProps.disabled ? "disabled" : ""}`,
         rootContainer: `rootContainer ${rootContainerProps?.className || ""}`,
         searchIcon: `searchIcon ${restProps.disabled ? "disabled" : ""} ${!restProps.disabled ? "searchIconActive" : ""}`,
      };

      return (
         <div className={classNames.rootContainer}>
            {label && (
               <span className={`label ${restProps.disabled ? "disabled" : ""} ${labelProps?.className || ""}`}>
            {label}
          </span>
            )}
            <div className={classNames.inputWrapper}>
               {isSearch && <SvgSearchIcon className={classNames.searchIcon}/>}
               <input
                  autoFocus={autoFocus}
                  className={classNames.field}
                  onChange={onChangeHandler}
                  placeholder={isFocused ? "" : placeholder}
                  ref={ref}
                  type={currentInputType}
                  value={value}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  {...restProps}
               />
               {isShowPasswordButton && (
                  <button
                     className={classNames.passwordButton}
                     disabled={restProps.disabled}
                     onClick={setShowPasswordHandler}
                     type={"button"}
                  >
                     {/*{showPassword ? <Eye /> : <EyeOff />}*/}
                  </button>
               )}
            </div>
            {errorMessage && <span>{errorMessage}</span>}
         </div>
      );
   }
);
