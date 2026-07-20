import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";


const menuItems = [
  "Home",
  "About",
  "Academics",
  "Admissions",
  "Research",
  "News",
  "Contact",
];


function MobileMenu() {

  const [open, setOpen] = useState(false);


  return (

    <div className="lg:hidden">


      {/* Menu Button */}

      <button
        onClick={() => setOpen(!open)}
        className="text-2xl text-green-700"
      >

        {open ? <FaTimes /> : <FaBars />}

      </button>



      {/* Mobile Menu */}

      {open && (

        <div className="absolute left-0 top-full w-full bg-white shadow-lg">

          <ul className="flex flex-col p-5 gap-4">


            {menuItems.map((item) => (

              <li key={item}>

                <a
                  href="#"
                  className="font-medium text-gray-700 hover:text-green-700"
                >
                  {item}
                </a>

              </li>

            ))}


          </ul>

        </div>

      )}


    </div>

  );

}


export default MobileMenu;