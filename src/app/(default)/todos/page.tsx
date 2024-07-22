'use client'
import React, { useState } from 'react';


const initialTodos = [
  { id: 1, text: 'Optimise spacing on Landing page so that it is consistent.', completed: true, priority: 2 },
  { id: 2, text: 'Add links to the items under "popular content".', completed: true, priority: 2 },
  { id: 3, text: 'Socials dropdown causes layout shift. Unf**k it.', completed: true, priority: 1 },
  { id: 4, text: 'Add filter to blog tags.', completed: false, priority: 2 },
  { id: 5, text: 'Bonus: when i filter for a tag, that tag should turn green.', completed: false, priority: 3 },
  { id: 6, text: 'Add a decode effect: https://codepen.io/theodore-q/pen/mJqVZo to something because it\'s cool.', completed: false, priority: 3 },
  { id: 7, text: 'Correct the privacy policy. (Borrring)', completed: false, priority: 3 },
  { id: 8, text: 'Migrate all the posts from WP to .mdx.', completed: false, priority: 1 },
  { id: 9, text: 'Deploy!', completed: false, priority: 1 },
  { id: 10, text: 'Animate the light mode dark mode toggle.', completed: true, priority: 2 },
  { id: 11, text: 'Add viewcount to this blog.', completed: false, priority: 2 },
  { id: 12, text: 'Sound effects?', completed: false, priority: 3 },
  { id: 13, text: 'Touch grass.', completed: false, priority: 3 },
  { id: 14, text: 'This would be nice: https://tympanus.net/codrops/2019/01/17/interactive-particles-with-three-js/', completed: false, priority: 3 },
  { id: 15, text: 'Add affiliate link gear store to your page.', completed: false, priority: 2 },
  { id: 16, text: 'Make project and blog hero look less bland.', completed: false, priority: 2 },
  { id: 17, text: 'Bring back the about me.', completed: false, priority: 2 },
  { id: 18, text: 'Use react spring to make the wiggly project previews.', completed: false, priority: 2 },
  { id: 19, text: 'Cookie banner thing.', completed: false, priority: 3 },
  { id: 20, text: 'Add SEO meta tags.', completed: true, priority: 1 },
  { id: 21, text: 'Add and optimise the OpenGraph images.', completed: false, priority: 3 },
  { id: 22, text: 'Update the robots.txt.', completed: false, priority: 2 },
  { id: 23, text: 'Add the page not found page.', completed: false, priority: 2 },
  { id: 24, text: 'Add a possibility for people to subscribe to updates.', completed: false, priority: 2 },
  { id: 25, text: 'Add transitions between routes. -> slows the page significantly when loading :(', completed: true, priority: 2 },
  { id: 26, text: 'Add a sitemap.', completed: false, priority: 2 },
  { id: 27, text: 'Make a breadcrumbs path.', completed: true, priority: 2 },
  { id: 28, text: "Understand import fs from 'node:fs/promises'mentioned here: https://mdxjs.com/guides/frontmatter/", completed: false, priority: 3 },
  { id: 29, text: 'Create layout for the blog posts.', completed: false, priority: 2 },
  { id: 30, text: 'Add sidebar with Content that sticks.', completed: false, priority: 2 },
  { id: 31, text: 'the arrows of the popular items are not perfectly aligned with the center of the text. so annoying.', completed: true, priority: 3 },
  { id: 32, text: 'too many filters and no matches? add a funny meme', completed: false, priority: 3 },
  { id: 33, text: 'Ascii art in console', completed: false, priority: 3 },
  { id: 34, text: 'Handle space between elements on landingpage with spacer component: https://seya01.medium.com/how-to-style-margin-with-react-d250d512d0a0.', completed: true, priority: 1 },
  { id: 35, text: 'Link up the stuff under popular content.', completed: true, priority: 2 },
  { id: 36, text: 'Filter on the right not left (see projects).', completed: true, priority: 2 },
  { id: 37, text: 'Projects are "viewed, Blogs are read more".', completed: false, priority: 2 },
  { id: 38, text: 'What if cars where scratch cards you move over them to reveal the preview.', completed: false, priority: 3 },
  { id: 39, text: 'when i click on a blog on the homepage, I should be routed to it', completed: false, priority: 2 },
  { id: 40, text: 'Cookie saves read articles.', completed: false, priority: 3 },
  { id: 41, text: 'Maintain dark mode across sites', completed: false, priority: 1 },
  { id: 43, text: 'Add Not found page', completed: false, priority: 2 },
  { id: 44, text: 'Clean the code', completed: true, priority: 1 }, 
  { id: 45, text: 'The header I scroll to should be blue in the blog', completed: false, priority: 2 },
  { id: 46, text: 'IF toc empty, dont show it', completed: true, priority: 1 },
  { id: 47, text: 'move published and updated under tags', completed: true, priority: 1 },
  { id: 48, text: 'Read more in dark mode needs other color', completed: true, priority: 1 },
  { id: 49, text: 'Links on langing need to work', completed: true, priority: 1 },
  { id: 50, text: 'Sidenav needs to stay a fixed size', completed: false, priority: 2 },
  { id: 51, text: 'Fix "jumping" date formats in posts', completed: false, priority: 2 }
];

// Sort initialTodos by priority in ascending order
initialTodos.sort((a, b) => -a.priority + b.priority);

export default function TodoList() {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo = (id) => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    <div className='m-5'>
      <h1 className='font-bold'>
        My ToDo List (i.e. coding challenges) for this Blog.
      </h1>
      {todos.slice().reverse().map(todo => (
        <div key={todo.id} className={`p-2 ${todo.completed ? 'completed' : ''}`}>
          <input
            className='m-2'
            type="checkbox"
            checked={todo.completed}
            //onChange={() => toggleTodo(todo.id)}
            readOnly
          />
          <span className="priority-score">{`Prio: ${todo.priority} |`}</span>
          <span className={`${todo.completed ? ' line-through' : ''}`}>{todo.text}</span>
        </div>
      ))}
    </div>
  );
};