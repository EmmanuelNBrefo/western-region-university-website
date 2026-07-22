import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";


function Footer() {

  return (

    <footer className="bg-gray-900 text-gray-300">


      <div className="max-w-[1280px] mx-auto px-5 py-14">


        <div className="grid md:grid-cols-4 gap-10">


          {/* University Info */}

          <div>

            <h2 className="text-white text-xl font-bold mb-5">

              Western Region University of Liberia

            </h2>


            <p className="text-sm leading-7">

              Transforming Education Through Innovation.
              Building future leaders through quality education,
              research, and technology.

            </p>


          </div>



          {/* Quick Links */}

          <div>

            <h3 className="text-white font-bold mb-5">

              Quick Links

            </h3>


            <ul className="space-y-3 text-sm">

  <li>

    <Link
      to="/about"
      className="hover:text-white transition"
    >

      About Us

    </Link>

  </li>


  <li>

    <Link
      to="/admissions"
      className="hover:text-white transition"
    >

      Admissions

    </Link>

  </li>


  <li>

    <Link
      to="/academics"
      className="hover:text-white transition"
    >

      Academic Programs

    </Link>

  </li>


  <li>

    <Link
      to="/research"
      className="hover:text-white transition"
    >

      Research

    </Link>

  </li>


  <li>

    <Link
      to="/student-life"
      className="hover:text-white transition"
    >

      Student Life

    </Link>

  </li>


  <li>

    <Link
      to="/contact"
      className="hover:text-white transition"
    >

      Contact

    </Link>

  </li>

</ul>


          </div>



          {/* Student Links */}

          <div>

            <h3 className="text-white font-bold mb-5">

              Student Services

            </h3>


            <ul className="space-y-3 text-sm">

              <li>Student Portal</li>

              <li>Library</li>

              <li>Academic Calendar</li>

              <li>Downloads</li>

              <li>Online Application</li>

            </ul>


          </div>



          {/* Contact */}

          <div>

            <h3 className="text-white font-bold mb-5">

              Contact Us

            </h3>


            <div className="space-y-4 text-sm">


              <p className="flex gap-3 items-center">

                <FaMapMarkerAlt />

                Tubmanburg, Bomi County, Liberia

              </p>


              <p className="flex gap-3 items-center">

                <FaPhoneAlt />

                +231 77 000 0000

              </p>


              <p className="flex gap-3 items-center">

                <FaEnvelope />

                info@wrul.edu.lr

              </p>


            </div>


          </div>


        </div>


      </div>



      {/* Bottom Footer */}


      <div className="border-t border-gray-700">


        <div className="
        max-w-[1280px]
        mx-auto
        px-5
        py-5
        flex
        flex-col
        md:flex-row
        justify-between
        items-center
        gap-4
        ">


          <p className="text-sm">

            © 2026 Western Region University of Liberia.
            All Rights Reserved. Coded by: Emmanuel Nyuah Brefo

          </p>



          <div className="flex gap-5 text-lg">


            <FaFacebookF />

            <FaLinkedinIn />

            <FaYoutube />


          </div>


        </div>


      </div>


    </footer>

  );

}


export default Footer;