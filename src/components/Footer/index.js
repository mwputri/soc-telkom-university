import React from 'react';
import telu from 'assets/logo/Tel-U-Landscape-List-Putih.png';
import './index.css';

const footer = () => {
    return (
        <footer className="bg-footerBlack-100 sm:p-6 pb-4">
            <div className="md:flex md:justify-items-start md:ml-48 pt-5">
                <div className="mb-6 md:mb-0 md:mr-40">
                    <a href="https://flowbite.com/" className="flex items-center justify-center">
                        <img src={telu} className="mr-3 h-8 md:h-12" alt="Logo Telu Putih"/>


                    </a>
                </div>
                <div className="contactUsContainer">
                    <div>
                        <h2 className="mb-6 text-xl font-semibold text-white ">Contact Us</h2>
                        <ul className="text-white text-md">
                            Telkom University Landmark Tower (TULT) <br/>
                            Jl. Telekomunikasi No. 1, <br/>
                            Terusan Buahbatu, Bojongsoang <br/>
                            Bandung 40257, Indonesia <br/>
                            Tel: (022) 7565931 <br/>
                            Email: sekpimsoc@telkomuniversity.ac.id <br/>

                        </ul>
                    </div>
                    <div className={"md:pl-10"}>
                        <h2 className="mb-6 text-xl font-semibold text-white invisible">Contact Us</h2>
                        <ul className="text-white ">
                            <li className="mb-2">
                                <a href="/" className="hover:underline ">Tel-U</a>
                            </li>
                            <li className="mb-2">
                                <a href="/" className="hover:underline ">Careers</a>
                            </li>
                            <li className="mb-2">
                                <a href="/" className="hover:underline ">Aplying</a>
                            </li>
                            <li className="mb-2">
                                <a href="/" className="hover:underline ">Giving</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-xl font-semibold text-white invisible">Contact Us</h2>
                        <ul className="text-white">
                            <li className="mb-2">
                                <a href="#" className="hover:underline">3C (Computing Certification Center)</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="hover:underline">Research Center : Humic
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="hover:underline">Hall of Fame
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="hover:underline">SOC Press
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className="my-6 bg-white sm:mx-auto md:mx-40"/>
            <div className="sm:flex sm:items-center sm:justify-between md:mx-48">
                <span className="text-sm text-white sm:text-center ">
                    © Telkom University. All rights reserved.
                </span>
            </div>
        </footer>
    )
}

export default footer