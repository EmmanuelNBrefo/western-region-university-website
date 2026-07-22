function MissionVision() {

  return (

    <section className="py-16 bg-gray-50">

      <div className="max-w-[1280px] mx-auto px-5">


        <div className="text-center mb-12">

          <h2 className="text-3xl md:text-4xl font-bold text-green-700">

            Our Mission & Vision

          </h2>

          <p className="mt-4 text-gray-600 max-w-3xl mx-auto leading-7">

            Our mission and vision guide our commitment to academic
            excellence, innovation, service, and national development.

          </p>

        </div>


        <div className="grid md:grid-cols-2 gap-8">


          {/* Mission */}

          <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-green-700">

            <h3 className="text-2xl font-bold text-green-700 mb-5">

              Our Mission

            </h3>


            <p className="text-gray-600 leading-8">

              To provide accessible, quality, and innovative higher
              education that develops knowledgeable, skilled, ethical,
              and socially responsible graduates who contribute to
              Liberia's development and the global community.

            </p>

          </div>



          {/* Vision */}

          <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-green-700">

            <h3 className="text-2xl font-bold text-green-700 mb-5">

              Our Vision

            </h3>


            <p className="text-gray-600 leading-8">

              To become a leading government-sponsored university in
              Liberia, recognized for academic excellence, innovation,
              research, technology, and its contribution to sustainable
              national development.

            </p>

          </div>


        </div>

      </div>

    </section>

  );

}


export default MissionVision;