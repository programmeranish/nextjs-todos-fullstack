import React from "react";

export default function MenusLayout({
  children,
  dryfoodMenu,
  seafoodMenu,
}: {
  children: React.ReactNode;
  dryfoodMenu: React.ReactNode;
  seafoodMenu: React.ReactNode;
}) {
  return (
    <div>
      Menu layout
      <div className="flex justify-between">
        {dryfoodMenu}
        {seafoodMenu}
      </div>
      {children}
    </div>
  );
}
