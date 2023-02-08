import Logo from 'assets/logo/Logo_FIF.webp';
import id from 'assets/flag/id.png';

import listMenu from './listMenu.json'

const Navbar = () => {

    return (
        <nav className="bg-TeluRed-100 px-8 sm:px-8 py-2.5">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                {/*Logo*/}
                <a href="" className="flex items-center">
                    <img src={Logo} className="h-8 mr-3 sm:h-16"
                         alt="Fakultas Informatika Universitas Telkom | School of Computing"/>
                </a>
                {/*End Logo*/}

                {/*Burger Menu*/}
                <button data-collapse-toggle="navbar-default" type="button"
                        className="inline-flex items-center p-2 ml-3 text-sm text-white rounded-lg md:hidden hover:text-white focus:outline-none focus:ring-2 focus:text-white"
                        aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                         xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd"
                              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                              clipRule="evenodd"></path>
                    </svg>
                </button>
                {/*End Burger*/}

                {/*Navigator*/}
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="flex flex-col p-4  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 ">
                        {listMenu.map((detail, id) => (
                            <li className={"border-l-2 border-l-gray-200 pr-4 pl-10"} key={"LI-" + id}>
                                <button id={"dropdownNavbarLink_" + id} data-dropdown-toggle={"dropdown_" + id}
                                        className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto ">{detail.name}</button>
                                <div id={"dropdown_" + id}
                                     className="z-10 hidden font-normal bg-black divide-y divide-gray-100 rounded shadow w-44 ">

                                    <ul className="py-1 text-sm text-white "
                                        aria-labelledby="dropdownLargeButton">

                                        {detail.SubMenu.map((subDetail, idSub) => (
                                            <li key={"dropdownNavbarLinkDetail" + idSub + "-" + id}
                                                aria-labelledby={subDetail.SubMenu ? "dropdownNavbarLink" + idSub + "-" + id + subDetail.name : ""}>
                                                {subDetail.SubMenu ?
                                                    <div
                                                        key={(Math.random() + 1).toString(36).substring(7) + "//" + idSub}>
                                                        <a id="doubleDropdownButton"
                                                           data-dropdown-toggle="doubleDropdown"
                                                           data-dropdown-placement="right-start" type="button"
                                                           className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 ">{subDetail.name}
                                                            <svg aria-hidden="true" className="w-5 h-5"
                                                                 fill="currentColor"
                                                                 viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                                <path fillRule="evenodd"
                                                                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                                                      clipRule="evenodd"></path>
                                                            </svg>
                                                        </a>
                                                        <div id="doubleDropdown"
                                                             className="z-10 hidden bg-black divide-y divide-gray-100 rounded-lg shadow w-44 ">
                                                            <ul className="py-2 text-sm text-gray-700 "
                                                                aria-labelledby="doubleDropdownButton">
                                                                {subDetail.SubMenu.map((detailData, idDetailData) => (
                                                                    <li key={"detailItems-" + idDetailData + "/" + idSub + '-' + id}>
                                                                        <a href={detailData.path}
                                                                           key={(Math.random() + 1).toString(36).substring(7) + "//" + idDetailData}
                                                                           className="block px-4 py-2 hover:bg-gray-100 ">{detailData.name}</a>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </>
                                                    :
                                                    <a href={subDetail.path}
                                                       className="block px-4 py-2 hover:bg-gray-50 hover:text-black text-left">{subDetail.name}
                                                    </a>
                                                }
                                            </li>
                                        ))}

                                    </ul>
                                </div>
                            </li>
                        ))}
                        <li className={"border-l-2 border-l-gray-200 pr-4 pl-10"}>
                            <button id={"dropdownNavbarLink_" + id} data-dropdown-toggle={"dropdown_" + id}
                                    className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto ">
                                <img src={id} className="h-2 mr-3 sm:h-6"/></button>
                            <div id={"dropdown_" + id}
                                 className="z-10 hidden font-normal bg-black divide-y divide-gray-100 rounded shadow w-44 ">
                                <ul className="py-1 text-sm text-white "
                                    aria-labelledby="dropdownLargeButton">
                                    <li>
                                        <a href={"/"}
                                           className="block px-4 py-2 hover:bg-gray-50 hover:text-black text-center"><img
                                            src={id} className="h-2 mr-3 sm:h-6"/></a>
                                    </li>
                                </ul>
                            </div>
                        </li>

                    </ul>
                </div>
                {/*End Navigator*/}
            </div>
        </nav>

        // <nav className="navigation">
        //     <a href="/" className="brand-name">
        //         <img src={Logo} alt=""/>
        //     </a>
        //     <button className="hamburger" onClick={() => {
        //         setIsNavExpanded(!isNavExpanded)
        //     }}>
        //         <img src={Hamburger} alt=""/>
        //     </button>
        //     <div className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}>
        //         <ul className={`m-0 ${isNavExpanded ? 'd-flex align-items-center' : ''}`}>
        //             <li className="nav-item">
        //                 <a href="/" className="nav-link text-decoration-none text-white fw-bold">Tentang</a>
        //             </li>
        //             <li className="nav-item">
        //                 <a href="/civitas" className="nav-link text-decoration-none text-white fw-bold">Sivittas</a>
        //             </li>
        //             <li className="nav-item">
        //                 <a href="/civitas" className="nav-link text-decoration-none text-white fw-bold">Akademik</a>
        //             </li>
        //             <li className="nav-item">
        //                 <a href="/civitas" className="nav-link text-decoration-none text-white fw-bold">Riset</a>
        //             </li>
        //             <li className="nav-item">
        //                 <a href="/civitas" className="nav-link text-decoration-none text-white fw-bold">Pengabdian
        //                     Masyarakat</a>
        //             </li>
        //             <li className="nav-item">
        //                 <a href="/civitas" className="nav-link text-decoration-none text-white fw-bold">Laboratorium</a>
        //             </li>
        //             <li className={`nav-item ${isNavExpanded ? 'd-none' : 'd-block'}`}>
        //                 <form action="" className="search-bar">
        //                     <input onChange={handleChange} type="search" name="search" pattern=".*\S.*" required/>
        //                     <button className="search-btn" type="submit">
        //                         <span>Search</span>
        //                     </button>
        //                 </form>
        //             </li>
        //         </ul>
        //     </div>
        // </nav>
    );
}

export default Navbar