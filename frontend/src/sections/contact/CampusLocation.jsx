function CampusLocation() {

  return (

    <section className="py-16 bg-white">

      <div className="max-w-[1280px] mx-auto px-5">


        <div className="text-center mb-10">

          <h2 className="text-3xl md:text-4xl font-bold text-green-700">

            Find Us

          </h2>


          <p className="mt-4 text-gray-600 max-w-3xl mx-auto leading-7">

            Visit Western Region University at our campus in
            Tubmanburg, Bomi County, Liberia.

          </p>

        </div>


        <div className="overflow-hidden rounded-2xl shadow-md">


          <iframe

            title="Western Region University of Liberia Location"

            src="https://www.google.com/maps?q=Tubmanburg,Bomi%20County,Liberia&output=embed"

            width="100%"

            height="400"

            style={{ border: 0 }}

            allowFullScreen

            loading="lazy"

            referrerPolicy="no-referrer-when-downgrade"

          />

        </div>

      </div>

    </section>

  );

}


export default CampusLocation;