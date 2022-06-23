import { lazy } from "react";
// import { Navigate } from "react-router-dom";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/

const Starter = lazy(() => import("../views/Starter.js"));

const ProductManu = lazy(() => import('../viewscafe/productManu'))
const Expense = lazy(() => import('../viewscafe/expense'))
/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [

      {
        path: "/manu",
        element: <ProductManu />
      },

      {
        path: "/expense",
        element: <Expense />
      },
      //   { 
      //     path: "/",
      //     element: <Navigate to="/starter"/> 
      //   },
      {
        path: "/starter",
        exact: true,
        element: <Starter />
      },
      //  {
      //   path: "/employee",
      //   exact: true, 
      //   element: <Employee />
      //  },
      //   { path: "/about", 
      //   exact: true, 
      //   element: <About /> 
      // },
      //   { path: "/alerts", 
      //   exact: true,
      //    element: <Alerts />
      //    },
      //   { path: "/badges", 
      //   exact: true, 
      //   element: <Badges /> 
      // },
      //   { path: "/buttons", 
      //   exact: true,
      //    element: <Buttons /> 
      //   },
      //   { path: "/cards",
      //    exact: true,
      //     element: <Cards /> 
      //   },
      //   { path: "/grid", 
      //   exact: true, 
      //   element: <Grid /> 
      // },
      //   { path: "/table",
      //   exact: true, 
      //   element: <Tables />
      //  },
      //   { path: "/forms",
      //    exact: true,
      //     element: <Forms />
      //    },
      //   { path: "/breadcrumbs",
      //    exact: true,
      //     element: <Breadcrumbs /> },
    ],
  },
];

export default ThemeRoutes;
