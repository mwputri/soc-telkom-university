import dekanif from "assets/img/dekan-if.png"
import seminarAzure from "assets/img/seminarAzure.webp"
import event from "assets/img/event.webp"
import i1 from "assets/gallery/1.webp"
import i2 from "assets/gallery/2.webp"
import i3 from "assets/gallery/3.webp"
import i4 from "assets/gallery/4.webp"
import i5 from "assets/gallery/5.webp"
import i6 from "assets/gallery/6.webp"
import i7 from "assets/gallery/7.webp"
import i8 from "assets/gallery/8.webp"
import AliceCarousel from "react-alice-carousel";


const Sambutan = () => {
    const responsive = {
        0: {items: 1},
        568: {items: 1},
        1024: {items: 1},
    };

    let items = []
    let Listitems = [
        i1,
        i2,
        i3,
        i4,
        i5,
        i6,
        i7,
        i8,
    ]


    for (let i = 0; i < Listitems.length; i++) {
        items.push(
            <img
                className={"w-100"}
                src={Listitems[i]}
                alt="image description"/>
        )
    }
    return (
        <div>
            <div className="flex my-10">
                <div className="m-auto">

                    <a href="#"
                       className="flex flex-col items-center bg-white md:flex-row w-100 max-w-6xl  hover:bg-gray-100 ">
                        <img
                            className="object-cover  rounded-t-sm h-full md:h-auto w-full md:w-96 md:rounded-none md:rounded-l-lg"
                            src={dekanif} alt=""/>
                        <div className="flex flex-col justify-between p-4 leading-normal text-left">
                            <h5 className="mb-2 text-2xl  tracking-tight text-gray-900 ">Selamat datang di Fakultas
                                Informatika</h5>
                            <h5 className="mb-2 text-2xl  tracking-tight text-gray-900 ">Dr. Z K Abdurahman Baizal</h5>
                            <h5 className="mb-4 text-xl  tracking-tight text-gray-900 ">Dekan Fakultas Informatika</h5>


                            <p className="mb-2 text-sm text-gray-700 dark:text-gray-400 text-justify">
                                Fakultas Informatika merupakan salah satu fakultas unggulan di Universitas Telkom yang
                                fokus
                                pada bidang IT. Fakultas Informatika memiliki satu prodi Doktor (Informatika), 2 prodi
                                Master (Informatika dan Cybersecurity & Digital Forensics), 5 prodi sarjana
                                (Informatika,
                                Informatika PJJ, Rekayasa Perangkat Lunak, Teknologi Informasi dan Sains Data), serta
                                beberapa prodi baru yang akan segera hadir dalam rangka memenuhi kebutuhan tenaga ahli
                                di
                                berbagai bidang IT. Delapan prodi tersebut dioperasikan oleh 129 dosen dengan
                                kualifikasi
                                dan kompetensi yang sesuai dengan bidangnya.</p> <br/>
                            <p className="mb-3 text-sm text-gray-700 dark:text-gray-400 text-justify">
                                Visi kami adalah “Menjadi research and entrepreneurial faculty pada tahun 2023, yang
                                berperan aktif dalam pengembangan ilmu pengetahuan bidang computing”. Untuk mewujudkan
                                visi
                                tersebut, Fakultas kami memiliki rencana strategis 2019-2023 yang dijabarkan dalam
                                sejumlah
                                program yang dijalankan oleh seluruh civitas akademika fakultas.

                            </p>
                            <p className="mb-3 text-sm text-gray-700 dark:text-gray-400 text-justify">
                                Lebih lengkap ....

                            </p>
                        </div>
                    </a>
                </div>
            </div>
            <div className="flex mt-0 mb-10">
                <div className="m-auto">
                    <ol className="items-center w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0 text-black w-full">
                        <li className="flex items-center pt-5">
                            <div
                                className="max-w-sm border border-gray-200 rounded-lg shadow-md bg-gray-200 h-100">

                                <div className="py-4 px-3">
                                    <a href="#">
                                        <h5 className="mb-2 text-2xl  tracking-tight text-gray-900 mb-5 ">Berita
                                            Terbaru</h5>
                                    </a>
                                    <figure
                                        className="relative max-w-sm transition-all duration-300 cursor-pointer filter">

                                        <a href="#">
                                            <img className="" src={seminarAzure} alt=""/>
                                        </a>
                                        <figcaption
                                            className="absolute px-4 pb-2 text-lg text-white top-3 right-3 text-center bg-black bg-opacity-50">
                                            <p>Jan</p>
                                            <p>16</p>
                                        </figcaption>
                                        <figcaption
                                            className="absolute px-4 pb-2 text-lg text-white bottom-0 text-left bg-black bg-opacity-50">
                                            <p>Seminar Microsoft Azure Database as a Service </p>
                                        </figcaption>
                                    </figure>

                                    <a href="#"
                                       className="inline-flex items-center px-3 py-2 text-sm font-medium text-center  bg-gray-200 rounded-lg border-2 border-black mt-5">
                                        Semua Berita

                                    </a>
                                </div>
                            </div>
                        </li>
                        <li className="flex items-center pt-5">
                            <div
                                className="max-w-sm border border-gray-200 rounded-lg shadow-md bg-gray-200 h-100">

                                <div className="py-4 px-3">
                                    <a href="#">
                                        <h5 className="mb-2 text-2xl  tracking-tight text-gray-900 mb-5 ">Event</h5>
                                    </a>
                                    <figure
                                        className="relative max-w-sm transition-all duration-300 cursor-pointer filter">

                                        <a href="#">
                                            <img className="" src={event} alt=""/>
                                        </a>

                                        <figcaption
                                            className="absolute px-4 pb-2 text-lg text-white bottom-0 text-left bg-black bg-opacity-50">
                                            <p>The 6th International Conference on Data Science and Its Applications
                                                2023 (ICoDSA 2023)</p>
                                        </figcaption>
                                    </figure>

                                    <a href="#"
                                       className="inline-flex items-center px-3 py-2 text-sm font-medium text-center  bg-gray-200 rounded-lg border-2 border-black mt-5">
                                        Semua Event

                                    </a>
                                </div>
                            </div>
                        </li>
                        <li className="flex items-center pt-5">
                            <div
                                className="max-w-sm border border-gray-200 rounded-lg shadow-md bg-gray-200 h-100">
                                <div className="py-4 px-3">
                                    <a href="#" className="">
                                        <h5 className="text-2xl text-left  tracking-tight text-gray-900  ">Video
                                            Profil</h5>
                                        <iframe className="mb-5" width="350" height="200"
                                                src="https://www.youtube.com/embed/OHWlmg1WEXY"
                                                title="YouTube video player"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                allowFullScreen></iframe>
                                    </a>
                                    <a href="#">
                                        <h5 className="text-2xl text-left  tracking-tight text-gray-900  ">Galeri
                                            Fakultas</h5>
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
                                            controlsStrategy={"responsive"}
                                            disableButtonsControls
                                        />
                                    </a>
                                </div>
                            </div>
                        </li>

                    </ol>
                </div>

            </div>
        </div>
    )
}

export default Sambutan