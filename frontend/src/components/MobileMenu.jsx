import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";


const menuItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Academics", path: "/academics" },
  { name: "Admissions", path: "/admissions" },
  { name: "Research", path: "/research" },
  { name: "News", path: "/news" },
  { name: "Contact", path: "/contact" },
];


function MobileMenu() {

  const [open, setOpen] = useState(false);


  const closeMenu = () => {

    setOpen(false);

  };


  return (

    <div className="relative lg:hidden">


      {/* Menu Button */}

      <button

        type="button"

        onClick={() => setOpen(!open)}

        aria-label={open ? "Close navigation menu" : "Open navigation menu"}

        aria-expanded={open}

        className="
          flex
          items-center
          justify-center
          w-10
          h-10
          text-xl
          sm:text-2xl
          text-green-700
          rounded-lg
          hover:bg-green-50
          transition
        "

      >

        {open ? <FaTimes /> : <FaBars />}

      </button>



      {/* Mobile Menu */}

      {open && (

        <div

          className="
            absolute
            right-0
            top-full
            mt-3
            w-[calc(100vw-2rem)]
            max-w-sm
            bg-white
            border
            border-gray-100
            rounded-xl
            shadow-xl
            z-50
            overflow-hidden
          "

        >

          <nav className="max-h-[calc(100vh-6rem)] overflow-y-auto">

            <ul className="flex flex-col p-3 sm:p-4 gap-1">


              {menuItems.map((item) => (

                <li key={item.name}>

                  <Link

                    to={item.path}

                    onClick={closeMenu}

                    className="
                      block
                      w-full
                      px-4
                      py-3
                      text-sm
                      sm:text-base
                      font-medium
                      text-gray-700
                      rounded-lg
                      hover:bg-green-50
                      hover:text-green-700
                      transition
                    "

                  >

                    {item.name}

                  </Link>

                </li>

              ))}


            </ul>

          </nav>

        </div>

      )}


    </div>

  );

}


export default MobileMenu;