const facilities = [

  {
    title: "Library & Learning Spaces",
    description:
      "Learning spaces and library resources support academic study, reading, research, collaboration, and independent learning."
  },

  {
    title: "Computer & Technology Facilities",
    description:
      "Computer and technology facilities provide students with access to digital tools and resources that support learning, research, and academic work."
  },

  {
    title: "Student Gathering Spaces",
    description:
      "Student gathering spaces provide opportunities for students to meet, connect, socialize, collaborate, and build relationships."
  },

  {
    title: "Sports & Recreation Facilities",
    description:
      "Sports and recreation facilities support physical activity, teamwork, fitness, wellness, and a balanced student experience."
  },

  {
    title: "Academic & Collaborative Spaces",
    description:
      "Academic and collaborative spaces encourage discussion, teamwork, group activities, creativity, and knowledge sharing."
  },

  {
    title: "Safe Campus Environment",
    description:
      "The university is committed to developing a safe, welcoming, and supportive environment where students can learn and participate confidently."
  },

];


function CampusFacilities() {

  return (

    <section className="py-16 bg-gray-50">

      <div className="max-w-[1280px] mx-auto px-5">


        <div className="text-center mb-12">

          <h2 className="text-3xl md:text-4xl font-bold text-green-700">

            Campus Facilities

          </h2>


          <p className="mt-4 text-gray-600 max-w-3xl mx-auto leading-7">

            Western Region University of Liberia continues to provide and
            develop facilities that support learning, student engagement,
            collaboration, recreation, and university life.

          </p>

        </div>


        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">


          {facilities.map((facility) => (

            <div

              key={facility.title}

              className="
                bg-white
                p-6
                rounded-xl
                border
                border-gray-100
                hover:shadow-lg
                transition
              "

            >

              <h3 className="text-xl font-bold text-gray-800 mb-3">

                {facility.title}

              </h3>


              <p className="text-gray-600 leading-7">

                {facility.description}

              </p>

            </div>

          ))}


        </div>

      </div>

    </section>

  );

}


export default CampusFacilities;