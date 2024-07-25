import { ArrowRight } from "lucide-react";
import Link from "next/link";
import ViewCounter from "@/components/view-counter";
import { Suspense } from "react";
import { Eye } from "lucide-react";

export default function RecentPostCard({
  item,
  allViews,
}: {
  item: FrontMatter;
  allViews: { slug: string; views: number }[];
}) {
  return (
    <div className="group w-full cursor-pointer p-1">
      <Link
        href={`/blog/${item.slug}` || "#"}
        className="flex h-full w-full flex-col transition-shadow duration-300
          group-hover:shadow-[-3px_0px_0px_0px_#00000024]
          dark:group-hover:shadow-[-3px_0px_0px_0px_#FFFFFF90]"
      >
        <div className="mr-3 transition-spacing duration-300 group-hover:ml-3 group-hover:mr-0">
          <div>
            <h3
              className="flex flex-row items-baseline justify-between pb-1 font-semibold
                group-hover:text-blue-500 md:text-xl"
            >
              {item.title}
              <Suspense fallback={<span className="w-[90px]" />}>
                <span
                  className="flex flex-row text-blue-500 items-center whitespace-nowrap pl-2 sm:pr-5 text-lg font-normal
                    sm:text-neutral-200 group-hover:text-blue-500"
                >
                  <ViewCounter allViews={allViews} slug={item.slug} />
                  <Eye className="ml-1 inline-block" width={20} />
                </span>
              </Suspense>
            </h3>
            {item.subtitle && (
              <h4 className="md:text-l font-medium text-neutral-500 dark:text-neutral-400">
                {item.subtitle}
              </h4>
            )}
          </div>

          <p className="text-pretty py-4 text-sm md:text-base">
            {item.excerpt}
          </p>

          <div className="flex flex-wrap gap-3 pb-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="rounded bg-gray-100 px-2 py-1.5 text-xs font-semibold text-gray-700
                  dark:bg-neutral-900 dark:text-neutral-200"
              >
                {tag}
              </span>
            ))}
          </div>

          <p
            className="flex cursor-pointer items-center justify-between pr-4 text-sm font-semibold
              opacity-20 transition-opacity group-hover:opacity-100 md:text-base"
          >
            <span className="flex gap-1">
              <span>Read more</span>
              <span className="pt-[1px] opacity-0 transition-opacity group-hover:opacity-100">
                <ArrowRight width={15} />
              </span>
            </span>
          </p>
        </div>
      </Link>
    </div>
  );
}
