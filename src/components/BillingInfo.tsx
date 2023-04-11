import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { billingInfoSchema } from "../schema";
import Input from "./Input";

const cardTypes = [
  {
    name: "Enter Card Type",
    value: "",
  },
  {
    name: "Visa",
    value: "visa",
  },
  {
    name: "Master Card",
    value: "master card",
  },
  {
    name: "Verve",
    value: "verve",
  },
];

const BillingInfo = ({ setActiveTab }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(billingInfoSchema) });

  const submitForm = (data) => {
    console.log(data);
    setActiveTab("Confirm Payment");
  };

  return (
    <form
      className="mt-[76px] w-[710px] flex flex-col gap-[60px]"
      onSubmit={handleSubmit(submitForm)}
    >
      <Input
        control={control}
        error={errors?.cardName?.message}
        name="cardName"
        label="Name On Card"
        placeholder="Opara Linus Ahmed"
        required
      />

      <Input
        control={control}
        error={errors?.cardType?.message}
        name="cardType"
        label="Card Type"
        placeholder="Enter Card Type"
        inputType="select"
        options={cardTypes}
        required
      />

      <div className="grid grid-cols-12 gap-[33px]">
        <div className="col-span-7">
          <Input
            control={control}
            error={errors?.cardDetails?.message}
            name="cardDetails"
            label="Card details"
            placeholder="4460 4460 4960 4960"
            inputType="cleave"
            cleaveOption={{ creditCard: true }}
            required
          />
        </div>

        <div className="col-span-3">
          <Input
            control={control}
            error={errors?.expiryDate?.message}
            name="expiryDate"
            label="Expiry date"
            placeholder="04/03"
            inputType="cleave"
            cleaveOption={{ date: true, datePattern: ["m", "y"] }}
            required
          />
        </div>
        <div className="col-span-2">
          <Input
            control={control}
            error={errors?.cvv?.message}
            name="cvv"
            label="CVV"
            placeholder="123"
            maxLength={3}
            type="tel"
            required
          />
        </div>
      </div>

      <div className="flex items-center">
        <button type={"submit"} className="submit-btn mr-[84px]">
          Next
        </button>
        <p
          className="text-[20px] font-bold text-gray-text2"
          onClick={() => setActiveTab("Personal Info")}
        >
          Cancel Payment
        </p>
      </div>
    </form>
  );
};

export default BillingInfo;
