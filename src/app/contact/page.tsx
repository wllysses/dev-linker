import Image from "next/image";
import illustration from "@/../public/construction_illustration.svg";

export default function ContactPage() {
  return (
    <main className="w-full mt-20 mb-8 px-4 container mx-auto">
      <h2 className="font-semibold text-2xl">
        Nosso <span className="text-primary">contato</span>
      </h2>

      <div className="w-full mt-8 flex flex-col items-center gap-12">
        <Image
          src={illustration}
          alt="Illustration"
          loading="lazy"
          width={700}
        />
        <p>
          Página em{" "}
          <span className="text-primary font-semibold">construção...</span>
        </p>
      </div>
    </main>
  );
}
