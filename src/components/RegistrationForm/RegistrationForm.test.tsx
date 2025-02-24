import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { RegistrationForm } from "./RegistrationForm";

describe("RegistrationForm", () => {
  it("renders registration form with all inputs and submit button", () => {
    render(<RegistrationForm onSubmit={jest.fn()} />);

    expect(screen.getByRole("form")).toBeInTheDocument();

    expect(
      screen.getByRole("textbox", { name: "First Name" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("textbox", { name: "Last Name" })
    ).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: "Email" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Submit" })).toBeInTheDocument();
  });
});
