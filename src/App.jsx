import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation";
import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function App() {
  return (
    <>
      <Helmet>
        <title>Shercosta</title>
        <meta
          name="description"
          content="Personal website of Shercosta, full-stack developer."
        />
        <meta
          property="og:image"
          content="https://shercosta.netlify.app/og.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Helmet>
      <Navigation></Navigation>
      <Outlet />
    </>
  );
}

export default App;
