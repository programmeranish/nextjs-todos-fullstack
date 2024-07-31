import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      this is in dynamic poepleid
      {children}
    </div>
  );
}
