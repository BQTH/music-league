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
        title: "Landmarks",
        path: '/landmarks',
        icon: <FaIcons.FaLandmark/>,
        cName: 'nav-text'
    },
    {
        title: "Walkingbuddies",
        path: '/walkingbuddies',
        icon: <FaIcons.FaUserFriends/>,
        cName: 'nav-text'
    },
    {
        title: "Redeemstores",
        path: '/redeemstores',
        icon: <MdIcons.MdRedeem/>,
        cName: 'nav-text'
    }
]