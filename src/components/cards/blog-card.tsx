"use client";
import Tilt from "react-parallax-tilt";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function BlogCard({ item }: { item: FrontMatter }) {
  const link =
    "externalLink" in item ? item.externalLink : `/blog/${item.slug}`;

  return (
    <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5}>
      <div className="group h-full w-full cursor-pointer rounded-sm">
        <Link
          href={link}
          className="relative flex h-full w-full flex-col justify-between rounded-lg border
            border-gray-200 p-3 py-3 transition-shadow duration-300 hover:shadow-md
            dark:border-neutral-800 dark:bg-background md:p-6"
        >
          <div className="flex">
            <div>
              <h3
                className="font-semibold text-blue-500 transition-all duration-300
                  group-hover:text-blue-500 sm:text-black sm:dark:text-white md:text-xl"
              >
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

          <p className="py-4 text-sm transition-all  md:text-base">
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

          <p className="flex cursor-pointer gap-2 text-sm md:text-base">
            Read more
            <span className="pt-[1px]">
              <ArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </span>
          </p>
        </Link>
      </div>
    </Tilt>
  );
}
