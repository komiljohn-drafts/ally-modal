import "./style.css";

import React from "react";
import { FieldError, Input, Label, TextField, TextFieldProps } from "react-aria-components";
import { Controller, useFormContext } from "react-hook-form";

import { InfoSvg } from "@/public/icons";

interface FormTextInputProps extends TextFieldProps {
  label?: string;
  name: string;
  description?: string;
}

export function FormTextInput({ name, ...props }: FormTextInputProps) {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => <TextInput {...field} error={error?.message} {...props} />}
    />
  );
}

interface TextInputProps {
  label?: string;
  description?: string;
  error?: string;
}

export function TextInput({ label, error, ...props }: TextInputProps) {
  return (
    <TextField isInvalid={!!error} {...props}>
      {label && (
        <Label>
          {label} <span>*</span>
        </Label>
      )}
      <Input placeholder="What is your title?" />
      {error && <InfoSvg />}
      <FieldError>{error}</FieldError>
    </TextField>
  );
}
