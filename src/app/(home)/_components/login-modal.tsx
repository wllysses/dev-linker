"use client";

import { ElementType } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "@/components/ui/use-toast";

interface Props {
  label: string;
  icon: ElementType;
}

export function LoginModal({ label, icon: Icon }: Props) {
  const router = useRouter();

  async function handlGithubLogin() {
    try {
      router.replace("/");
      await signIn("github", {
        redirect: false,
      });
      toast({
        title: "Sucesso",
        description: "Login realizado com sucesso!",
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="gap-2 font-semibold w-full">
          <Icon size={18} />
          {label}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Acessar</DialogTitle>
          <DialogDescription>
            Faça login com a sua conta Github
          </DialogDescription>
        </DialogHeader>
        <div className="w-full">
          <Button className="w-full gap-2" onClick={handlGithubLogin}>
            <Icon size={18} />
            Entrar com Github
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
