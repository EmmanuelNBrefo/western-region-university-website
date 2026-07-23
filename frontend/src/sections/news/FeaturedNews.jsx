import { Link } from "react-router-dom";

const featuredNews = {
  title:
    "Western Region University of Liberia Advances Education, Research, and Innovation",

  date: "July 2026",

  category: "University News",

  description:
    "Western Region University of Liberia continues to strengthen its commitment to quality education, research, innovation, technology, and the development of future leaders in Liberia.",
};


function FeaturedNews() {
  return (
    <section className="py-16 bg-white">

      <div className="max-w-[1280px] mx-auto px-5">

        <div className="grid lg:grid-cols-2 gap-10 items-center">

          <div className="bg-gray-200 rounded-2xl min-h-[320px] flex items-center justify-center">

            <span className="text-gray-500">
              Featured News Image
            </span>

          </div>


          <div>

            <span className="text-sm font-semibold text-green-700 uppercase">
              {featuredNews.category}
            </span>


            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-800">
              {featuredNews.title}
            </h2>


            <p className="mt-4 text-sm text-gray-500">
              {featuredNews.date}
            </p>


            <p className="mt-5 text-gray-600 leading-8">
              {featuredNews.description}
            </p>


            <Link
              to="/news/featured"
              className="
                inline-block
                mt-6
                bg-green-700
                text-white
                px-6
                py-3
                rounded-lg
                font-semibold
                hover:bg-green-800
                transition
              "
            >
              Read More
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}


export default FeaturedNews;