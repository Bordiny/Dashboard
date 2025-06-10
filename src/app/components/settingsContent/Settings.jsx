// "use client";
import React from 'react';
import styl from './settings.module.css';
import Navbar from '../navbar/Navbar';
import ChangeEmail from './ChangeEmail';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import StorageIcon from '@mui/icons-material/Storage';
const Settings = () => {

    return (
        <div>
            <div className="p-3">

                <div className={styl.main_content}>
                    <h2 className={styl.main_title}>Settings</h2>
                    <div className="container mt-4">
                        <div className="row">
                            <div className="col-xl-6 col-lg-12">
                                <div className={styl.box}>
                                    <div className={styl.site_control}>
                                        <h3 className="fw-bold">Site Control</h3>
                                        <p className="text-black-50">
                                            Control The Website If There Is
                                            Maintenance
                                        </p>
                                        <div className={styl.toggle_control + " mt-4"}>
                                            <div>
                                                <p className="m-0 fw-bold">
                                                    Website Control
                                                </p>
                                                <p className="text-black-50 m-0">
                                                    Open/Close Website And Type
                                                    The Reason
                                                </p>
                                            </div>
                                            <div className="form-check form-switch">
                                                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" style={{ width: "80px", height: "30px" }} />
                                            </div>
                                        </div>
                                        <div className={styl.form_floating}>
                                            <textarea className="form-control ideas" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: '100px' }} defaultValue={""} />
                                            <label htmlFor="floatingTextarea2">Close Message Content</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-12">
                                <div className={styl.box}>
                                    <div className={styl.general_info}>
                                        <h3 className="fw-bold">General Info</h3>
                                        <p className="text-black-50">
                                            General Information About Your
                                            Account
                                        </p>
                                        <form>
                                            <div className="mb-4 mt-4">
                                                <label htmlFor="exampleInputEmail1" className="form-label">First Name</label>
                                                <input type="text" className="form-control" id="exampleInputEmail1" placeholder="First Name" aria-describedby="emailHelp" autoComplete="off" />
                                            </div>
                                            <div className="mb-4">
                                                <label htmlFor="exampleInputPassword1" className="form-label">Last Name</label>
                                                <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Last Name" autoComplete="off" />
                                            </div>
                                            <div className="mb-4">
                                                <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
                                                <ChangeEmail />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-12">
                                <div className={styl.box}>
                                    <div className={styl.security_info}>
                                        <h3 className="fw-bold">Security Info</h3>
                                        <p className="text-black-50 mb-4">
                                            Security Information About Your
                                            Account
                                        </p>
                                        <div className={styl.sec_cont}>
                                            <div>
                                                <p className="fw-bold m-0">
                                                    Password
                                                </p>
                                                <p className="text-black-50 m-0 mt-2">
                                                    Last Change On 25/20/2021
                                                </p>
                                            </div>
                                            <button className="btn btn-primary">
                                                Change
                                            </button>
                                        </div>
                                        <div className={styl.sec_cont}>
                                            <div>
                                                <p className="fw-bold m-0">
                                                    Two-Factor Authentication
                                                </p>
                                                <p className="text-black-50 m-0 mt-2">
                                                    Enable/Disable The Feature
                                                </p>
                                            </div>
                                            <div className="form-check form-switch">
                                                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" defaultChecked style={{ width: '80px', height: '30px' }} />
                                            </div>
                                        </div>
                                        <div className={styl.sec_cont}>
                                            <div>
                                                <p className="fw-bold m-0">
                                                    Devices
                                                </p>
                                                <p className="text-black-50 m-0 mt-2">
                                                    Check The Login Devices List
                                                </p>
                                            </div>
                                            <button className="btn btn-secondary">
                                                Devices
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-12">
                                <div className={styl.box}>
                                    <div className={styl.social_info}>
                                        <h3 className="fw-bold">Social Info</h3>
                                        <p className="text-black-50 mb-4">
                                            Social Media Information
                                        </p>
                                        <div className="input-group flex-nowrap mt-3">
                                            <span className="input-group-text" id="addon-wrapping"><XIcon className="text-sky-500" /></span>
                                            <input type="text" className="form-control p-3" placeholder="X Username" aria-describedby="addon-wrapping" />
                                        </div>
                                        <div className="input-group flex-nowrap  mt-3">
                                            <span className="input-group-text" id="addon-wrapping"><FacebookIcon className="text-blue-800" /></span>
                                            <input type="text" className="form-control p-3" placeholder="Facebook Username" aria-describedby="addon-wrapping" />
                                        </div>
                                        <div className="input-group flex-nowrap  mt-3">
                                            <span className="input-group-text" id="addon-wrapping"><YouTubeIcon className="text-red-600" /></span>
                                            <input type="text" className="form-control p-3" placeholder="Youtube Username" aria-describedby="addon-wrapping" />
                                        </div>
                                        <div className="input-group flex-nowrap  mt-3">
                                            <span className="input-group-text" id="addon-wrapping"><LinkedInIcon className="text-blue-600" /></span>
                                            <input type="text" className="form-control p-3" placeholder="Linkedin Username" aria-describedby="addon-wrapping" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-12">
                                <div className={styl.box}>
                                    <div className={styl.widgets}>
                                        <h3 className="fw-bold">Widgets Control</h3>
                                        <p className="text-black-50 mb-4">
                                            Show/Hide Widgets
                                        </p>
                                        <div className={styl.form_check}>
                                            <input className="form-check-input" type="checkbox" defaultValue id="flexCheck1" defaultChecked />
                                            <label className="form-check-label" htmlFor="flexCheck1">
                                                Quick Draft
                                            </label>
                                        </div>
                                        <div className={styl.form_check}>
                                            <input className="form-check-input" type="checkbox" defaultValue id="flexCheck2" />
                                            <label className="form-check-label" htmlFor="flexCheck2">
                                                Yearly Targets
                                            </label>
                                        </div>
                                        <div className={styl.form_check}>
                                            <input className="form-check-input" type="checkbox" defaultValue id="flexCheck3" defaultChecked />
                                            <label className="form-check-label" htmlFor="flexCheck3">
                                                Tickets Statistics
                                            </label>
                                        </div>
                                        <div className={styl.form_check}>
                                            <input className="form-check-input" type="checkbox" defaultValue id="flexCheck4" defaultChecked />
                                            <label className="form-check-label" htmlFor="flexCheck4">
                                                Latest News
                                            </label>
                                        </div>
                                        <div className={styl.form_check}>
                                            <input className="form-check-input" type="checkbox" defaultValue id="flexCheck5" />
                                            <label className="form-check-label" htmlFor="flexCheck5">
                                                Latest Tasks
                                            </label>
                                        </div>
                                        <div className={styl.form_check}>
                                            <input className="form-check-input" type="checkbox" defaultValue id="flexCheck6" defaultChecked />
                                            <label className="form-check-label" htmlFor="flexCheck6">
                                                Top Search Items
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-12">
                                <div className={styl.box}>
                                    <div className={styl.backup}>
                                        <h3 className="fw-bold">Backup Manager</h3>
                                        <p className="text-black-50 mb-4">
                                            Control Backup Time And Location
                                        </p>
                                        <div className={styl.radios}>
                                            <div className={styl.form_check}>
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" defaultChecked />
                                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                    Daily
                                                </label>
                                            </div>
                                            <div className={styl.form_check}>
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                    Weekly
                                                </label>
                                            </div>
                                            <div className={styl.form_check}>
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                                                <label className="form-check-label" htmlFor="flexRadioDefault3">
                                                    Monthly
                                                </label>
                                            </div>
                                        </div>
                                        <div className={styl.radio_server}>
                                            <input type="radio" className="btn-check" name="options" id="option1" autoComplete="off" defaultChecked />
                                            <label className="btn btn-primary d-flex flex-column justify-content-center align-items-center" htmlFor="option1">
                                                <StorageIcon className="mb-2" />Alpha</label>
                                            <input type="radio" className="btn-check" name="options" id="option2" autoComplete="off" />
                                            <label className="btn btn-primary d-flex flex-column justify-content-center align-items-center" htmlFor="option2"> <StorageIcon className="mb-2" />Beta</label>
                                            <input type="radio" className="btn-check" name="options" id="option4" autoComplete="off" />
                                            <label className="btn btn-primary d-flex flex-column justify-content-center align-items-center" htmlFor="option4"> <StorageIcon className="mb-2" />Gama</label>
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

export default Settings;
