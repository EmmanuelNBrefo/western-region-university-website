import logo from "../assets/logo.png";


function Logo() {

  return (

    <div className="flex min-w-0 items-center gap-2 sm:gap-3">


      <img
        src={logo}
        alt="Western Region University of Liberia Logo"
        className="
          h-14
          w-14
          sm:h-16
          sm:w-16
          lg:h-24
          lg:w-auto
          flex-shrink-0
          object-contain
        "
      />


      <div className="min-w-0 leading-tight">


        <h1
          className="
            text-sm
            leading-tight
            sm:text-base
            md:text-2xl
            lg:text-2xl
            font-bold
            text-green-700
            whitespace-normal
            break-words
          "
        >

          Western Region University of Liberia

        </h1>


        <p
          className="
            hidden
            sm:block
            text-xs
            md:text-sm
            text-gray-600
            mt-1
          "
        >

          Transforming Education Through Innovation

        </p>


      </div>


    </div>

  );

}


export default Logo;