import React from 'react'
import { FaHome, FaMedal, FaUserAlt } from 'react-icons/fa';
import { IoIosStats, IoIosSettings } from 'react-icons/io';

export const SidebarData = [
    {
        title: "Home",
        path: '/',
        icon: <FaHome />,
        cName: 'nav-text'
    },
    {
        title: "Statistics",
        path: '/statistics',
        icon: <IoIosStats/>,
        cName: 'nav-text'
    },
    {
        title: "Music league",
        path: '/league',
        icon: <FaMedal/>,
        cName: 'nav-text'
    },
    {
        title: "Profile",
        path: '/profile',
        icon: <FaUserAlt/>,
        cName: 'nav-text'
    },
    {
        title: "Settings",
        path: '/settings',
        icon: <IoIosSettings/>,
        cName: 'nav-text'
    }
]