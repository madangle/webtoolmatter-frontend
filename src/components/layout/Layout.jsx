import Header from "./Header";
import Footer from "./Footer";
import Newsletter from "./Newsletter";

function Layout({ children }) {
  return (
    <>
      <Header />
        <main className="max-w-7xl mx-auto px-4 py-8 min-h-screen">
          {children}
        </main>
      {/* <Newsletter /> */}
      <Footer />
    </>
  );
}

export default Layout;
