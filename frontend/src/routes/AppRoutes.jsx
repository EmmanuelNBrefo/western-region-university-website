import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import About from "../pages/About";
import Academics from "../pages/Academics";
import Admissions from "../pages/Admissions";
import Research from "../pages/Research";
import StudentLife from "../pages/StudentLife";
import News from "../pages/News";
import Contact from "../pages/Contact";

import Hero from "../sections/home/Hero";
import Introduction from "../sections/home/Introduction";
import Faculties from "../sections/home/Faculties";
import WhyChoose from "../sections/home/WhyChoose";
import HomePrograms from "../sections/home/Programs";

import Gallery from "../sections/home/Gallery";
import Testimonials from "../sections/home/Testimonials";
import CTA from "../sections/home/CTA";


function Home() {

  return (

    <>

      <Hero />

      <Introduction />

      <Faculties />

      <WhyChoose />

      <HomePrograms />

      <News />

      <Gallery />

      <Testimonials />

      <CTA />

    </>

  );

}


function AppRoutes() {

  return (

    <BrowserRouter>

      <Routes>


        {/* Homepage */}

        <Route

          path="/"

          element={

            <MainLayout>

              <Home />

            </MainLayout>

          }

        />


        {/* About Page */}

        <Route

          path="/about"

          element={

            <MainLayout>

              <About />

            </MainLayout>

          }

        />


        {/* Academics Page */}

        <Route

          path="/academics"

          element={

            <MainLayout>

              <Academics />

            </MainLayout>

          }

        />


        {/* Admissions Page */}

        <Route

          path="/admissions"

          element={

            <MainLayout>

              <Admissions />

            </MainLayout>

          }

        />


        {/* Research Page */}

        <Route

          path="/research"

          element={

            <MainLayout>

              <Research />

            </MainLayout>

          }

        />

        <Route
  path="/student-life"
  element={
    <MainLayout>
      <StudentLife />
    </MainLayout>
  }
/>
{/* News Page */}

<Route

  path="/news"

  element={

    <MainLayout>

      <News />

    </MainLayout>

  }

/>

{/* Contact Page */}

<Route

  path="/contact"

  element={

    <MainLayout>

      <Contact />

    </MainLayout>

  }

/>



      </Routes>

    </BrowserRouter>

  );

}


export default AppRoutes;