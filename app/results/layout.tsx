import React, { Suspense } from "react";
import Loading from "./loading";

export default function ResultsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
