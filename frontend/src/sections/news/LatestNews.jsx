import { Link } from "react-router-dom";

const newsItems = [
  {
    title: "WRU Strengthens Commitment to Quality Education",
    date: "July 2026",
    category: "University News",
    description:
      "Western Region University of Liberia continues to focus on providing quality education and preparing students for academic and professional success.",
  },

  {
    title: "Students Encouraged to Participate in Research and Innovation",
    date: "July 2026",
    category: "Research",
    description:
      "The university encourages students to develop critical thinking, creativity, research skills, and innovative solutions to real-world challenges.",
  },

  {
    title: "University Community Promotes Student Engagement",
    date: "July 2026",
    category: "Student Life",
    description:
      "Students are encouraged to participate in activities that promote leadership, collaboration, personal development, and community engagement.",
  },
];

function LatestNews() {
  return (
    <section className="py-16 bg-gray-50">

      <div className="max-w-[1280px] mx-auto px-5">

        <div className="text-center mb-12">

          <h2 className="text-3xl md:text-4xl font-bold text-green-700">
            Latest News
          </h2>

          <p className="mt-4 text-gray-600 max-w-3xl mx-auto leading-7">
            Stay updated with the latest news and developments from Western
            Region University.
          </p>

        </div>


        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {newsItems.map((item) => (

            <article
              key={item.title}
              className="
                bg-white
                rounded-xl
                shadow-md
                overflow-hidden
                hover:shadow-xl
                transition
              "
            >

              <div className="h-48 bg-gray-200 flex items-center justify-center">

                <span className="text-gray-500">
                  News Image
                </span>

              </div>


              <div className="p-6">

                <span className="text-sm font-semibold text-green-700">
                  {item.category}
                </span>


                <h3 className="mt-3 text-xl font-bold text-gray-800">
                  {item.title}
                </h3>


                <p className="mt-2 text-sm text-gray-500">
                  {item.date}
                </p>


                <p className="mt-4 text-gray-600 leading-7">
                  {item.description}
                </p>


                <Link
                  to="/news/latest"
                  className="
                    inline-block
                    mt-5
                    text-green-700
                    font-semibold
                    hover:text-green-900
                    transition
                  "
                >
                  Read More →
                </Link>

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}

export default LatestNews;