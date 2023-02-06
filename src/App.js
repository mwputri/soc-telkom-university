import React, {useState, useEffect} from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import AboutUs from './pages/AboutUs/AboutUs'
import Civitas from './pages/Civitas/Civitas'
import LokasiKami from './pages/Lokasi-Kami/Lokasi-Kami'
import VisiMisi from './pages/VisiMisi/VisiMisi'
import Rencana from './pages/Rencana/Rencana'
import Sejarah from './pages/Sejarah/Sejarah'
import Fasilitas from './pages/Fasilitas/Fasilitas'
import data from 'assets/data/data.json'
import Footer from "./components/Footer/";

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
            <Navbar />
            <Routes>
                <Route path="/" element={<AboutUs/>}/>
                <Route path="/civitas" element={<Civitas data={lectureData} handleChange={handleSearch}/>}/>
                <Route path="/lokasi-Kami" element={<LokasiKami data={lectureData} handleChange={handleSearch}/>}/>
                <Route path="/visi-misi" element={<VisiMisi data={lectureData} handleChange={handleSearch}/>}/>
                <Route path="/rencana-strategis-fakultas-informatika" element={<Rencana data={lectureData} handleChange={handleSearch}/>}/>
                <Route path="/sejarah-fakultas-informatika" element={<Sejarah data={lectureData} handleChange={handleSearch}/>}/>
                <Route path="/fasilitas" element={<Fasilitas data={lectureData} handleChange={handleSearch}/>}/>
            </Routes>
            <Footer/>

        </div>
    );
}

export default App;
