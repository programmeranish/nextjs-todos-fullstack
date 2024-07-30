import React from "react";

export default function Layout({
  children,
  Staff,
  Employee,
}: {
  children: React.ReactNode;
  Staff: React.ReactNode;
  Employee: React.ReactNode;
}) {
  return (
    <div>
      this is in people layout
      {Staff}
      {Employee}
      {children}
    </div>
  );
}
