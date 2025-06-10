import React from 'react';
import Navbar from '../navbar/Navbar';
import styl from './courses.module.css'
import PersonIcon from '@mui/icons-material/Person';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ava1 from '@/imgs/avatar/ava.png';
import ava2 from '@/imgs/avatar/ava4.jpg';
import ava3 from '@/imgs/avatar/ava3.png';
import Image from 'next/image'
import course1 from "@/imgs/course/course1.jpg";
import course2 from "@/imgs/course/course2.jpg";
import course3 from "@/imgs/course/course3.jpg";
import course4 from "@/imgs/course/course4.jpg";
import course5 from "@/imgs/course/course5.jpg";

const Courses = () => {
    return (

        <div className="main">
            <div className="p-3">
                <h2 className={styl.main_title}>Courses</h2>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-sm-6">
                            <div className={styl.box_img}>
                                <div className={styl.course_img}>
                                    <div className={styl.ava}>
                                        <Image
                                            src={ava1}

                                            alt="Picture of the author"
                                        />
                                    </div>
                                    <Image
                                        src={course1}

                                        alt="Picture of the author"
                                    />
                                </div>
                                <div className={styl.course_cont}>
                                    <p className="m-0 fw-bold mt-2 fs-5">
                                        Data Structure And Algorithms
                                    </p>
                                    <p className="text-black-50 m-0 mt-1">
                                        Master The Art Of Data Strcuture And
                                        Famous Algorithms Like Sorting,
                                        Dividing And Conquering
                                    </p>
                                    <div className="text-center mt-3 mb-2">
                                        <p className={`btn btn-primary ${styl.info}`}>
                                            Course Info
                                        </p>
                                    </div>
                                    <div className="course-icons text-black-50 d-flex justify-content-between align-items-center mb-3">
                                        <div className='d-flex align-items-center'>
                                            <PersonIcon />
                                            900
                                        </div>
                                        <div className='d-flex align-items-center'>
                                            <AttachMoneyIcon />
                                            50
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-sm-6">
                            <div className={styl.box_img}>
                                <div className={styl.course_img}>
                                    <div className={styl.ava}>
                                        <Image
                                            src={ava2}

                                            alt="Picture of the author"
                                        />
                                    </div>
                                    <Image
                                        src={course2}

                                        alt="Picture of the author"
                                    />
                                </div>
                                <div className={styl.course_cont}>
                                    <p className="m-0 fw-bold mt-2 fs-5">
                                        Data Structure And Algorithms
                                    </p>
                                    <p className="text-black-50 m-0 mt-1">
                                        Master The Art Of Data Strcuture And
                                        Famous Algorithms Like Sorting,
                                        Dividing And Conquering
                                    </p>
                                    <div className="text-center mt-3 mb-2">
                                        <p className={`btn btn-primary ${styl.info}`}>
                                            Course Info
                                        </p>
                                    </div>
                                    <div className="course-icons text-black-50 d-flex justify-content-between align-items-center mb-3">
                                        <div className='d-flex align-items-center'>
                                            <PersonIcon />
                                            900
                                        </div>
                                        <div className='d-flex align-items-center'>
                                            <AttachMoneyIcon />
                                            50
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-sm-6">
                            <div className={styl.box_img}>
                                <div className={styl.course_img}>
                                    <div className={styl.ava}>
                                        <Image
                                            src={ava1}

                                            alt="Picture of the author"
                                        />
                                    </div>
                                    <Image
                                        src={course3}

                                        alt="Picture of the author"
                                    />
                                </div>
                                <div className={styl.course_cont}>
                                    <p className="m-0 fw-bold mt-2 fs-5">
                                        Data Structure And Algorithms
                                    </p>
                                    <p className="text-black-50 m-0 mt-1">
                                        Master The Art Of Data Strcuture And
                                        Famous Algorithms Like Sorting,
                                        Dividing And Conquering
                                    </p>
                                    <div className="text-center mt-3 mb-2">
                                        <p className={`btn btn-primary ${styl.info}`}>
                                            Course Info
                                        </p>
                                    </div>
                                    <div className="course-icons text-black-50 d-flex justify-content-between align-items-center mb-3">
                                        <div className='d-flex align-items-center'>
                                            <PersonIcon />
                                            900
                                        </div>
                                        <div className='d-flex align-items-center'>
                                            <AttachMoneyIcon />
                                            50
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-sm-6">
                            <div className={styl.box_img}>
                                <div className={styl.course_img}>
                                    <div className={styl.ava}>
                                        <Image
                                            src={ava3}

                                            alt="Picture of the author"
                                        />
                                    </div>
                                    <Image
                                        src={course4}

                                        alt="Picture of the author"
                                    />
                                </div>
                                <div className={styl.course_cont}>
                                    <p className="m-0 fw-bold mt-2 fs-5">
                                        Data Structure And Algorithms
                                    </p>
                                    <p className="text-black-50 m-0 mt-1">
                                        Master The Art Of Data Strcuture And
                                        Famous Algorithms Like Sorting,
                                        Dividing And Conquering
                                    </p>
                                    <div className="text-center mt-3 mb-2">
                                        <p className={`btn btn-primary ${styl.info}`}>
                                            Course Info
                                        </p>
                                    </div>
                                    <div className="course-icons text-black-50 d-flex justify-content-between align-items-center mb-3">
                                        <div className='d-flex align-items-center'>
                                            <PersonIcon />
                                            900
                                        </div>
                                        <div className='d-flex align-items-center'>
                                            <AttachMoneyIcon />
                                            50
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-sm-6">
                            <div className={styl.box_img}>
                                <div className={styl.course_img}>
                                    <div className={styl.ava}>
                                        <Image
                                            src={ava2}

                                            alt="Picture of the author"
                                        />
                                    </div>
                                    <Image
                                        src={course5}

                                        alt="Picture of the author"
                                    />
                                </div>
                                <div className={styl.course_cont}>
                                    <p className="m-0 fw-bold mt-2 fs-5">
                                        Data Structure And Algorithms
                                    </p>
                                    <p className="text-black-50 m-0 mt-1">
                                        Master The Art Of Data Strcuture And
                                        Famous Algorithms Like Sorting,
                                        Dividing And Conquering
                                    </p>
                                    <div className="text-center mt-3 mb-2">
                                        <p className={`btn btn-primary ${styl.info}`}>
                                            Course Info
                                        </p>
                                    </div>
                                    <div className="course-icons text-black-50 d-flex justify-content-between align-items-center mb-3">
                                        <div className='d-flex align-items-center'>
                                            <PersonIcon />
                                            900
                                        </div>
                                        <div className='d-flex align-items-center'>
                                            <AttachMoneyIcon />
                                            50
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-sm-6">
                            <div className={styl.box_img}>
                                <div className={styl.course_img}>
                                    <div className={styl.ava}>
                                        <Image
                                            src={ava1}

                                            alt="Picture of the author"
                                        />
                                    </div>
                                    <Image
                                        src={course5}

                                        alt="Picture of the author"
                                    />
                                </div>
                                <div className={styl.course_cont}>
                                    <p className="m-0 fw-bold mt-2 fs-5">
                                        Data Structure And Algorithms
                                    </p>
                                    <p className="text-black-50 m-0 mt-1">
                                        Master The Art Of Data Strcuture And
                                        Famous Algorithms Like Sorting,
                                        Dividing And Conquering
                                    </p>
                                    <div className="text-center mt-3 mb-2">
                                        <p className={`btn btn-primary ${styl.info}`}>
                                            Course Info
                                        </p>
                                    </div>
                                    <div className="course-icons text-black-50 d-flex justify-content-between align-items-center mb-3">
                                        <div className='d-flex align-items-center'>
                                            <PersonIcon />
                                            900
                                        </div>
                                        <div className='d-flex align-items-center'>
                                            <AttachMoneyIcon />
                                            50
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-sm-6">
                            <div className={styl.box_img}>
                                <div className={styl.course_img}>
                                    <div className={styl.ava}>
                                        <Image
                                            src={ava3}

                                            alt="Picture of the author"
                                        />
                                    </div>
                                    <Image
                                        src={course3}

                                        alt="Picture of the author"
                                    />
                                </div>
                                <div className={styl.course_cont}>
                                    <p className="m-0 fw-bold mt-2 fs-5">
                                        Data Structure And Algorithms
                                    </p>
                                    <p className="text-black-50 m-0 mt-1">
                                        Master The Art Of Data Strcuture And
                                        Famous Algorithms Like Sorting,
                                        Dividing And Conquering
                                    </p>
                                    <div className="text-center mt-3 mb-2">
                                        <p className={`btn btn-primary ${styl.info}`}>
                                            Course Info
                                        </p>
                                    </div>
                                    <div className="course-icons text-black-50 d-flex justify-content-between align-items-center mb-3">
                                        <div className='d-flex align-items-center'>
                                            <PersonIcon />
                                            900
                                        </div>
                                        <div className='d-flex align-items-center'>
                                            <AttachMoneyIcon />
                                            50
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-sm-6">
                            <div className={styl.box_img}>
                                <div className={styl.course_img}>
                                    <div className={styl.ava}>
                                        <Image
                                            src={ava3}

                                            alt="Picture of the author"
                                        />
                                    </div>
                                    <Image
                                        src={course2}

                                        alt="Picture of the author"
                                    />
                                </div>
                                <div className={styl.course_cont}>
                                    <p className="m-0 fw-bold mt-2 fs-5">
                                        Data Structure And Algorithms
                                    </p>
                                    <p className="text-black-50 m-0 mt-1">
                                        Master The Art Of Data Strcuture And
                                        Famous Algorithms Like Sorting,
                                        Dividing And Conquering
                                    </p>
                                    <div className="text-center mt-3 mb-2">
                                        <p className={`btn btn-primary ${styl.info}`}>
                                            Course Info
                                        </p>
                                    </div>
                                    <div className="course-icons text-black-50 d-flex justify-content-between align-items-center mb-3">
                                        <div className='d-flex align-items-center'>
                                            <PersonIcon />
                                            900
                                        </div>
                                        <div className='d-flex align-items-center'>
                                            <AttachMoneyIcon />
                                            50
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-sm-6">
                            <div className={styl.box_img}>
                                <div className={styl.course_img}>
                                    <div className={styl.ava}>
                                        <Image
                                            src={ava1}

                                            alt="Picture of the author"
                                        />
                                    </div>
                                    <Image
                                        src={course3}

                                        alt="Picture of the author"
                                    />
                                </div>
                                <div className={styl.course_cont}>
                                    <p className="m-0 fw-bold mt-2 fs-5">
                                        Data Structure And Algorithms
                                    </p>
                                    <p className="text-black-50 m-0 mt-1">
                                        Master The Art Of Data Strcuture And
                                        Famous Algorithms Like Sorting,
                                        Dividing And Conquering
                                    </p>
                                    <div className="text-center mt-3 mb-2">
                                        <p className={`btn btn-primary ${styl.info}`}>
                                            Course Info
                                        </p>
                                    </div>
                                    <div className="course-icons text-black-50 d-flex justify-content-between align-items-center mb-3">
                                        <div className='d-flex align-items-center'>
                                            <PersonIcon />
                                            900
                                        </div>
                                        <div className='d-flex align-items-center'>
                                            <AttachMoneyIcon />
                                            50
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-sm-6">
                            <div className={styl.box_img}>
                                <div className={styl.course_img}>
                                    <div className={styl.ava}>
                                        <Image
                                            src={ava3}

                                            alt="Picture of the author"
                                        />
                                    </div>
                                    <Image
                                        src={course4}

                                        alt="Picture of the author"
                                    />
                                </div>
                                <div className={styl.course_cont}>
                                    <p className="m-0 fw-bold mt-2 fs-5">
                                        Data Structure And Algorithms
                                    </p>
                                    <p className="text-black-50 m-0 mt-1">
                                        Master The Art Of Data Strcuture And
                                        Famous Algorithms Like Sorting,
                                        Dividing And Conquering
                                    </p>
                                    <div className="text-center mt-3 mb-2">
                                        <p className={`btn btn-primary ${styl.info}`}>
                                            Course Info
                                        </p>
                                    </div>
                                    <div className="course-icons text-black-50 d-flex justify-content-between align-items-center mb-3">
                                        <div className='d-flex align-items-center'>
                                            <PersonIcon />
                                            900
                                        </div>
                                        <div className='d-flex align-items-center'>
                                            <AttachMoneyIcon />
                                            50
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-sm-6">
                            <div className={styl.box_img}>
                                <div className={styl.course_img}>
                                    <div className={styl.ava}>
                                        <Image
                                            src={ava2}

                                            alt="Picture of the author"
                                        />
                                    </div>
                                    <Image
                                        src={course2}

                                        alt="Picture of the author"
                                    />
                                </div>
                                <div className={styl.course_cont}>
                                    <p className="m-0 fw-bold mt-2 fs-5">
                                        Data Structure And Algorithms
                                    </p>
                                    <p className="text-black-50 m-0 mt-1">
                                        Master The Art Of Data Strcuture And
                                        Famous Algorithms Like Sorting,
                                        Dividing And Conquering
                                    </p>
                                    <div className="text-center mt-3 mb-2">
                                        <p className={`btn btn-primary ${styl.info}`}>
                                            Course Info
                                        </p>
                                    </div>
                                    <div className="course-icons text-black-50 d-flex justify-content-between align-items-center mb-3">
                                        <div className='d-flex align-items-center'>
                                            <PersonIcon />
                                            900
                                        </div>
                                        <div className='d-flex align-items-center'>
                                            <AttachMoneyIcon />
                                            50
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

export default Courses;
