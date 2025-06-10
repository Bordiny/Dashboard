import React from 'react'
import styl from './files.module.css'

import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import AssignmentIcon from '@mui/icons-material/Assignment';
import DifferenceIcon from '@mui/icons-material/Difference';

import Image from 'next/image'
import DownloadingIcon from '@mui/icons-material/Downloading';

import pdf from '@/imgs/files/pdf.svg'
import eps from '@/imgs/files/eps.svg'
import dll from '@/imgs/files/dll.svg'
import zip from '@/imgs/files/zip.svg'
import avi from '@/imgs/files/avi.svg'
import psd from '@/imgs/files/psd.svg'
export default function Files() {
    return (
        <div className="main">

            <div className="p-3">
                <h2 className={styl.main_title}>Files</h2>
                <div className={styl.files}>
                    <div className={styl.files_control}>
                        <h4 className="fw-bold">Files Statistics</h4>
                        <div className={`${styl.files_nums} d-flex justify-content-between align-items-center p-2`}>
                            <div className="d-flex align-items-center">
                                <PictureAsPdfIcon />
                                <div>
                                    <p className="fw-bold m-0">PDF Files</p>
                                    <p className="text-black-50 m-0">130</p>
                                </div>
                            </div>
                            <p className="m-0 text-black-50">6.5GB</p>
                        </div>
                        <div className={`${styl.files_nums} d-flex justify-content-between align-items-center p-2`}>
                            <div className="d-flex align-items-center">
                                <PermMediaIcon style={{ color: '#22c55e', backgroundColor: '#d3f3df' }} />
                                <div>
                                    <p className="fw-bold m-0">Images Files</p>
                                    <p className="text-black-50 m-0">150</p>
                                </div>
                            </div>
                            <p className="m-0 text-black-50">5.5GB</p>
                        </div>
                        <div className={`${styl.files_nums} d-flex justify-content-between align-items-center p-2`}>
                            <div className="d-flex align-items-center">
                                <AssignmentIcon style={{ backgroundColor: 'rgb(253 217 215)', color: 'rgb(244 67 54)' }} />
                                <div>
                                    <p className="fw-bold m-0">Words Files</p>
                                    <p className="text-black-50 m-0">100</p>
                                </div>
                            </div>
                            <p className="m-0 text-black-50">3.5GB</p>
                        </div>
                        <div className={`${styl.files_nums} d-flex justify-content-between align-items-center p-2`}>
                            <div className="d-flex align-items-center">
                                <DifferenceIcon style={{ backgroundColor: '#fdecce', color: '#f59e0b' }} />
                                <div>
                                    <p className="fw-bold m-0">CSV Files</p>
                                    <p className="text-black-50 m-0">99</p>
                                </div>
                            </div>
                            <p className="m-0 text-black-50">2.5GB</p>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className={styl.files_data}>
                                    <DownloadingIcon />
                                    <div className="files-img text-center">
                                        <Image
                                            src={pdf}
                                            alt=""
                                        />
                                        <p className="mt-2">file.pdf</p>
                                    </div>
                                    <p className="text-black-50 text-capitalize pb-0">
                                        admin
                                    </p>
                                    <div className="files-data-foot d-flex justify-content-between align-items-center text-black-50">
                                        <p>16/5/2023</p>
                                        <p>5MB</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className={styl.files_data}>
                                    <DownloadingIcon />
                                    <div className="files-img text-center">
                                        <Image
                                            src={eps}
                                            alt=""
                                        />
                                        <p className="mt-2">file.eps</p>
                                    </div>
                                    <p className="text-black-50 text-capitalize pb-0">
                                        user
                                    </p>
                                    <div className="files-data-foot d-flex justify-content-between align-items-center text-black-50">
                                        <p>10/4/2023</p>
                                        <p>2.3MB</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className={styl.files_data}>
                                    <DownloadingIcon />
                                    <div className="files-img text-center">
                                        <Image
                                            src={dll}
                                            alt=""
                                        />
                                        <p className="mt-2">file.dll</p>
                                    </div>
                                    <p className="text-black-50 text-capitalize pb-0">
                                        Coder
                                    </p>
                                    <div className="files-data-foot d-flex justify-content-between align-items-center text-black-50">
                                        <p>30/9/2023</p>
                                        <p>9MB</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className={styl.files_data}>
                                    <DownloadingIcon />
                                    <div className="files-img text-center">
                                        <Image
                                            src={zip}
                                            alt=""
                                        />
                                        <p className="mt-2">file.zip</p>
                                    </div>
                                    <p className="text-black-50 text-capitalize pb-0">
                                        Designer
                                    </p>
                                    <div className="files-data-foot d-flex justify-content-between align-items-center text-black-50">
                                        <p>27/2/2023</p>
                                        <p>1.5MB</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className={styl.files_data}>
                                    <DownloadingIcon />
                                    <div className="files-img text-center">
                                        <Image
                                            src={pdf}
                                            alt=""
                                        />
                                        <p className="mt-2">file.pdf</p>
                                    </div>
                                    <p className="text-black-50 text-capitalize pb-0">
                                        admin
                                    </p>
                                    <div className="files-data-foot d-flex justify-content-between align-items-center text-black-50">
                                        <p>16/5/2023</p>
                                        <p>5MB</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className={styl.files_data}>
                                    <DownloadingIcon />
                                    <div className="files-img text-center">
                                        <Image
                                            src={eps}
                                            alt=""
                                        />
                                        <p className="mt-2">file.eps</p>
                                    </div>
                                    <p className="text-black-50 text-capitalize pb-0">
                                        user
                                    </p>
                                    <div className="files-data-foot d-flex justify-content-between align-items-center text-black-50">
                                        <p>10/4/2023</p>
                                        <p>2.3MB</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className={styl.files_data}>
                                    <DownloadingIcon />
                                    <div className="files-img text-center">
                                        <Image
                                            src={dll}
                                            alt=""
                                        />
                                        <p className="mt-2">file.dll</p>
                                    </div>
                                    <p className="text-black-50 text-capitalize pb-0">
                                        Coder
                                    </p>
                                    <div className="files-data-foot d-flex justify-content-between align-items-center text-black-50">
                                        <p>30/9/2023</p>
                                        <p>9MB</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className={styl.files_data}>
                                    <DownloadingIcon />
                                    <div className="files-img text-center">
                                        <Image
                                            src={zip}
                                            alt=""
                                        />
                                        <p className="mt-2">file.zip</p>
                                    </div>
                                    <p className="text-black-50 text-capitalize pb-0">
                                        Designer
                                    </p>
                                    <div className="files-data-foot d-flex justify-content-between align-items-center text-black-50">
                                        <p>27/2/2023</p>
                                        <p>1.5MB</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className={styl.files_data}>
                                    <DownloadingIcon />
                                    <div className="files-img text-center">
                                        <Image
                                            src={pdf}
                                            alt=""
                                        />
                                        <p className="mt-2">file.pdf</p>
                                    </div>
                                    <p className="text-black-50 text-capitalize pb-0">
                                        admin
                                    </p>
                                    <div className="files-data-foot d-flex justify-content-between align-items-center text-black-50">
                                        <p>16/5/2023</p>
                                        <p>5MB</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className={styl.files_data}>
                                    <DownloadingIcon />
                                    <div className="files-img text-center">
                                        <Image
                                            src={eps}
                                            alt=""
                                        />
                                        <p className="mt-2">file.eps</p>
                                    </div>
                                    <p className="text-black-50 text-capitalize pb-0">
                                        user
                                    </p>
                                    <div className="files-data-foot d-flex justify-content-between align-items-center text-black-50">
                                        <p>10/4/2023</p>
                                        <p>2.3MB</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className={styl.files_data}>
                                    <DownloadingIcon />
                                    <div className="files-img text-center">
                                        <Image
                                            src={dll}
                                            alt=""
                                        />
                                        <p className="mt-2">file.dll</p>
                                    </div>
                                    <p className="text-black-50 text-capitalize pb-0">
                                        Coder
                                    </p>
                                    <div className="files-data-foot d-flex justify-content-between align-items-center text-black-50">
                                        <p>30/9/2023</p>
                                        <p>9MB</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className={styl.files_data}>
                                    <DownloadingIcon />
                                    <div className="files-img text-center">
                                        <Image
                                            src={zip}
                                            alt=""
                                        />
                                        <p className="mt-2">file.zip</p>
                                    </div>
                                    <p className="text-black-50 text-capitalize pb-0">
                                        Designer
                                    </p>
                                    <div className="files-data-foot d-flex justify-content-between align-items-center text-black-50">
                                        <p>27/2/2023</p>
                                        <p>1.5MB</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className={styl.files_data}>
                                    <DownloadingIcon />
                                    <div className="files-img text-center">
                                        <Image
                                            src={pdf}
                                            alt=""
                                        />
                                        <p className="mt-2">file.pdf</p>
                                    </div>
                                    <p className="text-black-50 text-capitalize pb-0">
                                        admin
                                    </p>
                                    <div className="files-data-foot d-flex justify-content-between align-items-center text-black-50">
                                        <p>16/5/2023</p>
                                        <p>5MB</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className={styl.files_data}>
                                    <DownloadingIcon />
                                    <div className="files-img text-center">
                                        <Image
                                            src={eps}
                                            alt=""
                                        />
                                        <p className="mt-2">file.eps</p>
                                    </div>
                                    <p className="text-black-50 text-capitalize pb-0">
                                        user
                                    </p>
                                    <div className="files-data-foot d-flex justify-content-between align-items-center text-black-50">
                                        <p>10/4/2023</p>
                                        <p>2.3MB</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className={styl.files_data}>
                                    <DownloadingIcon />
                                    <div className="files-img text-center">
                                        <Image
                                            src={dll}
                                            alt=""
                                        />
                                        <p className="mt-2">file.dll</p>
                                    </div>
                                    <p className="text-black-50 text-capitalize pb-0">
                                        Coder
                                    </p>
                                    <div className="files-data-foot d-flex justify-content-between align-items-center text-black-50">
                                        <p>30/9/2023</p>
                                        <p>9MB</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className={styl.files_data}>
                                    <DownloadingIcon />
                                    <div className="files-img text-center">
                                        <Image
                                            src={zip}
                                            alt=""
                                        />
                                        <p className="mt-2">file.zip</p>
                                    </div>
                                    <p className="text-black-50 text-capitalize pb-0">
                                        Designer
                                    </p>
                                    <div className="files-data-foot d-flex justify-content-between align-items-center text-black-50">
                                        <p>27/2/2023</p>
                                        <p>1.5MB</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className={styl.files_data}>
                                    <DownloadingIcon />
                                    <div className="files-img text-center">
                                        <Image
                                            src={pdf}
                                            alt=""
                                        />
                                        <p className="mt-2">file.pdf</p>
                                    </div>
                                    <p className="text-black-50 text-capitalize pb-0">
                                        admin
                                    </p>
                                    <div className="files-data-foot d-flex justify-content-between align-items-center text-black-50">
                                        <p>16/5/2023</p>
                                        <p>5MB</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className={styl.files_data}>
                                    <DownloadingIcon />
                                    <div className="files-img text-center">
                                        <Image
                                            src={eps}
                                            alt=""
                                        />
                                        <p className="mt-2">file.eps</p>
                                    </div>
                                    <p className="text-black-50 text-capitalize pb-0">
                                        user
                                    </p>
                                    <div className="files-data-foot d-flex justify-content-between align-items-center text-black-50">
                                        <p>10/4/2023</p>
                                        <p>2.3MB</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className={styl.files_data}>
                                    <DownloadingIcon />
                                    <div className="files-img text-center">
                                        <Image
                                            src={dll}
                                            alt=""
                                        />
                                        <p className="mt-2">file.dll</p>
                                    </div>
                                    <p className="text-black-50 text-capitalize pb-0">
                                        Coder
                                    </p>
                                    <div className="files-data-foot d-flex justify-content-between align-items-center text-black-50">
                                        <p>30/9/2023</p>
                                        <p>9MB</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className={styl.files_data}>
                                    <DownloadingIcon />
                                    <div className="files-img text-center">
                                        <Image
                                            src={zip}
                                            alt=""
                                        />
                                        <p className="mt-2">file.zip</p>
                                    </div>
                                    <p className="text-black-50 text-capitalize pb-0">
                                        Designer
                                    </p>
                                    <div className="files-data-foot d-flex justify-content-between align-items-center text-black-50">
                                        <p>27/2/2023</p>
                                        <p>1.5MB</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
