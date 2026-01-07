import { useEffect, useState } from "react";
import { fetchBlogs } from "../api/blogApi";
import { Link, useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [next, setNext] = useState(null);
  const [previous, setPrevious] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page") || "1", 10);

  useEffect(() => {
    setLoading(true);
    fetchBlogs(page)
      .then((res) => {
        setBlogs(res.data.results);
        setNext(res.data.next);
        setPrevious(res.data.previous);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [page]);

  if (loading) return <p>Loading blogs...</p>;

  return (
    <>
      <Helmet>
        <title>Blog | WebToolMatter</title>
        <meta
          name="description"
          content="Read useful guides and tutorials on online tools, productivity, and document management."
        />
      </Helmet>

      {/* <h2>Blog</h2> */}

      <div className="space-y-8">
        {blogs.map(blog => (
          <article
            key={blog.id}
            className="border rounded-xl p-6 hover:shadow-md transition"
          >
            <h2 className="text-2xl font-semibold mb-2">
              {blog.title}
            </h2>

            <p className="text-gray-600 mb-4">
              {blog.short_description}
            </p>

            <Link
              to={`/blog/${blog.slug}`}
              className="text-indigo-600 font-medium hover:underline"
            >
              Read more →
            </Link>
          </article>
        ))}
      </div>

      {/* Pagination */}
      <div style={{ marginTop: "30px", display: "flex", gap: "10px" }}>
        <button
          disabled={!previous}
          onClick={() => setSearchParams({ page: page - 1 })}
        >
          Previous
        </button>

        <span>Page {page}</span>

        <button
          disabled={!next}
          onClick={() => setSearchParams({ page: page + 1 })}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default BlogList;
