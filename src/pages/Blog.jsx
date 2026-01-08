import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchBlogDetail } from "../api/blogApi";
import { Helmet } from "react-helmet-async";

const Blog = () => {
  
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
        <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
					<div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
						<article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
							<header className="mb-4 lg:mb-6 not-format">
								<address className="flex items-center mb-6 not-italic">
									<div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
										<img className="mr-4 w-16 h-16 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="Jese Leos" />
										<div>
											<a href="#" rel="author" className="text-xl font-bold text-gray-900 dark:text-white">John Doe</a>
											<p className="text-base text-gray-500 dark:text-gray-400">Content Writer, Webtoolmatter</p>
											<p className="text-base text-gray-500 dark:text-gray-400"><time pubdate datetime="2022-02-08" title="February 8th, 2022">Feb. 8, 2022</time></p>
										</div>
									</div>
								</address>
								<h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">{blog.title}</h1>
							</header>
							<div className="">
								{blog.content}
							</div>
						</article>
					</div>
				</main>
			</>
    )
}

export default Blog;