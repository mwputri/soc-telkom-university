import React from "react";
import img1 from "./Renstra-FIF-19-23.webp"
import "./Rencana.css";

const Rencana = () => {
    return (
        <div>
            <div className="p-lg-5" style={{overflowX: "auto"}}>
                <div className="container rencana">
                    <img className="rencana"
                         src={img1}
                         alt="image description"/>
                    <span>Milestone pencapaian Visi Fakultas Informatika 2023</span>
                    <p>
                        Rencana Strategis pengembangan Fakultas Informatika tahun 2019-2023
                        ditujukan untuk membawa dan mewujudkan Fakultas Informatika menjadi
                        sebuah research and entrepreneurial faculty yang berperan aktif
                        dalam pengembangan ilmu pengetahuan bidang Computing berbasis
                        teknologi informasi pada tahun 2023 dengan lima tahap dan fokus
                        kegiatan yang meliputi:
                    </p>
                    <br></br>
                    <p>
                        1. 2019: <b>Digital learning excellence,</b> difokuskan pada
                        digitalisasi material pembelajaran. Kondisi ini dicapai melalui
                        program pengembangan bahan ajar online dengan sistem CeLoe (Center
                        for E-learning and Open Education) yang berkesinambungan,
                    </p>
                    <br></br>
                    <p>
                        2. 2020: <b>International Academic Excellence,</b> difokuskan pada
                        <b>
                            {" "}
                            peningkatan kualitas proses pembelajaran dan internasionalisasi
                            pendidikan
                        </b>
                        . Penyusunan kurikulum baru yang berstandar Internasional yang
                        disertai dengan pengembangan metode pembelajaran merupakan kata
                        kunci dalam tahap ini. Melalui tahapan ini maka ditargetkan terjadi
                        peningkatan mahasiswa asing, pertukaran pelajar serta berbagai
                        kerjasama dengan Perguruan Tinggi Luar Negeri (khususnya dalam
                        bidang pembelajaran),
                    </p>
                    <br></br>
                    <p>
                        3. 2021: <b>International Research Excellence</b>, difokuskan untuk
                        membangun <b>Kolaborasi riset Internasional.</b> Untuk mewujudkan
                        hal tersebut maka dilaksanakan berbagai kegiatan untuk meningkatkan
                        kualitas dan talent sivitas akademik dalam bidang Penelitian. Dengan
                        adanya Sumber Daya Manusia yang memadai maka Fakultas Informatika
                        dapat melakukan penguatan jejaring riset melalui kegiatan riset
                        bersama dengan lembaga Internasional,
                    </p>
                    <br></br>
                    <p>
                        4. 2022: <b>Enterpreneurial Culture Excellence</b>, difokuskan untuk
                        mengembangkan kewirausahaan di kalangan mahasiswa dan dosen.
                        Penelitian-penelian di lingkungan fakultas mampu menghasilkan TRL
                        >6, sehingga kuantitas hilirisasi dan komersialisasi produk
                        penelitian lebih meningkat. Dengan demikian, produk-produk hasil
                        penelitian ini dapat mendorong lebih banyaknya startup yang
                        dibentuk.
                    </p>
                    <br></br>
                    <p>
                        5. 2023: <b>Research and Enterpreneurial Ecosystem Excellence,</b>
                        difokuskan mengembangkan sebuah ekosistem untuk mendukung pencapaian
                        indikator-indikator sebuah entrepreneurial university, di tingkat
                        fakultas. Unsur dalam ekosistem di sini meliputi, mahasiswa, dosen,
                        industri, pemerintah dan juga entrepreneurial hub baik tingkat
                        nasional maupun internasional. Pada tahap ini, fakultas sudah banyak
                        menghasilkan hak kekayaan intelektual, startup, serta beberapa spin
                        off dan juga industrial licence. Selain itu, keberhasilan tahap ini
                        dapat ditunjukkan dengan banyaknya alumni yang menjadi entrepreneur
                        di level nasional maupun Internasional.
                    </p>
                    <br></br>
                </div>
            </div>
        </div>
    );
};

export default Rencana;
