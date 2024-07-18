import Image from "next/image";
import illustration from "@/../public/undraw_illustration.svg";

export default function AboutPage() {
  return (
    <main className="w-full mt-16 mb-8 px-4 container mx-auto grid grid-cols-2 gap-20 max-md:grid-cols-1">
      <div>
        <h2 className="font-semibold text-2xl">
          Quem <span className="text-primary">somos</span>
        </h2>
        <p className="mt-4 text-justify font-light text-lg max-md:text-base">
          Somos uma plataforma dedicada a unir desenvolvedores freelancers a
          clientes que desejam criar projetos inovadores. A DevLinker foi criada
          para atender às necessidades tanto dos profissionais de TI quanto dos
          empreendedores que buscam transformar suas ideias em produtos digitais
          de sucesso. Nossa equipe é apaixonada por por tecnologia e inovação e
          está focada apaixonada em oferecer uma simples e eficiente para todos
          os usuários.
        </p>

        <h2 className="font-semibold text-2xl mt-8">
          Junte-se <span className="text-primary">a nós</span>
        </h2>
        <p className="mt-4 text-justify font-light text-lg max-md:text-base">
          Se você é um desenvolvedor freelancer em busca de oportunidades
          emocionantes ou um cliente com uma ideia brilhante, a DevLinker é o
          lugar certo para você. Cadastre-se hoje e comece a transformar ideias
          em realidade com a ajuda dos melhores profissionais do mercado.
        </p>
      </div>
      <Image src={illustration} alt="Illustration" loading="lazy" />
    </main>
  );
}
