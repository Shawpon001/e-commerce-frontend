import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="min-h-screen w-full flex flex-col items-center justify-center  text-center p-6">
        <div className="bg-white  p-8 max-w-md">
          <div className="text-blue-500 text-6xl mb-4">?</div>
          <h1 className="text-2xl font-bold">Page Not Found</h1>
          <p className="text-gray-600 mt-2">
            Oops!! We couldn't find the page that you're looking for.
          </p>
          <p className="text-gray-500 mt-1">
            Please check the address and try again.
          </p>
          <p className="text-gray-400 mt-2">Error Code: 404</p>
          <button
            onClick={() => navigate("/")}
            className="mt-4 bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Go to Home Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error;
