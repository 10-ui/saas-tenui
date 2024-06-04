"use client";
import Link from "next/link";
import Image from "next/image";
import favicon from "@/public/favicon.svg";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;
  const activeClass = (path: string) =>
    isActive(path) ? "text-slate-900" : "";
  return (
    <header className='flex items-center justify-between px-9 py-6'>
      <div className='flex items-center gap-6'>
        <h1>
          <Link href='/' className='flex items-center gap-2'>
            <Image src={favicon} alt='favicon' width={56} height={56} />
            <span className='text-xl font-bold'>Tenui</span>
          </Link>
        </h1>
        <nav className='flex gap-3'>
          <Button variant={"hover"} asChild>
            <Link href='/features' className={`${activeClass("/features")}`}>
              Features
            </Link>
          </Button>
          <Button variant={"hover"} asChild>
            <Link href='/pricing' className={`${activeClass("/pricing")}`}>
              Pricing
            </Link>
          </Button>
          <Button variant={"hover"} asChild>
            <Link href='/docs' className={`${activeClass("/docs")}`}>
              Docs
            </Link>
          </Button>
        </nav>
      </div>
      <div className='flex gap-3'>
        <Button variant={"outline"}>Login</Button>
        <Button variant={"default"}>Sign Up</Button>
      </div>
    </header>
  );
}
