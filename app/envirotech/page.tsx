import type { Metadata } from "next";
import EnvirotechApp from "./envirotech-app";

export const metadata: Metadata = {
  title: "Envirotech — Company overview",
  description:
    "HRSB Sigma Envirotech Sdn Bhd — corporate profile, directors & shareholders through the Gradiant exit, and our organisation chart.",
};

export default function Page() {
  return <EnvirotechApp />;
}
