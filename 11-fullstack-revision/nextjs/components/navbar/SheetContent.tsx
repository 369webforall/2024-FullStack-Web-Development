import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-6">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/">Home</Link>
          <Link href="/">Home</Link>
          <Link href="/">Home</Link>
          <Link href="/">Home</Link>
          <Link href="/">Home</Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
