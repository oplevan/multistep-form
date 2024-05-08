import { screen, render } from "@testing-library/react";
import Input from "../Input";

describe("<Input /> component", () => {
  test("should render correctly", () => {
    const { container } = render(<Input />);
    expect(container).toMatchSnapshot();
  });

  test("should have correct class name & attributes", () => {
    render(
      <Input
        custom-attribute="test"
        className="test"
        type="text"
      />
    );
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
    expect(input).toHaveClass("test");
    expect(input).toHaveAttribute("type", "text");
    expect(input).toHaveAttribute("custom-attribute", "test");
  });
});
