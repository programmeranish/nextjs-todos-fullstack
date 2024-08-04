import React from "react";

export default function PhotosLayout({
  children,
  modals,
}: {
  children: React.ReactNode;
  modals: React.ReactNode;
}) {
  return (
    <div>
      {modals}
      <div>{children}</div>
    </div>
  );
}
