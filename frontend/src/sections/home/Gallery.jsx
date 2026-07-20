const images = [

  {
    image:
      "https://images.unsplash.com/photo-1564981797816-1043664bf78d",
    title:
      "University Campus"
  },


  {
    image:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b",
    title:
      "Modern Classroom"
  },


  {
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998",
    title:
      "Student Learning"
  },


  {
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585",
    title:
      "Academic Building"
  },


  {
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
    title:
      "Student Activities"
  },


  {
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    title:
      "Technology Lab"
  },

];



function Gallery() {

  return (

    <section className="py-16 bg-gray-50">


      <div className="max-w-[1280px] mx-auto px-5">


        <div className="text-center mb-12">


          <h2 className="text-3xl md:text-4xl font-bold text-green-700">

            Campus Gallery

          </h2>


          <p className="mt-4 text-gray-600">

            Explore our learning environment,
            facilities, and campus activities.

          </p>


        </div>



        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">


          {images.map((item) => (

            <div
              key={item.title}
              className="
              relative
              overflow-hidden
              rounded-xl
              group
              "
            >


              <img

                src={item.image}

                alt={item.title}

                className="
                h-64
                w-full
                object-cover
                group-hover:scale-110
                transition
                duration-500
                "

              />



              <div
                className="
                absolute
                inset-0
                bg-black/40
                flex
                items-end
                p-5
                opacity-0
                group-hover:opacity-100
                transition
                "
              >


                <h3 className="text-white font-bold">

                  {item.title}

                </h3>


              </div>


            </div>

          ))}


        </div>



      </div>


    </section>

  );

}


export default Gallery;