'use client'

export function Example() {
    const handleClick = () => {
      alert('Clicked!');
    };
  
    return <div onClick={handleClick}>Example</div>;
  }