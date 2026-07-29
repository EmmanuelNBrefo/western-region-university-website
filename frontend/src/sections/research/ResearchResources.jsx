const researchResources = [

  {
    title: "Library & Academic Resources",
    description:
      "Access to books, academic materials, journals, and other resources that support research, teaching, and learning."
  },

  {
    title: "Digital Research Resources",
    description:
      "Digital tools, online resources, and electronic materials that support information discovery, research, and academic work."
  },

  {
    title: "Technology & Internet Access",
    description:
      "Technology and internet resources that support online research, data collection, collaboration, communication, and knowledge sharing."
  },

  {
    title: "Academic Publications",
    description:
      "Opportunities to share research findings through academic publications, scholarly work, presentations, and other knowledge-sharing platforms."
  },

  {
    title: "Research Support",
    description:
      "Guidance and support for research planning, academic projects, research methods, documentation, and responsible research practices."
  },

  {
    title: "Research Collaboration",
    description:
      "Opportunities to collaborate with faculty members, students, institutions, organizations, and other research partners."
  }

];


function ResearchResources() {

  return (

    <section className="py-16 bg-gray-50">

      <div className="max-w-[1280px] mx-auto px-5">


        <div className="text-center mb-12">


          <h2 className="text-3xl md:text-4xl font-bold text-green-700">

            Research Resources

          </h2>


          <p className="mt-4 text-gray-600 max-w-3xl mx-auto leading-7">

            Western Region University supports research and
            academic work through resources, technology, collaboration,
            and research support opportunities.

          </p>

        </div>



        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">


          {researchResources.map((resource) => (

            <div

              key={resource.title}

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


export default ResearchResources;