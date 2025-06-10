"use client";
import React, { useEffect } from 'react';
import Navbar from '../navbar/Navbar';
import styl from './projects.module.css'
import ava1 from '@/imgs/avatar/ava.png';
import ava2 from '@/imgs/avatar/ava3.png';
import ava3 from '@/imgs/avatar/ava4.jpg';
import Image from 'next/image'

const Projects = () => {
    useEffect(() => {
        let prog = document.querySelectorAll(".color-prog");
        prog.forEach((element) => {
            if (element.dataset.values > 0 && element.dataset.values < 50) {
                element.style.cssText = `
		background-color: #f44336;
		width: ${element.dataset.values}%;
		height: 100%;
		`;
                element.parentElement.nextElementSibling.style.color = "#f44336";
            } else if (element.dataset.values == 100) {
                element.style.cssText = `
		background-color: #22c55e;
		width: ${element.dataset.values}%;
		height: 100%;
		`;
                element.parentElement.nextElementSibling.style.color = "#22c55e";
            } else if (element.dataset.values >= 50 && element.dataset.values < 100) {
                element.style.cssText = `
		background-color: #0075ff;
		width: ${element.dataset.values}%;
		height: 100%;
		`;
                element.parentElement.nextElementSibling.style.color = "#0075ff";
            }
        });
    }, [])
    return (
        <div>
            <div className="main">
                <div className="p-4">
                    <h2 className={styl.main_title}>Projects</h2>
                    <div className="container mt-3">
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <div className={`${styl.project_box}`}>
                                    <div className={`${styl.project_head} d-flex justify-content-between align-items-center`}>
                                        <p className="fw-bold fs-5">
                                            Elbordiny Dashboard
                                        </p>
                                        <p className="date  text-sky-600">
                                            15/10/2023
                                        </p>
                                    </div>
                                    <p className="text-black-50" style={{ fontSize: '14px' }}>
                                        Elbordiny Dashboard Project Design And
                                        Programming And Hosting
                                    </p>
                                    <div className={styl.project_imgs}>
                                        <Image
                                            src={ava1}
                                            alt="Picture of the author"
                                        />
                                        <Image
                                            src={ava2}
                                            alt="Picture of the author"
                                        />
                                        <Image
                                            src={ava3}
                                            alt="Picture of the author"
                                        />
                                        <Image
                                            src={ava1}
                                            alt="Picture of the author"
                                        />
                                        <Image
                                            src={ava3}
                                            alt="Picture of the author"
                                        />
                                    </div>
                                    <div className={styl.project_skills}>
                                        <p>Programming</p>
                                        <p>Design</p>
                                        <p>Hosting</p>
                                        <p>Marketing</p>
                                    </div>
                                    <div className={`${styl.project_progress} d-flex justify-content-between align-items-center mt-3`}>
                                        <div className={styl.project_skill_prog}>
                                            <div className="color-prog" data-values={100} />
                                        </div>
                                        <p className="price fw-bold m-0">2500 $</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className={styl.project_box}>
                                    <div className={`${styl.project_head} d-flex justify-content-between align-items-center`}>
                                        <p className="fw-bold fs-5">
                                            Academy Portal
                                        </p>
                                        <p className="date  text-sky-600">
                                            11/6/2023
                                        </p>
                                    </div>
                                    <p className="text-black-50" style={{ fontSize: '14px' }}>
                                        Academy Portal Project Design And
                                        Programming
                                    </p>
                                    <div className={styl.project_imgs}>
                                        <Image
                                            src={ava1}
                                            alt="Picture of the author"
                                        />
                                        <Image
                                            src={ava2}
                                            alt="Picture of the author"
                                        />
                                        <Image
                                            src={ava3}
                                            alt="Picture of the author"
                                        />

                                    </div>
                                    <div className={styl.project_skills}>
                                        <p>Programming</p>
                                        <p>Design</p>
                                    </div>
                                    <div className={`${styl.project_progress} d-flex justify-content-between align-items-center mt-3`}>
                                        <div className={styl.project_skill_prog}>
                                            <div className="color-prog" data-values={20} />
                                        </div>
                                        <p className="price fw-bold m-0">800 $</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className={styl.project_box}>
                                    <div className={`${styl.project_head} d-flex justify-content-between align-items-center`}>
                                        <p className="fw-bold fs-5">
                                            Chatting Application
                                        </p>
                                        <p className="date  text-sky-600">
                                            27/02/2023
                                        </p>
                                    </div>
                                    <p className="text-black-50" style={{ fontSize: '14px' }}>
                                        Chatting Application Project Design
                                    </p>
                                    <div className={styl.project_imgs}>
                                        <Image
                                            src={ava1}
                                            alt="Picture of the author"
                                        />
                                        <Image
                                            src={ava2}
                                            alt="Picture of the author"
                                        />

                                    </div>
                                    <div className={styl.project_skills}>
                                        <p>Programming</p>
                                    </div>
                                    <div className={`${styl.project_progress} d-flex justify-content-between align-items-center mt-3`}>
                                        <div className={styl.project_skill_prog}>
                                            <div className="color-prog" data-values={35} />
                                        </div>
                                        <p className="price fw-bold m-0">1000 $</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className={styl.project_box}>
                                    <div className={`${styl.project_head} d-flex justify-content-between align-items-center`}>
                                        <p className="fw-bold fs-5">
                                            Ahmed Dashboard
                                        </p>
                                        <p className="date  text-sky-600">
                                            30/09/2023
                                        </p>
                                    </div>
                                    <p className="text-black-50" style={{ fontSize: '14px' }}>
                                        Ahmed Dashboard Project Design And
                                        Programming And Hosting
                                    </p>
                                    <div className={styl.project_imgs}>
                                        <Image
                                            src={ava1}
                                            alt="Picture of the author"
                                        />
                                        <Image
                                            src={ava2}
                                            alt="Picture of the author"
                                        />
                                        <Image
                                            src={ava3}
                                            alt="Picture of the author"
                                        />
                                        <Image
                                            src={ava1}
                                            alt="Picture of the author"
                                        />

                                    </div>
                                    <div className={styl.project_skills}>
                                        <p>Programming</p>
                                        <p>Design</p>
                                        <p>Hosting</p>
                                        <p>Marketing</p>
                                    </div>
                                    <div className={`${styl.project_progress} d-flex justify-content-between align-items-center mt-3`}>
                                        <div className={styl.project_skill_prog}>
                                            <div className="color-prog" data-values={70} />
                                        </div>
                                        <p className="price fw-bold m-0">2300 $</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className={styl.project_box}>
                                    <div className={`${styl.project_head} d-flex justify-content-between align-items-center`}>
                                        <p className="fw-bold fs-5">Ahmed Portal</p>
                                        <p className="date  text-sky-600">
                                            25/06/2023
                                        </p>
                                    </div>
                                    <p className="text-black-50" style={{ fontSize: '14px' }}>
                                        Ahmed Portal Project Design And
                                        Programming
                                    </p>
                                    <div className={styl.project_imgs}>
                                        <Image
                                            src={ava1}
                                            alt="Picture of the author"
                                        />
                                        <Image
                                            src={ava2}
                                            alt="Picture of the author"
                                        />

                                    </div>
                                    <div className={styl.project_skills}>
                                        <p>Programming</p>
                                        <p>Marketing</p>
                                    </div>
                                    <div className={`${styl.project_progress} d-flex justify-content-between align-items-center mt-3`}>
                                        <div className={styl.project_skill_prog}>
                                            <div className="color-prog" data-values={90} />
                                        </div>
                                        <p className="price fw-bold m-0">2200 $</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className={styl.project_box}>
                                    <div className={`${styl.project_head} d-flex justify-content-between align-items-center`}>
                                        <p className="fw-bold fs-5">
                                            Ahmed Application
                                        </p>
                                        <p className="date  text-sky-600">
                                            05/06/2023
                                        </p>
                                    </div>
                                    <p className="text-black-50" style={{ fontSize: '14px' }}>
                                        Ahmed Application Project Design
                                    </p>
                                    <div className={styl.project_imgs}>
                                        <Image
                                            src={ava1}
                                            alt="Picture of the author"
                                        />
                                        <Image
                                            src={ava2}
                                            alt="Picture of the author"
                                        />
                                        <Image
                                            src={ava3}
                                            alt="Picture of the author"
                                        />

                                    </div>
                                    <div className={styl.project_skills}>
                                        <p>Programming</p>
                                        <p>Design</p>
                                        <p>Hosting</p>
                                        <p>Marketing</p>
                                    </div>
                                    <div className={`${styl.project_progress} d-flex justify-content-between align-items-center mt-3`}>
                                        <div className={styl.project_skill_prog}>
                                            <div className="color-prog" data-values={100} />
                                        </div>
                                        <p className="price fw-bold m-0">3500 $</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className={styl.project_box}>
                                    <div className={`${styl.project_head} d-flex justify-content-between align-items-center`}>
                                        <p className="fw-bold fs-5">
                                            Elbordiny Dashboard
                                        </p>
                                        <p className="date  text-sky-600">
                                            15/10/2023
                                        </p>
                                    </div>
                                    <p className="text-black-50" style={{ fontSize: '14px' }}>
                                        Elbordiny Dashboard Project Design And
                                        Programming And Hosting
                                    </p>
                                    <div className={styl.project_imgs}>
                                        <Image
                                            src={ava1}
                                            alt="Picture of the author"
                                        />
                                        <Image
                                            src={ava2}
                                            alt="Picture of the author"
                                        />
                                        <Image
                                            src={ava3}
                                            alt="Picture of the author"
                                        />
                                        <Image
                                            src={ava1}
                                            alt="Picture of the author"
                                        />

                                    </div>
                                    <div className={styl.project_skills}>
                                        <p>Programming</p>
                                    </div>
                                    <div className={`${styl.project_progress} d-flex justify-content-between align-items-center mt-3`}>
                                        <div className={styl.project_skill_prog}>
                                            <div className="color-prog" data-values={40} />
                                        </div>
                                        <p className="price fw-bold m-0">500 $</p>
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

export default Projects;
