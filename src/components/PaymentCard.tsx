import React from "react";

const PaymentCard = ({ close }) => {
  return (
    <div className="flex w-full justify-center items-center">
      <div className="bg-white px-[150px] pt-[67px] pb-[99px] flex flex-col w-full max-w-[801px] ">
        <div className="flex mx-auto justify-center rounded-full bg-white check-shadow w-[84px] h-[84px] ">
          <img src="/check.svg" className="w-12" alt="" />
        </div>

        <h2 className="text-gray-text2 text-[48px] font-bold mb-[30px] ">
          Purchase Completed
        </h2>

        <p className="text-[20px] text-[#4F4F4F] ">
          Please check your email for details concerning this transaction
        </p>

        <p
          className="text-primary text-[20px] underline mt-8 font-light cursor-pointer "
          onClick={close}
        >
          Return Home
        </p>
      </div>
    </div>
  );
};

export default PaymentCard;
