import React, {useState, useEffect} from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import AboutUs from './pages/AboutUs/AboutUs'
import Dosen from './pages/Dosen/Dosen'
import LokasiKami from './pages/Lokasi-Kami/Lokasi-Kami'
import VisiMisi from './pages/VisiMisi/VisiMisi'
import Rencana from './pages/Rencana/Rencana'
import Sejarah from './pages/Sejarah/Sejarah'
import Fasilitas from './pages/Fasilitas/Fasilitas'
import Footer from "./components/Footer/";
import LabRiset from './pages/Lab-Riset/Lab-Riset'
import PrestasiMahasiswa from './pages/Prestasi-Mahasiswa/Prestasi-Mahasiswa'
import PrestasiDosen from './pages/Prestasi-Dosen/Prestasi-Dosen'
import StaffAdministrasi from 'pages/Staff-Administrasi/Staff-Administrasi';

import data from 'assets/data/data.json'
import DataPD from 'assets/data/pd.json'
import DataPM from 'assets/data/pm.json'
import DataSA from 'assets/data/sa.json'


function App() {
    const [lectureData, setLectureData] = useState();
    const [lecturerachievement,  setlecturerachievement] = useState();
    const [studentachievement,  Setstudentachievement] = useState();
    const [administrativestaff,  Setadministrativestaff] = useState();
    const handleSearch = e => {
        const res = data
            .filter((x) => x.NAMA_LENGKAP.toLowerCase().includes(e.target.value.toLowerCase()) || x.KODE_DOSEN?.toLowerCase().includes(e.target.value.toLowerCase()))
            .map(c => c)
        setLectureData(res)
    };

    useEffect(() => {
        setLectureData(data)
        setlecturerachievement(prestasidosen)  
        Setstudentachievement(prestasimahasiswa)
        Setadministrativestaff(staffadmin)
    }, [])

    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={<AboutUs/>}/>
                <Route path="/Dosen" element={<Dosen data={lectureData} handleChange={handleSearch}/>}/>
                <Route path="/lokasi-Kami" element={<LokasiKami />}/>
                <Route path="/visi-misi" element={<VisiMisi />}/>
                <Route path="/rencana-strategis-fakultas-informatika" element={<Rencana/>}/>
                <Route path="/sejarah-fakultas-informatika" element={<Sejarah/>}/>
                <Route path="/fasilitas" element={<Fasilitas/>}/>
                <Route path="/struktur-organisasi" element={<StrukturOrganisasi/>}/>
                <Route path="/Lab-Riset" element={<LabRiset data={lectureData} handleChange={handleSearch}/>}/>
                <Route path="/Prestasi-Mahasiswa" element={<PrestasiMahasiswa data={studentachievement} handleChange={handleSearch}/>}/>
                <Route path="/Prestasi-Dosen" element={<PrestasiDosen data={lecturerachievement} handleChange={handleSearch}/>}/>
                <Route path="/Staff-Administrasi" element={<StaffAdministrasi data={administrativestaff} handleChange={handleSearch}/>}/>
            </Routes>
            <Footer/>

        </div>
    );
}

export default App;
