const ethicsPrinciples = [

  {
    title: "Academic Honesty",
    description:
      "Researchers are expected to conduct academic work honestly and present research findings accurately and responsibly."
  },

  {
    title: "Research Integrity",
    description:
      "Research activities should follow responsible practices throughout planning, data collection, analysis, documentation, and reporting."
  },

  {
    title: "Respect for Participants",
    description:
      "Research involving people should respect the dignity, privacy, rights, safety, and wellbeing of research participants."
  },

  {
    title: "Proper Citation",
    description:
      "Researchers should properly acknowledge the ideas, information, data, and work of other authors and researchers."
  },

  {
    title: "Avoiding Plagiarism",
    description:
      "Academic and research work must be original and must not present another person's work or ideas as one's own."
  },

  {
    title: "Responsible Research Conduct",
    description:
      "Researchers should avoid fabrication, falsification, misrepresentation, and other forms of research misconduct."
  }

];


function ResearchEthics() {

  return (

    <section className="py-16 bg-white">

      <div className="max-w-[1280px] mx-auto px-5">


        <div className="text-center mb-12">


          <h2 className="text-3xl md:text-4xl font-bold text-green-700">

            Research Ethics & Integrity

          </h2>


          <p className="mt-4 text-gray-600 max-w-3xl mx-auto leading-7">

            Western Region University promotes responsible,
            ethical, honest, and academically sound research practices.

          </p>

        </div>



        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">


          {ethicsPrinciples.map((principle) => (

            <div

              key={principle.title}

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

                {principle.title}

              </h3>


              <p className="text-gray-600 leading-7">

                {principle.description}

              </p>

            </div>

          ))}


        </div>

      </div>

    </section>

  );

}


export default ResearchEthics;