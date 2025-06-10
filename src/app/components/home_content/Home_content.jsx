import React from 'react'
import welcome from '@/imgs/home/welcome.png'
import Image from 'next/image'
import styl from './home.module.css'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CodeIcon from '@mui/icons-material/Code';
import PersonIcon from '@mui/icons-material/Person';
import ava from '@/imgs/avatar/ava.png'
import ava2 from '@/imgs/avatar/ava3.png'
import ava3 from '@/imgs/avatar/ava4.jpg'
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import FolderIcon from '@mui/icons-material/Folder';
import SettingsIcon from '@mui/icons-material/Settings';
import WarningIcon from '@mui/icons-material/Warning';
import htmlimg from '@/imgs/home/html.jpg'
import cssimg from '@/imgs/home/css.png'
import jsimg from '@/imgs/home/js.png'
import bootstrapimg from '@/imgs/home/bootstrap-social.png'
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import pdfimg from '@/imgs/files/pdf.svg'
import aviimg from '@/imgs/files/avi.svg'
import epsimg from '@/imgs/files/eps.svg'
import psdimg from '@/imgs/files/psd.svg'
import zipimg from '@/imgs/files/zip.svg'
import dllimg from '@/imgs/files/dll.svg'
import projectimg from '@/imgs/home/project.png'


