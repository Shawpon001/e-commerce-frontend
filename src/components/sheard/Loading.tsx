import { ThreeDots } from "react-loader-spinner";

const Loading = () => {
  return (
    <>
      <div className="text-center w-full mx-auto justify-center flex mt-10">
        <ThreeDots
          visible={true}
          height="80"
          width="80"
          color="#4fa94d"
          radius="9"
          ariaLabel="three-dots-loading"
        />
      </div>
    </>
  );
};

export default Loading;
