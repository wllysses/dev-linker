"use server";

import { prismaClient } from "@/lib/prisma";

interface ProfileProps {
  githubLink: string;
  linkedinLink: string;
  phone: string;
  userId: string;
}

export const handleCreateProfile = async (data: ProfileProps) => {
  const profile = await prismaClient.profile.create({
    data: {
      githubLink: data.githubLink,
      linkedinLink: data.linkedinLink,
      phone: data.phone,
      userId: data.userId,
    },
  });

  return profile;
};

export const handleEditProfile = async (
  data: ProfileProps,
  profileId: string
) => {
  const profile = await prismaClient.profile.update({
    data: {
      githubLink: data.githubLink,
      linkedinLink: data.linkedinLink,
      phone: data.phone,
      userId: data.userId,
    },
    where: {
      id: profileId,
    },
  });

  return profile;
};
