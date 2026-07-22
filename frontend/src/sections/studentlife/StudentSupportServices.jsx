const supportServices = [

  {
    title: "Academic Advising",
    description:
      "Academic advising helps students make informed decisions about their academic progress, courses, programs, and educational goals."
  },

  {
    title: "Student Guidance",
    description:
      "Students can receive guidance and support as they navigate their academic journey and university experience."
  },

  {
    title: "Career Development",
    description:
      "Career development support helps students prepare for future employment, professional opportunities, entrepreneurship, and continued education."
  },

  {
    title: "Technology Support",
    description:
      "Technology resources and support help students access digital tools, online learning resources, and academic technology."
  },

  {
    title: "Student Wellbeing",
    description:
      "The university promotes a supportive environment that encourages student wellbeing, personal growth, positive relationships, and academic success."
  },

];


function StudentSupportServices() {

  return (

    <section className="py-16 bg-white">

      <div className="max-w-[1280px] mx-auto px-5">


        <div className="text-center mb-12">

          <h2 className="text-3xl md:text-4xl font-bold text-green-700">

            Student Support Services

          </h2>


          <p className="mt-4 text-gray-600 max-w-3xl mx-auto leading-7">

            Western Region University of Liberia is committed to providing
            support and resources that help students succeed academically,
            personally, and professionally.

          </p>

        </div>


        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">


          {supportServices.map((service) => (

            <div

              key={service.title}

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

                {service.title}

              </h3>


              <p className="text-gray-600 leading-7">

                {service.description}

              </p>

            </div>

          ))}


        </div>

      </div>

    </section>

  );

}


export default StudentSupportServices;