import Home from "../Home";
import { expect, describe, it } from "vitest";
import { render } from "@testing-library/react";

describe("Tests for Home Page", () => {
  it("renders correctly", () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });

  it("tests", () => {
    expect(1).toBe(1);
  });
});
