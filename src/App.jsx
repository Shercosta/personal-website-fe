import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation";
import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function App() {
  return (
    <>
      <Helmet>
        {/* Base SEO (acts as fallback) */}
        <title>Geizka Ruicosta – Fullstack Software Engineer</title>
        <meta
          name="description"
          content="Geizka Ruicosta is a Fullstack Software Engineer building scalable web, backend, and enterprise systems."
        />

        {/* Canonical */}
        <link rel="canonical" href="https://shercosta.netlify.app/" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Geizka Ruicosta – Fullstack Software Engineer"
        />
        <meta
          property="og:description"
          content="Fullstack Software Engineer with production experience in enterprise, fintech, and business systems."
        />
        <meta property="og:url" content="https://shercosta.netlify.app/" />
        <meta
          property="og:image"
          content="https://shercosta.netlify.app/og.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Geizka Ruicosta – Fullstack Software Engineer"
        />
        <meta
          name="twitter:description"
          content="Building scalable, maintainable software systems across frontend and backend."
        />
        <meta
          name="twitter:image"
          content="https://shercosta.netlify.app/og.png"
        />

        {/* Structured Data (JSON-LD) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Geizka Rozilia Ruicosta",
            jobTitle: "Fullstack Software Engineer",
            url: "https://shercosta.netlify.app/",
            image: "https://shercosta.netlify.app/og.png",
            sameAs: [
              "https://github.com/Shercosta",
              "https://www.linkedin.com/in/geizka-ruicosta-5a3620144/",
            ],
            address: {
              "@type": "PostalAddress",
              addressLocality: "Jakarta Timur",
              addressRegion: "DKI Jakarta",
              addressCountry: "ID",
            },
          })}
        </script>
      </Helmet>

      <Navigation />
      <Outlet />
    </>
  );
}

export default App;
