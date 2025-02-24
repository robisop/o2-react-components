"use client";

import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FormTextInput } from "../FormTextInput/FormTextInput";
import { Button } from "../ui/button";

const RegistrationFormSchema = z.object({
  firstName: z
    .string()
    .min(2, {
      message: "First name must be at least 2 characters.",
    })
    .or(z.literal("")),
  lastName: z
    .string()
    .min(2, {
      message: "Last name must be at least 2 characters.",
    })
    .or(z.literal("")),
  email: z.string().email("Invalid email address"),
});

export type RegistrationFormSchemaType = z.infer<typeof RegistrationFormSchema>;

interface RegistrationFormProps {
  onSubmit: (data: RegistrationFormSchemaType) => void;
}

export const RegistrationForm = ({ onSubmit }: RegistrationFormProps) => {
  const form = useForm<RegistrationFormSchemaType>({
    resolver: zodResolver(RegistrationFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
  });

  return (
    <Form {...form}>
      <form
        name="registration"
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6"
      >
        <FormTextInput
          control={form.control}
          fieldName="firstName"
          label="First Name"
          isOptional
          placeholder="Name"
        />
        <FormTextInput
          control={form.control}
          fieldName="lastName"
          label="Last Name"
          isOptional
          placeholder="Surname"
        />
        <FormTextInput
          control={form.control}
          fieldName="email"
          label="Email"
          placeholder="my@email.com"
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};
