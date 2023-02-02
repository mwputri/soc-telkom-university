import React from 'react';
import "./AboutUs.css"
import Welcome from "../../components/Home/welcome";
import Sambutan from "../../components/Home/sambutan";
import InfoGraphic from "../../components/Home/infoGraphic";
import HallOfFame from "../../components/Home/hallOfFame";
import PrestasiMahasiswa from "../../components/Home/prestasiMahasiswa";
import SocPress from "../../components/Home/socPress";
import Testimoni from "../../components/Home/testimoni";
import Kerjasama from "../../components/Home/kerjasama";


const AboutUs = () => {
    return (
        <div>
            <Welcome/>
            <Sambutan/>
            <InfoGraphic/>
            <HallOfFame/>
            <PrestasiMahasiswa/>
            <SocPress/>
            <Testimoni/>
            <Kerjasama/>
        </div>

    )
}

export default AboutUs