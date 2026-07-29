import Governance from "../sections/about/Governance";
import Leadership from "../sections/about/Leadership";
import CoreValues from "../sections/about/CoreValues";
import MissionVision from "../sections/about/MissionVision";
import History from "../sections/about/History";


function About() {

  return (

    <>


      {/* About Hero Section */}

      <section className="bg-green-700 text-white py-20">

        <div className="max-w-[1280px] mx-auto px-5 text-center">

          <h1 className="text-4xl md:text-5xl font-bold">

            About Western Region University

          </h1>


          <p className="mt-5 text-lg text-green-100">

            Discover our commitment to quality education,
            innovation, research, and national development.

          </p>

        </div>

      </section>



      {/* About Introduction */}

      <section className="py-16 bg-white">

        <div className="max-w-[1280px] mx-auto px-5">

          <div className="grid md:grid-cols-2 gap-12 items-center">


            {/* Text */}

            <div>

              <h2 className="
                text-3xl
                md:text-4xl
                font-bold
                text-green-700
                mb-6
              ">

                About Our University

              </h2>


              <p className="
                text-gray-600
                leading-8
                mb-5
              ">

                Western Region University is committed
                to providing quality higher education that prepares
                students with the knowledge, skills, and values
                needed to contribute meaningfully to society.

              </p>


              <p className="
                text-gray-600
                leading-8
              ">

                Through academic excellence, innovation, research,
                and technology, the university seeks to develop
                future leaders and professionals who will contribute
                to the development of Liberia and the wider world.

              </p>

            </div>



            {/* Image */}

            <div>

              <img
  src="/src/assets/logo.png"
  alt="Western Region University of Liberia Logo"
  className="
    w-full
    h-90
    object-contain
    rounded-xl
    shadow-lg
    p-6
  "
/>

            </div>

          </div>

        </div>

      </section>



      {/* Government & Higher Education Partners */}

      <section className="py-16 bg-gray-50">

        <div className="max-w-[1280px] mx-auto px-5">

          <div className="text-center mb-10">

            <h2 className="text-3xl md:text-4xl font-bold text-green-700">

              Government & Higher Education Partners

            </h2>


            <p className="mt-4 text-gray-600 max-w-3xl mx-auto leading-7">

              Western Region University is a government-sponsored
              institution committed to supporting Liberia's national education
              and higher education development goals.

            </p>

          </div>



          <div className="grid md:grid-cols-3 gap-6">


            {/* Government of Liberia */}

            <a
              href="https://www.gov.lr"
              target="_blank"
              rel="noopener noreferrer"
              className="
                bg-white
                p-6
                rounded-xl
                shadow-md
                hover:shadow-xl
                transition
                border-t-4
                border-green-700
              "
            >

              <h3 className="text-xl font-bold text-gray-800 mb-3">

                Government of Liberia

              </h3>


              <p className="text-gray-600 text-sm leading-6">

                Learn more about the Government of Liberia and its national
                development priorities.

              </p>


              <span className="inline-block mt-5 text-green-700 font-semibold">

                Visit Government Website →

              </span>

            </a>



            {/* Ministry of Education */}

            <a
              href="https://moe.gov.lr"
              target="_blank"
              rel="noopener noreferrer"
              className="
                bg-white
                p-6
                rounded-xl
                shadow-md
                hover:shadow-xl
                transition
                border-t-4
                border-green-700
              "
            >

              <h3 className="text-xl font-bold text-gray-800 mb-3">

                Ministry of Education

              </h3>


              <p className="text-gray-600 text-sm leading-6">

                Access information about Liberia's education policies,
                programs, and national education system.

              </p>


              <span className="inline-block mt-5 text-green-700 font-semibold">

                Visit Ministry Website →

              </span>

            </a>



            {/* National Commission on Higher Education */}

            <a
              href="https://ncheliberia.org"
              target="_blank"
              rel="noopener noreferrer"
              className="
                bg-white
                p-6
                rounded-xl
                shadow-md
                hover:shadow-xl
                transition
                border-t-4
                border-green-700
              "
            >

              <h3 className="text-xl font-bold text-gray-800 mb-3">

                National Commission on Higher Education

              </h3>


              <p className="text-gray-600 text-sm leading-6">

                Learn about higher education regulation, quality assurance,
                and accreditation in Liberia.

              </p>


              <span className="inline-block mt-5 text-green-700 font-semibold">

                Visit NCHE Website →

              </span>

            </a>


          </div>

        </div>

      </section>



      {/* History Section */}
      
      <History />
      <MissionVision />
      <CoreValues />
      <Leadership />
      <Governance />


    </>

  );

}


export default About;