import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";
import { getUserRepositories, getUserReposUrl } from "@/services/api";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface DeveloperProjectsProps {
  params: {
    slug: string;
  };
}

export default async function DeveloperProjectsPage({
  params,
}: DeveloperProjectsProps) {
  const reposLink = await getUserReposUrl(params.slug);

  const repositories = await getUserRepositories(reposLink);

  return (
    <main className="w-full mt-8 container mx-auto">
      <Link href="/developers">
        <Button className="gap-2 mb-6" variant="ghost">
          <ArrowLeftIcon />
          Voltar
        </Button>
      </Link>
      <h2 className="font-semibold text-2xl">
        Projetos de{" "}
        <span className="text-primary">{params.slug.replace("%20", " ")}</span>
      </h2>

      <div className="w-full my-6 grid grid-cols-4 gap-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
        {repositories?.map((repository: any) => (
          <Card key={repository.id}>
            <CardHeader>
              <CardTitle className="text-xl truncate" title={repository.name}>
                {repository.name}
              </CardTitle>
              <CardDescription className="text-xs">
                Tecnologia principal: {repository.language}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="w-full flex items-center gap-4">
                <Link href={repository.html_url} target="_blank">
                  <Button>Repositório</Button>
                </Link>
                {repository.homepage && (
                  <Link
                    href={`${
                      !repository.homepage.includes("https://")
                        ? "https://" + repository.homepage
                        : repository.homepage
                    }`}
                    target="_blank"
                  >
                    <Button>Deploy</Button>
                  </Link>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
