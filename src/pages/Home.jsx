import { Helmet } from "react-helmet-async";

function Home() {
  return (
    <>
      <Helmet>
        <title>WebToolMatter | Free Online Tools & Guides</title>
        <meta
          name="description"
          content="WebToolMatter provides free online tools and helpful guides for PDFs, documents, and everyday productivity."
        />
      </Helmet>

      <h2>Welcome to WebToolMatter</h2>
      <p>Utility tools and helpful guides for everyday needs.</p>
    </>
  );
}

export default Home;
