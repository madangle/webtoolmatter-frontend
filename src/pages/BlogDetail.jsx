import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchBlogDetail } from "../api/blogApi";
import { Helmet } from "react-helmet-async";

function BlogDetail() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchBlogDetail(slug)
      .then((res) => {
        setBlog(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(true);
        setLoading(false);
      });
  }, [slug]);

  if (loading) return <p>Loading blog...</p>;
  if (error) return <p>Blog not found.</p>;

  return (
    <>
      <Helmet>
        <title>{blog.seo_title || blog.title} | WebToolMatter</title>
        <meta
          name="description"
          content={blog.seo_description || blog.short_description}
        />
      </Helmet>
      <article className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">
          {blog.title}
        </h1>

        <div className="text-gray-700 leading-8 space-y-4">
          {blog.content}
        </div>
      </article>

    </>

  );
}

export default BlogDetail;
