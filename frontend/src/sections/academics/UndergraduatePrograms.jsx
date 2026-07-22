const undergraduatePrograms = [

  {
    faculty: "Faculty of Information Technology",
    programs: [
      "Bachelor of Science in Information Technology",
      "Bachelor of Science in Computer Science",
      "Bachelor of Science in Cybersecurity"
    ]
  },

  {
    faculty: "Faculty of Business and Management",
    programs: [
      "Bachelor of Business Administration",
      "Bachelor of Science in Accounting",
      "Bachelor of Science in Management"
    ]
  },

  {
    faculty: "Faculty of Education",
    programs: [
      "Bachelor of Science in Education",
      "Bachelor of Arts in Education",
      "Bachelor of Science in Educational Administration"
    ]
  },

  {
    faculty: "Faculty of Health Sciences",
    programs: [
      "Bachelor of Science in Public Health",
      "Bachelor of Science in Health Administration",
      "Bachelor of Science in Community Health"
    ]
  }

];


function UndergraduatePrograms() {

  return (

    <section className="py-16 bg-gray-50">

      <div className="max-w-[1280px] mx-auto px-5">


        <div className="text-center mb-12">

          <h2 className="text-3xl md:text-4xl font-bold text-green-700">

            Undergraduate Programs

          </h2>


          <p className="mt-4 text-gray-600 max-w-3xl mx-auto leading-7">

            Our undergraduate programs provide students with strong
            academic foundations, professional knowledge, practical skills,
            and opportunities for personal and professional development.

          </p>

        </div>



        <div className="grid md:grid-cols-2 gap-6">


          {undergraduatePrograms.map((faculty) => (

            <div

              key={faculty.faculty}

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


export default UndergraduatePrograms;