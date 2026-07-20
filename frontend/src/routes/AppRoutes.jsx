import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Hero from "../sections/home/Hero";
import Introduction from "../sections/home/Introduction";
import Faculties from "../sections/home/Faculties";
import WhyChoose from "../sections/home/WhyChoose";
import Programs from "../sections/home/Programs";
import News from "../sections/home/News";
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

      <Programs />

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


        <Route

          path="/"

          element={

            <MainLayout>

              <Home />

            </MainLayout>

          }

        />


      </Routes>

    </BrowserRouter>

  );

}



export default AppRoutes;