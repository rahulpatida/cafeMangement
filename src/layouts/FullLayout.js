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
                    <Col md="2" xs="2">

                        {/********Sidebar**********/}
                        <aside className="sidebarArea shadow overflow-scroll fixed-top" id="sidebarArea">
                            <Sidebar />
                        </aside>
                        {/********Content Area**********/}
                    </Col>
                    <Col md="10" xs="10">
                        <div className="contentArea" >
                            {/* <div className="contentArea mt-5"> */}
                            {/********header**********/}
                            <Header />
                            {/********Middle Content**********/}
                            <Container className="p-4 wrapper" fluid>
                                {/* <Header /> */}
                                <Outlet />
                            </Container>


                        </div>
                        </Col>
                        </div>
                    </Row>
                    <Footer />
                </main>


            </>);
};

            export default FullLayout;
