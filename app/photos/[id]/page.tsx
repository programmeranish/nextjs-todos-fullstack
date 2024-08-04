import Image from "next/image";
import React from "react";

export default function PhotoDetail({ params }: { params: { id: string } }) {
  return (
    <div>
      {params.id}
      <Image
        src="https://images.unsplash.com/photo-1721058677807-34a4fcde1952?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8"
        alt="a dog"
        width={300}
        height={300}
      />
    </div>
  );
}
