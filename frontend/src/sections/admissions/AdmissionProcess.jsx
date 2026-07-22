const admissionSteps = [

  {
    number: "01",
    title: "Explore Programs",
    description:
      "Explore the academic programs offered by Western Region University of Liberia and identify the program that matches your educational and career goals."
  },

  {
    number: "02",
    title: "Review Requirements",
    description:
      "Review the admission requirements and prepare the necessary academic documents and supporting information."
  },

  {
    number: "03",
    title: "Submit Application",
    description:
      "Complete and submit your application together with the required documents within the designated application period."
  },

  {
    number: "04",
    title: "Application Review",
    description:
      "The university reviews submitted applications and supporting documents according to the requirements of the selected program."
  },

  {
    number: "05",
    title: "Admission Decision",
    description:
      "Qualified applicants receive information about the outcome of their admission application."
  },

  {
    number: "06",
    title: "Complete Enrollment",
    description:
      "Admitted students complete the required enrollment, registration, and other procedures before beginning their academic journey."
  }

];


function AdmissionProcess() {

  return (

    <section className="py-16 bg-white">

      <div className="max-w-[1280px] mx-auto px-5">


        <div className="text-center mb-12">

          <h2 className="text-3xl md:text-4xl font-bold text-green-700">

            Admission Process

          </h2>


          <p className="mt-4 text-gray-600 max-w-3xl mx-auto leading-7">

            Our admission process is designed to guide prospective students
            through each important step toward joining Western Region
            University of Liberia.

          </p>

        </div>



        <div className="grid md:grid-cols-3 gap-6">


          {admissionSteps.map((step) => (

            <div

              key={step.number}

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

              <div className="text-3xl font-bold text-green-700 mb-4">

                {step.number}

              </div>


              <h3 className="text-xl font-bold text-gray-800 mb-3">

                {step.title}

              </h3>


              <p className="text-gray-600 leading-7">

                {step.description}

              </p>

            </div>

          ))}


        </div>

      </div>

    </section>

  );

}


export default AdmissionProcess;