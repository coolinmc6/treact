import React from 'react';
import '../styles/navigation.css'
import '../styles/tailwind.css';

type NavigationLink = {
  name: string;
  active: boolean;
}

type NavigationProps = {
  pages: NavigationLink[];
  handleClick: Function;
}

const Navigation = ({ pages, handleClick }: NavigationProps) => {
  return (
    <div className="navigation">
      { pages.map((page) => {
        return (
        <span className={`nav-link p-2 inline-block border-4 rounded border-blue-200 ${page.active ? 'active' : ''}`} 
              onClick={() => handleClick(page.name)} 
              key={page.name}
        >
          {page.name}
        </span>
      )
      })}
    </div>
  )
}

export default Navigation;