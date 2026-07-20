import Header from "../sections/home/Header";
import Footer from "../components/Footer";


function MainLayout({ children }) {

  return (

    <>

      <Header />

      <main>
        {children}
      </main>

      <Footer />

    </>

  );

}


export default MainLayout;