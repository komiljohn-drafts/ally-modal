import "./style.css";

import React from "react";
import {
  ComboBox,
  ComboBoxProps,
  FieldError,
  Input,
  Label,
  ListBox,
  ListBoxItem,
  Popover,
} from "react-aria-components";
import { Controller, useFormContext } from "react-hook-form";

import { InfoSvg, SearchSvg, TickSvg } from "@/public/icons";

interface MyComboBoxProps<T extends object> extends Omit<ComboBoxProps<T>, "children"> {
  name: string;
  label?: string;
  placeholder?: string;
  options: { name: string; id: string | number }[];
  className?: string;
}

export default function ComboInput<T extends object>({
  name,
  placeholder,
  options,
  label,
  className,
  ...props
}: MyComboBoxProps<T>) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <ComboBox
          formValue="text"
          menuTrigger="focus"
          className={`react-aria-ComboBox ${className}`}
          isInvalid={!!error}
          selectedKey={field.value}
          onSelectionChange={field.onChange}
          {...props}
        >
          <Label>{label}</Label>
          <div className="inputWrapper">
            <Input placeholder={placeholder} />
            <SearchSvg className="search-svg" />
            <FieldError>{error?.message}</FieldError>
            {error && <InfoSvg />}
          </div>
          <Popover>
            <ListBox items={options}>
              {options.map((item) => (
                <ListBoxItem key={item.id} textValue={item.name} id={item.id}>
                  {({ isSelected }) => (
                    <>
                      {item.name}
                      {isSelected && <TickSvg />}
                    </>
                  )}
                </ListBoxItem>
              ))}
            </ListBox>
          </Popover>
        </ComboBox>
      )}
    />
  );
}
