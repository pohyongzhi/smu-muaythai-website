"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="text-red-500 flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Hello World</h1>
      <button className="bg-blue-500 text-white p-2 rounded-md" onClick={() => router.push("/coaches")}>Click me</button>
    </div>
  );
}
