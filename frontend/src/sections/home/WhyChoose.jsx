import {
  FaBookOpen,
  FaUsers,
  FaLaptop,
  FaFlask,
} from "react-icons/fa";


const features = [

  {
    icon: <FaBookOpen />,
    title: "Quality Education",
    description:
      "Providing student-centered learning through qualified instructors and modern teaching methods."
  },


  {
    icon: <FaUsers />,
    title: "Experienced Faculty",
    description:
      "Dedicated lecturers committed to academic excellence and student success."
  },


  {
    icon: <FaLaptop />,
    title: "Modern Technology",
    description:
      "Using technology to improve learning, research, and institutional services."
  },


  {
    icon: <FaFlask />,
    title: "Research & Innovation",
    description:
      "Promoting research that contributes to community and national development."
  },

];


function WhyChoose() {

  return (

    <section className="py-16 bg-white">


      <div className="max-w-[1280px] mx-auto px-5">


        {/* Title */}

        <div className="text-center mb-12">


          <h2 className="text-3xl md:text-4xl font-bold text-green-700">

            Why Choose Western Region University?

          </h2>


          <p className="mt-4 text-gray-600">

            Building a future-focused institution through education,
            innovation, and technology.

          </p>


        </div>



        {/* Statistics */}

        <div className="grid md:grid-cols-3 gap-6 mb-12">


          <div className="bg-green-700 text-white rounded-lg p-6 text-center">

            <h3 className="text-4xl font-bold">
              10+
            </h3>

            <p>
              Academic Programs
            </p>

          </div>



          <div className="bg-green-700 text-white rounded-lg p-6 text-center">

            <h3 className="text-4xl font-bold">
              4
            </h3>

            <p>
              Schools & Faculties
            </p>

          </div>



          <div className="bg-green-700 text-white rounded-lg p-6 text-center">

            <h3 className="text-4xl font-bold">
              1000+
            </h3>

            <p>
              Students
            </p>

          </div>


        </div>



        {/* Features */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">


          {features.map((feature) => (

            <div
              key={feature.title}
              className="
              text-center
              p-6
              rounded-lg
              shadow-md
              hover:shadow-xl
              transition
              "
            >


              <div className="
              flex
              justify-center
              text-4xl
              text-green-700
              mb-4
              ">

                {feature.icon}

              </div>


              <h3 className="font-bold text-lg mb-3">

                {feature.title}

              </h3>


              <p className="text-gray-600 text-sm leading-6">

                {feature.description}

              </p>


            </div>

          ))}


        </div>


      </div>


    </section>

  );

}


export default WhyChoose;