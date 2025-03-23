const Author = () => {
  const authors = [
    { name: "Humayun Ahmed" },
    { name: "Muhammed Zafar Iqbal" },
    { name: "Zahir Raihan" },
    { name: "Kazi Nazrul Islam" },
    { name: "Kazi Nazrul Islam" },
    { name: "Kazi Nazrul Islam" },
  ];

  return (
    <div className="">
      {/* banner */}
      <div className="w-full">
        <div
          className="relative h-[250px] md:h-[250px] w-full bg-no-repeat bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage:
              "url('https://i.ibb.co.com/XZyKYx2D/portrait-young-woman-standing-against-white-background-1048944-25390971.jpg')",
          }}
        >
          {/* Optional dark overlay */}
          <div className="absolute inset-0 bg-black/30"></div>

          {/* Text */}
          <p className="relative z-10 text-white text-lg md:text-xl font-semibold bg-black/50 px-4 py-2 rounded">
            Home &gt;&gt; ALL Authors
          </p>
        </div>
      </div>
      <div className="px-10 py-1">
        <p className="py-16">
          At BdBooks, authors shape captivating narratives across genres, from
          traditional to e-books. In our literary haven, they share diverse
          stories, enriching our shelves with a kaleidoscope of voices. This
          collaborative space celebrates the synergy between authors and
          publishers, fostering creativity without bounds. BdBooks is where
          authors' narratives form the heart of our dynamic literary universe."
        </p>

        <div>
          <hr className=" mb-10" />
          <hr />
        </div>
        <div className="grid grid-cols-1 py-10 md:grid-cols-4 gap-2  ">
          {authors.map((author, index) => (
            <div
              key={index}
              className="p-2 border flex flex-col items-center rounded-lg shadow-md transition-all cursor-pointer"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white shadow-md">
                <span className="text-2xl">✒️</span>
              </div>
              <p className="mt-4 font-bold text-gray-800 text-xl">
                {author.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Author;
