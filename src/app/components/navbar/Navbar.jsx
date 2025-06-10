import React from 'react'
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import styl from './navbar.module.css'
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import navava from '../../../imgs/avatar/ava.png'
import Image from 'next/image'
export default function Navbar() {
    return (
        <div className={`${styl.main_search} d-flex justify-content-between p-3`}>
            <div className={styl.search_comp}>
                <span className="input-group-text" id="basic-addon1"><SearchIcon /></span>
                <input type="text" className="form-control" placeholder="Search..." aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div className={styl.search_icons}>
                <NotificationsIcon className='cursor-pointer hover:text-gray-500 ' />
                <Image
                    src={navava}
                    width={500}
                    height={500}
                    alt="Picture of the author"
                />
            </div>
        </div>
    )
}
