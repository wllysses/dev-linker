import React from "react";
import { getServerSession } from "next-auth";
import { nextAuthOptions } from "@/lib/auth";
import { prismaClient } from "@/lib/prisma";
import { EditProfileForm } from "./_componentts/edit-form";

export default async function EditProfilePage() {
  const user = await getServerSession(nextAuthOptions);

  const profile = await prismaClient.profile.findUnique({
    where: {
      userId: user?.user.id,
    },
  });

  return (
    <main className="w-full mt-20 px-4 container mx-auto">
      <h2 className="font-semibold text-2xl">
        Editar <span className="text-primary">meu perfil</span>
      </h2>

      <EditProfileForm profile={profile!} />
    </main>
  );
}
