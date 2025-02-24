import Link from "next/link";
import NavBar from "./ui/NavBar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <NavBar navItems={[{ name: "Login", href: "/login" }]} />
      <section className="flex flex-col">
        <section className="bg-hero-img bg-[length:100%_100%] bg-no-repeat sm:h-[90vh] h-[40vh] w-full flex items-center justify-end p-10">
          <div className="w-[60%] sm:w-[45%] text-gray-400 flex flex-col gap-4">
            <h1 className="text-lg sm:text-4xl font-bold">AI ChatBot</h1>
            <p className="text-sm sm:text-lg">
              A chatbot is an AI-powered software application designed to
              simulate human conversation through text or voice interactions. It
              can be programmed to answer questions, provide recommendations,
              automate tasks, and even engage in natural, human-like
              discussions.
            </p>
            <button className="bg-blue-500 w-24 sm:w-32 h-10 rounded-md text-white hover:text-blue-500 hover:bg-blue-400 transition-all">
              <Link href={"/signup"}>Sign up</Link>
            </button>
          </div>
        </section>
      </section>
    </>
  );
}
