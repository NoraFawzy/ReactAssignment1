import "./App.css";
import "./index.css"
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Portfilio from "./components/Portfolio/Portfilio";
import Contact from "./components/Contact/Contact";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";

function App() {
  let route = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "portfolio", element: <Portfilio /> },
        { path: "contact", element: <Contact /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={route}>
        <div style={{ paddingTop: "100px" }}>
          <Outlet/>
        </div>
      </RouterProvider>
    </>
  );
}

export default App;
