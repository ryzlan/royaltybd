import "antd/dist/antd.css";
import './Footer.css'

import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import { IoIosSearch,IoIosMedical,IoIosPeople,IoMdPaperPlane ,IoMdPersonAdd,
    IoMdPeople,IoMdMedal,IoMdPaper,IoMdRibbon,IoMdThumbsUp ,IoMdPin ,IoIosTabletPortrait,

    IoIosMail
} from "react-icons/io";

const Footer = () => {
   
    return ( 
        <section id="footer">
            <Container>
                <Row>
                    <Col lg={4}>
                        <h2 className="foot-header">
                            Company
                        </h2>

                       <ul className="foot-menu">
                           <li className="foot-link">
                                <IoIosSearch />
                                <p>About Us</p>
                            </li>
                            <li className="foot-link">
                                <IoMdPaperPlane />
                                <p>Contacts</p>
                            </li>
                            <li className="foot-link">
                                <IoIosMedical />
                                <p>FAQs</p>
                            </li>
                            <li className="foot-link">
                                <IoIosPeople />
                                <p>Careers</p>
                            </li>

                       </ul>


                    </Col>
                    <Col lg={4}>
                    <h2 className="foot-header">
                            Partners
                        </h2>

                       <ul className="foot-menu">
                           <li className="foot-link">
                                <IoMdPeople />
                                <p>Our Partners</p>
                            </li>
                            <li className="foot-link">
                                <IoMdPersonAdd />
                                <p>Become A Partner</p>
                            </li>
                            <li className="foot-link">
                                <IoMdMedal />
                                <p>Partner Benefits</p>
                            </li>
                       </ul>

                    
                    
                    </Col>
                    <Col lg={4}>
                    <h2 className="foot-header">
                           More
                        </h2>

                       <ul className="foot-menu">
                           <li className="foot-link">
                                <IoMdThumbsUp />
                                <p>Refer a Friend</p>
                            </li>
                            <li className="foot-link">
                                <IoMdPaper />
                                <p>Blog</p>
                            </li>
                            <li className="foot-link">
                                <IoMdRibbon />
                                <p>Partner Benefits</p>
                            </li>
                       </ul>
                    </Col>
                </Row>

                <Row >
                    <Col lg={4}>
                        <div className="foot-link">
                            <IoMdPin />
                            <p>Block A, Bashundhara Road, Dhaka 1229.</p>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="foot-link">
                            <IoIosTabletPortrait />
                            <p>+880-963-862-0202 (11am-6pm).</p>
                        </div>

                    </Col>
                    <Col lg={4}>
                        <div className="foot-link">
                            <IoIosMail />
                            <p>support@royaltybd.com</p>
                        </div>
                    </Col>
                </Row>
                <Row >
                    
                    <div className="creds">
                    <p><em>	&copy; ROYALTY BANGLADESH</em> | </p>

                  
                    
                    <p>ALL RIGHTS RESERVED</p>
                    </div>
                        

                    

                </Row>
            </Container>
        </section>
     );
}
 
export default Footer;
