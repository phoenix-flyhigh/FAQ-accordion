"use client";

import Image from "next/image";
import { QuestionCardProps } from "./page";
import { useState } from "react";

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  answer,
  expanded,
}: QuestionCardProps) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(expanded);

  return (
    <section className="flex flex-col p-4 gap-3">
      <button
        className="flex justify-between hover:cursor-pointer items-center text-left gap-2"
        onClick={() => setIsExpanded((prev) => !prev)}
      >
        <h3 className="font-semiBoldFont font-bold text-lg text-DarkPurple hover:text-fuchsia-600">
          {question}
        </h3>
        {isExpanded ? (
          <Image
            src="/assets/images/icon-minus.svg"
            alt="collapse-icon"
            width={25}
            height={25}
          />
        ) : (
          <Image
            src="/assets/images/icon-plus.svg"
            alt="expand-icon"
            width={25}
            height={25}
          />
        )}
      </button>
      {isExpanded && (
        <p className="font-regularFont text-GrayishPurple text-lg">{answer}</p>
      )}
    </section>
  );
};

export default QuestionCard;
