"use client";

import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import {
  ContactIcon,
  HomeIcon,
  InfoIcon,
  LinkIcon,
  LogInIcon,
  LogOutIcon,
  MenuIcon,
  UserIcon,
  UsersIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { LoginModal } from "@/app/(home)/_components/login-modal";
import { Button, buttonVariants } from "./button";
import { Card } from "./card";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./sheet";
import { Separator } from "./separator";
import { toast } from "./use-toast";

export function Header() {
  const { status } = useSession();

  async function handleLogout() {
    try {
      await signOut();
      toast({
        title: "Volte sempre!",
        description: "Logout realizado com sucesso.",
        variant: "destructive",
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Card className="p-4 border-b shadow-md rounded-none">
      <header className="w-full container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="size-8 rounded-md bg-primary flex items-center justify-center">
            <LinkIcon className="text-white font-bold" size={18} />
          </div>
          <h1 className="font-bold">
            Dev<span className="text-primary">Linker</span>
          </h1>
        </Link>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <div className="mt-4 w-full">
              <nav className="w-full space-y-2">
                <Link
                  href="/"
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "w-full justify-start gap-2"
                  )}
                >
                  <HomeIcon size={18} />
                  Home
                </Link>
                <Link
                  href="/developers"
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "w-full justify-start gap-2"
                  )}
                >
                  <UsersIcon size={18} />
                  Desenvolvedores
                </Link>
                <Link
                  href="/contact"
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "w-full justify-start gap-2"
                  )}
                >
                  <ContactIcon size={18} />
                  Contato
                </Link>
                <Link
                  href="/about"
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "w-full justify-start gap-2"
                  )}
                >
                  <InfoIcon size={18} />
                  Sobre
                </Link>
              </nav>
            </div>
            <Separator className="my-8" />
            {status === "authenticated" ? (
              <div>
                <h5 className="font-semibold text-sm mb-2">Minha conta</h5>
                <Link
                  href="/app/profile/edit"
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "w-full justify-start gap-2"
                  )}
                >
                  <UserIcon size={18} />
                  Perfil
                </Link>
                <Button
                  className="mt-4 ml-auto flex items-center gap-2"
                  variant="destructive"
                  onClick={handleLogout}
                >
                  <LogOutIcon size={18} />
                  Sair
                </Button>
              </div>
            ) : (
              <LoginModal icon={LogInIcon} label={"Login"} />
            )}
          </SheetContent>
        </Sheet>
      </header>
    </Card>
  );
}
