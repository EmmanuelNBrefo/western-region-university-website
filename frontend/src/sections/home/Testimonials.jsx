const testimonials = [

  {
    quote:
      "Western Region University provides students with the knowledge and skills needed to succeed in a changing world.",

    name:
      "Student",

    role:
      "Information Technology Program"
  },


  {
    quote:
      "The university environment encourages innovation, research, and professional growth.",

    name:
      "Graduate",

    role:
      "Alumni Community"
  },


  {
    quote:
      "WRUL is committed to developing future leaders through quality education and technology.",

    name:
      "Faculty Member",

    role:
      "Academic Staff"
  },

];



function Testimonials() {

  return (

    <section className="py-16 bg-white">


      <div className="max-w-[1280px] mx-auto px-5">


        <div className="text-center mb-12">


          <h2 className="text-3xl md:text-4xl font-bold text-green-700">

            What Our Community Says

          </h2>


          <p className="mt-4 text-gray-600">

            Hear from students, graduates, and members of
            the Western Region University community.

          </p>


        </div>



        <div className="grid md:grid-cols-3 gap-8">


          {testimonials.map((item) => (

            <div

              key={item.name}

              className="
              bg-gray-50
              rounded-xl
              p-8
              shadow-md
              hover:shadow-xl
              transition
              "

            >


              <p className="
              text-gray-600
              italic
              leading-7
              mb-6
              "
              >

                "{item.quote}"

              </p>



              <h3 className="
              font-bold
              text-green-700
              "
              >

                {item.name}

              </h3>


              <p className="text-sm text-gray-500">

                {item.role}

              </p>


            </div>

          ))}


        </div>


      </div>


    </section>

  );

}


export default Testimonials;