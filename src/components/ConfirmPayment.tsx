import React from "react";

const ConfirmPayment = ({ setActiveTab, makePayment }) => {
  return (
    <div>
      <div className="my-[66px] w-[756px] pb-1 rounded-[10px] bg-white ">
        <div className="bg-[#2F80ED] text-white px-[80px] py-[20px] flex justify-between rounded-t-[10px] text-[20px] font-bold ">
          <p className="">Item Name</p>

          <div className="flex items-center gap-3">
            <div className="text-xl">₦</div>
            Price
          </div>
        </div>
        <div className="px-10  text-[20px] text-gray-text2">
          <div className="mt-16 mb-10 border-b border-b-[#817E9E] ">
            <div className="pl-6 pr-10 flex justify-between items-center mb-10">
              <p className="">Data science and usability</p>
              <p className="font-bold">50,000.00</p>
            </div>
            <div className="pl-6 pr-10 flex justify-between items-center mb-10">
              <p className="">Shipping</p>
              <p className="font-bold">0.00</p>
            </div>
          </div>
          <div className="flex justify-between my-10 pl-5 pr-10 py-[14px] rounded-[10px] border border-[#817E9E]">
            <p className="">Total</p>
            <p className="font-bold">50,000.00</p>
          </div>
        </div>
      </div>

      <div className="flex items-center">
        <button onClick={makePayment} className="submit-btn mr-[84px]">
          Pay
        </button>
        <p
          className="text-[20px] font-bold text-gray-text2"
          onClick={() => setActiveTab("Personal Info")}
        >
          Cancel Payment
        </p>
      </div>
    </div>
  );
};

export default ConfirmPayment;
