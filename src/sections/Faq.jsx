import React from "react";
import Question from "../components/Question";
import { Questions } from "../util/questions";

function Faq() {
  return (
    <div
      id="faq"
      className="py-16 bg-faq  bg-cover faqBackground relative bg-center"
    >
      <img
        src="/img/dummy.png"
        className="object-fit absolute hidden md:block bottom-4 left-4 w-28 "
      />
      <img
        src="/img/dummyright.png"
        className="object-fit  hidden md:block absolute top-8  right-12 w-28 "
      />
      <h1 className="font-irish-grover text-[26px] md:text-[32px]  text-center leading-[70px] text-white mb-4 md:mb-12 font-semibold tracking-wider">
        FAQ
      </h1>
      <div className="mx-auto max-w-[90%] md:max-w-[55%] flex flex-col items-center justify-center">
        {Questions.map((x, i) => (
          <Question key={i} question={x.question} description={x.desc} />
        ))}
      </div>
    </div>
  );
}

export default Faq;
