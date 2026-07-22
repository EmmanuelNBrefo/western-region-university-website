function ResearchCTA() {

  return (

    <section className="bg-green-700 text-white py-16">

      <div className="max-w-[1280px] mx-auto px-5 text-center">


        <h2 className="text-3xl md:text-4xl font-bold">

          Discover Research & Innovation at WRU

        </h2>


        <p className="mt-5 text-green-100 max-w-3xl mx-auto leading-7">

          Explore opportunities to learn, research, innovate, collaborate,
          and contribute to the development of Liberia and the global community.

        </p>



        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">


          <a

            href="/academics"

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

            Explore Academics

          </a>



          <a

            href="/contact"

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

            Contact the University

          </a>


        </div>

      </div>

    </section>

  );

}


export default ResearchCTA;