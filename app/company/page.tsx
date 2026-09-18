import type { Metadata } from "next";
import CompanyApp from "./company-app";

export const metadata: Metadata = {
  title: "HRSB Holdings — Company overview",
  description:
    "What HRSB Holdings Sdn Bhd is, when it was founded, the Board, company structure, subsidiaries and our locations.",
};

export default function Page() {
  return <CompanyApp />;
}
