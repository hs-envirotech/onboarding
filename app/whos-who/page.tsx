import type { Metadata } from "next";
import WhosWhoApp from "./whos-who-app";

export const metadata: Metadata = {
  title: "Who's who — HRSB Group",
  description:
    "Key personnel across the HRSB Group — Board & leadership, EVPs & VPs, corporate office heads, and every Business Unit head.",
};

export default function Page() {
  return <WhosWhoApp />;
}
