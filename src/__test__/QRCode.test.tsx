import { render, screen } from "@testing-library/react";
import QRCode from "../components/QRCode/QRCode";

describe("QRCode", () => {
    test("Generate QR code", () => {
      render(<QRCode />);
      const linkElement = screen.getByPlaceholderText(`Enter URL`);
      expect(linkElement).toBeInTheDocument();
    });
    test("Generate QR code", () => {
        render(<QRCode />);
        const linkElement = screen.getByPlaceholderText(`Enter URL`);
        expect(linkElement).toBeInTheDocument();
      });
  
  });
  