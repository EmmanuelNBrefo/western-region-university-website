const admissionRequirements = [

  {
    title: "Undergraduate Admission",

    requirements: [
      "Completed secondary school education",
      "Valid secondary school certificate or equivalent qualification",
      "Completed university application form",
      "Required academic transcripts and supporting documents"
    ]

  },


  {
    title: "Graduate Admission",

    requirements: [
      "Completed recognized undergraduate degree",
      "Official academic transcripts",
      "Completed graduate application form",
      "Additional program-specific requirements where applicable"
    ]

  },


  {
    title: "Professional & Continuing Education",

    requirements: [
      "Relevant educational or professional background",
      "Completed application form",
      "Required identification and supporting documents",
      "Program-specific requirements where applicable"
    ]

  }

];


function AdmissionRequirements() {

  return (

    <section className="py-16 bg-gray-50">

      <div className="max-w-[1280px] mx-auto px-5">


        <div className="text-center mb-12">

          <h2 className="text-3xl md:text-4xl font-bold text-green-700">

            Admission Requirements

          </h2>


          <p className="mt-4 text-gray-600 max-w-3xl mx-auto leading-7">

            Admission requirements may vary according to the level and
            program of study. Applicants should ensure that all required
            documents are submitted during the application process.

          </p>

        </div>



        <div className="grid md:grid-cols-3 gap-6">


          {admissionRequirements.map((category) => (

            <div

              key={category.title}

              className="
                bg-white
                p-6
                rounded-xl
                shadow-md
                hover:shadow-xl
                transition
              "

            >

              <h3 className="text-xl font-bold text-gray-800 mb-4">

                {category.title}

              </h3>


              <ul className="space-y-3">


                {category.requirements.map((requirement) => (

                  <li

                    key={requirement}

                    className="flex items-start gap-3 text-gray-600"

                  >

                    <span className="text-green-700 font-bold">

                      ✓

                    </span>


                    <span>

                      {requirement}

                    </span>

                  </li>

                ))}


              </ul>

            </div>

          ))}


        </div>

      </div>

    </section>

  );

}


export default AdmissionRequirements;