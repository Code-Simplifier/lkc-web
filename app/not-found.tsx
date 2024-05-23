import Header from "@/components/Header";
import Link from "next/link";
import { primary_bold } from "./fonts";

export default function NotFound() {
  return (
    <div className="pt-20 flex flex-col items-center justify-center text-center h-screen">
      <p className={`${primary_bold.className} text-4xl text-error hidden md:flex`}>Oops! We cannot find that page.</p>
      <p className="text-2xl">Maybe you can find what u want here?</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
