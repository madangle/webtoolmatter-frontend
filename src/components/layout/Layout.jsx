import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <>
      <Header />
        <main className="max-w-7xl mx-auto px-4 py-8 min-h-screen">
          {children}
        </main>
      <Footer />
    </>
  );
}

export default Layout;
