import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as MdIcons from 'react-icons/md'

export const SidebarData = [
    {
        title: "Home",
        path: '/',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title: "Statistics",
        path: '/statistics',
        icon: <FaIcons.FaLandmark/>,
        cName: 'nav-text'
    },
    {
        title: "Music league",
        path: '/walkingbuddies',
        icon: <FaIcons.FaUserFriends/>,
        cName: 'nav-text'
    },
    {
        title: "Settings",
        path: '/settings',
        icon: <MdIcons.MdRedeem/>,
        cName: 'nav-text'
    },
    {
        title: "Profile",
        path: '/profile',
        icon: <MdIcons.MdRedeem/>,
        cName: 'nav-text'
    }
]