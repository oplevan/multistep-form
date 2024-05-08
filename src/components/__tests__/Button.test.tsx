import { render, screen } from "@testing-library/react";
import Button from "../Button";

describe("<Button /> component", () => {
  test("should render correctly", () => {
    const { container } = render(<Button />);
    expect(container).toMatchSnapshot();
  });

  test("should have a custom class name 'test'", () => {
    render(<Button className="test" />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("test");
  });

  test("should have correct type attribute", () => {
    render(<Button type="submit" />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("type", "submit");
  });

  test("should have a custom attribute", () => {
    render(<Button custom-attribute="test" />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("custom-attribute", "test");
  });

  test("should have the correct name", () => {
    render(<Button>TEST BUTTON</Button>);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("TEST BUTTON");
  });

  test("should render children inside a div", () => {
    render(
      <Button>
        <div className="children-wrapped-in-a-div">TEST BUTTON</div>
      </Button>
    );
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toContainHTML("<div class='children-wrapped-in-a-div'>TEST BUTTON</div>");
  });
});
