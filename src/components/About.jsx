
function AboutNike() {
  return (
    <main className="bg-white min-h-screen w-full">
      <section className="flex flex-col lg:flex-row items-center justify-between px-8 md:px-20 py-20 gap-y-10">
        <div className="flex-1 space-y-8">
          <h1 className="text-6xl font-black tracking-tight text-black mb-20">
            About Nike
          </h1>
          <h2 className="text-3xl font-semibold text-gray-900">
            Pushing Boundaries Since 1971
          </h2>
          <p className="mt-6 text-xl text-gray-700 max-w-xl">
            Nike inspires and innovates for athletes worldwide. Our relentless pursuit of greatness empowers people of all backgrounds to chase their dreams, fueled by the legendary "Just Do It" spirit.
          </p>
          <div className="flex space-x-10 mt-10">
            <div>
              <span className="block text-5xl font-bold text-black">#1</span>
              <span className="block text-gray-500 text-lg">Global Sportswear Brand</span>
            </div>
            <div>
              <span className="block text-5xl font-bold text-black">50+</span>
              <span className="block text-gray-500 text-lg">Years of Innovation</span>
            </div>
          </div>
          <button className="mt-12 px-8 py-4 bg-black text-white rounded-2xl text-lg font-semibold hover:bg-gray-900 transition">
            Explore Nike Products
          </button>
          <div className="mt-10 flex items-center space-x-5">
            <span className="font-bold text-2xl text-black">Just Do It.</span>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg"
              alt="Nike Swoosh"
              className="h-12"
            />
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <img
            src="/public/images/logo.png"
            alt="Nike Inspiration"
            className="rounded-3xl shadow-xl object-cover w-full max-w-lg h-auto"
          />
        </div>
      </section>
    </main>
  );
}

export default AboutNike;
