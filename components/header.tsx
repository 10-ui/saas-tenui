import Link from "next/link";
import Image from "next/image";
import favicon from "@/public/favicon.svg";
import { Button } from "@/components/ui/button";

export default function Header() {
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
          <Button variant={"hover"}>Features</Button>
          <Button variant={"hover"}>Pricing</Button>
          <Button variant={"hover"}>Docs</Button>
        </nav>
      </div>
      <Button variant={"outline"}>Login</Button>
    </header>
  );
}
