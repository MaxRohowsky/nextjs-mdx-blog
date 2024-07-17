'use client'
import React, { useState } from 'react';


const initialTodos = [
  { id: 1, text: 'Optimise spacing on Landing page so that it is consistent.', completed: false },
  { id: 2, text: 'Add links to the items under "popular content".', completed: false },
  { id: 3, text: 'Socials dropdown causes layout shift. Unf**k it.', completed: false },
  { id: 4, text: 'Add filter to blog tags.', completed: false },
  { id: 5, text: 'Bonus: when i filter for a tag, that tag should turn green.', completed: false },
  { id: 6, text: 'Add a decode effect: https://codepen.io/theodore-q/pen/mJqVZo to something because it\'s cool.', completed: false },
  { id: 7, text: 'Correct the privacy policy. (Borrring)', completed: false },
  { id: 8, text: 'Migrate all the posts from WP to .mdx.', completed: false },
  { id: 9, text: 'Deploy!', completed: false },
  { id: 10, text: 'Animate the light mode dark mode toggle.', completed: false },
  { id: 11, text: 'Add viewcount to this blog.', completed: false },
  { id: 12, text: 'Sound effects?', completed: false },
  { id: 13, text: 'Touch grass.', completed: false },
  { id: 14, text: 'This would be nice: https://tympanus.net/codrops/2019/01/17/interactive-particles-with-three-js/', completed: false },
  { id: 15, text: 'Add affiliate link gear store to your page.', completed: false },
  { id: 16, text: 'Make project and blog hero look less bland.', completed: false },
  { id: 17, text: 'Bring back the about me.', completed: false },
  { id: 18, text: 'Use react spring to make the wiggly project previews.', completed: false },
  { id: 19, text: 'Cookie banner thing.', completed: false },
  { id: 20, text: 'Add SEO meta tags.', completed: false },
  { id: 21, text: 'Add and optimise the OpenGraph images.', completed: false },
  { id: 22, text: 'Update the robots.txt.', completed: false },
  { id: 23, text: 'Add the page not found page.', completed: false },
  { id: 24, text: 'Add a possibility for people to subscribe to updates.', completed: false },
  { id: 25, text: 'Add transitions between routes.', completed: false },
];

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
              <span className={`${todo.completed ? ' line-through' : ''}`}>{todo.text}</span>
        </div>
      ))}
    </div>
  );
};