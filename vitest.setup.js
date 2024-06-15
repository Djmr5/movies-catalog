import "@testing-library/jest-dom";
import { vi } from "vitest";

vi.mock("next/router", () => ({
    useNavigate: () => vi.fn(),
}));