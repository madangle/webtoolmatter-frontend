import { useEffect, useState } from "react";
import { fetchBlogs } from "../api/blogApi";
import { Link, useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { formatDate } from './../utils/DateFormatter'; // Adjust path as needed
// const posts = [
//   {
//     id: 1,
//     title: 'Boost your conversion rate',
//     href: '#',
//     description:
//       'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
//     date: 'Mar 16, 2020',
//     datetime: '2020-03-16',
//     category: { title: 'Marketing', href: '#' },
//     author: {
//       name: 'Michael Foster',
//       role: 'Co-Founder / CTO',
//       href: '#',
//       imageUrl:
//         'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     },
//   },
//   {
//     id: 2,
//     title: 'How to use search engine optimization to drive sales',
//     href: '#',
//     description: 'Optio cum necessitatibus dolor voluptatum provident commodi et. Qui aperiam fugiat nemo cumque.',
//     date: 'Mar 10, 2020',
//     datetime: '2020-03-10',
//     category: { title: 'Sales', href: '#' },
//     author: {
//       name: 'Lindsay Walton',
//       role: 'Front-end Developer',
//       href: '#',
//       imageUrl:
//         'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     },
//   },
//   {
//     id: 3,
//     title: 'Improve your customer experience',
//     href: '#',
//     description:
//       'Cupiditate maiores ullam eveniet adipisci in doloribus nulla minus. Voluptas iusto libero adipisci rem et corporis. Nostrud sint anim sunt aliqua. Nulla eu labore irure incididunt velit cillum quis magna dolore.',
//     date: 'Feb 12, 2020',
//     datetime: '2020-02-12',
//     category: { title: 'Business', href: '#' },
//     author: {
//       name: 'Tom Cook',
//       role: 'Director of Product',
//       href: '#',
//       imageUrl:
//         'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     },
//   },
// ]

const Blogs = () => {
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
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">From the blog</h2>
          <p className="mt-2 text-lg/8 text-gray-600">Learn how to grow your business with our expert advice.</p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {blogs.map(blog => (
            <article key={blog.id} className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={blog.created_at} className="text-gray-500">
                  {formatDate(blog.created_at)}
                </time>
                <a
                  href="javascript:;;"
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  Technology
                </a>
              </div>
              <div className="group relative grow">
                <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                  <Link
                    to={`/blog/${blog.slug}`}
                    className="text-indigo-600 font-medium hover:underline"
                  >
                    <span className="absolute inset-0" />
                    {blog.title}
                  </Link>                  
                </h3>
                <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">{blog.short_description}</p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4 justify-self-end">
                <img alt="" src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" className="size-10 rounded-full bg-gray-50" />
                <div className="text-sm/6">
                  <p className="font-semibold text-gray-900">
                    <a href="javascript:;;">
                      <span className="absolute inset-0" />
                      John Doe
                    </a>
                  </p>
                  <p className="text-gray-600">Content Writer</p>
                </div>
              </div>
            </article>
          ))}
        </div>
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
    </div>
  )
}
export default Blogs;
