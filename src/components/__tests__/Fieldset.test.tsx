import { render, screen } from "@testing-library/react";
import Fieldset from "../Fieldset";

describe("<Fieldset /> component", () => {
  test("renders correctly", () => {
    const { container } = render(
      <Fieldset legend="TEST LEGEND">
        <div>Test Child</div>
      </Fieldset>
    );
    expect(container).toMatchSnapshot();
  });

  test("renders legend correctly", () => {
    render(<Fieldset legend="Test Legend">TEST</Fieldset>);
    const legendElement = screen.getByText("Test Legend");
    expect(legendElement).toBeInTheDocument();
  });

  test("renders children correctly", () => {
    render(
      <Fieldset legend="Test Legend">
        <div data-testid="test-child">Test Child</div>
      </Fieldset>
    );
    const childElement = screen.getByTestId("test-child");
    expect(childElement).toBeInTheDocument();
  });

  test("applies correct class names", () => {
    render(<Fieldset legend="Test Legend">TEST</Fieldset>);
    const fieldsetElement = screen.getByTestId("fieldset");
    expect(fieldsetElement).toHaveClass("border");
    expect(fieldsetElement).toHaveClass("rounded-md");
    expect(fieldsetElement).toHaveClass("px-3");
    expect(fieldsetElement).toHaveClass("pb-4");
    expect(fieldsetElement).toHaveClass("space-y-4");
  });
});
