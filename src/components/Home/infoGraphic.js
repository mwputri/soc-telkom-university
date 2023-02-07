import React from 'react';

import tult from "assets/img/tult.webp"

const InfoGraphic = () => {


    return (<>
        <figure
            className="relative w-full h-auto ">
            <a href="#">
                <img className="w-full"
                     src={tult}
                     alt="image description"/>
            </a>
            <figcaption className="absolute text-white top-0 w-full h-full flex flex-col items-center pt-10 lg:pt-60">
                <p className="text-base lg:text-5xl ">Fakta Fakultas Informatika
                </p>

                <ol className="flex flex-wrap lg:flex-nowrap items-center space-y-1 lg:space-y-4 lg:space-x-8 lg:space-y-0 text-white pt-6 lg:pt-44 ">
                    <li className="flex w-1/2 lg:w-auto items-center justify-center lg:px-4 lg:pt-5">
                        <span>
                            <h3 className="text-base lg:text-5xl leading-tight">141</h3>
                            <p className="text-sm lg:text-2xl">Dosen</p>
                        </span>
                    </li>
                    <li className="flex w-1/2 lg:w-auto items-center justify-center lg:px-4 lg:pt-5">

                        <span>
                            <h3 className="text-base lg:text-5xl leading-tight">8</h3>
                            <p className="text-sm lg:text-2xl ">Program Studi</p>
                        </span>
                    </li>
                    <li className="flex w-1/2 lg:w-auto items-center justify-center lg:px-4 lg:pt-5">

                        <span>
                            <h3 className="text-base lg:text-5xl leading-tight">23</h3>
                            <p className="text-sm lg:text-2xl">Laboratorium</p>
                        </span>
                    </li>
                    <li className="flex w-1/2 lg:w-auto items-center justify-center lg:px-4 lg:pt-5">

                        <span>
                            <h3 className="text-base lg:text-5xl leading-tight">4</h3>
                            <p className="text-sm lg:text-2xl">Kelompok Keahlian</p>
                        </span>
                    </li>
                </ol>

            </figcaption>
        </figure>
    </>)
}


export default InfoGraphic