import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import About from "../pages/About";
import Academics from "../pages/Academics";
import Admissions from "../pages/Admissions";
import Research from "../pages/Research";
import StudentLife from "../pages/StudentLife";
import News from "../pages/News";
import Contact from "../pages/Contact";
import StudentPortal from "../pages/StudentPortal";
import Library from "../pages/Library";
import Downloads from "../pages/Downloads";
import FeaturedNews from "../pages/FeaturedNews";
import LatestNews from "../pages/LatestNews";
import UniversityEvents from "../pages/UniversityEvents";
import Announcements from "../pages/Announcements";

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

        {/* Student Life Page */}
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

        {/* Student Portal Page */}
        <Route
          path="/student-portal"
          element={
            <MainLayout>
              <StudentPortal />
            </MainLayout>
          }
        />

        {/* Library Page */}

<Route
  path="/library"
  element={
    <MainLayout>
      <Library />
    </MainLayout>
  }
/>

{/* Downloads Page */}

<Route
  path="/downloads"
  element={
    <MainLayout>
      <Downloads />
    </MainLayout>
  }
/>

<Route
  path="/news/featured"
  element={
    <MainLayout>
      <FeaturedNews />
    </MainLayout>
  }
/>

{/* Latest News */}

<Route
  path="/news/latest"
  element={
    <MainLayout>
      <LatestNews />
    </MainLayout>
  }
/>

{/* University Events */}

<Route
  path="/news/events"
  element={
    <MainLayout>
      <UniversityEvents />
    </MainLayout>
  }
/>


{/* Announcements */}

<Route
  path="/news/announcements"
  element={
    <MainLayout>
      <Announcements />
    </MainLayout>
  }
/>



      </Routes>

    </BrowserRouter>
  );
}


export default AppRoutes;