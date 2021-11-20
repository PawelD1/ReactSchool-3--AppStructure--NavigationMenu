import React from 'react';
import {MenuLink} from './menu-link/MenuLink';

export const Menu = () => {

  const elements = [
    {id: 1, name: "Home", to: "/home"},
    {id: 2, name: "About", to: "/about"},
    {id: 3, name: "Contact", to: "/contact"},
    {id: 4, name: "Posts", to: "/posts"}
  ];

    return(
      elements.map((item)=> (
        <MenuLink key={`menu-link-${item.id}`} id={item.id} name={item.name} to={item.to}/>
      ))
    );
}