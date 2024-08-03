import { usePathname } from "next/navigation";
import React from "react";

export default function RestaurantDepartment({
  params,
}: {
  params: { department: string };
}) {
  return (
    <div>
      Restaurant department page
      <div>we are in {params.department}</div>
    </div>
  );
}
