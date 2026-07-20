import logo from "../assets/logo.png";


function Logo() {

  return (

    <div className="flex items-center gap-4 -mt-2">


      <img
        src={logo}
        alt="Western Region University of Liberia Logo"
        className="h-24 w-auto object-contain"
      />


      <div className="leading-tight">


        <h1
          className="
          text-xl
          md:text-2xl
          font-bold
          text-green-700
          whitespace-nowrap
          "
        >

          Western Region University of Liberia

        </h1>



        <p
          className="
          text-sm
          text-gray-600
          hidden
          md:block
          "
        >

          Transforming Education Through Innovation

        </p>


      </div>


    </div>

  );

}


export default Logo;