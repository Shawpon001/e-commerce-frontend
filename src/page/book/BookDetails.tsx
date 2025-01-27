const BookDetails = () => {
    return (
        <div>
             <div className="max-w-screen-2xl ontainer bg-slate-100 mx-auto xl:px-24 px-4 ">
      <div className="flex flex-col lg:flex-row items-start gap-5  justify-between">
        <div className="lg:w-[670px] xl:w-[870px] border-2  w-full">
          <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
              <div className="lg:w-[260px] xl:w-[470px] w-full lg:h-[300px] xl:h-[400px] border">
                <img
                  src=""
                  className="w-full h-full object-cover rounded-lg shadow-2xl"
                />
              </div>
              <div className="lg:w-[330px] w-full mt-5 lg:mt-0 lg:ml-5">
                <h1 className="text-xl font-bold"> name </h1>
                <p>reating</p>
                <p>Brand : No Brand | More Foods From No Brand</p>
                <p className="text-2xl mt-5 mb-4 text-orange-500 font-semibold">
                  $ 79
                </p>
                {/* Size section */}
                <div className="mb-6 w-[320px] text-gray-600">
                  <div className="flex gap-2 mt-5">
                    <div className="border-orange-500 p-1 py-1 px-3 font-mono text-black">
                      <img
                        src="https://i.ibb.co/nD8Dcxb/pizza-5179939-640.jpg"
                        alt=""
                      />
                    </div>
                    <div className="border-orange-500 p-1 py-1 px-3 font-mono text-black">
                      <img
                        src="https://i.ibb.co/nD8Dcxb/pizza-5179939-640.jpg"
                        alt=""
                      />
                    </div>
                    <div className="border-orange-500 p-1 py-1 px-3 font-mono text-black">
                      <img
                        src="https://i.ibb.co/nD8Dcxb/pizza-5179939-640.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="flex mt-7 mb-2 gap-10">
                    <p className="text-black">Quantity</p>
                    <div className="flex gap-8 text-xl">
                      {/* Decrease button */}
                      <button className="border-2 px-2 bg-gray-200">-</button>
                      {/* Total quantity */}
                      <button>2</button>
                      <button className="border-2 px-2 bg-gray-200">+</button>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center lg:justify-start gap-5 items-center">
                  <button className="border-2 p-2 rounded-sm text-white lg:w-[150px] w-full md:w-[220px] bg-[#1ed5f5]">
                    Buy Now
                  </button>
                  <button 
                //   onClick={() => handelAddCart()}
                   className="border-2 p-2 rounded-sm text-white lg:w-[150px] w-full md:w-[220px] bg-orange-500">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* review page */}
      <div className="mb-5 mt-5">
        <p>Ratings & Reviews</p>

        {/* <ReviewFrom /> */}
        {/* <TotalReview /> */}
      </div>
      <div className=" mb-9 mt-4 ">
        {/* <Review></Review> */}
      </div>
    </div>
        </div>
    );
};

export default BookDetails;