import React from 'react';
import AliceCarousel from "react-alice-carousel";

import k1 from "assets/img/kerjasama/1.webp"
import k2 from "assets/img/kerjasama/2.webp"
import k3 from "assets/img/kerjasama/3.webp"
import k4 from "assets/img/kerjasama/4.webp"
import k5 from "assets/img/kerjasama/5.webp"
import k6 from "assets/img/kerjasama/6.webp"
import k7 from "assets/img/kerjasama/7.webp"
import k8 from "assets/img/kerjasama/8.webp"
import k9 from "assets/img/kerjasama/9.webp"
import k10 from "assets/img/kerjasama/10.webp"
import k11 from "assets/img/kerjasama/11.webp"
import k12 from "assets/img/kerjasama/12.webp"
import k13 from "assets/img/kerjasama/13.webp"
import k14 from "assets/img/kerjasama/14.webp"
import k15 from "assets/img/kerjasama/15.webp"
import k16 from "assets/img/kerjasama/16.webp"
import k17 from "assets/img/kerjasama/17.webp"
import k18 from "assets/img/kerjasama/18.webp"

import akademik from "assets/img/layanan/akademik-1.webp"
import lab from "assets/img/layanan/lab-1.webp"
import sdm from "assets/img/layanan/sdm.webp"
import kemahasiswaan from "assets/img/layanan/kemahasiswaan-1.webp"
import sekretariat from "assets/img/layanan/sekretariat-1.webp"


const Kerjasama = () => {
    let items = []
    const Listitems = [
        k1,
        k2,
        k3,
        k4,
        k5,
        k6,
        k7,
        k8,
        k9,
        k10,
        k11,
        k12,
        k13,
        k14,
        k15,
        k16,
        k17,
        k18,
    ]
    let itemsLayanan = []
    const Layanan = [
        akademik,
        lab,
        sdm,
        kemahasiswaan,
        sekretariat,

    ]

    const responsive = {
        0: {items: 1},
        568: {items: 1},
        1024: {items: 1},
    };


    const matchesWindow = window.matchMedia("(min-width: 600px)").matches
    const matchesMobile = window.matchMedia("(max-width: 600px)").matches

    if (matchesMobile) {
        for (let i = 0; i < Listitems.length; i++) {
            items.push(
                <img
                    key={"fotolayananMobile-" + i}
                    className={"w-full pl-10 pr-10"}
                    src={Listitems[i]}
                    alt="logo"/>
            )
        }

        for (let i = 0; i < Layanan.length; i++) {
            itemsLayanan.push(
                <img
                    key={"fotolayanan-" + i}
                    className={"w-full pl-10 pr-10"}
                    src={Layanan[i]}
                    alt="logo"/>
            )
        }
    }
    return (
        <div className="">
            <p className="text-4xl font-bold pt-5 pb-2 md:pb-10">Kerjasama

            </p>

            <div className="md:mx-72">

                <div className="flex  mt-0 pb-2 md:pb-10">
                    {
                        matchesMobile &&
                        <AliceCarousel
                            autoPlay
                            autoPlayStrategy="none"
                            autoPlayInterval={4000}
                            animationDuration={1000}
                            animationType="fadeout"
                            infinite
                            mouseTracking
                            items={items}
                            responsive={responsive}
                            disableSlideInfo={true}
                            disableDotsControls
                            controlsStrategy={"responsive"}
                            disableButtonsControls
                        />
                    }
                    {
                        matchesWindow &&
                        <div className="m-auto columns-6  ">

                            {Listitems.map((data, i) => {
                                return (
                                    <img className="w-44 h-40 " src={data} alt="" key={"Kerjasama1" + i}/>
                                )
                            })}

                        </div>
                    }


                </div>
            </div>
            <p className="text-4xl font-bold pb-5 md:pt-10">Layanan
            </p>
            <div className="md:mx-72">

                <div className="flex   mt-0 pb-10">
                    {
                        matchesMobile &&
                        <AliceCarousel
                            autoPlay
                            autoPlayStrategy="none"
                            autoPlayInterval={4000}
                            animationDuration={1000}
                            animationType="fadeout"
                            infinite
                            mouseTracking
                            items={itemsLayanan}
                            responsive={responsive}
                            disableSlideInfo={true}
                            disableDotsControls
                            controlsStrategy={"responsive"}
                            disableButtonsControls
                        />
                    }
                    {
                        matchesWindow &&
                        <div className="m-auto  columns-5  ">
                            {Layanan.map((data, i) => {
                                return (
                                    <img className="" src={data} alt="" key={"fotolayananMobilei-" + i}
                                    />
                                )
                            })}

                        </div>
                    }

                </div>
            </div>

        </div>
    )
}

export default Kerjasama