import Logo from "../../components/Logo";
import Navigation from "../../components/Navigation";
import ApplyButton from "../../components/ApplyButton";
import MobileMenu from "../../components/MobileMenu";


function Header() {

  return (

    <header className="relative w-full bg-white shadow-md">

      <div className="w-full max-w-[1280px] mx-auto px-3 sm:px-5 py-2">

        <div className="flex w-full min-w-0 items-center justify-between gap-2 sm:gap-4 lg:gap-8">


          {/* Logo */}

          <div className="min-w-0 flex-1 lg:flex-none">

            <Logo />

          </div>


          {/* Desktop Navigation */}

          <div className="hidden lg:block pt-5 flex-shrink-0">

            <Navigation />

          </div>


          {/* Desktop Apply Button */}

          <div className="hidden lg:block pt-5 flex-shrink-0">

            <ApplyButton />

          </div>


          {/* Mobile Menu */}

          <div className="flex-shrink-0">

            <MobileMenu />

          </div>


        </div>

      </div>

    </header>

  );

}


export default Header;