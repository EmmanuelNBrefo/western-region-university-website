import { Link } from "react-router-dom";

const announcements = [
  {
    title: "Admissions Information",

    description:
      "Prospective students are encouraged to stay informed about admission requirements, application procedures, deadlines, and important updates.",
  },

  {
    title: "Registration Updates",

    description:
      "Students should follow official university announcements for information about registration periods, academic schedules, and important academic procedures.",
  },

  {
    title: "Academic Notices",

    description:
      "Important notices concerning classes, examinations, academic activities, and university programs will be communicated through official channels.",
  },

  {
    title: "Student Information",

    description:
      "Students are encouraged to regularly check university announcements for important information affecting student life and academic activities.",
  },
];

function Announcements() {
  return (
    <section className="py-16 bg-gray-50">

      <div className="max-w-[1280px] mx-auto px-5">

        <div className="text-center mb-12">

          <h2 className="text-3xl md:text-4xl font-bold text-green-700">
            Announcements
          </h2>

          <p className="mt-4 text-gray-600 max-w-3xl mx-auto leading-7">
            Stay informed about important announcements, notices, updates,
            and information from Western Region University.
          </p>

        </div>


        <div className="max-w-4xl mx-auto space-y-4">

          {announcements.map((announcement) => (

            <div
              key={announcement.title}
              className="
                bg-white
                border-l-4
                border-green-700
                p-6
                rounded-r-xl
                shadow-sm
                hover:shadow-md
                transition
              "
            >

              <h3 className="text-xl font-bold text-gray-800">
                {announcement.title}
              </h3>


              <p className="mt-3 text-gray-600 leading-7">
                {announcement.description}
              </p>


              <Link
                to="/news/announcements"
                className="
                  inline-block
                  mt-4
                  text-green-700
                  font-semibold
                  hover:text-green-900
                  transition
                "
              >
                Read Announcement →
              </Link>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Announcements;