const governanceBodies = [

  {
    title: "Board of Trustees",

    description:
      "Provides strategic oversight and supports the long-term development and institutional direction of the university."
  },

  {
    title: "University Administration",

    description:
      "Provides executive leadership and manages the day-to-day academic, administrative, and operational affairs of the university."
  },

  {
    title: "Academic Senate",

    description:
      "Provides academic leadership and oversight of teaching, learning, academic programs, research, and academic standards."
  },

  {
    title: "Faculties and Departments",

    description:
      "Deliver academic programs, support teaching and research, and provide specialized knowledge and professional development."
  }

];


function Governance() {

  return (

    <section className="py-16 bg-white">

      <div className="max-w-[1280px] mx-auto px-5">


        <div className="text-center mb-12">

          <h2 className="text-3xl md:text-4xl font-bold text-green-700">

            University Governance

          </h2>


          <p className="mt-4 text-gray-600 max-w-3xl mx-auto leading-7">

            Western Region University of Liberia is guided by a
            structured governance system that promotes accountability,
            academic quality, effective leadership, and institutional
            development.

          </p>

        </div>



        <div className="grid md:grid-cols-2 gap-6">


          {governanceBodies.map((body, index) => (

            <div
              key={body.title}
              className="
                flex
                gap-5
                bg-gray-50
                p-6
                rounded-xl
                border
                border-gray-100
                hover:shadow-lg
                transition
              "
            >


              <div
                className="
                  flex
                  items-center
                  justify-center
                  w-12
                  h-12
                  rounded-full
                  bg-green-700
                  text-white
                  font-bold
                  flex-shrink-0
                "
              >

                {index + 1}

              </div>


              <div>

                <h3 className="text-xl font-bold text-gray-800 mb-2">

                  {body.title}

                </h3>


                <p className="text-gray-600 leading-7">

                  {body.description}

                </p>

              </div>


            </div>

          ))}


        </div>

      </div>

    </section>

  );

}


export default Governance;