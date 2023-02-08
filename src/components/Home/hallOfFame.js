import rgds from "assets/img/rgds.webp"
import err from "assets/img/err.webp"
import rgse from "assets/img/rgse.webp"


const HallOfFame = () => {
    return (
        <div className="md:mx-72">
            <p className="text-2xl font-bold mt-5 ">HALL OF FAME SCHOOL OF COMPUTING

            </p>
            <div className="flex mt-0 mb-10">
                <div className="m-auto ">
                    <ol className="items-center w-full  sm:flex  text-black w-full">
                        <li className="flex items-center pt-5">
                            <div
                                className="max-w-sm rounded-lg h-75 border-2 lg:border-white">
                                <div className="py-4 px-3 flex flex-col items-center">
                                    <div className="w-75">
                                        <a href="#">
                                            <h5 className="mb-2   tracking-tight text-gray-900 mb-5 ">Research Group
                                                Data Science
                                            </h5>
                                        </a>
                                        <figure
                                            className="relative  transition-all duration-300 cursor-pointer filter">
                                            <a href="#">
                                                <img className="" src={rgds} alt=""/>
                                            </a>
                                            <figcaption
                                                className="absolute px-4 pb-2 text-lg text-white bottom-0 text-left bg-black bg-opacity-50">
                                                <p>Travel CRS (Pikniklah.com): Pembangkit Jadwal Kunjungan Wisata
                                                    Otomatis</p>
                                            </figcaption>
                                        </figure>
                                        <a href="#"
                                           className="inline-flex items-center px-3 py-2 text-sm font-medium text-center  bg-gray-200 rounded-lg border-2 border-black mt-5">
                                            Lebih banyak

                                        </a>
                                    </div>

                                </div>
                            </div>
                        </li>
                        <li className="flex items-center pt-5">
                            <div
                                className="max-w-sm rounded-lg h-75 border-2 lg:border-white">
                                <div className="py-4 px-3 flex flex-col items-center">
                                    <div className="w-75">
                                        <a href="#">
                                            <h5 className="mb-2   tracking-tight text-gray-900 mb-5 ">Research Group
                                                Intelligent Systems
                                            </h5>
                                        </a>
                                        <figure
                                            className="relative  transition-all duration-300 cursor-pointer filter">
                                            <a href="#">
                                                <img className="" src={err} alt=""/>
                                            </a>
                                            <figcaption
                                                className="absolute px-4 pb-2 text-lg text-white bottom-0 text-left bg-black bg-opacity-50">
                                                <p>Automatic Speech Recognition untuk Bahasa Indonesia
                                                </p>
                                            </figcaption>
                                        </figure>
                                        <a href="#"
                                           className="inline-flex items-center px-3 py-2 text-sm font-medium text-center  bg-gray-200 rounded-lg border-2 border-black mt-5">
                                            Lebih banyak

                                        </a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="flex items-center pt-5">
                            <div
                                className="max-w-sm rounded-lg h-75 border-2 lg:border-white">
                                <div className="py-4 px-3 flex flex-col items-center">
                                    <div className="w-75">
                                        <a href="#">
                                            <h5 className="mb-2   tracking-tight text-gray-900 mb-5 ">Research Group
                                                Cyber Physical Systems
                                            </h5>
                                        </a>
                                        <figure
                                            className="relative  transition-all duration-300 cursor-pointer filter">
                                            <a href="#">
                                                <img className="" src={err} alt=""/>
                                            </a>
                                            <figcaption
                                                className="absolute px-4 pb-2 text-lg text-white bottom-0 text-left bg-black bg-opacity-50">
                                                <p>Implementasi Pengamanan Ruang Penyimpan Bibit Vaksin Berbasis
                                                    Internet of Things (IoT) Menggunakan Platform OpenMTC
                                                </p>
                                            </figcaption>
                                        </figure>
                                        <a href="#"
                                           className="inline-flex items-center px-3 py-2 text-sm font-medium text-center  bg-gray-200 rounded-lg border-2 border-black mt-5">
                                            Lebih banyak

                                        </a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="flex items-center pt-5">
                            <div
                                className="max-w-sm rounded-lg h-75 border-2 lg:border-white">
                                <div className="py-4 px-3 flex flex-col items-center">
                                    <div className="w-75">
                                        <a href="#">
                                            <h5 className="mb-2   tracking-tight text-gray-900 mb-5 ">Research Group
                                                Software Engineering
                                            </h5>
                                        </a>
                                        <figure
                                            className="relative  transition-all duration-300 cursor-pointer filter">
                                            <a href="#">
                                                <img className="" src={rgse} alt=""/>
                                            </a>
                                            <figcaption
                                                className="absolute px-4 pb-2 text-lg text-white bottom-0 text-left bg-black bg-opacity-50">
                                                <p>Angkasa (Pengembangan Aplikasi Pembelajaran Bersama)
                                                </p>
                                            </figcaption>
                                        </figure>
                                        <a href="#"
                                           className="inline-flex items-center px-3 py-2 text-sm font-medium text-center  bg-gray-200 rounded-lg border-2 border-black mt-5">
                                            Lebih banyak

                                        </a>
                                    </div>
                                </div>
                            </div>
                        </li>

                    </ol>
                </div>

            </div>
        </div>
    )
}

export default HallOfFame