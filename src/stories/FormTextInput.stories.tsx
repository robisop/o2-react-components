import type { Meta, StoryObj } from "@storybook/react";

import { FormTextInput } from "@/components/FormTextInput/FormTextInput";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { Control, useForm } from "react-hook-form";
import { z } from "zod";

const FormSchema = z.object({
  email: z.string().email("Invalid email address").or(z.literal("")),
});

const FormTextInputWrapper = (props: {
  render: (props: { control: Control<{ email: string }> }) => React.ReactNode;
}) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
        {props.render({ control: form.control })}
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

const meta = {
  title: "Example/FormTextInput",
  component: FormTextInput,
  decorators: [
    (Story) => (
      <FormTextInputWrapper render={(props) => <Story {...props} />} />
    ),
  ],
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "padded",
  },
  args: {
    control: undefined,
  },
} satisfies Meta<typeof FormTextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Optional: Story = {
  args: {
    fieldName: "email",
    label: "Email",
    isOptional: true,
    placeholder: "my@email.com",
  },
};

export const Mandatory: Story = {
  args: {
    fieldName: "email",
    label: "Email",
    isOptional: false,
    placeholder: "my@email.com",
  },
};
