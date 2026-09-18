import type { Metadata } from "next";
import OnboardingApp from "./onboarding-app";

export const metadata: Metadata = {
  title: "Onboarding — Anne · ENVY",
  description:
    "Corporate Services onboarding companion for Anne, styled in the ENVY design system.",
};

export default function Page() {
  return <OnboardingApp />;
}
