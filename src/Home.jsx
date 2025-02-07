import Header from "./Header";
import Footer from "./Footer";
import { FaHospital } from "react-icons/fa";
import { PiShareBold } from "react-icons/pi";
import { LiaFileExportSolid } from "react-icons/lia";
import { MdOutlinePersonSearch } from "react-icons/md";
import { IoIosStar } from "react-icons/io";
import NearByHosp from "./NearByHosp";
import { AppContext } from "./App";
import { useContext, useState } from "react";

function Home() {
    const { NearByHospital, setNearByHospital, hospitalList, setfilterHospital } = useContext(AppContext)
    const handleUseInput = (e) => {

    }
    const searchHospital = (e) => {
        setNearByHospital(e.target.value)
        const result = hospitalList.filter(hospital => hospital.facility_name.toLowerCase().includes(NearByHospital))
        if (result.length >= 1) {
            setfilterHospital(result)
            return result
        }
        else return "No hospital near by"
    }

    return (
        <>
            <Header />
            <div className="Home-main-container">
                <div className="Hero-Section">

                    <div className="hero-container1">
                        <div className="Hero-description">
                            <div className="decription-con-1">
                                <h1 className="FTNH">Find the Nearest Hospital <br />to you and make<br /> an Appointment</h1>
                                <p className="DYPC">Discover Your Perfect Care: Find Your Hospital, Anytime, Anywhere!</p>
                            </div>
                            <div className="decription-con-2">
                                <a className="GS" href="SignUp">Get Started</a>
                                <a className="LearnMore1" href="#">Learn more <span>&rarr; </span></a>
                            </div>
                        </div>

                        <div className="hero-image">
                            <div className="image-con-hero">
                                <img className="image2" src="./images/image4.jpg" alt="Hero Image" />
                            </div>
                        </div>
                    </div>

                    <div className="search-btn">
                        <p className="FA"> Find a nearby hospital</p>
                        <input className="IN-1" type="text" placeholder="Federal Medical Center, Ebutte Metta,Lagos State" name="NearByHospital" value={NearByHospital} onChange={searchHospital} />
                        <NearByHosp />
                    </div>
                </div >

                {/* WELCOME SECTION */}
                <div className="Welcome">
                    <div className="welcome-con1">
                        <div className="image3-con">
                            <img className="image3" src="./images/image3.jpg" alt="" />
                        </div>
                        <div className="image4-con">
                            <img className="image4" src="./images/img8.jpg" alt="" />
                        </div>

                        <div className="Welcome-descript">
                            <h2 className="h2A">Welcome to
                        <span className="CA">CareFinder</span></h2>

                            <p className="CA-PARA">Carefinder is a platform where
                             users can search for hosiptals in their areas, export hospital
                            details for your records and  enhance your healthcare experience by
                            connecting with others and sharing valuable resources.</p>

                            <a href="#" className="OS">Our Services</a>
                        </div>
                    </div>

                    <div className="search-container">

                        <div className="search-doc">
                            <div className="FaHosp" >
                                <MdOutlinePersonSearch className="Person-Search" />
                            </div>
                            <h4 className="Search-Doc"> Search Doctors</h4>
                            <p className="Search-Doc-P">Effortlessly Find the Best Doctors Near you</p>
                        </div>

                        <div className="search-hosp">
                            <div className="FaHosp">
                                <FaHospital className="Person-Search" />
                            </div>
                            <h4 className="Search-hosp-h4"> Search Hospitals</h4>
                            <p className="Search-hosp-p">Effortlessly Find the Best Hospitals Near you</p>
                        </div>

                        <div className="export-hosp">
                            <div className="FaHosp">
                                <LiaFileExportSolid className="Person-Search" /></div>
                            <h4 className="Export-hosp-h4"> Export Hospitals</h4>
                            <p className="Export-hosp-p">Save list of hospitals.</p>
                        </div>

                        <div className="share-hosp">
                            <div className="FaHosp">
                                <PiShareBold className="Person-Search" />
                            </div>
                            <h4 className="Share-hosp-h4"> Share Hospitals</h4>
                            <p className="Share-hosp-p">Share the list of hospitals with others.</p>
                        </div>
                    </div>
                </div>

                {/* HOW IT WORKS SECTION */}
                <div className="HIW-container">
                    <div className="container-1">
                        <h1 className="HIW">How It Works</h1>


                        <div className="container-2">
                            <div className="Find-hosp-con">
                                <img className="FH" src="./images/img8.jpg" alt="" />
                                <a href="#" className="find">Find Hospital </a>
                                <p className="find-para">Find the best hospitals and doctors near you, our efficiesearch engine provides you with the best results. </p>
                            </div>



                            <div className="container-3">
                                <div className="save-share-con">
                                    <img className="SS" src="./images/img5.jpg" alt="" />
                                    <a href="#" className="save-hosp">Save or Share hospital </a>
                                    <p className="save-para">Carefinder allows users to save and share the list of hospitals with others.
                                Users can share the information via email or by generating a shareable link</p>
                                </div>

                                <div className="book-app-con">
                                    <img className="BA" src="./images/image2.jpg" alt="" />
                                    <a href="#" className="Book-Ap">Book Appointment </a>
                                    <p className="book-para">Book appointments easily by inputting correct details</p>
                                </div>
                                <div className="make-visit-con">
                                    <img className="MAV" src="./images/image3.jpg" alt="" />
                                    <a href="#" className="make-a-visit">Make a Visit</a>
                                    <p className="make-para"> Appointment confirmed,then make a visit to your selected hospital or doctor </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* QUALIFIED DOCTORS SECTION */}
                <div className="QD-main-section">
                    {/* <h2 className="QD-h3">QUALIFIED DOCTORS</h2>  */}
                    <div className="QD-section">


                        <div className="Dr-one">
                            <img className="doc1" src="./images/doc1.jpg" alt="" />
                            <h3 className="Dr1">Dr Cole Ben</h3>
                            <p className="PGH">Pediatrician Goodwill Hospital</p>
                        </div>

                        <div className="Dr-two">
                            <img className="doc2" src="./images/doct3.jpg" alt="" />
                            <h3 className="Dr2">Dr Cole Ben</h3>
                            <p className="PGH2">Pediatrician Goodwill Hospital</p>
                        </div>

                        <div className="Dr-three">
                            <img className="doc3" src="./images/doct5.jpg" alt="" />
                            <h3 className="Dr3">Dr Cole Ben</h3>
                            <p className="PGH3">Pediatrician Goodwill Hospital</p>
                        </div>

                        <div className="Dr-four">
                            <img className="doc4" src="./images/doct4.jpg" alt="" />
                            <h3 className="Dr4">Dr Cole Ben</h3>
                            <p className="PGH4">Pediatrician Goodwill Hospital</p>
                        </div>
                    </div>

                    <div className="form-section">
                        <h3 className="BAA"> Book An Appointment</h3>
                        <form className="Form-con">
                            <input className="address" type="text" name="" placeholder="Address" />

                            <select className="CH">
                                <option value="Choose Hospital">Choose Hospital</option>
                            </select>

                            <select className="CD">
                                <option value="Choose Department">Choose Department</option>
                            </select>

                            <input className="enter-name" type="text" name="" placeholder="Enter Name" />
                            <input className="enter-email" type="email" name="" placeholder="Enter Email " />
                            <input className="date" type="date" placeholder="Select Date" />
                            <input className="select-time" type="text" name="" placeholder="Select Time" />
                            <button type="submit" className="button">Book Appointment Now</button>
                        </form>
                    </div>
                </div>

                {/* Testimonials section */}
                <div className="testy">
                    <div className="testy-descript">
                        <h2 className="testimonials"> Testimonials</h2>
                        <h2 className="WOUS">What Our Users Say</h2>
                    </div>
                    <div className="Feedback-main-con">
                        <div className="Feedback1">
                            <p className="Feed-P1">
                                Finding the right hospital has never been easier! With this website,
                                 I was able to locate a nearby hospital quickly and efficiently.
                                 The search feature is user-friendly, and it provided me with all
                        the essential information I needed. Highly recommended</p>
                            <div className="Start-1-con">
                                <IoIosStar className="Star-1" />
                                <IoIosStar className="Star-1" />
                                <IoIosStar className="Star-1" />
                                <IoIosStar className="Star-1" />
                                <IoIosStar className="Star-1" />
                            </div>

                            <div className="Feed-img-name-con">
                                <img className="Feed-img1" src="./images/IMG1.jpg" alt="" />
                                <p className="Feed-Name">Sonia Samari</p>
                            </div>
                        </div>

                        <div className="Feedback2">
                            <p className="Feed-P2">
                                I can’t express how grateful i am for carefinder website. When i needed urgent medical care while travelling,
                                 it helped me locate the nearest hospital in a matter of  seconds.
                         The accurate results and detailed directions saved me valuable time and ensured i received the care i needed</p>

                            <div className="Start-1-con">
                                <IoIosStar className="Star-2" />
                                <IoIosStar className="Star-1" />
                                <IoIosStar className="Star-1" />
                                <IoIosStar className="Star-1" />
                                <IoIosStar className="Star-1" />
                            </div>
                            <div className="Feed-img-name-con">
                                <img className="Feed-img1" src="./images/IMG1.jpg" alt="" />
                                <p className="Feed-Name">Sonia Samari</p>
                            </div>

                        </div>
                        <div className="Feedback3">
                            <p className="Feed-P3">
                                I recently moved to a new city and had no idea where to go for medical assistance,
                                 my friend shared me some hospital details using the carefinder website. It made my life easier, i was able to fine reputable hospitals near me effortlessly.
                        The website’s is user friendly interface and comprehnsive search gave me peace of mind. I highly recommend.</p>

                            <div className="Start-1-con">
                                <IoIosStar className="Star-3" />
                                <IoIosStar className="Star-1" />
                                <IoIosStar className="Star-1" />
                                <IoIosStar className="Star-1" />
                                <IoIosStar className="Star-1" />
                            </div>

                            <div className="Feed-img-name-con">
                                <img className="Feed-img1" src="./images/IMG1.jpg" alt="" />
                                <p className="Feed-Name">Sonia Samari</p>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </>
    );
}
export default Home;