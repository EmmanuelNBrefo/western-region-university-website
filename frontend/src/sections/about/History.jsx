function History() {

  return (

    <section className="py-16 bg-white">

      <div className="max-w-[1280px] mx-auto px-5">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* History Content */}

          <div>

            <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-6">

              Our History

            </h2>

            <p className="text-gray-600 leading-8 mb-5">

              Western Region University of Liberia was established
              to expand access to quality higher education and
              contribute to the educational and socio-economic
              development of Liberia's western region.

            </p>

            <p className="text-gray-600 leading-8 mb-5">

              As a government-sponsored institution, the university
              is committed to supporting national development through
              teaching, research, innovation, and community engagement.

            </p>

            <p className="text-gray-600 leading-8">

              The university continues to develop its academic
              programs, institutional capacity, and partnerships to
              prepare students for meaningful contributions to Liberia
              and the global community.

            </p>

          </div>


          {/* Timeline Highlight */}

          <div className="bg-green-50 rounded-xl p-8">

            <h3 className="text-2xl font-bold text-green-700 mb-6">

              Building the Future

            </h3>

            <div className="space-y-6">

              <div className="flex gap-4">

                <div className="w-3 h-3 mt-2 rounded-full bg-green-700 flex-shrink-0"></div>

                <div>

                  <h4 className="font-bold text-gray-800">

                    Government-Sponsored Institution

                  </h4>

                  <p className="text-gray-600 text-sm mt-1">

                    Supporting Liberia's national higher education
                    development goals.

                  </p>

                </div>

              </div>


              <div className="flex gap-4">

                <div className="w-3 h-3 mt-2 rounded-full bg-green-700 flex-shrink-0"></div>

                <div>

                  <h4 className="font-bold text-gray-800">

                    Expanding Access

                  </h4>

                  <p className="text-gray-600 text-sm mt-1">

                    Providing opportunities for students in the
                    western region and beyond.

                  </p>

                </div>

              </div>


              <div className="flex gap-4">

                <div className="w-3 h-3 mt-2 rounded-full bg-green-700 flex-shrink-0"></div>

                <div>

                  <h4 className="font-bold text-gray-800">

                    Future-Focused Education

                  </h4>

                  <p className="text-gray-600 text-sm mt-1">

                    Preparing students through innovation,
                    technology, research, and academic excellence.

                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

  );

}


export default History;