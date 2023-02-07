import React from "react";
import img1 from "../../assets/img/DSC_0650-scaled.webp";
import dekan1 from "../../assets/img/dekan/dekan1.webp";
import dekan2 from "../../assets/img/dekan/dekan2.webp";
import dekan3 from "../../assets/img/dekan/dekan3.webp";
import dekan4 from "../../assets/img/dekan/dekan4.webp";
import dekan5 from "../../assets/img/dekan/dekan5.webp";

import "./Sejarah.css";

const Sejarah = () => {
    return (
        <div>
            <div className="p-lg-5" style={{overflowX: "auto"}}>
                <div className="container sejarah">
                    <img className="sejarah" src={img1} alt="image description"/>
                    <br></br>
                    <div className="content-sejarah">
            <span>
              Fakultas Informatika berawal dari program studi S1 Teknik
              Informatika yang berada dibawah Sekolah Tinggi Teknologi Telkom
              (STT Telkom) yang berdiri pada tahun 1992. Departemen Informatika
              berubah menjadi Fakultas Informatika pada saat STT Telkom berubah
              menjadi Institut Teknologi Telkom (IT Telkom) pada tahun 2007.
              Telkom University berdiri pada tahun 2013 dengan Informatika
              sebagai salah satu Fakultas di dalamnya. Fakultas Informatika
              terdiri dari lima prodi yaitu Prodi S1 Teknik Informatika, S1
              Teknologi Informasi, S1 Rekayasa Perangkat Lunak, S1 PJJ
              Informatika dan S2 Teknik Informatika. Gabungan kelima prodi
              merupakan suatu tantangan dalam hal penyatuan sistem pengelolaan
              dan penyamaan budaya. Disamping tantangan seperti disebutkan
              diatas, kelima prodi memiliki sejumlah kesamaan dan kelebihan yang
              merupakan modal bersama untuk dapat dipadukan menjadi bahan
              pengembangan Fakultas Informatika.<br></br> Pengembangan Fakultas
              Informatika merupakan bagian dari peningkatan kualitas pendidikan
              nasional yang merupakan salah satu usaha untuk mendukung
              ketercapaian Masterplan Percepatan dan Perluasan Pembangunan
              Ekonomi Indonesia 2011-2025(MP3EI) dalam menciptakan generasi
              bangsa yang memiliki kompetensi untuk bersaing dengan bangsa lain.
              Serta mendukung Rencana Strategis Universitas Telkom dalam rangka
              mencapai Visi untuk menjadi perguruan tinggi berkelas dunia yang
              berperan aktif dalam pengembangan ilmu pengetahuan dan seni
              berbasis teknologi informasi dengan empat tahap yaitu: governance
              excellence, academic management excellence, academic resources
              excellence, dan academic quality excellence, sejalan dengan itu
              Fakultas Informatika bertekad menjadi fakultas berkelas dunia yang
              unggul dalam pendidikan, penelitian, dan kewirausahaan bidang
              informatika dan komputer yang bermanfaat untuk masyarakat dan
              berperan aktif dalam meningkatkan daya saing bangsa pada tahun
              2023.<br></br> Fakultas Informatika merupakan salah satu dari
              tujuh Fakultas yang berada dalam lingkungan Universitas Telkom
              dengan fokus keilmuan dalam bidang Informatika/Computing yang
              merupakan back-bone bagi bidang ICT (Information and Communication
              Technology). Dalam perkembangan ICT pada akhirnya semua bentuk
              Informasi yang dikirimkan (Data, Suara, Siaran Televisi, Radio)
              akan berbentuk Digital dan berbasis IP. Pertumbuhan pengguna
              Internet dan mobile subscriber merupakan indikasi bahwa bidang ICT
              akan menjadi sunrise dalam era globalisasi.<br></br> Fakultas
              Informatika menetapkan 5 tahapan dalam Rencana Startegis Tahun
              2019-2023 yang meliputi: digital learning ecosystem, academic
              excellence, research excellence, national entrepreneurial
              excellence, dan global entrepreneurial excellence. Setiap tahapan
              akan dilandaskan pada tata nilai Universitas Telkom yaitu Harmony,
              Excellent Integrity (HEI) untuk menjamin pondasi yang kokoh dalam
              mewujudkan visi Fakultas Informatika tahun 2023.
            </span>
                    </div>
                    <div className="dekan-sejarah">
                        <h2>Sejarah Dekan Fakultas Informatika</h2>
                        <div className="row-sejarah">
                            <div className="col-sejarah">
                                <img className="dekan" src={dekan1} alt=""/>
                                <h4>
                                    <strong>Dr. Z.K. Abdurahman Baizal, S.Si., M.Kom</strong>
                                </h4>
                                <p>( Periode 1 Des 2019-Sekarang)</p>
                            </div>
                            <div className="col-sejarah">
                                <img className="dekan" src={dekan2} alt=""/>
                                <h4>
                                    <strong>Prof. Dr. Maman Abdurohman, S.T., M.T</strong>
                                </h4>
                                <p>( Periode 2014-2019)</p>
                            </div>
                            <div className="col-sejarah">
                                <img className="dekan" src={dekan3} alt=""/>
                                <h4>
                                    <strong>Ir. Sri Widowati., M.T</strong>
                                </h4>
                                <p>( Periode 2010-2013)</p>
                            </div>
                            <div className="col-sejarah">
                                <img className="dekan" src={dekan4} alt=""/>
                                <h4>
                                    <strong>Fazmah Arif Yilianto, S.T., M.T</strong>
                                </h4>
                                <p>
                                    (2008 – 2009 : Ketua Departemen Teknik Informatika, ITTelkom)
                                    <br></br>(2009 – 2010 : Dekan Fakultas Informatika, ITTelkom.)
                                    <br></br>(Periode 2013-2014) : Ketua Departemen Informatika,
                                    Fakultas Teknik, Universitas Telkom
                                </p>
                            </div>
                            <div className="col-sejarah">
                                <img className="dekan" src={dekan5} alt=""/>
                                <h4>
                                    <strong>Dhinta Darmantoro , S.T., M.T</strong>
                                </h4>
                                <p>Periode sampai -2008</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sejarah;
