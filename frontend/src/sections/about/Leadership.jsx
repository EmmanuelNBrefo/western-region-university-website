const leaders = [

  {
    name: "University President",
    position: "President",
    image: "/src/assets/logo.png"
  },

  {
    name: "Vice President for Academic Affairs",
    position: "Vice President for Academic Affairs",
    image: "/src/assets/logo.png"
  },

  {
    name: "Vice President for Administration",
    position: "Vice President for Administration",
    image: "/src/assets/logo.png"
  },

  {
    name: "Registrar",
    position: "Registrar",
    image: "/src/assets/logo.png"
  }

];


function Leadership() {

  return (

    <section className="py-16 bg-gray-50">

      <div className="max-w-[1280px] mx-auto px-5">


        <div className="text-center mb-12">

          <h2 className="text-3xl md:text-4xl font-bold text-green-700">

            University Leadership

          </h2>


          <p className="mt-4 text-gray-600 max-w-3xl mx-auto leading-7">

            Meet the leaders committed to guiding Western Region
            University of Liberia toward academic excellence,
            innovation, and national development.

          </p>

        </div>



        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">


          {leaders.map((leader) => (

            <div
              key={leader.position}
              className="
                bg-white
                rounded-xl
                shadow-md
                overflow-hidden
                hover:shadow-xl
                transition
              "
            >


              <div className="h-56 bg-green-100 flex items-center justify-center">

                <img
                  src={leader.image}
                  alt={leader.name}
                  className="h-40 w-40 object-contain"
                />

              </div>


              <div className="p-5 text-center">

                <h3 className="text-lg font-bold text-gray-800">

                  {leader.name}

                </h3>


                <p className="mt-2 text-green-700 font-medium text-sm">

                  {leader.position}

                </p>

              </div>


            </div>

          ))}


        </div>

      </div>

    </section>

  );

}


export default Leadership;