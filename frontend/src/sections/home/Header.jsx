import Logo from "../../components/Logo";
import Navigation from "../../components/Navigation";
import ApplyButton from "../../components/ApplyButton";
import MobileMenu from "../../components/MobileMenu";


function Header() {

  return (

    <header className="bg-white shadow-md relative">


      <div className="max-w-[1280px] mx-auto px-5 py-2">


        <div className="flex items-center justify-between gap-8">


          {/* Logo */}

          <div className="flex-shrink-0">

            <Logo />

          </div>



          {/* Desktop Navigation */}

          <div className="hidden lg:block pt-5">

            <Navigation />

          </div>



          {/* Desktop Apply Button */}

          <div className="hidden lg:block pt-5">

            <ApplyButton />

          </div>



          {/* Mobile Menu */}

          <MobileMenu />


        </div>


      </div>


    </header>

  );

}


export default Header;