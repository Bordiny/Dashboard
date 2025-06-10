import React from 'react';
import styl from './profile.module.css';
import Navbar from '../navbar/Navbar';
import Image from 'next/image'
import ava from '@/imgs/avatar/ava.png';
import Stars from './Stars';
import store from '@/imgs/activity/activity-01.png';
import grad from '@/imgs/activity/activity-02.png';
import check from '@/imgs/activity/activity-03.png';
const Profile = () => {
    return (
        <div>
            <div className="main">

                <div className="p-4">
                    <h2 className={styl.main_title}>Profile</h2>
                    <div className="container mt-4">
                        <div className="row">
                            <div className="col-lg-3 col-md-12">
                                <div className={`${styl.box} text-center ${styl.profile} d-flex flex-column justify-content-center align-items-center`}>
                                    <Image
                                        src={ava}
                                        width={130}
                                        height={130}
                                        alt="Picture of the author"
                                    />
                                    <p className="fw-bold fs-5 m-0">
                                        Ahmed Elbordiny
                                    </p>
                                    <p className="text-black-50 m-0 mt-2">
                                        Level 10
                                    </p>
                                    <div className={styl.profile_prog}>
                                        <div className={styl.prog} />
                                    </div>
                                    <div className={styl.stars}>
                                        <Stars />
                                    </div>
                                    <div className="text-black-50 m-2">
                                        999 Rating
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9 col-md-12">
                                <div className={styl.box}>
                                    <div className={styl.profile_main}>
                                        <p className="text-black-50 fw-bold">
                                            General Information
                                        </p>
                                        <div className={styl.profile_cont}>
                                            <p>
                                                Full Name :
                                                <span>Ahmed Elbordiny</span>
                                            </p>
                                            <p>Gender : <span>Male</span></p>
                                            <p>Country : <span>Egypt </span></p>
                                        </div>
                                        <div className="form-check form-switch">
                                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" defaultChecked />
                                        </div>
                                    </div>
                                    <div className={styl.profile_main}>
                                        <p className="text-black-50 fw-bold">
                                            Personal Information
                                        </p>
                                        <div className={styl.profile_cont}>
                                            <p>
                                                Email :
                                                <span>ahmed.maged7499@gmail.com</span>
                                            </p>
                                            <p>
                                                Phone : <span>01287378182</span>
                                            </p>
                                            <p>
                                                Date of Birdth :
                                                <span>27/2/1999 </span>
                                            </p>
                                        </div>
                                        <div className="form-check form-switch">
                                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                        </div>
                                    </div>
                                    <div className={styl.profile_main}>
                                        <p className="text-black-50 fw-bold">
                                            Job Information
                                        </p>
                                        <div className={styl.profile_cont}>
                                            <p>
                                                Title :
                                                <span>Front End Developer</span>
                                            </p>
                                            <p>
                                                Programming Language :
                                                <span>JS</span>
                                            </p>
                                            <p>
                                                Experience :
                                                <span>2 Years </span>
                                            </p>
                                        </div>
                                        <div className="form-check form-switch">
                                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" defaultChecked />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-12 pb-4">
                                <div className={styl.box}>
                                    <div className={styl.skills}>
                                        <h3 className="fw-bold">My Skills</h3>
                                        <p className="text-black-50 text-capitalize fw-bold">
                                            Complete Skills List
                                        </p>
                                        <div className={styl.skill_cont}>
                                            <p>HTML</p>
                                            <p>HAML</p>
                                            <p>Pug.js</p>
                                        </div>
                                        <div className={styl.skill_cont}>
                                            <p>CSS</p>
                                            <p>SASS</p>
                                            <p>Stylus</p>
                                        </div>
                                        <div className={styl.skill_cont}>
                                            <p>JavaScript</p>
                                            <p>Typescript</p>
                                        </div>
                                        <div className={styl.skill_cont}>
                                            <p>Vue.js</p>
                                            <p>React.js</p>
                                        </div>
                                        <div className={styl.skill_cont}>
                                            <p>Jest</p>
                                            <p>Jasmine</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-12">
                                <div className={`${styl.box} ${styl.activities}`}>
                                    <h3 className="fw-bold">Latest Activities</h3>
                                    <p className="text-black-50 text-capitalize fw-bold">
                                        Latest Activities Done By The User
                                    </p>
                                    <div className={styl.act_cont}>
                                        <div className={styl.left_act}>
                                            <Image
                                                src={store}
                                                alt="Picture of the author"
                                            />
                                            <div>
                                                <p className="m-0 mb-1 fw-bold">
                                                    store
                                                </p>
                                                <p className="text-black-50 text-capitalize m-0">
                                                    Bought The Mastering Python
                                                    Course
                                                </p>
                                            </div>
                                        </div>
                                        <div className="right-act text-end">
                                            <p className="time m-0 mb-1 text-green-600">16:10</p>
                                            <p className="date m-0  text-sky-600">
                                                2 days ago
                                            </p>
                                        </div>
                                    </div>
                                    <div className={styl.act_cont}>
                                        <div className={styl.left_act}>
                                            <Image
                                                src={store}
                                                alt="Picture of the author"
                                            />
                                            <div>
                                                <p className="m-0 mb-1 fw-bold">
                                                    Academy
                                                </p>
                                                <p className="text-black-50 text-capitalize m-0">
                                                    Got The JS Certificate
                                                </p>
                                            </div>
                                        </div>
                                        <div className="right-act text-end">
                                            <p className="time m-0 mb-1 text-green-600">18:30</p>
                                            <p className="date m-0  text-sky-600">
                                                Yesterday
                                            </p>
                                        </div>
                                    </div>
                                    <div className={styl.act_cont}>
                                        <div className={styl.left_act}>
                                            <Image
                                                src={grad}
                                                alt="Picture of the author"
                                            />
                                            <div>
                                                <p className="m-0 mb-1 fw-bold">
                                                    Badges
                                                </p>
                                                <p className="text-black-50 text-capitalize m-0">
                                                    Badges Unlocked The 10
                                                    Skills Badge
                                                </p>
                                            </div>
                                        </div>
                                        <div className="right-act text-end">
                                            <p className="time m-0 mb-1 text-green-600">17:40</p>
                                            <p className="date m-0 text-sky-600">
                                                2 days ago
                                            </p>
                                        </div>
                                    </div>
                                    <div className={styl.act_cont}>
                                        <div className={styl.left_act}>
                                            <Image
                                                src={check}
                                                alt="Picture of the author"
                                            />
                                            <div>
                                                <p className="m-0 mb-1 fw-bold">
                                                    store
                                                </p>
                                                <p className="text-black-50 text-capitalize m-0">
                                                    Bought The HTML Python
                                                    Course
                                                </p>
                                            </div>
                                        </div>
                                        <div className="right-act text-end">
                                            <p className="time m-0 mb-1 text-green-600">12:40</p>
                                            <p className="date m-0  text-sky-600">
                                                1 week ago
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
