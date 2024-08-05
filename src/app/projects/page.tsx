"use client";

import { getFilteredProjects, getProjectTags } from "@/lib/utils";
import { useState, useEffect } from "react";
import Filter from "@/components/ui/filter";
import ProjectCard from "@/components/cards/project-card";

export default function Projects() {
  const allTags = getProjectTags();

  const [selectedTags, setSelectedTags] = useState<Array<string>>([]);
  const [isFiltered, setIsFiltered] = useState<boolean>(false);
  const tagsToFilterBy = isFiltered ? selectedTags : undefined;

  const projects = getFilteredProjects({ tags: tagsToFilterBy });

  const handleTagSelection = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(
        selectedTags.filter((selectedTag) => selectedTag !== tag)
      );
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const handleResetFilters = () => {
    setSelectedTags([]);
  };

  useEffect(() => {
    setIsFiltered(selectedTags.length > 0);
  }, [selectedTags, isFiltered]);

  return (
    <>
      <div className="flex h-40 items-center">
        <h1 className="text-5xl font-semibold">Projects</h1>
      </div>

      <div className="flex justify-end">
        <Filter
          allTags={allTags}
          selectedTags={selectedTags}
          handleResetFilters={handleResetFilters}
          handleTagSelection={handleTagSelection}
        />
      </div>

      <div className="grid grid-cols-1 gap-7 md:grid-cols-[repeat(auto-fill,minmax(400px,1fr))]">
        {projects.map((project) => (
          <ProjectCard item={project} />
        ))}
      </div>
    </>
  );
}
