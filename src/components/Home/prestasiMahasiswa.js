import prestasi1 from "assets/img/prestasi1.webp"
import prestasi2 from "assets/img/prestasi2.webp"
import prestasi3 from "assets/img/prestasi3.webp"
import prestasi4 from "assets/img/prestasi4.webp"
import prestasi5 from "assets/img/prestasi5.webp"


const PrestasiMahasiswa = () => {
    return (
        <div className="bg-gray-200">
            <p className="text-4xl font-bold pt-5">Prestasi Mahasiswa

            </p>

            <div className="flex mt-0 pb-10 w-full px-8 lg:px-48">
                <div className="m-auto flex flex-col lg:flex-row items-center justify-evenly w-full">
                    <img className="lg:w-60 mt-8" src={prestasi1} alt=""/>
                    <img className="lg:w-60 mt-8" src={prestasi2} alt=""/>
                    <img className="lg:w-60 mt-8" src={prestasi3} alt=""/>
                    <img className="lg:w-60 mt-8" src={prestasi4} alt=""/>
                    <img className="lg:w-60 mt-8" src={prestasi5} alt=""/>
                    {/* <ol className="items-center w-full  sm:flex  text-black w-full ">
              <li className="flex items-center lg:pt-5">
                <div
                  className="max-w-sm rounded-lg h-75 flex flex-col items-center">
                  <div className="py-4 px-3 w-75">
                    <a href="#">
                      <img className="" src={prestasi1} alt="" />
                    </a>
                  </div>
                </div>
              </li>
              <li className="flex items-center lg:pt-5">
                <div
                  className="max-w-sm rounded-lg h-75 flex flex-col items-center">
                  <div className="py-4 px-3 w-75">
                    <a href="#">
                      <img className="" src={prestasi2} alt="" />
                    </a>
                  </div>
                </div>
              </li>
              <li className="flex items-center lg:pt-5">
                <div
                  className="max-w-sm rounded-lg h-75 flex flex-col items-center">
                  <div className="py-4 px-3 w-75">
                    <a href="#">
                      <img className="" src={prestasi3} alt="" />
                    </a>
                  </div>
                </div>
              </li>
              <li className="flex items-center lg:pt-5">
                <div
                  className="max-w-sm rounded-lg h-75 flex flex-col items-center">
                  <div className="py-4 px-3 w-75">
                    <a href="#">
                      <img className="" src={prestasi4} alt="" />
                    </a>
                  </div>
                </div>
              </li>
              <li className="flex items-center lg:pt-5">
                <div
                  className="max-w-sm rounded-lg h-75 flex flex-col items-center">
                  <div className="py-4 px-3 w-75">
                    <a href="#">
                      <img className="" src={prestasi5} alt="" />
                    </a>
                  </div>
                </div>
              </li>
            </ol> */}
                </div>

            </div>
        </div>
    )
}

export default PrestasiMahasiswa