import React, {useEffect, useState} from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import AboutUs from './pages/AboutUs/AboutUs'
import Dosen from './pages/Dosen/Dosen'
import LokasiKami from './pages/Lokasi-Kami/Lokasi-Kami'
import VisiMisi from './pages/VisiMisi/VisiMisi'
import Rencana from './pages/Rencana/Rencana'
import Sejarah from './pages/Sejarah/Sejarah'
import Fasilitas from './pages/Fasilitas/Fasilitas'
import data from 'assets/data/data.json'
import Footer from "./components/Footer/";
import LabRiset from './pages/Lab-Riset/Lab-Riset'
import PrestasiMahasiswa from './pages/Prestasi-Mahasiswa/Prestasi-Mahasiswa'
import PrestasiDosen from './pages/Prestasi-Dosen/Prestasi-Dosen'
import StaffAdministrasi from 'pages/Staff-Administrasi/Staff-Administrasi';
<<<<<<< HEAD
import rpmDS from './pages/Pengabdian-Masyarakat/rpm/rpm-ds/rpm-ds'
import rpmSE from './pages/Pengabdian-Masyarakat/rpm/rpm-se/rpm-se'
import DataPD from 'assets/data/pd.json'
import DataPM from 'assets/data/pm.json'
import DataSA from 'assets/data/sa.json'
=======
>>>>>>> 3378baf72d08f3a6c70ac07ecc81064bf241a354

function App() {
    const [lectureData, setLectureData] = useState();
    const handleSearch = e => {
        const res = data
            .filter((x) => x.NAMA_LENGKAP.toLowerCase().includes(e.target.value.toLowerCase()) || x.KODE_DOSEN?.toLowerCase().includes(e.target.value.toLowerCase()))
            .map(c => c)
        setLectureData(res)
    };

    useEffect(() => {
        setLectureData(data)
    }, [])

    return (
        <div className="App">
            <Navbar/>
            <Routes>
                <Route path="/" element={<AboutUs/>}/>
                <Route path="/Dosen" element={<Dosen data={lectureData} handleChange={handleSearch}/>}/>
                <Route path="/lokasi-Kami" element={<LokasiKami data={lectureData} handleChange={handleSearch}/>}/>
                <Route path="/visi-misi" element={<VisiMisi data={lectureData} handleChange={handleSearch}/>}/>
                <Route path="/rencana-strategis-fakultas-informatika"
                       element={<Rencana data={lectureData} handleChange={handleSearch}/>}/>
                <Route path="/sejarah-fakultas-informatika"
                       element={<Sejarah data={lectureData} handleChange={handleSearch}/>}/>
                <Route path="/fasilitas" element={<Fasilitas data={lectureData} handleChange={handleSearch}/>}/>
                <Route path="/Lab-Riset" element={<LabRiset data={lectureData} handleChange={handleSearch}/>}/>
<<<<<<< HEAD
                <Route path="/Prestasi-Mahasiswa" element={<PrestasiMahasiswa data={lectureData} handleChange={handleSearch}/>}/>
                <Route path="/Prestasi-Dosen" element={<PrestasiDosen data={lectureData} handleChange={handleSearch}/>}/>
                <Route path="/rpm-ds" element={<rpmDS data={lectureData} handleChange={handleSearch}/>}/>
                <Route path="/rpm-se" element={<rpmSE data={lectureData} handleChange={handleSearch}/>}/>
=======
                <Route path="/Prestasi-Mahasiswa"
                       element={<PrestasiMahasiswa data={lectureData} handleChange={handleSearch}/>}/>
                <Route path="/Prestasi-Dosen"
                       element={<PrestasiDosen data={lectureData} handleChange={handleSearch}/>}/>
                <Route path="/Staff-Administrasi"
                       element={<StaffAdministrasi data={lectureData} handleChange={handleSearch}/>}/>
>>>>>>> 3378baf72d08f3a6c70ac07ecc81064bf241a354
            </Routes>
            <Footer/>

        </div>
    );
}

export default App;
