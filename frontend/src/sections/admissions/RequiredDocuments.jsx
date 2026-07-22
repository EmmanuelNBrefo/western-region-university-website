const documents = [

  {
    title: "Academic Certificates",
    description:
      "Copies of relevant secondary, undergraduate, or other academic certificates required for the selected level of study."
  },

  {
    title: "Academic Transcripts",
    description:
      "Official academic records showing previous courses, subjects, grades, and academic performance."
  },

  {
    title: "Identification Document",
    description:
      "A valid identification document or other acceptable proof of identity."
  },

  {
    title: "Passport Photograph",
    description:
      "Recent passport-sized photographs where required as part of the application process."
  },

  {
    title: "Completed Application",
    description:
      "A completed university admission application containing accurate and complete applicant information."
  },

  {
    title: "Additional Documents",
    description:
      "Additional documents may be required depending on the selected academic program or admission category."
  }

];


function RequiredDocuments() {

  return (

    <section className="py-16 bg-white">

      <div className="max-w-[1280px] mx-auto px-5">


        <div className="text-center mb-12">


          <h2 className="text-3xl md:text-4xl font-bold text-green-700">

            Required Documents

          </h2>


          <p className="mt-4 text-gray-600 max-w-3xl mx-auto leading-7">

            Applicants should prepare the required documents before
            submitting an admission application. Specific requirements
            may vary depending on the academic program and level of study.

          </p>

        </div>



        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">


          {documents.map((document) => (

            <div

              key={document.title}

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

              <h3 className="text-xl font-bold text-gray-800 mb-3">

                {document.title}

              </h3>


              <p className="text-gray-600 leading-7">

                {document.description}

              </p>

            </div>

          ))}


        </div>

      </div>

    </section>

  );

}


export default RequiredDocuments;