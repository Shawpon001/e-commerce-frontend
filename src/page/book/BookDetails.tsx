const BookDetails = () => {
  return (
    <div className="w-full mt-10 px-5 md:px-14 px-5">
      <div className="bg-base-200  shadow-lg p-5">
        <div className="flex flex-col lg:flex-row justify-center items-start gap-10">
          {/* Product Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src="https://i.ibb.co.com/jHgvsvt/images-6.jpg"
              alt="Product"
              className="w-full max-w-[520px] h-[500px] object-cover "
            />
          </div>

          {/* Product Details */}
          <div className="w-full lg:w-1/2">
            <h1 className="text-2xl font-bold text-gray-800 mb-3">
              Lacing-detail Poplin Blouse
            </h1>
            <p className="text-gray-600 mb-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Inventore natus, nemo, officia consequuntur quis veritatis
              similique blanditiis, soluta vel eaque cum consectetur deleniti.
              Rem quis iure adipisci, vero temporibus dolore!
            </p>
            <p className="text-gray-500 mb-2">Brand: No Brand</p>
            <p className="text-2xl text-teal-600 font-semibold mb-5">$79</p>

            {/* Quantity Section */}
            <div className=" mb-1">
              <p className="text-lg font-medium text-gray-800">Quantity</p>
              <div className="flex mt-3 mb-12 items-center gap-4">
                <button className="border px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300">
                  -
                </button>
                <span className="text-xl font-semibold">2</span>
                <button className="border px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300">
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-5">
              <button className="bg-[#071214] text-white px-5 py-3 rounded-lg w-full sm:w-auto shadow-md hover:bg-[#19bcd1] transition">
                Buy Now
              </button>
              <button className="bg-teal-600 text-white px-5 py-3 rounded-lg w-full sm:w-auto shadow-md hover:bg-orange-600 transition">
                Add to Cart
              </button>
            </div>
            {/* image */}

            <div className=" grid grid-cols-3 gap-4 mt-5 w-[200px] h-[100px] ">
              <img
                src="https://i.ibb.co.com/jHgvsvt/images-6.jpg"
                className=" "
                alt=""
              />
              <img
                src="https://i.ibb.co.com/jHgvsvt/images-6.jpg"
                className=" "
                alt=""
              />
              <img
                src="https://i.ibb.co.com/jHgvsvt/images-6.jpg"
                className=" "
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
