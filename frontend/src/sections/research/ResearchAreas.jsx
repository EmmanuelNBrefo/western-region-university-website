const researchAreas = [

  {
    title: "Information Technology & Computing",
    description:
      "Research in software development, information systems, cybersecurity, networking, artificial intelligence, data science, and emerging technologies."
  },

  {
    title: "Business & Entrepreneurship",
    description:
      "Research focused on entrepreneurship, business development, management, finance, innovation, and economic growth."
  },

  {
    title: "Education",
    description:
      "Research addressing teaching and learning, educational leadership, curriculum development, technology in education, and educational policy."
  },

  {
    title: "Health Sciences",
    description:
      "Research focused on public health, healthcare services, community wellbeing, health education, and related health challenges."
  },

  {
    title: "Agriculture & Environment",
    description:
      "Research exploring agriculture, environmental sustainability, natural resources, climate challenges, and community development."
  },

  {
    title: "Social Sciences & Community Development",
    description:
      "Research addressing society, culture, governance, community development, social challenges, and national development."
  }

];


function ResearchAreas() {

  return (

    <section className="py-16 bg-gray-50">

      <div className="max-w-[1280px] mx-auto px-5">


        <div className="text-center mb-12">


          <h2 className="text-3xl md:text-4xl font-bold text-green-700">

            Research Areas

          </h2>


          <p className="mt-4 text-gray-600 max-w-3xl mx-auto leading-7">

            Western Region University encourages research across
            diverse academic and professional disciplines that contribute to
            knowledge, innovation, and national development.

          </p>

        </div>



        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">


          {researchAreas.map((area) => (

            <div

              key={area.title}

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

                {area.title}

              </h3>


              <p className="text-gray-600 leading-7">

                {area.description}

              </p>

            </div>

          ))}


        </div>

      </div>

    </section>

  );

}


export default ResearchAreas;