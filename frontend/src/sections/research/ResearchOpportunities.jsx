const researchOpportunities = [

  {
    title: "Faculty Research",
    description:
      "Faculty members are encouraged to conduct research that advances knowledge, supports academic development, and addresses important national and global challenges."
  },

  {
    title: "Student Research",
    description:
      "Students can develop research skills through academic projects, independent studies, final-year projects, and other research activities."
  },

  {
    title: "Collaborative Research",
    description:
      "The university encourages collaboration among faculty, students, institutions, organizations, and other research partners."
  },

  {
    title: "Community-Based Research",
    description:
      "Research activities may focus on real community needs and support the development of practical solutions to local challenges."
  },

  {
    title: "Innovation & Entrepreneurship",
    description:
      "Research and innovation can support the development of new ideas, technologies, products, services, and entrepreneurial opportunities."
  }

];


function ResearchOpportunities() {

  return (

    <section className="py-16 bg-white">

      <div className="max-w-[1280px] mx-auto px-5">


        <div className="text-center mb-12">


          <h2 className="text-3xl md:text-4xl font-bold text-green-700">

            Research Opportunities

          </h2>


          <p className="mt-4 text-gray-600 max-w-3xl mx-auto leading-7">

            Western Region University of Liberia provides opportunities for
            faculty, students, and collaborators to participate in research,
            innovation, and knowledge creation.

          </p>

        </div>



        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">


          {researchOpportunities.map((opportunity) => (

            <div

              key={opportunity.title}

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

                {opportunity.title}

              </h3>


              <p className="text-gray-600 leading-7">

                {opportunity.description}

              </p>

            </div>

          ))}


        </div>

      </div>

    </section>

  );

}


export default ResearchOpportunities;