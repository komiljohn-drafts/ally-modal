import "./style.css";

import React from "react";
import { FieldError, Input, Label, TextArea, TextField, TextFieldProps } from "react-aria-components";
import { Controller, useFormContext } from "react-hook-form";

import { InfoSvg } from "@/public/icons";

interface FormTextInputProps extends TextInputProps {
  name: string;
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

interface TextInputProps extends TextFieldProps {
  label?: string;
  description?: string;
  error?: string;
  placeholder?: string;
  type?: "multiline";
}

export function TextInput({ label, error, placeholder, type, isRequired, ...props }: TextInputProps) {
  return (
    <TextField isInvalid={!!error} {...props}>
      {label && (
        <Label>
          {label} {isRequired && <span>*</span>}
        </Label>
      )}
      <div className="relative flex">
        {type === "multiline" ? <TextArea rows={4} placeholder={placeholder} /> : <Input placeholder={placeholder} />}
        {error && <InfoSvg />}
      </div>
      <FieldError>{error}</FieldError>
    </TextField>
  );
}
