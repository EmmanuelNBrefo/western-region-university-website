const academicCalendar = [

  {
    title: "First Semester",
    description:
      "The first semester includes student registration, course instruction, academic activities, and semester examinations."
  },

  {
    title: "Second Semester",
    description:
      "The second semester continues academic instruction, student learning activities, assessments, and final examinations."
  },

  {
    title: "Registration Period",
    description:
      "Students complete course registration and other academic requirements before the beginning of each semester."
  },

  {
    title: "Orientation and Student Activities",
    description:
      "New and returning students participate in orientation and academic activities designed to support successful university life."
  }

];


function AcademicCalendar() {

  return (

    <section className="py-16 bg-white">

      <div className="max-w-[1280px] mx-auto px-5">


        <div className="text-center mb-12">

          <h2 className="text-3xl md:text-4xl font-bold text-green-700">

            Academic Calendar & Important Information

          </h2>


          <p className="mt-4 text-gray-600 max-w-3xl mx-auto leading-7">

            The academic calendar provides students, faculty, and staff
            with important information about the university's academic year.

          </p>

        </div>



        <div className="grid md:grid-cols-2 gap-6">


          {academicCalendar.map((item) => (

            <div

              key={item.title}

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


export default AcademicCalendar;