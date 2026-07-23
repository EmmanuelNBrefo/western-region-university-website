function StudentPortal() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="bg-green-700 text-white py-20">
        <div className="max-w-[1280px] mx-auto px-5 text-center">

          <h1 className="text-4xl md:text-5xl font-bold mb-5">
            Student Portal
          </h1>

          <p className="max-w-2xl mx-auto text-lg text-green-100">
            Access important academic and student services through the
            Western Region University of Liberia Student Portal.
          </p>

        </div>
      </section>


      {/* Main Content */}
      <section className="py-16">

        <div className="max-w-[1000px] mx-auto px-5">

          <div className="bg-white rounded-xl shadow-md p-8 md:p-12 text-center">

            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-5">
              Student Portal Coming Soon
            </h2>

            <p className="text-gray-600 leading-7 max-w-2xl mx-auto mb-8">
              The Western Region University of Liberia Student Portal is
              currently being prepared. Students will soon be able to access
              academic information, course registration, results, notices,
              and other important university services online.
            </p>

            <div className="inline-block bg-green-50 border border-green-200 rounded-lg px-6 py-4">

              <p className="text-green-700 font-medium">
                Student Portal services will be available soon.
              </p>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

export default StudentPortal;