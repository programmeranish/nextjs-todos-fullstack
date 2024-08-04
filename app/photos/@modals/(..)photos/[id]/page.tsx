import Modal from "@/app/components/Modal";
import { redirect } from "next/navigation";
import React from "react";

export default function PhotoModalPage() {
  return (
    <div>
      <Modal isOpen />
    </div>
  );
}
