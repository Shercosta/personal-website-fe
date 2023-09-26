import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./master.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home.jsx";
import Work from "./components/Work.jsx";
import Contact from "./components/Contact.jsx";
import { Provider } from "react-redux";
import store from "./store.js";

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
        path: "work",
        element: <Work />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      {/* <App /> */}
      <RouterProvider router={app} />
    </React.StrictMode>
  </Provider>
);

const styles = {};
