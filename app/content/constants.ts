import {TfiHome, TfiArrowCircleDown, TfiArrowCircleUp, TfiInfoAlt} from "react-icons/tfi";
import {ElementType} from "react";

export interface SidebarPath {
    pathName: string
    path: string,
    icon: ElementType,
    openMenuIcon?: ElementType,
    hasSubItems: boolean,
    subItems?: subItem[]
}

export interface subItem {
    pathName: string,
    path: string
}

export const SIDEBAR_PATHS: SidebarPath[] = [
    {
        pathName: 'Home',
        path: '/',
        icon: TfiHome,
        hasSubItems: false,
    },
    {
        pathName: 'Reviews',
        path: '/reviews',
        icon: TfiArrowCircleDown,
        openMenuIcon: TfiArrowCircleUp,
        hasSubItems: true,
        subItems: [
            {
                pathName: 'Hollow Knight',
                path: '/reviews/hollow-knight',
            },
            {
                pathName: 'Stardew Valley',
                path: '/reviews/stardew-valley',
            },
            {
                pathName: 'Celeste',
                path: '/reviews/celeste',
            },
            {
                pathName: 'Undertale',
                path: '/reviews/undertale',
            },
            {
                pathName: 'Cuphead',
                path: '/reviews/cuphead',
            },
            {
                pathName: 'Hellblade',
                path: '/reviews/hellblade',
            }
        ]
    },
    {
        pathName: 'About',
        path: '/about',
        icon: TfiInfoAlt,
        hasSubItems: false
    },
]