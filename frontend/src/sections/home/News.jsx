const newsItems = [
  {
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",

    title: "Admissions Now Open",

    description:
      "Applications are now open for students seeking quality higher education opportunities.",
  },

  {
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644",

    title: "Academic Excellence Through Innovation",

    description:
      "WRUL continues to promote technology, research, and innovative learning.",
  },

  {
    image:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f",

    title: "Building Future Leaders",

    description:
      "Preparing students with knowledge, skills, and values for national development.",
  },
];

function News() {
  return (
    <section className="py-16 bg-white">

      <div className="max-w-[1280px] mx-auto px-5">

        <div className="text-center mb-12">

          <h2 className="text-3xl md:text-4xl font-bold text-green-700">
            Latest News & Events
          </h2>

          <p className="mt-4 text-gray-600">
            Stay updated with the latest activities,
            announcements, and achievements.
          </p>

        </div>


        <div className="grid md:grid-cols-3 gap-8">

          {newsItems.map((news) => (

            <div
              key={news.title}
              className="
                bg-white
                rounded-xl
                shadow-md
                overflow-hidden
                hover:shadow-xl
                transition
              "
            >

              <img
                src={news.image}
                alt={news.title}
                className="
                  h-48
                  w-full
                  object-cover
                "
              />


              <div className="p-6">

                <h3 className="
                  text-xl
                  font-bold
                  mb-3
                ">
                  {news.title}
                </h3>


                <p className="
                  text-gray-600
                  text-sm
                  leading-6
                ">
                  {news.description}
                </p>


                <a
                  href="/news"
                  className="
                    inline-block
                    mt-5
                    text-green-700
                    font-semibold
                    hover:underline
                  "
                >
                  Read More →
                </a>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default News;