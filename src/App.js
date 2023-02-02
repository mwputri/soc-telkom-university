import React, {useState, useEffect} from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import AboutUs from './pages/AboutUs/AboutUs'
import Civitas from './pages/Civitas/Civitas'
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
            </Routes>
            <Footer/>

        </div>
    );
}

export default App;
