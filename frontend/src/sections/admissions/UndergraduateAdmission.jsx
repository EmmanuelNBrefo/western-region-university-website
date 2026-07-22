const undergraduateRequirements = [

  "Completed secondary school education",

  "Valid secondary school certificate or equivalent qualification",

  "Official academic transcripts or school records",

  "Completed university admission application",

  "Valid identification and required supporting documents",

  "Meeting the specific requirements of the selected academic program"

];


function UndergraduateAdmission() {

  return (

    <section className="py-16 bg-gray-50">

      <div className="max-w-[1280px] mx-auto px-5">


        <div className="grid lg:grid-cols-2 gap-10 items-center">


          <div>


            <h2 className="text-3xl md:text-4xl font-bold text-green-700">

              Undergraduate Admission

            </h2>


            <p className="mt-5 text-gray-600 leading-8">

              Undergraduate admission at Western Region University of
              Liberia provides students with the opportunity to begin their
              higher education journey and develop the knowledge, skills,
              and professional competencies needed for future success.

            </p>


            <p className="mt-4 text-gray-600 leading-8">

              Applicants should review the requirements for their selected
              program and submit all required documents during the application
              process.

            </p>

          </div>



          <div className="bg-white p-6 rounded-xl shadow-md">


            <h3 className="text-2xl font-bold text-gray-800 mb-5">

              General Requirements

            </h3>


            <ul className="space-y-4">


              {undergraduateRequirements.map((requirement) => (

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

        </div>

      </div>

    </section>

  );

}


export default UndergraduateAdmission;