export default function Men() {
  return (
    <div className="relative h-screen w-full">
      {/* Fullscreen Image */}
      <img
        src="/public/images/athelete.jpg" 
        alt="Men's Collection"
        className="h-full w-full object-cover"
      />

      {/* Discount Overlay */}
      <div className="absolute bottom-1/4 left-16 max-w-md">
  {/* Text Box */}
  <div className="backdrop-blur-md bg-white/60 p-4 rounded-md shadow-lg">
    <h2 className="text-2xl font-extrabold tracking-wide">
      FLAT 50% OFF
    </h2>
    <p className="mt-2 text-gray-800 text-lg">
      Gear Up. Your favorite styles are now half off.
    </p>
  </div>

  {/* Button */}
  <button className="mt-6 flex items-center gap-2 bg-white/80 px-6 py-3 font-bold shadow-lg rounded-md transition-all duration-200 hover:bg-black hover:text-white">
    SHOP NOW →
  </button>
</div>

    </div>
  );
}
