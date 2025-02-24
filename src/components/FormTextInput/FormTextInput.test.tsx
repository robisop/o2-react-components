import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { ReactNode } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { FormTextInput } from "./FormTextInput";

const Wrapper = ({ children }: { children: ReactNode }) => {
  const form = useForm({ defaultValues: { email: "" } });
  return <FormProvider {...form}>{children}</FormProvider>;
};

const Component = (props: { isOptional?: boolean }) => {
  const form = useForm({ defaultValues: { email: "" } });
  return (
    <FormTextInput
      control={form.control}
      fieldName="email"
      label="Email"
      isOptional={props.isOptional}
      placeholder="my@email.com"
    />
  );
};

describe("FormTextInput", () => {
  it("renders text input", () => {
    render(<Component />, { wrapper: Wrapper });

    const input = screen.getByRole("textbox", { name: "Email" });

    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("name", "email");
    expect(input).toHaveAttribute("placeholder", "my@email.com");
  });

  it("renders Optional description when optional", () => {
    render(<Component isOptional />, { wrapper: Wrapper });

    expect(screen.getByText("Optional")).toBeInTheDocument();
  });
});
