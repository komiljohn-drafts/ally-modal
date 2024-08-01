import "./style.css";

import React from "react";
import { FieldError, Input, Label, TextField, TextFieldProps } from "react-aria-components";
import { Controller, useFormContext } from "react-hook-form";

import { InfoSvg } from "@/public/icons";

interface FormPrefixInputProps extends PrefixInputProps {
  name: string;
}

export function FormPrefixInput({ name, ...props }: FormPrefixInputProps) {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => <PrefixInput {...field} error={error?.message} {...props} />}
    />
  );
}

interface PrefixInputProps extends TextFieldProps {
  label?: string;
  description?: string;
  error?: string;
  placeholder?: string;
  prefix: string;
  width?: string;
  className?: string;
}

export function PrefixInput({ label, error, width, placeholder, prefix, className, ...props }: PrefixInputProps) {
  return (
    <TextField style={{ width }} className={`react-aria-TextPrefixInput ${className}`} isInvalid={!!error} {...props}>
      {label && (
        <Label>
          {label} {props.isRequired && <span>*</span>}
        </Label>
      )}
      <div className="prefix">
        <p>{prefix}</p>
        <Input placeholder={placeholder} />
        {error && <InfoSvg />}
      </div>
      <FieldError>{error}</FieldError>
    </TextField>
  );
}
