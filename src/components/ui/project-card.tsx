"use client";
import Tilt from "react-parallax-tilt";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
// Assuming BlogFrontMatter and Project interfaces are imported or defined above
// blog cards: https://dev.to/frontendsolutions/13-css-blog-cards-54d7

export default function Card({ item }: { item: FrontMatter | ProjectItem }) {
  const link =
    "externalLink" in item ? item.externalLink : `/blog/${item.slug}`;

  return (
    <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5}>
      <div className="group h-full w-full cursor-pointer rounded-sm">
        <a
          href={link}
          className="relative flex h-full w-full flex-col justify-between rounded-lg border
            border-gray-200 p-3 py-3 transition-shadow duration-300 hover:shadow-md
            dark:border-neutral-800 dark:bg-background md:p-6"
        >
          {item.tags.map((tag) => tag.toLowerCase()).includes("new") && (
            <Image
              src="/icons/new.png"
              alt="new project icon"
              width={50}
              height={50}
              className="absolute right-0 top-0"
            />
          )}

          <div className="flex">
            <div>
              <h3 className="font-semibold transition-all duration-300 text-blue-500 sm:text-black sm:dark:text-white group-hover:text-blue-500 md:text-xl">
                {item.title}
              </h3>
              <h4
                className="md:text-l font-medium text-neutral-500 transition-all duration-300
                  dark:text-neutral-400"
              >
                {item.subtitle}
              </h4>
            </div>
          </div>

          <p className="py-4 text-sm transition-all duration-300 md:text-base">
            {item.excerpt}
          </p>

          <div className="flex flex-wrap gap-2 pb-3 transition-all duration-300">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="rounded bg-gray-200 px-2 py-1.5 text-xs font-semibold text-gray-800
                  transition-all duration-300 dark:bg-neutral-900 dark:text-neutral-200"
              >
                {tag}
              </span>
            ))}
          </div>

          <p
            className="flex cursor-pointer gap-2 text-sm md:text-base"
          >
            View Project
            <span className="pt-[1px]">
              <ArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </span>
          </p>
        </a>
      </div>
    </Tilt>
  );
}
