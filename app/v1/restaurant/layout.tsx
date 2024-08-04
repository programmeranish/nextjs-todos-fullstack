import React from "react";

export default function RestuarentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log("this is something to be run once");
  return (
    <div>
      <div className="bg-black text-white p-4">This is a header</div>
      <div className="text-red-700">{children}</div>
    </div>
  );
}
