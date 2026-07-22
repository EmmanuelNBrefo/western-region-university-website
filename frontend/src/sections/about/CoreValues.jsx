const values = [

  {
    title: "Academic Excellence",
    description:
      "We pursue high academic standards and continuous improvement in teaching, learning, and research."
  },

  {
    title: "Integrity",
    description:
      "We promote honesty, accountability, transparency, and ethical conduct in all areas of university life."
  },

  {
    title: "Innovation",
    description:
      "We encourage creativity, technology, research, and new ideas that address national and global challenges."
  },

  {
    title: "Inclusiveness",
    description:
      "We value diversity, respect, equal opportunity, and an inclusive learning environment for all."
  },

  {
    title: "Service",
    description:
      "We are committed to serving our communities and contributing to the development of Liberia."
  },

  {
    title: "Leadership",
    description:
      "We develop responsible leaders who are prepared to make meaningful contributions to society."
  }

];


function CoreValues() {

  return (

    <section className="py-16 bg-white">

      <div className="max-w-[1280px] mx-auto px-5">


        <div className="text-center mb-12">

          <h2 className="text-3xl md:text-4xl font-bold text-green-700">

            Our Core Values

          </h2>


          <p className="mt-4 text-gray-600 max-w-3xl mx-auto leading-7">

            Our core values guide the way we teach, learn, serve,
            lead, and contribute to the development of Liberia.

          </p>

        </div>



        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">


          {values.map((value) => (

            <div
              key={value.title}
              className="
                bg-gray-50
                p-6
                rounded-xl
                border
                border-gray-100
                hover:shadow-lg
                transition
              "
            >

              <h3 className="text-xl font-bold text-green-700 mb-3">

                {value.title}

              </h3>


              <p className="text-gray-600 leading-7">

                {value.description}

              </p>

            </div>

          ))}


        </div>

      </div>

    </section>

  );

}


export default CoreValues;