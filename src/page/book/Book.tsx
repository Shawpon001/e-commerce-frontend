import BookCard from "./BookCard";

const Book = () => {
  return (
    <div className="">
      {/*banner section */}
      <div>
        <img
          src="https://i.ibb.co.com/2hzVSbx/Imageby-Stanislav-Kondratievvia-Unsplash.webp"
          alt="imge"
          className="h-[250px] object-cover w-full"
        />
      </div>
      {/* filtaring section */}
      <h3 className=" text-center textarea-xl mt-12 font-medium">
        The Leo Baeck Institute is a non-profit organization. Any income from
        the store is supporting the <br /> institute's activities.
      </h3>
      <div className=" mt-10 px-12 ">
        <div className=" flex w-full gap-10 justify-between">
          <div className="mb-4  w-full">
            <input
              type="text"
              id="text"
              name="text"
              className="mt-1 w-full  px-5  py-2  rounded-md bg-white text-sm text-gray-700 shadow-sm"
            />
          </div>
          <button className="btn bg-teal-600 text-white"> Search</button>
          <select className="select select-bordered w-full max-w-xs">
            <option disabled selected>
              Who shot first?
            </option>
            <option>Han Solo</option>
            <option>Greedo</option>
          </select>
        </div>
        {/* secound section */}
        <div className=" w-full">
          <label className="form-control w-full ">
            <h2 className=" textarea-xl mb-1"> Products Categories </h2>
            <select className="select w-full  ">
              <option disabled selected>
                Pick one
              </option>
              <option>Star Wars</option>
              <option>Harry Potter</option>
              <option>Lord of the Rings</option>
              <option>Planet of the Apes</option>
              <option>Star Trek</option>
            </select>
          </label>

          <div className="flex justify-end mt-5">
            <select className="select select-bordered w-full max-w-xs">
              <option disabled selected>
                Who shot first?
              </option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
          </div>
        </div>
        <div className=" grid grid-cols-5 gap-4">
        <BookCard/>
        <BookCard/>
        <BookCard/>
        <BookCard/>
        <BookCard/>
        <BookCard/>
        <BookCard/>
        </div>
      </div>
       
    </div>
  );
};

export default Book;
