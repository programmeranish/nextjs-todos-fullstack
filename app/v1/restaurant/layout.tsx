import React from "react";

export default function RestuarentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log("this is something to be run once");
  return (
    <div>
      this is
      <div className="text-red-700">{children}</div>
    </div>
  );
}
