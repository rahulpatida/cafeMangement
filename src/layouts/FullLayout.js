import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./footer/Footer";
// import Header from "../views/header/Header";
import { Container, Row, Col } from "reactstrap";
const FullLayout = () => {
    return (<>
        <main>
            <Row>
                <div className="pageWrapper d-lg-flex">
                    <Col md="2" xs="2" >

                        {/********Sidebar**********/}
                        <aside className="sidebarArea shadow overflow-scroll fixed-top gradient-shadow-white" id="sidebarArea">
                            <Sidebar />
                        </aside>
                        {/********Content Area**********/}
                    </Col>
                    <Col md="10" xs="12" className="" >
                        <div className="contentArea " >
                            {/* <div className="contentArea mt-5"> */}
                            {/********header**********/}
                            {/* <Header /> */}
                            {/********Middle Content**********/}
                            {/* <Container className="p-3 mt-3 wrapper " fluid>
                                 
                                <Outlet />
                            </Container> */}
                            <Row className="p-1" style={{paddingLeft:''}}>
                                <Header /> 
                            </Row>
                            <Row className="p-3 ">
                            <Container className="p- wrapper " fluid>
                                 
                                 <Outlet />
                             </Container>
                            </Row>

       
                        </div>
                    </Col>
                </div>
                {/* <h1>header</h1> */}
            </Row>
            <Footer />
        </main>

    </>);
};

export default FullLayout;
