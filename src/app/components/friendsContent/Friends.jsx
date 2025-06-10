import React from 'react';
import styl from './friends.module.css'
import Image from 'next/image'

import friend1 from '@/imgs/friend/friend1.jpg'
import friend2 from '@/imgs/friend/friend2.jpg'
import friend3 from '@/imgs/friend/friend3.jpg'
import friend4 from '@/imgs/friend/friend4.jpg'
import friend5 from '@/imgs/friend/friend5.jpg'

import PhoneIcon from '@mui/icons-material/Phone';
import MessageIcon from '@mui/icons-material/Message';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import FeedIcon from '@mui/icons-material/Feed';
import SettingsIcon from '@mui/icons-material/Settings';
const Friends = () => {
    return (
        <div className="main">

            <div className="p-3">
                <h2 className={styl.main_title}>Friends</h2>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className={`${styl.friend_box} p-3`}>
                                <div className={styl.friends_head}>
                                    <PhoneIcon />
                                    <MessageIcon />
                                </div>
                                <div className={styl.friends_cont}>
                                    <Image
                                        src={friend1}

                                        alt="Profile Picture"
                                    />
                                    <p className="m-0 mt-3 fw-bold fs-5">
                                        Ahmed Elbordiny
                                    </p>
                                    <p className="text-black-50 m-0 mt-2">
                                        JavaScript Developer
                                    </p>
                                </div>
                                <div className={styl.friends_icons}>
                                    <p>
                                        <SentimentSatisfiedAltIcon />99 Friend
                                    </p>
                                    <p>
                                        <FeedIcon />27 Article
                                    </p>
                                    <p>
                                        <SettingsIcon />10
                                        Projects
                                    </p>
                                </div>
                                <div className={`${styl.friends_foot} d-flex justify-content-between align-items-center`}>
                                    <p className="m-0 text-black-50" style={{ fontSize: '14px' }}>
                                        Joined 28/06/2022
                                    </p>
                                    <div className={styl.friends_btns}>
                                        <div className="btn btn-primary">
                                            Profile
                                        </div>
                                        <div className="btn-danger btn">
                                            Remove
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className={`${styl.friend_box} p-3`}>
                                <div className={styl.friends_head}>
                                    <PhoneIcon />
                                    <MessageIcon />
                                </div>
                                <div className={styl.friends_cont}>
                                    <Image
                                        src={friend2}

                                        alt="Profile Picture"
                                    />
                                    <p className="m-0 mt-3 fw-bold fs-5">
                                        Nader Nageh
                                    </p>
                                    <p className="text-black-50 m-0 mt-2">
                                        Ruby Developer
                                    </p>
                                </div>
                                <div className={styl.friends_icons}>
                                    <p>
                                        <SentimentSatisfiedAltIcon />99 Friend
                                    </p>
                                    <p>
                                        <FeedIcon />27 Article
                                    </p>
                                    <p>
                                        <SettingsIcon />10
                                        Projects
                                    </p>
                                </div>
                                <div className={`${styl.friends_foot} d-flex justify-content-between align-items-center`}>
                                    <p className="m-0 text-black-50" style={{ fontSize: '14px' }}>
                                        Joined 28/06/2022
                                    </p>
                                    <div className={styl.friends_btns}>
                                        <div className="btn btn-primary">
                                            Profile
                                        </div>
                                        <div className="btn-danger btn">
                                            Remove
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className={`${styl.friend_box} p-3`}>
                                <div className={styl.friends_head}>
                                    <PhoneIcon />
                                    <MessageIcon />
                                </div>
                                <div className={styl.friends_cont}>
                                    <Image
                                        src={friend3}

                                        alt="Profile Picture"
                                    />
                                    <p className="m-0 mt-3 fw-bold fs-5">
                                        Ahmed Salah
                                    </p>
                                    <p className="text-black-50 m-0 mt-2">
                                        Android  Developer
                                    </p>
                                </div>
                                <div className={styl.friends_icons}>
                                    <p>
                                        <SentimentSatisfiedAltIcon />99 Friend
                                    </p>
                                    <p>
                                        <FeedIcon />27 Article
                                    </p>
                                    <p>
                                        <SettingsIcon />10
                                        Projects
                                    </p>
                                </div>
                                <div className={`${styl.friends_foot} d-flex justify-content-between align-items-center`}>
                                    <p className="m-0 text-black-50" style={{ fontSize: '14px' }}>
                                        Joined 28/06/2022
                                    </p>
                                    <div className={styl.friends_btns}>
                                        <div className="btn btn-primary">
                                            Profile
                                        </div>
                                        <div className="btn-danger btn">
                                            Remove
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className={`${styl.friend_box} p-3`}>
                                <div className={styl.friends_head}>
                                    <PhoneIcon />
                                    <MessageIcon />
                                </div>
                                <div className={styl.friends_cont}>
                                    <Image
                                        src={friend4}

                                        alt="Profile Picture"
                                    />
                                    <p className="m-0 mt-3 fw-bold fs-5">
                                        Omar Ehab
                                    </p>
                                    <p className="text-black-50 m-0 mt-2">
                                        PHP Developer
                                    </p>
                                </div>
                                <div className={styl.friends_icons}>
                                    <p>
                                        <SentimentSatisfiedAltIcon />99 Friend
                                    </p>
                                    <p>
                                        <FeedIcon />27 Article
                                    </p>
                                    <p>
                                        <SettingsIcon />10
                                        Projects
                                    </p>
                                </div>
                                <div className={`${styl.friends_foot} d-flex justify-content-between align-items-center`}>
                                    <p className="m-0 text-black-50" style={{ fontSize: '14px' }}>
                                        Joined 28/06/2022
                                    </p>
                                    <div className={styl.friends_btns}>
                                        <div className="btn btn-primary">
                                            Profile
                                        </div>
                                        <div className="btn-danger btn">
                                            Remove
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className={`${styl.friend_box} p-3`}>
                                <div className={styl.friends_head}>
                                    <PhoneIcon />
                                    <MessageIcon />
                                </div>
                                <div className={styl.friends_cont}>
                                    <Image
                                        src={friend5}

                                        alt="Profile Picture"
                                    />
                                    <p className="m-0 mt-3 fw-bold fs-5">
                                        Abdelrahman Ehab
                                    </p>
                                    <p className="text-black-50 m-0 mt-2">
                                        Digital Marketer
                                    </p>
                                </div>
                                <div className={styl.friends_icons}>
                                    <p>
                                        <SentimentSatisfiedAltIcon />99 Friend
                                    </p>
                                    <p>
                                        <FeedIcon />27 Article
                                    </p>
                                    <p>
                                        <SettingsIcon />10
                                        Projects
                                    </p>
                                </div>
                                <div className={`${styl.friends_foot} d-flex justify-content-between align-items-center`}>
                                    <p className="m-0 text-black-50" style={{ fontSize: '14px' }}>
                                        Joined 28/06/2022
                                    </p>
                                    <div className={styl.friends_btns}>
                                        <div className="btn btn-primary">
                                            Profile
                                        </div>
                                        <div className="btn-danger btn">
                                            Remove
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className={`${styl.friend_box} p-3`}>
                                <div className={styl.friends_head}>
                                    <PhoneIcon />
                                    <MessageIcon />
                                </div>
                                <div className={styl.friends_cont}>
                                    <Image
                                        src={friend1}

                                        alt="Profile Picture"
                                    />
                                    <p className="m-0 mt-3 fw-bold fs-5">
                                        Ahmed Maged
                                    </p>
                                    <p className="text-black-50 m-0 mt-2">
                                        Kotlin Developer
                                    </p>
                                </div>
                                <div className={styl.friends_icons}>
                                    <p>
                                        <SentimentSatisfiedAltIcon />99 Friend
                                    </p>
                                    <p>
                                        <FeedIcon />27 Article
                                    </p>
                                    <p>
                                        <SettingsIcon />10
                                        Projects
                                    </p>
                                </div>
                                <div className={`${styl.friends_foot} d-flex justify-content-between align-items-center`}>
                                    <p className="m-0 text-black-50" style={{ fontSize: '14px' }}>
                                        Joined 28/06/2022
                                    </p>
                                    <div className={styl.friends_btns}>
                                        <div className="btn btn-primary">
                                            Profile
                                        </div>
                                        <div className="btn-danger btn">
                                            Remove
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className={`${styl.friend_box} p-3`}>
                                <div className={styl.friends_head}>
                                    <PhoneIcon />
                                    <MessageIcon />
                                </div>
                                <div className={styl.friends_cont}>
                                    <Image
                                        src={friend3}

                                        alt="Profile Picture"
                                    />
                                    <p className="m-0 mt-3 fw-bold fs-5">
                                        Eslam Maged
                                    </p>
                                    <p className="text-black-50 m-0 mt-2">
                                        IOS Developer
                                    </p>
                                </div>
                                <div className={styl.friends_icons}>
                                    <p>
                                        <SentimentSatisfiedAltIcon />99 Friend
                                    </p>
                                    <p>
                                        <FeedIcon />27 Article
                                    </p>
                                    <p>
                                        <SettingsIcon />10
                                        Projects
                                    </p>
                                </div>
                                <div className={`${styl.friends_foot} d-flex justify-content-between align-items-center`}>
                                    <p className="m-0 text-black-50" style={{ fontSize: '14px' }}>
                                        Joined 28/06/2022
                                    </p>
                                    <div className={styl.friends_btns}>
                                        <div className="btn btn-primary">
                                            Profile
                                        </div>
                                        <div className="btn-danger btn">
                                            Remove
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className={`${styl.friend_box} p-3`}>
                                <div className={styl.friends_head}>
                                    <PhoneIcon />
                                    <MessageIcon />
                                </div>
                                <div className={styl.friends_cont}>
                                    <Image
                                        src={friend4}
                                        alt="Profile Picture"
                                    />
                                    <p className="m-0 mt-3 fw-bold fs-5">
                                        Hussam Hassan
                                    </p>
                                    <p className="text-black-50 m-0 mt-2">
                                        Back-end Developer
                                    </p>
                                </div>
                                <div className={styl.friends_icons}>
                                    <p>
                                        <SentimentSatisfiedAltIcon />99 Friend
                                    </p>
                                    <p>
                                        <FeedIcon />27 Article
                                    </p>
                                    <p>
                                        <SettingsIcon />10
                                        Projects
                                    </p>
                                </div>
                                <div className={`${styl.friends_foot} d-flex justify-content-between align-items-center`}>
                                    <p className="m-0 text-black-50" style={{ fontSize: '14px' }}>
                                        Joined 28/06/2022
                                    </p>
                                    <div className={styl.friends_btns}>
                                        <div className="btn btn-primary">
                                            Profile
                                        </div>
                                        <div className="btn-danger btn">
                                            Remove
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className={`${styl.friend_box} p-3`}>
                                <div className={styl.friends_head}>
                                    <PhoneIcon />
                                    <MessageIcon />
                                </div>
                                <div className={styl.friends_cont}>
                                    <Image
                                        src={friend5}

                                        alt="Profile Picture"
                                    />
                                    <p className="m-0 mt-3 fw-bold fs-5">
                                        Ahmed Mohamed

                                    </p>
                                    <p className="text-black-50 m-0 mt-2">
                                        Java Developer

                                    </p>
                                </div>
                                <div className={styl.friends_icons}>
                                    <p>
                                        <SentimentSatisfiedAltIcon />99 Friend
                                    </p>
                                    <p>
                                        <FeedIcon />27 Article
                                    </p>
                                    <p>
                                        <SettingsIcon />10
                                        Projects
                                    </p>
                                </div>
                                <div className={`${styl.friends_foot} d-flex justify-content-between align-items-center`}>
                                    <p className="m-0 text-black-50" style={{ fontSize: '14px' }}>
                                        Joined 28/06/2022
                                    </p>
                                    <div className={styl.friends_btns}>
                                        <div className="btn btn-primary">
                                            Profile
                                        </div>
                                        <div className="btn-danger btn">
                                            Remove
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className={`${styl.friend_box} p-3`}>
                                <div className={styl.friends_head}>
                                    <PhoneIcon />
                                    <MessageIcon />
                                </div>
                                <div className={styl.friends_cont}>
                                    <Image
                                        src={friend2}

                                        alt="Profile Picture"
                                    />
                                    <p className="m-0 mt-3 fw-bold fs-5">
                                        Ahmed Hany
                                    </p>
                                    <p className="text-black-50 m-0 mt-2">
                                        JavaScript Developer
                                    </p>
                                </div>
                                <div className={styl.friends_icons}>
                                    <p>
                                        <SentimentSatisfiedAltIcon />99 Friend
                                    </p>
                                    <p>
                                        <FeedIcon />27 Article
                                    </p>
                                    <p>
                                        <SettingsIcon />10
                                        Projects
                                    </p>
                                </div>
                                <div className={`${styl.friends_foot} d-flex justify-content-between align-items-center`}>
                                    <p className="m-0 text-black-50" style={{ fontSize: '14px' }}>
                                        Joined 28/06/2022
                                    </p>
                                    <div className={styl.friends_btns}>
                                        <div className="btn btn-primary">
                                            Profile
                                        </div>
                                        <div className="btn-danger btn">
                                            Remove
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className={`${styl.friend_box} p-3`}>
                                <div className={styl.friends_head}>
                                    <PhoneIcon />
                                    <MessageIcon />
                                </div>
                                <div className={styl.friends_cont}>
                                    <Image
                                        src={friend3}

                                        alt="Profile Picture"
                                    />
                                    <p className="m-0 mt-3 fw-bold fs-5">
                                        Ahmed Ehab
                                    </p>
                                    <p className="text-black-50 m-0 mt-2">
                                        Front-end Developer
                                    </p>
                                </div>
                                <div className={styl.friends_icons}>
                                    <p>
                                        <SentimentSatisfiedAltIcon />99 Friend
                                    </p>
                                    <p>
                                        <FeedIcon />27 Article
                                    </p>
                                    <p>
                                        <SettingsIcon />10
                                        Projects
                                    </p>
                                </div>
                                <div className={`${styl.friends_foot} d-flex justify-content-between align-items-center`}>
                                    <p className="m-0 text-black-50" style={{ fontSize: '14px' }}>
                                        Joined 28/06/2022
                                    </p>
                                    <div className={styl.friends_btns}>
                                        <div className="btn btn-primary">
                                            Profile
                                        </div>
                                        <div className="btn-danger btn">
                                            Remove
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div >
    );
}

export default Friends;
