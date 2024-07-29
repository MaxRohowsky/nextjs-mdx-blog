import Link from "next/link";
import { Heading } from "extract-md-headings";

const getListItemStyle = (level) => {
  return {
    marginLeft: `${Math.max(level - 1, 1) * 4}px`, // Ensure minimum marginLeft for level 1
    fontWeight: level <= 2 ? "bold" : "normal", // Bold for level 1 and 2
    paddingTop: "4px",
    paddingBottom: "4px",
  };
};

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function TableOfContent({
  headings,
  frontMatter,
}: {
  headings: Array<Heading>;
  frontMatter: FrontMatter;
}) {
  return (
    <div className="flex flex-col flex-wrap gap-8 pb-8 transition-all duration-300">
      <div>
        <span className="block pb-2 text-sm font-medium uppercase text-neutral-500 dark:text-neutral-300">
          Published
        </span>
        <p>{formatDate(frontMatter.publishedOn)}</p>
      </div>

      {frontMatter.updatedOn && (
        <div>
          <span className="block pb-2 text-sm font-medium uppercase text-neutral-500 dark:text-neutral-300">
            Last Update
          </span>
          <p>{formatDate(frontMatter.updatedOn)}</p>
        </div>
      )}

      {headings.filter((heading) => heading.level > 1).length > 0 && (
        <nav className="">
          <h2 className="block pb-2 text-sm font-medium uppercase text-neutral-500 dark:text-neutral-300">
            Table of Contents
          </h2>
          <ul>
            {headings.map((heading) => (
              <li key={heading.id} style={getListItemStyle(heading.level)}>
                <Link
                  href={`#${heading.level === 1 ? "introduction" : heading.title.toLowerCase().replace(/\s+/g, "-")}`}
                  className="cursor-pointer"
                >
                  {heading.level === 1 ? "Introduction" : heading.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}

      <div>
        <span className="block pb-2 text-sm font-medium uppercase text-neutral-500 dark:text-neutral-300">
          Tags
        </span>
        <div className="flex flex-wrap gap-4">
          {frontMatter.tags.map((tag) => (
            <span
              key={tag}
              className="rounded bg-gray-200 px-2 py-1.5 text-xs font-semibold text-gray-800
                dark:bg-neutral-800 dark:text-neutral-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
