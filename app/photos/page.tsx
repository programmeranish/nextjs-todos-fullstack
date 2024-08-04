import Link from "next/link";
import React from "react";

export default function PhotosPage() {
  return (
    <div>
      <div>
        <Link href="/photos/1">Photo1</Link>
      </div>
      <div>
        <Link href="/photos/2">Photo2</Link>
      </div>
      <div>
        <Link href="/photos/3">Photo3</Link>
      </div>
    </div>
  );
}
