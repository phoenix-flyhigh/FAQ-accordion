"use client";

import Image from "next/image";
import QuestionCard from "./QuestionCard";

export interface QuestionCardProps {
  question: string;
  answer: string;
  expanded: boolean;
}

export default function Home() {
  const answer = `Frontend Mentor offers realistic coding challenges to help developers 
  improve their frontendcoding skills with projects in HTML, CSS and Javascript. 
  It's suitable for all levels and ideal for portfolio building.`;

  const faqs: (Omit<QuestionCardProps, 'expanded'> & { id: number })[] = [
    {
      id: 1,
      question: "What is Frontend Mentor, and how will it help me?",
      answer,
    },
    {
      id: 2,
      question: "Is Frontend Mentor free?",
      answer,
    },
    {
      id: 3,
      question: "Can I use Frontend Mentor in my portfolio?",
      answer,
    },
    {
      id: 4,
      question: "How can I get help if I'm stuck on a challenge?",
      answer,
    },
  ];

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-LightPink m-0">
      <div className="hidden md:block w-screen">
        <Image
          src="/assets/images/background-pattern-desktop.svg"
          alt="background-image"
          width={0}
          height={0}
          sizes="100vw"
          style={{
            width: "100vw",
            height: "auto",
            position: "absolute",
            top: 0,
          }}
        />
      </div>
      <div className="md:hidden w-screen">
        <Image
          src="/assets/images/background-pattern-mobile.svg"
          alt="background-image"
          width={0}
          height={0}
          sizes="100vw"
          style={{
            width: "100vw",
            height: "auto",
            position: "absolute",
            top: 0,
          }}
        />
      </div>
      <main className="flex flex-col lg:w-[480px] rounded-xl p-6 z-10 bg-white sm:w-[320px] sm: m-4">
        <div className="flex justify-start gap-4 mt-2">
          <Image
            src="/assets/images/icon-star.svg"
            alt="collapse-icon"
            width={40}
            height={40}
          />
          <h1 className="font-boldFont text-5xl font-black text-DarkPurple">
            FAQs
          </h1>
        </div>
        {faqs.map(({ question, answer, id }) => (
          <div key={id}>
            <QuestionCard question={question} answer={answer} expanded={id === 1}/>
            {id !== faqs.length && <hr />}
          </div>
        ))}
      </main>
    </div>
  );
}
