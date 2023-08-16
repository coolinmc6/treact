import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navigation.css'
import '../styles/tailwind.css';

type NavigationLink = {
  name: string;
  path: string;
}

type NavigationProps = {
  pages: NavigationLink[];
  handleClick?: Function;
}

const Navigation = ({ pages, handleClick }: NavigationProps) => {
  return (
    <div className="navigation">
      { pages.map((page) => {
        return (
        <Link className={`nav-link p-2 inline-block border-4 rounded border-blue-200`} 
              to={page.path}
              key={page.name}
        >
          {page.name}
        </Link>
      )
      })}
    </div>
  )
}

export default Navigation;