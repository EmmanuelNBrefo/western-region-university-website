const applicationInformation = [

  {
    title: "Choose Your Program",
    description:
      "Review the academic programs available and select a program that matches your educational interests and career goals."
  },

  {
    title: "Prepare Your Documents",
    description:
      "Prepare all required academic certificates, transcripts, identification, photographs, and other supporting documents."
  },

  {
    title: "Provide Accurate Information",
    description:
      "Ensure that all information provided in the application is complete, accurate, and consistent with your official documents."
  },

  {
    title: "Submit Your Application",
    description:
      "Submit your completed application and required supporting documents according to the university's application procedures."
  },

  {
    title: "Await Application Review",
    description:
      "Submitted applications are reviewed according to the admission requirements of the selected academic program."
  },

  {
    title: "Contact Admissions",
    description:
      "Prospective students may contact the university for additional information and guidance regarding the admission process."
  }

];


function ApplicationInformation() {

  return (

    <section className="py-16 bg-gray-50">

      <div className="max-w-[1280px] mx-auto px-5">


        <div className="text-center mb-12">


          <h2 className="text-3xl md:text-4xl font-bold text-green-700">

            Application Information

          </h2>


          <p className="mt-4 text-gray-600 max-w-3xl mx-auto leading-7">

            Prospective students should carefully review the admission
            information and prepare all necessary documents before
            submitting an application to Western Region University of Liberia.

          </p>

        </div>



        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">


          {applicationInformation.map((item) => (

            <div

              key={item.title}

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

                {item.title}

              </h3>


              <p className="text-gray-600 leading-7">

                {item.description}

              </p>

            </div>

          ))}


        </div>

      </div>

    </section>

  );

}


export default ApplicationInformation;