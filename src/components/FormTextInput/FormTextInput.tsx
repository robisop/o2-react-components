"use client";

import { Control, FieldValues, Path } from "react-hook-form";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export type FormTextInputProps<T extends FieldValues> = {
  control: Control<T>;
  fieldName: Path<T>;
  label: string;
  isOptional?: boolean;
  placeholder?: string;
};

export const FormTextInput = <T extends FieldValues>({
  control,
  fieldName,
  label,
  isOptional,
  placeholder,
}: FormTextInputProps<T>) => {
  return (
    <FormField
      control={control}
      name={fieldName}
      render={({ field }) => (
        <FormItem>
          <div className="flex gap-xs items-center w-full sm:w-[400px]">
            <FormLabel>{label}</FormLabel>
            {isOptional && <FormDescription>Optional</FormDescription>}
          </div>
          <FormControl>
            <Input placeholder={placeholder} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
