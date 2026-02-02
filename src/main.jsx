import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./master.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home.jsx";
import Work from "./components/Work.jsx";
import Contact from "./components/Contact.jsx";
import Skills from "./components/Skills.jsx";
import { Provider } from "react-redux";
import store from "./store.js";
import { HelmetProvider } from "react-helmet-async";

const app = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "experience",
        element: <Work />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "skills",
        element: <Skills />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      {/* <App /> */}
      <HelmetProvider>
        <RouterProvider router={app} />
      </HelmetProvider>
    </React.StrictMode>
  </Provider>,
);

const styles = {};
