const reasons = [

  {
    title: "Quality Education",
    description:
      "Access academic programs designed to develop knowledge, practical skills, professional competence, and lifelong learning."
  },

  {
    title: "Experienced Faculty",
    description:
      "Learn from dedicated faculty members committed to teaching, student development, academic excellence, and professional growth."
  },

  {
    title: "Career Preparation",
    description:
      "Develop the academic knowledge, technical skills, and professional competencies needed for employment and entrepreneurship."
  },

  {
    title: "Student Support",
    description:
      "Receive academic guidance and support designed to help students succeed throughout their university journey."
  },

  {
    title: "Leadership & Innovation",
    description:
      "Develop leadership, creativity, critical thinking, and innovation skills to contribute to Liberia and the global community."
  },

  {
    title: "Community Impact",
    description:
      "Prepare to use your education, skills, and knowledge to serve communities and contribute to national development."
  }

];


function WhyChooseWRU() {

  return (

    <section className="py-16 bg-gray-50">

      <div className="max-w-[1280px] mx-auto px-5">


        <div className="text-center mb-12">

          <h2 className="text-3xl md:text-4xl font-bold text-green-700">

            Why Choose Western Region University?

          </h2>


          <p className="mt-4 text-gray-600 max-w-3xl mx-auto leading-7">

            Choosing a university is an important decision. Western Region
            University of Liberia provides opportunities designed to support
            academic success, personal development, and professional growth.

          </p>

        </div>



        <div className="grid md:grid-cols-3 gap-6">


          {reasons.map((reason) => (

            <div

              key={reason.title}

              className="
                bg-white
                p-6
                rounded-xl
                shadow-md
                hover:shadow-xl
                transition
              "

            >

              <h3 className="text-xl font-bold text-gray-800 mb-3">

                {reason.title}

              </h3>


              <p className="text-gray-600 leading-7">

                {reason.description}

              </p>

            </div>

          ))}


        </div>

      </div>

    </section>

  );

}


export default WhyChooseWRU;