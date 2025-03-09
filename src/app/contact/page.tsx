import {
  ArrowIcon,
  ChevronIcon,
  GetInTouch,
  LinkdInIcon,
  MediumIcon,
  MinusIcon,
  PlusIcon,
  QuestionIcon,
  TwitterIcon,
} from "@/components/svg";
import { Links } from "@/components/ui/links";
import Image from "next/image";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};
const Contact = () => {
  return (
    <>
      <section className="width grid md:grid-cols-2 gap-px lg:grid-cols-4 border-r border-l bg-border">
        <div className="px-4 sm:px-6 md:px-8 py-5 bg-background">
          <h4 className="text-lg font-medium text-heading">
            General Inquiries
          </h4>
          <div className="mt-4 flex flex-col gap-3">
            <Links variant={"outline"} href={"/"}>
              contact@ai-podcasts.com
            </Links>
            <Links variant={"outline"} href={"/"}>
              +1 (123) 456-7890
            </Links>
          </div>
        </div>
        <div className="px-4 sm:px-6 md:px-8 py-5 bg-background">
          <h4 className="text-lg font-medium text-heading">
            Technical Support
          </h4>
          <div className="mt-4 flex flex-col gap-3">
            <Links variant={"outline"} href={"/"}>
              contact@ai-podcasts.com
            </Links>
            <Links variant={"outline"} href={"/"}>
              +1 (123) 456-7890
            </Links>
          </div>
        </div>
        <div className="px-4 sm:px-6 md:px-8 py-5 bg-background">
          <h4 className="text-lg font-medium text-heading">Our Office</h4>
          <div className="mt-4 flex flex-col gap-3">
            <p>Address: 123 AI Tech Avenue, Techville, 54321</p>
            <Links variant={"outline"} href={"/"}>
              Get Directions
            </Links>
          </div>
        </div>
        <div className="px-4 sm:px-6 md:px-8 py-5 bg-background">
          <h4 className="text-lg font-medium text-heading">Connect with Us</h4>
          <div className="flex gap-3 mt-4">
            <Links variant={"outline"} size={"icon"} href={"/"}>
              <TwitterIcon />
            </Links>
            <Links variant={"outline"} size={"icon"} href={"/"}>
              <LinkdInIcon />
            </Links>
            <Links variant={"outline"} size={"icon"} href={"/"}>
              <MediumIcon />
            </Links>
          </div>
        </div>
      </section>

      <section className="bg-border width">
        <div className="grid md:grid-cols-12 gap-x-px border-r border-l border-t">
          <div className="md:col-span-5 bg-background padding py-10 flex flex-col justify-center items-start">
            <div className="">
              <GetInTouch />
            </div>
            <h2 className="text-2xl font-semibold text-heading mt-6">
              Get in Touch with AI Podcasts
            </h2>
          </div>
          <div className="md:col-span-7 bg-background padding grid md:grid-cols-2 gap-6 py-10">
            <div className="space-y-2">
              <label htmlFor="firstname" className="font-medium flex">
                First Name
              </label>
              <input
                type="text"
                name="firstname"
                id="firstname"
                placeholder="Enter First Name"
                className="h-9 border rounded-md bg-accent px-2 w-full placeholder:text-light flex text-sm py-4"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="lastname" className="font-medium flex">
                Last Name
              </label>
              <input
                type="text"
                name="lastname"
                id="lastname"
                placeholder="Enter Last Name"
                className="h-9 border rounded-md bg-accent px-2 w-full placeholder:text-light flex text-sm py-4"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="font-medium flex">
                Email
              </label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Enter Your Email"
                className="h-9 border rounded-md bg-accent px-2 w-full placeholder:text-light flex text-sm py-4"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="phonenumber" className="font-medium flex">
                Phone Number
              </label>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 h-9 border rounded-md bg-accent px-2 ">
                  <Image
                    src={"/flag.png"}
                    alt="flag picture"
                    height={20}
                    width={20}
                    className="size-6 object-cover object-center"
                  />
                  <ChevronIcon className="size-3" />
                </div>
                <input
                  type="text"
                  name="phonenumber"
                  id="phonenumber"
                  placeholder="Enter Your Email"
                  className="h-9 border rounded-md bg-accent px-2 w-full placeholder:text-light flex text-sm py-4"
                />
              </div>
            </div>
            <div className="space-y-2 col-span-full">
              <label htmlFor="message" className="font-medium flex">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                placeholder="Enter Your Message"
                className="min-h-24 border rounded-md bg-accent px-2 w-full placeholder:text-light flex text-sm py-4"
              />
            </div>
            <div className="flex items-center justify-between gap-4 col-span-full">
              <div className=" flex items-center gap-2">
                <input type="checkbox" name="agree" id="agree" className=" " />{" "}
                <label htmlFor="agree" className="font-medium flex">
                  I agree with Terms of Use and Privacy Policy
                </label>
              </div>
              <button className="h-9 px-4 py-2 font-medium text-sm border rounded-md bg-primary">
                Send
              </button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-x-px border-r border-l border-t">
          <div className="md:col-span-5 bg-background padding py-10 flex flex-col justify-center items-start">
            <div className="">
              <QuestionIcon />
            </div>
            <h2 className="text-2xl font-semibold text-heading mt-6">
              Asked question
            </h2>
            <p className="mt-2">
              If the question is not available on our FAQ section, Feel free to
              contact us personally, we will resolve your respective doubts.{" "}
            </p>
            <Links href={"/"} variant={"outline"} className="mt-2">
              Ask Question <ArrowIcon />
            </Links>
          </div>
          <div className="md:col-span-7 bg-background padding space-y-4  py-10">
            {faqList.map(({ question, answer }) => (
              <div
                key={question}
                className="px-4 py-3 bg-accent border rounded-md gap-4 flex flex-col "
              >
                <div className="flex gap-4 justify-between">
                  <p className="font-medium text-heading">{question}</p>
                  {answer ? <MinusIcon /> : <PlusIcon />}
                </div>

                {answer && <p className="border-t pt-4">{answer}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

const faqList = [
  {
    question: "What is AI?",
    answer:
      "AI stands for Artificial Intelligence, which refers to the simulation of human intelligence in machines. It enables them to perform tasks like problem-solving, learning, and decision-making.",
  },
  { question: "How can I listen to your podcasts?" },
  { question: "Are your podcasts free to listen to?" },
  { question: "Can I download episodes to listen offline?" },
  { question: "How often do you release new episodes?" },
];
