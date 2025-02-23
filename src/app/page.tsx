import { RegistrationForm } from "@/components/RegistrationForm/RegistrationForm";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-16 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold text-center">
          Text Input Form Example
        </h1>
        <div className="flex gap-4 items-center">
          <RegistrationForm />
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/robisop/o2-react-components"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          GitHub repository
        </a>
      </footer>
    </div>
  );
}
