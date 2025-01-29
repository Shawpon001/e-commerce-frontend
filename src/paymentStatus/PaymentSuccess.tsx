import { useParams } from "react-router-dom";

const PaymentSuccess = () => {
  const {tranId} = useParams()
  return (
    <div className="py-10">
      <div className="mx-auto py-10 p-8 max-w-md bg-green-100 border border-green-500 rounded-md text-center">
        <div className="text-2xl text-green-700 font-semibold mb-4">
          Payment Successful!
        </div>
        <div className="mb-6">
          <img
            src="/public/checked.png" 
            alt="Success Icon"
            className="w-16 h-16 mx-auto mb-2"
          />
        </div>
        <div className="text-lg text-gray-800 mb-4">
          Thank you for choosing our service! Your payment has been successfully
          processed.
        </div>
        <h1 className="text-teal-600 font-medium ">Transection Id: {tranId}</h1>
        <div className="w-full mt-4 flex justify-center">
          {" "}
          <img
            src="https://i.ibb.co.com/VmX711W/images-removebg-preview.png"
            className="h-[50px] w-[120px] object-cover"
            alt="logo"
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
