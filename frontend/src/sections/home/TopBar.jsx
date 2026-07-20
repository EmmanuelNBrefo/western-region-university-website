import Container from "../../components/Container";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

function TopBar() {
  return (
    <div className="bg-green-700 text-white text-sm">
      <Container>
        <div className="py-3 flex flex-col md:flex-row justify-between items-center gap-3">
          {/* Contact Information */}
          <div className="flex flex-wrap justify-center gap-5">
            <span className="flex items-center gap-2">
              <FaPhoneAlt className="text-yellow-400" />
              +231 77 000 0000
            </span>

            <span className="flex items-center gap-2">
              <FaEnvelope className="text-yellow-400" />
              info@wrul.edu.lr
            </span>

            <span className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-yellow-400" />
              Tubmanburg, Liberia
            </span>
          </div>

          {/* Office Hours & Social Media */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <span className="flex items-center gap-2">
              <FaClock className="text-yellow-400" />
              Mon - Fri | 8:00 AM - 5:00 PM
            </span>

            <a
              href="#"
              aria-label="Facebook"
              className="transition-colors duration-300 hover:text-yellow-400"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              aria-label="LinkedIn"
              className="transition-colors duration-300 hover:text-yellow-400"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="#"
              aria-label="YouTube"
              className="transition-colors duration-300 hover:text-yellow-400"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default TopBar;