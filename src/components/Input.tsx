import React from "react";
import {
  Control,
  Controller,
  FieldError,
  FieldErrorsImpl,
  FieldValues,
  Merge,
} from "react-hook-form";
import Cleave from "cleave.js/react";

interface InputProps {
  name: string;
  placeholder: string;
  label: string;
  control: Control<FieldValues>;
  error?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
  type?: string;
  required?: boolean;
  addedNote?: string;
  inputType?: "input" | "select" | "cleave";
  options?: { name: string; value: string }[];
  cleaveOption?: any;
  maxLength?: number;
}

const Input: React.FC<InputProps> = ({
  name,
  placeholder,
  label,
  required,
  addedNote,
  type,
  inputType,
  options,
  control,
  error,
  cleaveOption,
  maxLength,
  ...rest
}) => {
  return (
    <div className="w-full">
      <label className="block font-bold" htmlFor={name}>
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      {addedNote && (
        <p className="text-base my-3 text-[#817E9E]">{addedNote}</p>
      )}

      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) =>
          inputType === "select" ? (
            <select
              className="input"
              name={name}
              id={name}
              onChange={onChange}
              placeholder={placeholder}
              value={value}
              {...rest}
            >
              {!!options &&
                options?.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.name}
                  </option>
                ))}
            </select>
          ) : inputType === "cleave" ? (
            <Cleave
              options={cleaveOption}
              required
              name={name}
              className={`input ${cleaveOption?.date && "tracking-[8px]"}`}
              value={value}
              onChange={onChange}
              {...rest}
            />
          ) : (
            <input
              className="input"
              name={name}
              id={name}
              required={required}
              placeholder={placeholder}
              type={type}
              onChange={onChange}
              value={value}
              {...rest}
            />
          )
        }
      />

      {/*           
       {inputType === "select" ? (
         <select {...register} className="input" name={name} id={name}>
           {!!options &&
             options?.map((option) => (
               <option value={option.value}>{option.name}</option>
             ))}
         </select>
       ) : (
         <input
           className="input"
           name={name}
           id={name}
           required={required}
           placeholder={placeholder}
           type={type}
           {...register(name)}
         />
       )} */}

      {!!error && <div className="text-sm text-red-500">{`${error}`}</div>}
    </div>
  );
};

export default Input;
