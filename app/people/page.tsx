import { db } from "@/lib/db";
import React from "react";

export default async function page() {
  // const res = await db.user.create({
  //   data: {
  //     email: "admin@anish.com",
  //     first_name: "Anish",
  //     last_name: "Shrestha",
  //   },
  // });

  const response = await db.user.findMany({});
  console.log(response);

  return (
    <div>
      users are:
      <div></div>
    </div>
  );
}
