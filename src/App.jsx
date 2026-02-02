import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation";
import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function App() {
  return (
    <>
      <Helmet>
        <title>Geizka Rozilia Ruicosta (Shercosta)</title>
        <meta
          name="description"
          content="Personal website of Geizka Rozilia Ruicosta, also known as Shercosta, full-stack developer."
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Geizka Rozilia Ruicosta (Shercosta)"
        />
        <meta
          property="og:description"
          content="Full-stack developer portfolio of Geizka Rozilia Ruicosta (Shercosta)."
        />
        <meta
          property="og:image"
          content="https://shercosta.netlify.app/og.png"
        />

        {/* JSON-LD Person schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Geizka Rozilia Ruicosta",
            alternateName: ["Shercosta", "Geizka Ruicosta"],
            url: "https://shercosta.netlify.app",
            image: "https://shercosta.netlify.app/og.png",
            jobTitle: "Full-stack Software Engineer",
            sameAs: [
              "https://github.com/Shercosta",
              "https://www.linkedin.com/in/geizka-ruicosta-5a3620144/",
            ],
          })}
        </script>
      </Helmet>

      <Navigation />
      <Outlet />
    </>
  );
}

export default App;
