import Header from "./Header";
import { FaHospital } from "react-icons/fa";
import { PiShareBold } from "react-icons/pi";
import { LiaFileExportSolid } from "react-icons/lia";
import { MdOutlinePersonSearch } from "react-icons/md";
import { IoIosStar } from "react-icons/io";
import NearByHosp from "./NearByHosp";
import { AppContext } from "./App";
import { useContext } from "react";

function Home() {
    const { NearByHospital, setNearByHospital } = useContext(AppContext)
    const handleUseInput = (e) => {
        setNearByHospital(e.target.value)
    }
    return (
        <>
            <Header />
            <div className="Hero-Section">
                <h1 className="FTNH">Find the Nearest Hospital <br />to you and make<br /> an Appointment</h1>
                <p className="DYPC">Discover Your Perfect Care: Find Your Hospital, Anytime, Anywhere</p>
                <a className="GS" href="SignUp">Get Started</a>
                <a className="LearnMore1" href="#">Learn more &rarr; </a>
                <img className="image2" src="./images/image4.jpg" alt="" />
                <div className="search-btn">
                    <p className="FA"> Find a nearby hospital</p>
                    <input className="IN-1" type="text" placeholder="Federal Medical Center, Ebutte Metta,Lagos State" name="NearByHospital" value={NearByHospital} onChange={handleUseInput} />
                    <NearByHosp />
                </div>

                <div className="Welcome">
                    <img className="image3" src="./images/image3.jpg" alt="" />
                    <img className="image4" src="./images/img8.jpg" alt="" />
                    <h2 className="h2A">Welcome to
                <span className="CA">CareFinder</span></h2>
                    <p className="CA-PARA">Carefinder is a platform where
                     users can search for hosiptals in their areas, export hospital
                    details for your records and  enhance your healthcare experience by
                    connecting with others and sharing valuable resources.</p>

                    <a href="#" className="OS">Our Services</a>
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
            <div className="HIW-container">
                <div className="container-1">
                    <h1 className="HIW">How It Works</h1>
                    <div className="container-2">
                        <img className="MAV" src="./images/image3.jpg" alt="" />
                        <a href="#" className="make-a-visit">Make a Visit</a>
                        <p className="make-para"> Appointment confirmed,then make a visit to your selected hospital or doctor </p>
                    </div>
                    <div>
                        <img className="FH" src="./images/img8.jpg" alt="" />
                        <a href="#" className="find">Find Hospital </a>
                        <p className="find-para">Find the best hospitals and doctors near you, our efficiesearch engine provides you with the best results. </p>
                    </div>
                    <div className="container-3">
                        <img className="SS" src="./images/img5.jpg" alt="" />
                        <a href="#" className="save-hosp">Save or Share hospital </a>
                        <p className="save-para">Carefinder allows users to save and share the list of hospitals with others.
                        Users can share the information via email or by generating a shareable link</p>

                        <img className="BA" src="./images/image2.jpg" alt="" />
                        <a href="#" className="Book-Ap">Book Appointment </a>
                        <p className="book-para">Book appointments easily by inputting correct details</p>
                    </div>
                </div>
                <div className="QD-section">
                    <h2 className="QD-h3">QUALIFIED DOCTORS</h2>
                    <img className="doc1" src="./images/doc1.jpg" alt="" />
                    <h3 className="Dr1">Dr Cole Ben</h3>
                    <p className="PGH">Pediatrician Goodwill Hospital</p>
                    <img className="doc2" src="./images/doct3.jpg" alt="" />
                    <h3 className="Dr2">Dr Cole Ben</h3>
                    <p className="PGH2">Pediatrician Goodwill Hospital</p>
                    <img className="doc3" src="./images/doct5.jpg" alt="" />
                    <h3 className="Dr3">Dr Cole Ben</h3>
                    <p className="PGH3">Pediatrician Goodwill Hospital</p>
                    <img className="doc4" src="./images/doct4.jpg" alt="" />
                    <h3 className="Dr4">Dr Cole Ben</h3>
                    <p className="PGH4">Pediatrician Goodwill Hospital</p>
                </div>
                <div className="form-section">
                    <h3 className="BAA"> Book An Appointment</h3>
                    <form>
                        <input className="address" type="text" name="" placeholder="Address" />
                        <div>
                            <select className="CH">
                                <option value="Choose Hospital">Choose Hospital</option>
                            </select>

                            <select className="CD">
                                <option value="Choose Department">Choose Department</option>
                            </select>
                        </div>

                        <input className="enter-name" type="text" name="" placeholder="Enter Name" />
                        <input className="enter-email" type="email" name="" placeholder="Enter Email " />
                        <input className="date" type="date" placeholder="Select Date" />
                        <input className="select-time" type="text" name="" placeholder="Select Time" />
                        <button type="submit" className="button">Book Appointment Now</button>
                    </form>
                </div>
            </div>
            <div className="testy">
                <h2 className="testimonials"> Testimonials</h2>
                <h2 className="WOUS">What Our Users Say</h2>
                <div className="Feedback1">
                    <p className="Feed-P1">
                        Finding the right hospital has never been easier! With this website,
                         I was able to locate a nearby hospital quickly and efficiently.
                         The search feature is user-friendly, and it provided me with all
                   the essential information I needed. Highly recommended</p>
                    <IoIosStar className="Star-1" />
                    <img className="Feed-img1" src="./images/IMG1.jpg" alt="" />
                    <p className="Feed-Name">Sonia Samari</p>

                </div>
                <div className="Feedback2">
                    <p className="Feed-P2">
                        I can’t express how grateful i am for carefinder website. When i needed urgent medical care while travelling,
                         it helped me locate the nearest hospital in a matter of  seconds.
                         The accurate results and detailed directions saved me valuable time and ensured i received the care i needed</p>
                    <IoIosStar className="Star-2" />
                    <img className="Feed-img1" src="./images/IMG1.jpg" alt="" />
                    <p className="Feed-Name">Sonia Samari</p>

                </div>
                <div className="Feedback3">
                    <p className="Feed-P3">
                        I recently moved to a new city and had no idea where to go for medical assistance,
                         my friend shared me some hospital details using the carefinder website. It made my life easier, i was able to fine reputable hospitals near me effortlessly.
                        The website’s is user friendly interface and comprehnsive search gave me peace of mind. I highly recommend.</p>
                    <IoIosStar className="Star-3" />
                    <img className="Feed-img1" src="./images/IMG1.jpg" alt="" />
                    <p className="Feed-Name">Sonia Samari</p>

                </div>
            </div>
            <div className="CAQ">
                <h3 className="CAQ-Carefinder">CareFinder</h3>
                <p className="CAQ-Add">Plot 42, Akinza Street Victoria Island, Lagos +2349167351788</p>
                <h3 className="CAQ-AboutUS">About Us</h3>
                <p className="CAQ-AboutNews">News & Media Contact Us</p>
                <h3 className="CAQ-QL">Quick Links</h3>
                <p className="QL-P">My Account Book and appointment Library</p>
            </div>
        </>
    );
}
export default Home;