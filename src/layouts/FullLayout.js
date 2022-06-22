import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Col, Container, Row } from "reactstrap";
import Footer from "./footer/footer";


const FullLayout = () => {

  return (
    <main>
      <Row>

        <div className="pageWrapper d-lg-flex  ">
          <Col md='2'>
            {/********Sidebar**********/}
            <aside className="sidebarArea shadow  fixed-top" id="sidebarArea">
              <Sidebar />
            </aside>
          </Col>
          {/********Content Area**********/}
          <Col md='10'>
            <div className="contentArea p-1 "  >
              {/* <div className="contentArea mt-5"> */}
              {/********header**********/}
              <Header />
              {/********Middle Content**********/}
              <Container className=" wrapper mt-5" >
                {/* <Header /> */}
                <Outlet />
              </Container>

            </div>
          </Col>
        </div>
        {/* <h1>header</h1> */}
       
      </Row>
      <Footer/>
    </main>
  );
};

export default FullLayout;
