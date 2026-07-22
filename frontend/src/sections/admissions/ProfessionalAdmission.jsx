const professionalOpportunities = [

  {
    title: "Professional Programs",
    description:
      "Career-focused programs designed to develop practical knowledge and skills for professional growth and workplace success."
  },

  {
    title: "Continuing Education",
    description:
      "Opportunities for individuals to continue learning, update their knowledge, and develop new professional competencies."
  },

  {
    title: "Short Courses",
    description:
      "Focused learning opportunities designed to provide practical skills and knowledge in specific areas of interest."
  },

  {
    title: "Career Development",
    description:
      "Learning opportunities that support professional advancement, career development, and lifelong learning."
  }

];


function ProfessionalAdmission() {

  return (

    <section className="py-16 bg-gray-50">

      <div className="max-w-[1280px] mx-auto px-5">


        <div className="text-center mb-12">


          <h2 className="text-3xl md:text-4xl font-bold text-green-700">

            Professional & Continuing Education

          </h2>


          <p className="mt-4 text-gray-600 max-w-3xl mx-auto leading-7">

            Western Region University of Liberia provides opportunities for
            professional development, continuing education, short courses,
            and lifelong learning.

          </p>

        </div>



        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">


          {professionalOpportunities.map((opportunity) => (

            <div

              key={opportunity.title}

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

                {opportunity.title}

              </h3>


              <p className="text-gray-600 leading-7">

                {opportunity.description}

              </p>

            </div>

          ))}


        </div>

      </div>

    </section>

  );

}


export default ProfessionalAdmission;