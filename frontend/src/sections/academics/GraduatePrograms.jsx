const graduatePrograms = [

  {
    faculty: "Graduate Studies in Information Technology",
    programs: [
      "Master of Science in Information Technology",
      "Master of Science in Computer Science",
      "Master of Science in Cybersecurity",
      "Master of Science in Information Systems"
    ]
  },

  {
    faculty: "Graduate Studies in Business and Management",
    programs: [
      "Master of Business Administration (MBA)",
      "Master of Science in Management",
      "Master of Science in Accounting and Finance",
      "Master of Science in Entrepreneurship"
    ]
  },

  {
    faculty: "Graduate Studies in Education",
    programs: [
      "Master of Science in Education",
      "Master of Education",
      "Master of Arts in Educational Leadership",
      "Master of Science in Educational Administration"
    ]
  },

  {
    faculty: "Graduate Studies in Health Sciences",
    programs: [
      "Master of Public Health",
      "Master of Science in Health Administration",
      "Master of Science in Community Health",
      "Master of Science in Health Policy and Management"
    ]
  }

];


function GraduatePrograms() {

  return (

    <section className="py-16 bg-white">

      <div className="max-w-[1280px] mx-auto px-5">


        <div className="text-center mb-12">

          <h2 className="text-3xl md:text-4xl font-bold text-green-700">

            Graduate Programs

          </h2>


          <p className="mt-4 text-gray-600 max-w-3xl mx-auto leading-7">

            Our graduate programs provide advanced academic study,
            professional specialization, research opportunities, and
            leadership development for professionals and advanced learners.

          </p>

        </div>



        <div className="grid md:grid-cols-2 gap-6">


          {graduatePrograms.map((faculty) => (

            <div

              key={faculty.faculty}

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

              <h3 className="text-xl font-bold text-gray-800 mb-4">

                {faculty.faculty}

              </h3>


              <ul className="space-y-3">


                {faculty.programs.map((program) => (

                  <li

                    key={program}

                    className="flex items-start gap-3 text-gray-600"

                  >

                    <span className="text-green-700 font-bold">

                      ✓

                    </span>


                    <span>

                      {program}

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


export default GraduatePrograms;