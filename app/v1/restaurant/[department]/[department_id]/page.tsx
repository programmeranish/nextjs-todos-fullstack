import React from "react";

export default function DepartmentId({
  params,
}: {
  params: { department_id: string };
}) {
  return <div>{params.department_id}</div>;
}
