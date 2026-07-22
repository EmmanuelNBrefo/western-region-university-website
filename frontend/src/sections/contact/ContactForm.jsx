import { useState } from "react";


function ContactForm() {

  const [formData, setFormData] = useState({

    name: "",

    email: "",

    subject: "",

    message: "",

  });


  function handleChange(event) {

    const { name, value } = event.target;


    setFormData((previousData) => ({

      ...previousData,

      [name]: value,

    }));

  }


  function handleSubmit(event) {

    event.preventDefault();


    alert("Thank you. Your message has been received.");


    setFormData({

      name: "",

      email: "",

      subject: "",

      message: "",

    });

  }


  return (

    <section className="py-16 bg-gray-50">

      <div className="max-w-[1280px] mx-auto px-5">


        <div className="grid lg:grid-cols-2 gap-10">


          <div>

            <h2 className="text-3xl md:text-4xl font-bold text-green-700">

              Send Us a Message

            </h2>


            <p className="mt-5 text-gray-600 leading-8">

              Have a question or need more information? Complete the form
              and send your inquiry to Western Region University of Liberia.

            </p>

          </div>


          <form

            onSubmit={handleSubmit}

            className="bg-white p-8 rounded-xl shadow-md space-y-5"

          >


            <div>

              <label className="block text-sm font-semibold text-gray-700 mb-2">

                Full Name

              </label>


              <input

                type="text"

                name="name"

                value={formData.name}

                onChange={handleChange}

                required

                className="
                  w-full
                  border
                  border-gray-300
                  rounded-lg
                  px-4
                  py-3
                  focus:outline-none
                  focus:ring-2
                  focus:ring-green-600
                "

                placeholder="Enter your full name"

              />

            </div>


            <div>

              <label className="block text-sm font-semibold text-gray-700 mb-2">

                Email Address

              </label>


              <input

                type="email"

                name="email"

                value={formData.email}

                onChange={handleChange}

                required

                className="
                  w-full
                  border
                  border-gray-300
                  rounded-lg
                  px-4
                  py-3
                  focus:outline-none
                  focus:ring-2
                  focus:ring-green-600
                "

                placeholder="Enter your email address"

              />

            </div>


            <div>

              <label className="block text-sm font-semibold text-gray-700 mb-2">

                Subject

              </label>


              <input

                type="text"

                name="subject"

                value={formData.subject}

                onChange={handleChange}

                required

                className="
                  w-full
                  border
                  border-gray-300
                  rounded-lg
                  px-4
                  py-3
                  focus:outline-none
                  focus:ring-2
                  focus:ring-green-600
                "

                placeholder="Enter message subject"

              />

            </div>


            <div>

              <label className="block text-sm font-semibold text-gray-700 mb-2">

                Message

              </label>


              <textarea

                name="message"

                value={formData.message}

                onChange={handleChange}

                required

                rows="6"

                className="
                  w-full
                  border
                  border-gray-300
                  rounded-lg
                  px-4
                  py-3
                  focus:outline-none
                  focus:ring-2
                  focus:ring-green-600
                  resize-none
                "

                placeholder="Write your message"

              />

            </div>


            <button

              type="submit"

              className="
                w-full
                bg-green-700
                text-white
                py-3
                rounded-lg
                font-semibold
                hover:bg-green-800
                transition
              "

            >

              Send Message

            </button>


          </form>

        </div>

      </div>

    </section>

  );

}


export default ContactForm;