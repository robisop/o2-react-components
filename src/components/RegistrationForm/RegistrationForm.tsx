"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Form } from "@/components/ui/form";
import { toast } from "@/hooks/use-toast";
import { FormTextInput } from "../FormTextInput/FormTextInput";
import { Button } from "../ui/button";

const FormSchema = z.object({
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

const onSubmit = (data: z.infer<typeof FormSchema>) => {
  toast({
    title: "You submitted the following values:",
    description: (
      <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
        <code className="text-white">{JSON.stringify(data, null, 2)}</code>
      </pre>
    ),
  });
};

export const RegistrationForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
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
