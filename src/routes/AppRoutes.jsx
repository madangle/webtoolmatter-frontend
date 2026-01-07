import { Routes, Route } from "react-router-dom";
import BlogList from "../pages/BlogList";
import BlogDetail from "../pages/BlogDetail";
import Layout from "../components/layout/Layout";
import Home from "../pages/Home";


function AppRoutes() {
  return (
    <Layout>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />
        </Routes>
    </Layout>
  );
}

export default AppRoutes;
