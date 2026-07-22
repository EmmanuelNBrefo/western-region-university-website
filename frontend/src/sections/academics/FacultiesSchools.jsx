const faculties = [

  {
    name: "Faculty of Information Technology",
    description:
      "Programs focused on computing, information systems, software development, networking, cybersecurity, and emerging technologies."
  },

  {
    name: "Faculty of Business and Management",
    description:
      "Academic programs designed to develop business leaders, entrepreneurs, administrators, and professionals."
  },

  {
    name: "Faculty of Education",
    description:
      "Programs preparing educators, teachers, administrators, and professionals committed to educational development."
  },

  {
    name: "Faculty of Health Sciences",
    description:
      "Programs focused on health education, healthcare services, public health, and community wellbeing."
  }

];


function FacultiesSchools() {

  return (

    <section className="py-16 bg-white">

      <div className="max-w-[1280px] mx-auto px-5">


        <div className="text-center mb-12">

          <h2 className="text-3xl md:text-4xl font-bold text-green-700">

            Faculties & Schools

          </h2>


          <p className="mt-4 text-gray-600 max-w-3xl mx-auto leading-7">

            Our faculties and schools provide a diverse range of
            academic disciplines and professional learning opportunities.

          </p>

        </div>



        <div className="grid md:grid-cols-2 gap-6">


          {faculties.map((faculty) => (

            <div

              key={faculty.name}

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

                {faculty.name}

              </h3>


              <p className="text-gray-600 leading-7">

                {faculty.description}

              </p>

            </div>

          ))}


        </div>

      </div>

    </section>

  );

}


export default FacultiesSchools;