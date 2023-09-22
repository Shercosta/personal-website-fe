import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./master.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home.jsx";
import Work from "./components/Work.jsx";
import store from "./app/store.js";
import { Provider } from "react-redux";

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
        element: <h1>CONTACT PAGE IS WORKING</h1>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={app} />
      {/* <App /> */}
    </React.StrictMode>
  </Provider>
);
