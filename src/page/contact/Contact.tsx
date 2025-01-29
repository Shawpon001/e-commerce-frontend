const Contact = () => {
  return (
    <div className="relative bg-[#f8ebeb8e]">
      <div className="container mx-auto md:p-8 p-4">
        <div className="text-center h-[170px] mb-14 border flex items-center justify-center">
          <h2 className="text-4xl font-bold">CONTACT US</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <h3 className="text-lg font-semibold mb-4">ONLINE INQUIRY</h3>
            <div className="space-y-4">
              <input
                placeholder="Name"
                className="w-full border border-gray-300 rounded-md px-4 py-2 "
              />
              <input
                placeholder="Email"
                className="w-full border border-gray-300 rounded-md px-4 py-2 "
              />
              <input
                placeholder="Phone"
                className="w-full border border-gray-300 rounded-md px-4 py-2 "
              />
              <select className="w-full border border-gray-300 rounded-md px-4 py-2 ">
                <option>Select An Interest</option>
              </select>
              <textarea
                placeholder="Message"
                className="w-full border border-gray-300 rounded-md px-4 py-2 h-24 "
              ></textarea>
              <button className="btn  btn-info bg-teal-600">S E N D</button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">CONTACT DETAILS</h3>
            <div className="space-y-4">
              <div className="text-gray-600">
                <a href="hrhridoyroy@gmail.com">hrhridoyroy@gmail.com</a>
              </div>
              <div className="text-gray-600">(+088)017382119365</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold">Westfield</h4>
                  <p className="text-gray-600">
                    Bangladesh ,Dhaka <br />
                    Dinajpur Sodor
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">HR ID AY</h4>
                  <p className="text-gray-600">
                    357 dinajpur Ave. <br />
                    PTI MOR, NJ 07901
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">PTI MOR Office</h4>
                  <p className="text-gray-600">
                    549 Millburn Ave. <br />
                    PTI MOR, NJ 07078
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
