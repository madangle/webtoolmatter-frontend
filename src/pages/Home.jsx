import { Helmet } from "react-helmet-async";
import Blogs from "./Blogs";

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

      <Blogs />
    </>
  );
}

export default Home;
