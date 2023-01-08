function Quote() {
  return (
    <div className="container mx-auto mt-8 md:mt-0 p-8 md:p-24">
      <div className="px-4 mx-auto max-w-screen-md">
        <h2 className="mb-6 text-4xl tracking-tight font-extrabold text-center text-emerald-800 ">
          Quote Request
        </h2>
        <p className="mb-4 text-emerald-900 text-sm md:text-md">
          Please fill out the form below to request a quote. We will get back to
          you within 24 hours of receving your request.
        </p>

        <p className="mb-8 text-emerald-900 text-sm md:text-md">
          <a className="font-semibold underline" href="tel:+31610221441">
            0610221441
          </a>{' '}
          or{' '}
          <a
            className="font-semibold underline"
            href="https://wa.me/+31610221441"
          >
            WhatsApp
          </a>{' '}
          10am - 10pm{' '}
        </p>

        <form action="#" className="space-y-8">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-emerald-900"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 outline-none focus:border-emerald-700"
              placeholder="Email Address"
              required
            />
          </div>

          <div>
            <label
              htmlFor="number"
              className="block mb-2 text-sm font-medium text-emerald-900"
            >
              Your phone number (optional)
            </label>
            <input
              type="number"
              id="number"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 outline-none focus:border-emerald-700"
              placeholder="Number 06"
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-emerald-900 "
            >
              Subject
            </label>

            <input
              type="text"
              id="subject"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 outline-none"
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-emerald-900 "
            >
              Your message
            </label>
            <textarea
              id="message"
              className="resize-none h-28 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border  outline-none"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium bg-emerald-800 text-white text-center rounded-lg bg-primary-700 sm:w-fit hover:bg-emerald-800 "
          >
            Send message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Quote;
