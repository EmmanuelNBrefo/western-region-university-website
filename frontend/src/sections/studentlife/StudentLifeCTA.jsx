import { Link } from "react-router-dom";


function StudentLifeCTA() {

  return (

    <section className="bg-green-700 text-white py-16">

      <div className="max-w-[1280px] mx-auto px-5 text-center">


        <h2 className="text-3xl md:text-4xl font-bold">

          Be Part of the WRU Community

        </h2>


        <p className="mt-5 text-green-100 max-w-3xl mx-auto leading-7">

          Discover opportunities to learn, connect, participate, lead, and
          grow as part of the Western Region University of Liberia community.

        </p>


        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">


          <Link

            to="/admissions"

            className="
              inline-block
              bg-white
              text-green-700
              px-7
              py-3
              rounded-lg
              font-semibold
              hover:bg-gray-100
              transition
            "

          >

            Explore Admissions

          </Link>


          <Link

            to="/academics"

            className="
              inline-block
              border
              border-white
              text-white
              px-7
              py-3
              rounded-lg
              font-semibold
              hover:bg-green-800
              transition
            "

          >

            Explore Academics

          </Link>


        </div>

      </div>

    </section>

  );

}


export default StudentLifeCTA;