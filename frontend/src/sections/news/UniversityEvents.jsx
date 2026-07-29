import { Link } from "react-router-dom";

const events = [
  {
    title: "Academic Seminar",

    date: "August 2026",

    location: "Western Region University",

    description:
      "An academic seminar designed to promote knowledge sharing, critical thinking, research, and professional development.",
  },

  {
    title: "Student Orientation",

    date: "August 2026",

    location: "Western Region University",

    description:
      "An orientation program to welcome students and help them become familiar with the university community, academic environment, and student services.",
  },

  {
    title: "Research & Innovation Forum",

    date: "September 2026",

    location: "Western Region University",

    description:
      "A forum that brings together students, faculty, and collaborators to share ideas, research findings, and innovative solutions.",
  },
];

function UniversityEvents() {
  return (
    <section className="py-16 bg-white">

      <div className="max-w-[1280px] mx-auto px-5">

        <div className="text-center mb-12">

          <h2 className="text-3xl md:text-4xl font-bold text-green-700">
            University Events
          </h2>

          <p className="mt-4 text-gray-600 max-w-3xl mx-auto leading-7">
            Discover upcoming events, activities, and programs taking place
            within the Western Region University community.
          </p>

        </div>


        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {events.map((event) => (

            <div
              key={event.title}
              className="
                border
                border-gray-200
                rounded-xl
                p-6
                hover:shadow-lg
                transition
              "
            >

              <div className="mb-5">

                <span className="
                  inline-block
                  bg-green-100
                  text-green-700
                  px-3
                  py-1
                  rounded-full
                  text-sm
                  font-semibold
                ">
                  {event.date}
                </span>

              </div>


              <h3 className="text-xl font-bold text-gray-800">
                {event.title}
              </h3>


              <p className="mt-3 text-sm text-gray-500">
                📍 {event.location}
              </p>


              <p className="mt-4 text-gray-600 leading-7">
                {event.description}
              </p>


              <Link
                to="/news/events"
                className="
                  inline-block
                  mt-5
                  text-green-700
                  font-semibold
                  hover:text-green-900
                  transition
                "
              >
                View Details →
              </Link>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default UniversityEvents;