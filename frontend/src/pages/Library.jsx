function Library() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="bg-green-700 text-white py-20">
        <div className="max-w-[1280px] mx-auto px-5 text-center">

          <h1 className="text-4xl md:text-5xl font-bold mb-5">
            University Library
          </h1>

          <p className="max-w-2xl mx-auto text-lg text-green-100">
            Supporting teaching, learning, research, and academic excellence
            at the Western Region University of Liberia.
          </p>

        </div>
      </section>


      {/* Main Content */}
      <section className="py-16">

        <div className="max-w-[1000px] mx-auto px-5">

          <div className="bg-white rounded-xl shadow-md p-8 md:p-12 text-center">

            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-5">
              Library Services Coming Soon
            </h2>

            <p className="text-gray-600 leading-7 max-w-2xl mx-auto mb-8">
              The Western Region University of Liberia Library is being
              developed to provide students, faculty, researchers, and staff
              with access to books, journals, research materials, digital
              resources, and other academic services.
            </p>

            <div className="inline-block bg-green-50 border border-green-200 rounded-lg px-6 py-4">

              <p className="text-green-700 font-medium">
                Online library services will be available soon.
              </p>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Library;