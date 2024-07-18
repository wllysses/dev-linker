"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { handleCreateProfile } from "../_actions/action";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";

export default function CreateProfilePage() {
  const router = useRouter();

  const { data: session } = useSession();

  const schema = z.object({
    githubLink: z
      .string({ required_error: "Link do perfil no github é obrigatório" })
      .min(1, { message: "Link do perfil no github é obrigatório" }),
    linkedinLink: z
      .string({ required_error: "Link do perfil no Linkedin é obrigatório" })
      .min(1, { message: "Link do perfil no Linkedin é obrigatório" }),
    phone: z
      .string({ message: "Telefone é obrigatório" })
      .min(1, { message: "Telefone é obrigatório" }),
  });

  type ValidationSchema = z.infer<typeof schema>;

  const form = useForm<ValidationSchema>({
    resolver: zodResolver(schema),
  });

  const handleSubmitProfile: SubmitHandler<ValidationSchema> = async (data) => {
    try {
      const formData = {
        ...data,
        userId: session?.user.id!,
      };

      const response = await handleCreateProfile(formData);

      if (!response) {
        toast({
          title: "Erro",
          description: "Algo deu errado...",
          variant: "destructive",
        });
        return;
      }

      router.replace("/");
      toast({
        title: "Sucesso",
        description: "Perfil criado com sucesso!",
      });
      console.log(response);
    } catch (error) {
      console.log(error);
      toast({
        title: "Erro",
        description: "Perfil já existente.",
        variant: "destructive",
      });
    }
  };

  return (
    <main className="w-full mt-20 px-4 container mx-auto">
      <h2 className="font-semibold text-2xl">
        Criar <span className="text-primary">meu perfil</span>
      </h2>

      <Form {...form}>
        <form
          method="POST"
          className="w-full mt-8 space-y-4"
          onSubmit={form.handleSubmit(handleSubmitProfile)}
        >
          <div className="grid grid-cols-2 grid-rows-2 gap-8 max-sm:grid-cols-1">
            <FormField
              control={form.control}
              name="githubLink"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Github</FormLabel>
                  <FormControl>
                    <Input placeholder="ex: github.com/johndoe" {...field} />
                  </FormControl>
                  {form.formState.errors && (
                    <span className="text-red-500 text-xs">
                      {form.formState.errors.githubLink?.message}
                    </span>
                  )}
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="linkedinLink"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Linkedin</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="ex: linkedin.com/in/johndoe"
                      {...field}
                    />
                  </FormControl>
                  {form.formState.errors && (
                    <span className="text-red-500 text-xs">
                      {form.formState.errors.linkedinLink?.message}
                    </span>
                  )}
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Telefone</FormLabel>
                  <FormControl>
                    <Input placeholder="ex: 83988776655" {...field} />
                  </FormControl>
                  {form.formState.errors && (
                    <span className="text-red-500 text-xs">
                      {form.formState.errors.phone?.message}
                    </span>
                  )}
                </FormItem>
              )}
            />
          </div>

          <Button type="submit">Criar perfil</Button>
        </form>
      </Form>
    </main>
  );
}
