import type { Meta, StoryObj } from "@storybook/react";

import { FormTextInput } from "@/components/FormTextInput/FormTextInput";

const meta = {
  title: "Example/FormTextInput",
  component: FormTextInput,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "padded",
  },
  args: {
    // onLogin: fn(),
    // onLogout: fn(),
    // onCreateAccount: fn(),
  },
} satisfies Meta<typeof FormTextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Optional: Story = {
  args: {
    // user: {
    //   name: 'Jane Doe',
    // },
  },
};

export const Mandatory: Story = {};

export const ErrorState: Story = {};

export const Disabled: Story = {};
