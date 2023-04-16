import React from "react";

export const revalidate = 0;

export default function ResultsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
