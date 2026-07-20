import {
  FaHeartbeat,
  FaGraduationCap,
  FaBriefcase,
  FaLaptopCode,
} from "react-icons/fa";


const faculties = [

  {
    icon: <FaHeartbeat />,
    title: "School of Health Sciences",
    description:
      "Preparing healthcare professionals through quality teaching, practical training, and research."
  },


  {
    icon: <FaGraduationCap />,
    title: "School of Education",
    description:
      "Developing skilled educators committed to improving learning outcomes."
  },


  {
    icon: <FaBriefcase />,
    title: "School of Business",
    description:
      "Building future business leaders through entrepreneurship and management education."
  },


  {
    icon: <FaLaptopCode />,
    title: "School of Technology",
    description:
      "Advancing innovation through information technology and digital transformation."
  },

];


function Faculties() {

  return (

    <section className="bg-gray-50 py-16">


      <div className="max-w-[1280px] mx-auto px-5">


        <div className="text-center mb-12">


          <h2 className="text-3xl md:text-4xl font-bold text-green-700">

            Our Faculties & Schools

          </h2>


          <p className="mt-4 text-gray-600">

            Discover our academic programs and learning opportunities.

          </p>


        </div>



        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">


          {faculties.map((faculty) => (

            <div

              key={faculty.title}

              className="
              bg-white
              rounded-lg
              shadow-md
              p-6
              text-center
              hover:shadow-xl
              transition
              "

            >


              <div className="
                text-4xl
                text-green-700
                flex
                justify-center
                mb-5
              ">

                {faculty.icon}

              </div>



              <h3 className="
                font-bold
                text-lg
                mb-3
              ">

                {faculty.title}

              </h3>



              <p className="
                text-gray-600
                text-sm
                leading-6
              ">

                {faculty.description}

              </p>



              <button
                className="
                mt-5
                text-green-700
                font-semibold
                hover:underline
                "
              >

                Learn More

              </button>


            </div>

          ))}


        </div>


      </div>


    </section>

  );

}


export default Faculties;