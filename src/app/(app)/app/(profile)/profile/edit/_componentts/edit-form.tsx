"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { handleEditProfile } from "../../_actions/action";
import { toast } from "@/components/ui/use-toast";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Profile } from "@prisma/client";

interface Props {
  profile: Profile;
}

export function EditProfileForm({ profile }: Props) {
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

      const response = await handleEditProfile(formData, profile.id as string);

      if (!response) {
        toast({
          title: "Erro",
          description: "Algo deu errado...",
          variant: "destructive",
        });
        return;
      }

      router.refresh();
      toast({
        title: "Sucesso",
        description: "Perfil editado com sucesso!",
      });
      console.log(response);
    } catch (error) {
      console.log(error);
      toast({
        title: "Erro",
        description: "Algo deu errado...",
        variant: "destructive",
      });
    }
  };

  return (
    <Form {...form}>
      <form
        method="POST"
        className="w-full mt-8 space-y-4"
        onSubmit={form.handleSubmit(handleSubmitProfile)}
      >
        {profile && (
          <div className="grid grid-cols-2 grid-rows-2 gap-8 max-sm:grid-cols-1">
            <FormField
              control={form.control}
              name="githubLink"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Github</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="ex: github.com/johndoe"
                      {...field}
                      defaultValue={profile.githubLink!}
                    />
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
                      defaultValue={profile.linkedinLink!}
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
                    <Input
                      placeholder="ex: 83988776655"
                      {...field}
                      defaultValue={profile.phone!}
                    />
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
        )}

        <Button type="submit">Editar perfil</Button>
      </form>
    </Form>
  );
}
