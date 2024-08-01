import "./style.css";

import React from "react";
import { FieldError, Input, Label, TextArea, TextField, TextFieldProps } from "react-aria-components";
import { Controller, useFormContext } from "react-hook-form";
import { twMerge } from "tailwind-merge";

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
      {/* relative adds weird 5-6px of space to the bottom when it's textarea inside, so, I made a workaround by setting negative margin */}
      <div className={twMerge("relative", type === "multiline" && "-mb-1.5")}>
        {type === "multiline" ? <TextArea rows={4} placeholder={placeholder} /> : <Input placeholder={placeholder} />}
        {error && <InfoSvg />}
      </div>
      <FieldError>{error}</FieldError>
    </TextField>
  );
}
