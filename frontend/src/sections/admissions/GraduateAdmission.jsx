const graduateRequirements = [

  "Completed a recognized undergraduate degree",

  "Official academic transcripts",

  "Completed graduate admission application",

  "Valid identification and required supporting documents",

  "Meeting the specific requirements of the selected graduate program",

  "Additional academic or professional requirements where applicable"

];


function GraduateAdmission() {

  return (

    <section className="py-16 bg-white">

      <div className="max-w-[1280px] mx-auto px-5">


        <div className="grid lg:grid-cols-2 gap-10 items-center">


          <div className="order-2 lg:order-1 bg-gray-50 p-6 rounded-xl border border-gray-100">


            <h3 className="text-2xl font-bold text-gray-800 mb-5">

              General Requirements

            </h3>


            <ul className="space-y-4">


              {graduateRequirements.map((requirement) => (

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



          <div className="order-1 lg:order-2">


            <h2 className="text-3xl md:text-4xl font-bold text-green-700">

              Graduate Admission

            </h2>


            <p className="mt-5 text-gray-600 leading-8">

              Graduate education provides opportunities for advanced study,
              professional specialization, research, and continued academic
              development.

            </p>


            <p className="mt-4 text-gray-600 leading-8">

              Applicants should review the requirements for their selected
              graduate program and submit all required academic and supporting
              documents during the application process.

            </p>

          </div>

        </div>

      </div>

    </section>

  );

}


export default GraduateAdmission;