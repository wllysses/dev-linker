"use client";

import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

import developersPageImage from "@/../public/devs.png";

export default function Home() {
  return (
    <>
      {/* MAIN */}
      <main className="w-full my-20 px-4 container mx-auto">
        <section
          id="hero"
          className="w-full flex flex-col gap-4 text-center items-center"
        >
          <Badge
            className="p-2 mb-4 font-semibold"
            style={{ letterSpacing: "0.3rem" }}
          >
            Conheça o DevLinker
          </Badge>
          <div className="font-bold text-5xl md:max-w-[50rem] bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            <h1>Unindo desenvolvedores eficientes a soluções qualificadas.</h1>
          </div>
          <p className="text-black/50 md:max-w-[40rem] mb-8">
            Bem-vindo(a) ao <span className="font-bold">DevLinker</span>, onde
            desenvolvedores talentosos encontram clientes que precisam de
            soluções inovadoras. Nossa missão é facilitar conexões que
            transformam ideias em realidade, garantindo qualidade, confiança e
            eficiência.
          </p>
        </section>

        <section id="image" className="w-full mt-28 rounded border shadow-lg">
          <Image
            src={developersPageImage}
            alt="Developers page"
            loading="lazy"
          />
        </section>

        <section id="faq" className="w-full mt-32">
          <h2 className="font-semibold text-2xl text-center">
            Dúvidas <span className="text-primary">frequentes</span>
          </h2>

          <Accordion type="single" collapsible className="w-full mt-4">
            <AccordionItem value="item-1">
              <AccordionTrigger>Nossa Missão?</AccordionTrigger>
              <AccordionContent>
                Na DevLinker, nossa missão é simplificar e agilizar a conexão
                entre desenvolvedores talentosos e clientes visionários.
                Acreditamos no poder da tecnologia para transformar ideias em
                realidade e estamos aqui para facilitar esse processo. Com a
                DevLinker, você encontra o parceiro perfeito para impulsionar
                seu projeto inovador.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Quem somos?</AccordionTrigger>
              <AccordionContent>
                Somos uma plataforma dedicada a unir desenvolvedores freelancers
                a clientes que desejam criar projetos inovadores. A DevLinker
                foi criada para atender às necessidades tanto dos profissionais
                de TI quanto dos empreendedores que buscam transformar suas
                ideias em produtos digitais de sucesso. Nossa equipe é composta
                por especialistas apaixonados por tecnologia e inovação,
                comprometidos em oferecer uma experiência segura e eficiente
                para todos os usuários.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Como Funcionamos?</AccordionTrigger>
              <AccordionContent>
                A DevLinker funciona como um elo entre desenvolvedores
                freelancers e clientes com projetos criativos. Nossos
                desenvolvedores cadastrados são extremamente qualificados e
                estão disponíveis para seus projetos.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Quer juntar-se a nós?</AccordionTrigger>
              <AccordionContent>
                Se você é um desenvolvedor freelancer em busca de oportunidades
                emocionantes ou um cliente com uma ideia brilhante, a DevLinker
                é o lugar certo para você. Cadastre-se hoje (dev) e comece a
                transformar ideias em realidade com a ajuda dos melhores
                profissionais do mercado.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </main>

      <footer className="p-3 bg-primary text-center">
        <p className="text-white text-xs font-semibold ">
          Desenvolvidor por{" "}
          <a
            href="https://linkedin.com/in/wllysses"
            target="_blank"
            className="hover:underline"
          >
            Wllysses Tavares
          </a>
        </p>
      </footer>
    </>
  );
}
