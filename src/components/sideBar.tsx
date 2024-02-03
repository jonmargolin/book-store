import React from 'react';

import NavItem from './navItem';
import { useBookDataContext } from '../contexts/bookContext';


const SideBar = () => {
    const { dispatch } = useBookDataContext()
    const navList =[{ title: "cyber"}, { title: "Non-Fiction"} ]
    const handelCategoryChange =(category:string)=>{
        dispatch({type: "UPDATE_CATEGORY", payload: {category:category}})
    } 
    const  crateNavItem =() => {
    const listOfNav: React.ReactNode[] =[]
     navList.forEach((nav) =>{
     listOfNav.push(< NavItem key={`nav${nav.title}`}   text={nav.title} onClick={() => handelCategoryChange(nav.title)} /> )
    })
    return listOfNav
    }
    return (
        <div className="flex-1 overflow-auto py-2">
        <nav className="grid items-start px-4 text-sm font-medium">
         {crateNavItem()}
        </nav>
      </div>
    );
};

export default SideBar;