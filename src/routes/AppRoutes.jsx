import { Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../pages/Home";
import Blog from "../pages/Blog";
import Blogs from "../pages/Blogs";


function AppRoutes() {
  return (
    <Layout>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blog/:slug" element={<Blog />} />
        </Routes>
    </Layout>
  );
}

export default AppRoutes;
