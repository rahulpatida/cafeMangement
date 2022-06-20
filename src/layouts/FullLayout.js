import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Container } from "reactstrap";

const FullLayout = () => {

  return (
    <main>
      <div className="pageWrapper d-lg-flex  ">
        {/********Sidebar**********/}
        <aside className="sidebarArea shadow overflow-scroll fixed-top" id="sidebarArea">
          <Sidebar />
        </aside>
        {/********Content Area**********/}

        <div className="contentArea  " >
          {/* <div className="contentArea mt-5"> */}
          {/********header**********/}
           <Header /> 
          {/********Middle Content**********/}
          <Container className="p-4 wrapper" fluid>
            {/* <Header /> */}
            <Outlet />
          </Container>
        
        </div>
      </div>
      {/* <h1>header</h1> */}
    </main>
  );
};

export default FullLayout;
