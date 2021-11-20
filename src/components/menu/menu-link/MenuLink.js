import React, {useContext} from 'react';
import {ClickedContext} from '../../../context/clickedContextService';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './MenuLink.css';

export const MenuLink = (props) => {
    const {id, name, to} = props;
    const selectedLink = useContext(ClickedContext);
    const navigate = useNavigate();

    const changeRoute = (path) => {
        selectedLink.setIsActive(path);
        navigate(path);
      }

    return (
        <NavLink
            key={`nav-link-${id}`}
            to={to}
            onClick={() => changeRoute(to)}
            className={to===selectedLink.isActive ? "is-active nav-link" : "nav-link"}
        >{name}
        </NavLink>)
}