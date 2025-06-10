"use client"
import React from 'react'
import styl from './aside.module.css'
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import GroupIcon from '@mui/icons-material/Group';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
export default function Aside() {
    let pathName = usePathname()
    console.log(pathName)
    return (
        <aside className={styl.aside} suppressHydrationWarning>
            <ul className={styl.side_list} suppressHydrationWarning>
                <h4 className={styl.side_head}>Admin</h4>
                <li className={pathName === '/' ? `${styl.active}` : ''}>
                    <Link href="/" >
                        <DashboardIcon /><span>dashboard</span>
                    </Link>
                </li>
                <li className={pathName === '/settings' ? `${styl.active}` : ''}>
                    <Link href="/settings" className={pathName === '/settings' ? 'active' : ''}>
                        <SettingsIcon /><span>settings</span>
                    </Link>
                </li>
                <li className={pathName === '/profile' ? `${styl.active}` : ''}>
                    <Link href="/profile">
                        <PersonIcon /><span>profile</span>
                    </Link>
                </li>
                <li className={pathName === '/projects' ? `${styl.active}` : ''}>
                    <Link href="/projects">
                        <AccountTreeIcon /><span>projects</span>
                    </Link>
                </li>
                <li className={pathName === '/courses' ? `${styl.active}` : ''}>
                    <Link href="/courses">
                        <AutoAwesomeMotionIcon /><span>courses</span>
                    </Link>
                </li>
                <li className={pathName === '/friends' ? `${styl.active}` : ''}>
                    <Link href="/friends">
                        <GroupIcon /><span>friends</span>
                    </Link>
                </li>
                <li className={pathName === '/files' ? `${styl.active}` : ''}>
                    <Link href="/files">
                        <InsertDriveFileIcon /><span>files</span>
                    </Link>
                </li>
            </ul>
        </aside>
    )
}
