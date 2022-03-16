import { render } from "@testing-library/react";

import ButtonComponent, { ButtonProps } from "./ButtonComponent";

describe("ButtonComponent", () => {
  const defaultProps: ButtonProps = {
    onClick: jest.fn(),
    variant: "primary",
  };

  it("should render successfully", () => {
    const { baseElement } = render(<ButtonComponent {...defaultProps} />);
    expect(baseElement).toBeTruthy();
  });
});
