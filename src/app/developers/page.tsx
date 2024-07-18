import Link from "next/link";
import { prismaClient } from "@/lib/prisma";
import {
  AtSignIcon,
  FolderOpenDotIcon,
  GithubIcon,
  LinkedinIcon,
  PhoneIcon,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default async function DevelopersPage() {
  const developers = await prismaClient.user.findMany({
    include: {
      profile: true,
    },
  });

  return (
    <main className="w-full mt-16 mb-8 px-4 container mx-auto">
      <h2 className="font-bold text-2xl">
        Conheça os <span className="text-primary">Desenvolvedores</span>
      </h2>

      <div className="mt-4 w-full grid grid-cols-4 gap-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
        {developers?.map((developer) => (
          <Card key={developer.id}>
            <CardHeader className="flex-row gap-2 items-center">
              <Avatar>
                <AvatarFallback>{developer.name![0]}</AvatarFallback>
                {developer.image && <AvatarImage src={developer.image} />}
              </Avatar>
              <div>
                <h3 className="font-semibold">{developer.name}</h3>
                {developer.profile ? (
                  <span className="text-xs text-black/50">
                    criado em{" "}
                    {new Date(developer.profile?.createdAt!).toLocaleDateString(
                      "pt-BR"
                    )}
                  </span>
                ) : (
                  <span className="text-xs text-black/50">
                    Perfil incompleto
                  </span>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <Link href={`/developers/${developer.name}`}>
                <Button className="w-full gap-2">
                  <FolderOpenDotIcon size={18} />
                  Visualizar Projetos
                </Button>
              </Link>
            </CardContent>
            <CardFooter className="flex flex-col items-start">
              <h4 className="font-semibold">Contatos</h4>
              <Separator className="my-2" />
              <div className="w-full flex items-center gap-2">
                <Link
                  href={`mailto:${developer.email}`}
                  target="_blank"
                  className={buttonVariants({
                    variant: "outline",
                    size: "icon",
                  })}
                >
                  <AtSignIcon />
                </Link>
                {developer.profile && (
                  <>
                    <Link
                      href={`https://api.whatsapp.com/send?phone=${developer.profile?.phone}&text=Ol%C3%A1.%20Tudo%20bem!?%20Encontrei%20seu%20perfil%20atrav%C3%A9s%20do%20DevLinker%20e%20achei%20interessante%20para%20desenvolver%20uma%20ideia.%20Vamos%20conversar?`}
                      target="_blank"
                      className={buttonVariants({
                        variant: "outline",
                        size: "icon",
                      })}
                    >
                      <PhoneIcon />
                    </Link>
                    <Link
                      href={developer.profile?.githubLink!}
                      target="_blank"
                      className={buttonVariants({
                        variant: "outline",
                        size: "icon",
                      })}
                    >
                      <GithubIcon />
                    </Link>
                    <Link
                      href={developer.profile?.linkedinLink!}
                      target="_blank"
                      className={buttonVariants({
                        variant: "outline",
                        size: "icon",
                      })}
                    >
                      <LinkedinIcon />
                    </Link>
                  </>
                )}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* <pre>{JSON.stringify(developers, null, 1)}</pre> */}
    </main>
  );
}
