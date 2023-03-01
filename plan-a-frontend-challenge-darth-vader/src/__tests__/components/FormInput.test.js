import React from "react";
import { render, fireEvent } from "@testing-library/react";
import FormInput from "../../components/FormInput";

describe("FormInput component", () => {
  const onChangeMock = jest.fn();
  
  it("renders correctly", () => {
    const { getByLabelText } = render(
      <FormInput
        type="text"
        name="test"
        value=""
        onChange={onChangeMock}
        label="Test"
        required
        minLength={5}
      />
    );

    expect(getByLabelText(/test/i)).toBeInTheDocument();
  });

  it("calls onChange function when input changes", () => {
    const { getByLabelText } = render(
      <FormInput
        type="text"
        name="test"
        value=""
        onChange={onChangeMock}
        label="Test"
        required
        minLength={5}
      />
    );

    fireEvent.change(getByLabelText(/test/i), { target: { value: "testing" } });
    expect(onChangeMock).toHaveBeenCalled();
  });
  
  it("sets minLength attribute correctly", () => {
    const { getByLabelText } = render(
      <FormInput
        type="text"
        name="test"
        value=""
        onChange={onChangeMock}
        label="Test"
        required
        minLength={5}
      />
    );

    expect(getByLabelText(/test/i).getAttribute("minLength")).toBe("5");
  });
});
