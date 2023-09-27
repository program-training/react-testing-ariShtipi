import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import QRCode from "../components/QRCode/QRCode";

describe("QRCode Component", () => {
  test("should render QR code input Placeholder text is Enter URL", () => {
    render(<QRCode />);
    const inputElement = screen.getByPlaceholderText("Enter URL");
    expect(inputElement).toBeInTheDocument();
  });

  test("should render QR code div by name Generate_QR_code", () => {
    render(<QRCode />);
    const inputElement = screen.getByTestId("Generate_QR_code");
    expect(inputElement).toBeInTheDocument();
  });

});
