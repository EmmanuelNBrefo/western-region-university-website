const academicResources = [

  {
    title: "Student Academic Support",

    description:
      "Access academic guidance, advising, and support services designed to help students succeed throughout their university journey."

  },


  {
    title: "Library & Learning Resources",

    description:
      "Students have access to learning materials, research resources, and other academic tools that support teaching and learning."

  },


  {
    title: "Course Registration",

    description:
      "Students complete course registration and manage their academic enrollment according to university academic procedures."

  },


  {
    title: "Academic Advising",

    description:
      "Academic advising helps students make informed decisions about programs, courses, academic progress, and career development."

  },


  {
    title: "Examinations & Assessment",

    description:
      "Students receive important information about academic assessments, examinations, schedules, and related academic procedures."

  },


  {
    title: "Academic Policies",

    description:
      "University academic policies provide guidance on academic standards, student responsibilities, assessment, and academic progression."

  }

];


function AcademicResources() {

  return (

    <section className="py-16 bg-white">

      <div className="max-w-[1280px] mx-auto px-5">


        <div className="text-center mb-12">

          <h2 className="text-3xl md:text-4xl font-bold text-green-700">

            Student Academic Resources

          </h2>


          <p className="mt-4 text-gray-600 max-w-3xl mx-auto leading-7">

            Western Region University of Liberia provides academic resources
            and support services to help students achieve their educational
            goals and succeed in their academic programs.

          </p>

        </div>



        <div className="grid md:grid-cols-3 gap-6">


          {academicResources.map((resource) => (

            <div

              key={resource.title}

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

                {resource.title}

              </h3>


              <p className="text-gray-600 leading-7">

                {resource.description}

              </p>

            </div>

          ))}


        </div>

      </div>

    </section>

  );

}


export default AcademicResources;