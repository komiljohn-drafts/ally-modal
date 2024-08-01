import "./style.css";

import React from "react";
import {
  Button,
  FieldError,
  Label,
  ListBox,
  ListBoxItem,
  Popover,
  Select,
  SelectProps,
  SelectValue,
} from "react-aria-components";
import { Controller, useFormContext } from "react-hook-form";
import { twMerge } from "tailwind-merge";

import { ArrowDownSvg, TickSvg } from "@/public/icons";

interface MySelectProps<T extends object> extends Omit<SelectProps<T>, "children"> {
  name: string;
  options: { id: string; name: string }[];
  label?: string;
  className?: string;
}

export default function FormSelectInput<T extends object>({
  name,
  options,
  label,
  className,
  ...props
}: MySelectProps<T>) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Select
          className={twMerge("react-aria-Select", className)}
          isInvalid={!!error}
          selectedKey={field.value}
          onSelectionChange={field.onChange}
          {...props}
        >
          <Label>{label}</Label>
          <Button>
            <SelectValue />
            <span aria-hidden="true">
              <ArrowDownSvg />
            </span>
          </Button>
          <FieldError>{error?.message}</FieldError>
          <Popover>
            <ListBox>
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
        </Select>
      )}
    />
  );
}