import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
export default function Home_content() {
    return (
        <div>
            <div className={styl.main_content}>
                <h2 className={styl.main_title}>Dashboard</h2>
                <div className="container mt-4">
                    <div className="row">
                        <div className="col-xl-6 col-lg-12">
                            <div className={styl.box}>
                                <div className={styl.welcome}>
                                    <div className={styl.wel_text}>
                                        <p className="fs-4 fw-bold mt-2 mb-0">
                                            Welcome
                                        </p>
                                        <p className="fs-5 text-black-50 mt-0">
                                            Bordiny
                                        </p>
                                    </div>
                                    <div className={styl.wel_img}>
                                        {/* <img src="imgs/welcome.png" alt="" srcSet /> */}
                                        <Image
                                            src={welcome}

                                            alt="Picture of the author"
                                            className="img-fluid"
                                        />

                                    </div>
                                </div>
                                <Image
                                    src={ava}

                                    alt="Picture of the author"
                                    className="img-fluid"
                                />
                                <div className={styl.wel_info}>
                                    <div>
                                        <p className="fw-bold">
                                            Ahmed Elbordiny
                                        </p>
                                        <p className="wel-title text-black-50">
                                            Developer
                                        </p>
                                    </div>
                                    <div>
                                        <p className="fw-bold">20</p>
                                        <p className="wel-title text-black-50">
                                            Projects
                                        </p>
                                    </div>
                                    <div>
                                        <p className="fw-bold">1000$</p>
                                        <p className="wel-title text-black-50">
                                            Earned
                                        </p>
                                    </div>
                                </div>
                                <button className={`btn btn-primary d-block mt-3 me-4 ms-auto ${styl.wel_btn}`}>
                                    <a href="#">
                                        profile
                                    </a>
                                </button>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-12">
                            <div className={styl.box}>
                                <div className={styl.draft}>
                                    <h3 className="fw-bold">Quick Draft</h3>
                                    <p className="text-black-50 text-capitalize fw-bold">
                                        write a draft fot your ideas
                                    </p>
                                    <div className={`${styl.form_floating} mt-3 mb-3`}>
                                        <input type="text" className="form-control" placeholder="Title" id="floatingTextarea" />
                                    </div>
                                    <div className={`${styl.form_floating}`}>
                                        <textarea className={`form-control  ${styl.ideas}`} placeholder="Your Ideas" id="floatingTextarea2" style={{ height: '100px' }} defaultValue={""} />
                                    </div>
                                    <button className={`btn btn-primary d-block mt-3 ms-auto ${styl.wel_btn}`}>
                                        <a href="#">
                                            Save
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-12">
                            <div className={styl.box}>
                                <div className={styl.target}>
                                    <h3 className="fw-bold">Yearly Targets</h3>
                                    <p className="text-black-50 text-capitalize fw-bold">
                                        targets of the year
                                    </p>
                                    <div className={`${styl.target_progress} mt-2 d-flex money`}>
                                        <div className={styl.target_square}>
                                            <AttachMoneyIcon />
                                        </div>
                                        <div className={styl.prog}>
                                            <span className="text-black-50 ">Money</span>
                                            <span className="fs-5 fw-bold">99,999$</span>
                                            <div className={styl.main_prog}>
                                                <div className={styl.real_prog} data-wid="80%">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${styl.target_progress} mt-2 d-flex ${styl.project}`}>
                                        <div className={styl.target_square}>
                                            <CodeIcon />
                                        </div>
                                        <div className={styl.prog}>
                                            <span className="text-black-50">Project</span>
                                            <span className="fs-5 fw-bold">20</span>
                                            <div className={styl.main_prog}>
                                                <div className={styl.real_prog} data-wid="55%" style={{ width: '55%' }}>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${styl.target_progress} mt-2 d-flex ${styl.team}`}>
                                        <div className={styl.target_square}>
                                            <PersonIcon />
                                        </div>
                                        <div className={styl.prog}>
                                            <span className="text-black-50 ">Team</span>
                                            <span className="fs-5 fw-bold">10</span>
                                            <div className={styl.main_prog}>
                                                <div className={styl.real_prog} data-color="red" data-wid="70%" style={{ width: '70%' }}>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-12">
                            <div className={`${styl.box} st-box`}>
                                <div className={styl.tickets}>
                                    <h3 className="fw-bold">Tickets Statistics</h3>
                                    <p className="text-black-50 text-capitalize fw-bold">Everything About Support Tickets</p>
                                    <div className={`${styl.Statistics} text-center`}>
                                        <div>
                                            <FolderIcon className={styl.total} />
                                            <p className="fw-bold fs-3 m-0">2500</p>
                                            <p className=" text-black-50  m-0">Total</p>
                                        </div>
                                        <div>
                                            <HourglassBottomIcon className={styl.pending} />
                                            <p className="fw-bold fs-3 m-0">500</p>
                                            <p className=" text-black-50  m-0">Pending</p>
                                        </div>
                                        <div>
                                            <SettingsIcon className={styl.closed} />
                                            <p className="fw-bold fs-3 m-0">200</p>
                                            <p className=" text-black-50  m-0">Closed</p>
                                        </div>
                                        <div>
                                            <WarningIcon className={styl.deleted} />
                                            <p className="fw-bold fs-3 m-0">100</p>
                                            <p className=" text-black-50  m-0">Deleted</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-12">
                            <div className={`${styl.box} ${styl.scroll}`}  >
                                <div className={styl.news}>
                                    <h3 className="fw-bold">Latest News</h3>
                                    <div className={styl.news_row}>
                                        <Image
                                            src={htmlimg}
                                            width={500}
                                            height={500}
                                            alt="Picture of the author"
                                        />

                                        {/* <img src="imgs/html.jpg" alt="" srcSet /> */}
                                        <div className={styl.news_text}>
                                            <p className="fw-bold m-0">Uploaded HTML courses</p>
                                            <p className="text-black-50 m-0">New HTML Examples &amp; Tutorials</p>
                                        </div>
                                        <div className={styl.days}>
                                            4 Days Ago
                                        </div>
                                    </div>
                                    <div className={styl.news_row}>
                                        <Image
                                            src={cssimg}
                                            width={500}
                                            height={500}
                                            alt="Picture of the author"
                                        />
                                        <div className={styl.news_text}>
                                            <p className=" fw-bold m-0">Uploaded CSS courses</p>
                                            <p className="text-black-50 m-0">New HTML Examples &amp; Tutorials</p>
                                        </div>
                                        <div className={styl.days}>
                                            2 Days Ago
                                        </div>
                                    </div>
                                    <div className={styl.news_row}>
                                        <Image
                                            src={jsimg}
                                            width={500}
                                            height={500}
                                            alt="Picture of the author"
                                        />
                                        <div className={styl.news_text}>
                                            <p className="fw-bold m-0">Uploaded JavaScript courses</p>
                                            <p className="text-black-50 m-0">New JavaScript Examples &amp; Tutorials</p>
                                        </div>
                                        <div className={styl.days}>
                                            6 Days Ago
                                        </div>
                                    </div>
                                    <div className={styl.news_row}>
                                        <Image
                                            src={bootstrapimg}
                                            width={500}
                                            height={500}
                                            alt="Picture of the author"
                                        />
                                        <div className={styl.news_text}>
                                            <p className=" fw-bold m-0">Uploaded Bootstrap courses</p>
                                            <p className="text-black-50 m-0">New Bootstrap Examples &amp; Tutorials</p>
                                        </div>
                                        <div className={styl.days}>
                                            6 Days Ago
                                        </div>
                                    </div>
                                    <div className={styl.news_row}>
                                        <Image
                                            src={htmlimg}
                                            width={500}
                                            height={500}
                                            alt="Picture of the author"
                                        />
                                        <div className={styl.news_text}>
                                            <p className="fw-bold m-0">Uploaded HTML courses</p>
                                            <p className="text-black-50 m-0">New HTML Examples &amp; Tutorials</p>
                                        </div>
                                        <div className={styl.days}>
                                            4 Days Ago
                                        </div>
                                    </div>
                                    <div className={styl.news_row}>
                                        <Image
                                            src={cssimg}
                                            width={500}
                                            height={500}
                                            alt="Picture of the author"
                                        />
                                        <div className={styl.news_text}>
                                            <p className=" fw-bold m-0">Uploaded CSS courses</p>
                                            <p className="text-black-50 m-0">New HTML Examples &amp; Tutorials</p>
                                        </div>
                                        <div className={styl.days}>
                                            2 Days Ago
                                        </div>
                                    </div>
                                    <div className={styl.news_row}>
                                        <Image
                                            src={jsimg}
                                            width={500}
                                            height={500}
                                            alt="Picture of the author"
                                        />
                                        <div className={styl.news_text}>
                                            <p className="fw-bold m-0">Uploaded JavaScript courses</p>
                                            <p className="text-black-50 m-0">New JavaScript Examples &amp; Tutorials</p>
                                        </div>
                                        <div className={styl.days}>
                                            6 Days Ago
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-12">
                            <div className={`${styl.box} ${styl.scroll}`} >
                                <div className={styl.tasks}>
                                    <h3 className="fw-bold">Latest Tasks</h3>
                                    <div className={styl.tasks_row}>
                                        <div className={styl.tasks_text}>
                                            <p className="fw-bold m-0">Record One New Video</p>
                                            <p className="text-black-50 m-0">Record Python Create Exe Project</p>
                                        </div>
                                        <div className={styl.task_trash}>
                                            <DeleteIcon />
                                        </div>
                                    </div>
                                    <div className={styl.tasks_row}>
                                        <div className="tasks-text">
                                            <p className="fw-bold m-0">Write Article</p>
                                            <p className="text-black-50 m-0">Write Low Level vs High Level Languages</p>
                                        </div>
                                        <div className={styl.task_trash}>
                                            <DeleteIcon />
                                        </div>
                                    </div>
                                    <div className={styl.tasks_row}>
                                        <div className="tasks-text">
                                            <p className="fw-bold m-0">Finish Project</p>
                                            <p className="text-black-50 m-0">Publish Academy Programming Project</p>
                                        </div>
                                        <div className={styl.task_trash}>
                                            <DeleteIcon />
                                        </div>
                                    </div>
                                    <div className={`${styl.tasks_row} ${styl.disabled}`}>
                                        <div className="tasks-text">
                                            <p className="fw-bold m-0">Attend The Meeting</p>
                                            <p className="text-black-50 m-0">The Project Business Analysis Meeting</p>
                                        </div>
                                        <div className={styl.task_trash}>
                                            <DeleteIcon />
                                        </div>
                                    </div>
                                    <div className={styl.tasks_row}>
                                        <div className="tasks-text">
                                            <p className="fw-bold m-0">Finish Lesson</p>
                                            <p className="text-black-50 m-0">Finish Teaching Flex Box</p>
                                        </div>
                                        <div className={styl.task_trash}>
                                            <DeleteIcon />
                                        </div>
                                    </div>
                                    <div className={`${styl.tasks_row} ${styl.disabled}`}>
                                        <div className="tasks-text">
                                            <p className="fw-bold m-0">Finish Lesson</p>
                                            <p className="text-black-50 m-0">Finish Teaching Flex Box</p>
                                        </div>
                                        <div className={styl.task_trash}>
                                            <DeleteIcon />
                                        </div>
                                    </div>
                                    <div className={styl.tasks_row}>
                                        <div className="tasks-text">
                                            <p className="fw-bold m-0">Finish Lesson</p>
                                            <p className="text-black-50 m-0">Finish Teaching Flex Box</p>
                                        </div>
                                        <div className={styl.task_trash}>
                                            <DeleteIcon />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-12">
                            <div className={`${styl.box} ${styl.scroll} `}>
                                <div className={styl.top_search}>
                                    <h3 className="fw-bold">Top Search Items</h3>
                                    <div className="search-head d-flex fs-5 mt-4 mb-3 justify-content-between align-items-center">
                                        <p className="text-black-50 m-0 mb-2">keyword</p>
                                        <p className="text-black-50 m-0 mb-2">Search Count</p>
                                    </div>
                                    <div className="search-cont d-flex m-2 justify-content-between">
                                        <p className="fw-bold m-0">Programming</p>
                                        <p className={styl.num}>220</p>
                                    </div>
                                    <div className="search-cont d-flex m-2 justify-content-between">
                                        <p className="fw-bold m-0">JavaScript</p>
                                        <p className={styl.num}>320</p>
                                    </div>
                                    <div className="search-cont d-flex m-2 justify-content-between">
                                        <p className="fw-bold m-0">PHP</p>
                                        <p className={styl.num}>250</p>
                                    </div>
                                    <div className="search-cont d-flex m-2 justify-content-between">
                                        <p className="fw-bold m-0">Code</p>
                                        <p className={styl.num}>200</p>
                                    </div>
                                    <div className="search-cont d-flex m-2 justify-content-between">
                                        <p className="fw-bold m-0">Design</p>
                                        <p className={styl.num}>150</p>
                                    </div>
                                    <div className="search-cont d-flex m-2 justify-content-between">
                                        <p className="fw-bold m-0">Logic</p>
                                        <p className={styl.num}>260</p>
                                    </div>
                                    <div className="search-cont d-flex m-2 justify-content-between">
                                        <p className="fw-bold m-0">PHP</p>
                                        <p className={styl.num}>150</p>
                                    </div>
                                    <div className="search-cont d-flex m-2 justify-content-between">
                                        <p className="fw-bold m-0">Programming</p>
                                        <p className={styl.num}>120</p>
                                    </div>
                                    <div className="search-cont d-flex m-2 justify-content-between">
                                        <p className="fw-bold m-0">JavaScript</p>
                                        <p className={styl.num}>20</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-12">
                            <div className={`${styl.box} ${styl.scroll} `}>
                                <div className={styl.uploads}>
                                    <h3 className="fw-bold mb-3">Latest Uploads</h3>
                                    <div className={styl.uploads_cont}>
                                        <div className={styl.upload_left}>
                                            <div className={styl.upload_img}>
                                                <Image
                                                    src={pdfimg}
                                                    alt="Picture of the author"
                                                />
                                            </div>
                                            <div>
                                                <p className=" m-0">my-file.pdf</p>
                                                <p className="text-black-50 m-0">Admin</p>
                                            </div>
                                        </div>
                                        <p className={styl.num}>2.2 MB</p>
                                    </div>
                                    <div className={styl.uploads_cont}>
                                        <div className={styl.upload_left}>
                                            <div className={styl.upload_img}>
                                                <Image
                                                    src={aviimg}
                                                    alt="Picture of the author"
                                                />
                                            </div>
                                            <div>
                                                <p className=" m-0">my-file.avi</p>
                                                <p className="text-black-50 m-0">User</p>
                                            </div>
                                        </div>
                                        <p className={styl.num}>2.4 MB</p>
                                    </div>
                                    <div className={styl.uploads_cont}>
                                        <div className={styl.upload_left}>
                                            <div className={styl.upload_img}>
                                                <Image
                                                    src={epsimg}
                                                    alt="Picture of the author"
                                                />
                                            </div>
                                            <div>
                                                <p className=" m-0">my-video.eps</p>
                                                <p className="text-black-50 m-0">Admin</p>
                                            </div>
                                        </div>
                                        <p className={styl.num}>3.2 MB</p>
                                    </div>
                                    <div className={styl.uploads_cont}>
                                        <div className={styl.upload_left}>
                                            <div className={styl.upload_img}>
                                                <Image
                                                    src={psdimg}
                                                    alt="Picture of the author"
                                                />
                                            </div>
                                            <div>
                                                <p className=" m-0">my-file.psd</p>
                                                <p className="text-black-50 m-0">Ahmed</p>
                                            </div>
                                        </div>
                                        <p className={styl.num}>3.0 MB</p>
                                    </div>
                                    <div className={styl.uploads_cont}>
                                        <div className={styl.upload_left}>
                                            <div className={styl.upload_img}>
                                                <Image
                                                    src={zipimg}
                                                    alt="Picture of the author"
                                                />
                                            </div>
                                            <div>
                                                <p className=" m-0">ZIP File</p>
                                                <p className="text-black-50 m-0">User</p>
                                            </div>
                                        </div>
                                        <p className={styl.num}>2.2 MB</p>
                                    </div>
                                    <div className={styl.uploads_cont}>
                                        <div className={styl.upload_left}>
                                            <div className={styl.upload_img}>
                                                <Image
                                                    src={pdfimg}
                                                    alt="Picture of the author"
                                                />
                                            </div>
                                            <div>
                                                <p className=" m-0">my-file.pdf</p>
                                                <p className="text-black-50 m-0">Admin</p>
                                            </div>
                                        </div>
                                        <p className={styl.num}>2.2 MB</p>
                                    </div>
                                    <div className={styl.uploads_cont}>
                                        <div className={styl.upload_left}>
                                            <div className={styl.upload_img}>
                                                <Image
                                                    src={aviimg}
                                                    alt="Picture of the author"
                                                />
                                            </div>
                                            <div>
                                                <p className=" m-0">my-file.avi</p>
                                                <p className="text-black-50 m-0">User</p>
                                            </div>
                                        </div>
                                        <p className={styl.num}>2.4 MB</p>
                                    </div>
                                    <div className={styl.uploads_cont}>
                                        <div className={styl.upload_left}>
                                            <div className={styl.upload_img}>
                                                <Image
                                                    src={epsimg}
                                                    alt="Picture of the author"
                                                />
                                            </div>
                                            <div>
                                                <p className=" m-0">my-video.eps</p>
                                                <p className="text-black-50 m-0">Admin</p>
                                            </div>
                                        </div>
                                        <p className={styl.num}>3.2 MB</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-12">
                            <div className={styl.box}>
                                <div className={styl.project_prog}>
                                    <h3 className="fw-bold mb-3">Last Project Progress</h3>
                                    <ul className={`list-unstyled ${styl.list_prog}`}>
                                        <li>Got The Project</li>
                                        <li>Started The Project</li>
                                        <li>The Project About To Finish</li>
                                        <li className={styl.inprog}>Test The Project</li>
                                        <li className={styl.not}>Finish The Project &amp; Get Money</li>
                                        <Image
                                            src={projectimg}
                                            className={styl.prog_img}
                                            alt="Picture of the author"
                                        />

                                        {/* <img src="imgs/project.png" className="prog-img" alt="" srcSet /> */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-12">
                            <div className={styl.box}>
                                <div className={styl.remind}>
                                    <h3 className="fw-bold mb-3">Latest Post</h3>
                                    <ul className={`list-unstyled ${styl.list_remind}`}>
                                        <li className={styl.rem_blue}>
                                            <p className="fw-bold m-0">Check My Tasks List</p>
                                            <p className="text-black-50 m-0">28/09/2022 - 12:00am</p>
                                        </li>
                                        <li className={styl.rem_green}>
                                            <p className="fw-bold m-0">Check My Projects</p>
                                            <p className="text-black-50 m-0">20/09/2022 - 12:00am</p>
                                        </li>
                                        <li className={styl.rem_yellow}>
                                            <p className="fw-bold m-0">Call All My Clients
                                            </p>
                                            <p className="text-black-50 m-0">18/09/2022 - 12:00am</p>
                                        </li>
                                        <li className={styl.rem_red}>
                                            <p className="fw-bold m-0">Finish The Development Workshop</p>
                                            <p className="text-black-50 m-0">23/09/2022 - 12:00am</p>
                                        </li>
                                        <li className={styl.rem_blue}>
                                            <p className="fw-bold m-0">Check My Tasks List</p>
                                            <p className="text-black-50 m-0">8/09/2022 - 12:00am</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-12">
                            <div className={`${styl.box} ${styl.scroll} `}>
                                <div className={styl.posts}>
                                    <h3 className="fw-bold mb-3">Latest Post</h3>
                                    <div className={styl.post_bg}>
                                        <div className={styl.posts_cont}>
                                            <Image
                                                src={ava}

                                                alt="Picture of the author"
                                            />
                                            <div>
                                                <p className="fw-bold m-0 fs-5">Ahmed Elbordiny</p>
                                                <p className="text-sky-500  m-0">About 2 Hours Ago</p>
                                            </div>
                                        </div>
                                        <div className={styl.post_content}>
                                            You Can Fool All Of The People Some Of The Time, And Some Of The People All Of The Time, But You Can't Fool All Of The People All Of The Time.
                                        </div>
                                        <div className={styl.posts_icons}>
                                            <p className="text-red-500"><FavoriteIcon />1.8K</p>
                                            <p className='text-green-500'><CommentIcon />999</p>
                                        </div>
                                    </div>
                                    <div className={styl.post_bg}>
                                        <div className={styl.posts_cont}>
                                            <Image
                                                src={ava2}

                                                alt="Picture of the author"
                                            />
                                            <div>
                                                <p className="fw-bold m-0 fs-5 ">Eslam Elbordiny</p>
                                                <p className="text-sky-500 m-0">About 3 Hours Ago</p>
                                            </div>
                                        </div>
                                        <div className={styl.post_content}>
                                            You Can Fool All Of The People Some Of The Time, And Some Of The People All Of The Time, But You Can't Fool All Of The People All Of The Time.
                                        </div>
                                        <div className={styl.posts_icons}>
                                            <p className="text-red-500"><FavoriteIcon />2K</p>
                                            <p className='text-green-500'>	<CommentIcon />89</p>
                                        </div>
                                    </div>
                                    <div className={styl.post_bg}>
                                        <div className={styl.posts_cont}>
                                            <Image
                                                src={ava3}

                                                alt="Picture of the author"
                                            />
                                            <div>
                                                <p className="fw-bold m-0 fs-5">Ahmed Maged</p>
                                                <p className="text-sky-500  m-0">About 4 Hours Ago</p>
                                            </div>
                                        </div>
                                        <div className={styl.post_content}>
                                            You Can Fool All Of The People Some Of The Time, And Some Of The People All Of The Time, But You Can't Fool All Of The People All Of The Time.
                                        </div>
                                        <div className={styl.posts_icons}>
                                            <p className="text-red-500"><FavoriteIcon />1.5K</p>
                                            <p className='text-green-500'><CommentIcon />20</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-12">
                            <div className={styl.box}>
                                <div className={styl.social}>
                                    <h3 className="fw-bold mb-3">Social Media Stats</h3>
                                    <div className={`${styl.social_cont} ${styl.soc_twttier}`}>
                                        <div className="d-flex align-items-center">
                                            <XIcon />
                                            <p className="m-0 ms-3">90K Followers</p>
                                        </div>
                                        <button className="btn btn-primary">Follow</button>
                                    </div>
                                    <div className={`${styl.social_cont} ${styl.soc_face}`}>
                                        <div className="d-flex align-items-center">
                                            <FacebookIcon />
                                            <p className="m-0 ms-3">2M Like</p>
                                        </div>
                                        <button className="btn btn-primary">Like</button>
                                    </div>
                                    <div className={`${styl.social_cont} ${styl.soc_you}`}>
                                        <div className="d-flex align-items-center">
                                            <YouTubeIcon />
                                            <p className="m-0 ms-3">1M Subs</p>
                                        </div>
                                        <button className="btn btn-danger">Subscribe</button>
                                    </div>
                                    <div className={`${styl.social_cont} ${styl.soc_link}`}>
                                        <div className="d-flex align-items-center">
                                            <LinkedInIcon />
                                            <p className="m-0 ms-3">70K Followers</p>
                                        </div>
                                        <button className="btn btn-primary">Follow</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styl.box_table}>
                            <h3 className="fw-bold mb-3" draggable="true">Social Media Stats</h3>
                            <table className={`${styl.table} text-center table-responsive border-1  table-bordered`}>
                                <thead>
                                    <tr className={styl.main_head}>
                                        <th scope="col">Name</th>
                                        <th scope="col">Finish Date</th>
                                        <th scope="col">Client</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>Ministry Wikipedia</th>
                                        <td className={styl.date}>10 May 2022</td>
                                        <td className={styl.clie}>Ministry</td>
                                        <td className={styl.pri}>$1500</td>

                                        <td>
                                            <button className="btn btn-primary">In Progress</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Mahmoud Website</th>
                                        <td className={styl.date}>22 May 2021	</td>
                                        <td className={styl.clie}>Mahmoud</td>
                                        <td className={styl.pri}>$600</td>

                                        <td>
                                            <button className="btn btn-primary">In Progress</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Sayed Website</th>
                                        <td className={styl.date}>22 May 2021</td>
                                        <td className={styl.clie}>Sayed</td>
                                        <td className={styl.pri}>$5300</td>

                                        <td>
                                            <button className="btn btn-success">Completed</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Ahmed App</th>
                                        <td className={styl.date}>12 Oct 2021</td>
                                        <td className={styl.clie}>Bouda Company</td>
                                        <td className={styl.pri}>$1500</td>

                                        <td>
                                            <button className="btn btn-danger">Rejected</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
