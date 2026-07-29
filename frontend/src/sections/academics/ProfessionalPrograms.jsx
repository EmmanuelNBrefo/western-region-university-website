const professionalPrograms = [

  {
    title: "Professional Development Programs",
    description:
      "Short-term and specialized programs designed to strengthen professional knowledge, workplace skills, and career advancement."
  },

  {
    title: "Continuing Education",
    description:
      "Flexible learning opportunities for individuals seeking to update their knowledge, develop new skills, or continue their education."
  },

  {
    title: "Certificate Programs",
    description:
      "Focused certificate programs that provide practical knowledge and specialized competencies in selected professional fields."
  },

  {
    title: "Executive and Leadership Education",
    description:
      "Programs designed to strengthen leadership, management, strategic thinking, and organizational development skills."
  }

];


function ProfessionalPrograms() {

  return (

    <section className="py-16 bg-gray-50">

      <div className="max-w-[1280px] mx-auto px-5">


        <div className="text-center mb-12">

          <h2 className="text-3xl md:text-4xl font-bold text-green-700">

            Professional & Continuing Education

          </h2>


          <p className="mt-4 text-gray-600 max-w-3xl mx-auto leading-7">

            Western Region University provides flexible
            professional and continuing education opportunities designed
            to support lifelong learning, career development, and
            professional growth.

          </p>

        </div>



        <div className="grid md:grid-cols-2 gap-6">


          {professionalPrograms.map((program) => (

            <div

              key={program.title}

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

                {program.title}

              </h3>


              <p className="text-gray-600 leading-7">

                {program.description}

              </p>

            </div>

          ))}


        </div>

      </div>

    </section>

  );

}


export default ProfessionalPrograms;