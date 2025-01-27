const Cart = () => {
  return (
    <div className=" px-12 mt-10">
      {/* main */}
      <div className=" flex w-full gap-24 justify-center">
        {/* card site */}
        <div className=" w-full ">
          <div className="flex px-2 justify-between items-center">
            <h2 className="text-2xl font-medium">Shopping Cart</h2>
            <p> 1 Items</p>
          </div>
          <div className="h-[150px] mt-7 border border-gray-200 overflow-hidden ">
            <div className="flex justify-start  gap-4 ">
              <img
                src="https://i.ibb.co.com/jHgvsvt/images-6.jpg"
                className="w-[100px] h-full "
                alt=""
              />
              <div className="flex  w-full justify-between ">
                <div>
                  <h3>Lacing-detail Poplin Blouse </h3>
                  <div className=" mb-1 mt-16">
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
                </div>
                <p className=" px-5 font-semibold ">$600</p>
              </div>
            </div>
          </div>
        </div>
        {/* checkout side */}
        <div className=" w-[700px] bg-[#f3e3e3d7] border">
          <h1 className="text-center text-2xl font-medium">Order Summary</h1>
          <p> hello</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
