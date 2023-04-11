import React from "react";
import { personalInfoSchema } from "../schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Input from "./Input";

const states = [
  {
    name: "Lagos",
    value: "Lagos",
  },
  {
    name: "Abuja",
    value: "Abuja",
  },
  {
    name: "Kano",
    value: "Kano",
  },
  {
    name: "Oyo",
    value: "Oyo",
  },
];

const PersonalInfo = ({ setActiveTab }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(personalInfoSchema) });

  const submitForm = (data) => {
    console.log(data);
    setActiveTab("Billing Info");
  };

  return (
    <form
      className="mt-[76px] flex flex-col gap-[60px] w-[710px]"
      onSubmit={handleSubmit(submitForm)}
    >
      <Input
        control={control}
        name="name"
        placeholder="Opara Linus Ahmed"
        label="Name"
        error={errors?.name?.message}
      />
      <Input
        name="email"
        control={control}
        required
        placeholder="OparaLinusAhmed@devmail.com"
        addedNote="The purchase reciept would be sent to this address"
        label="Email"
        error={errors?.email?.message}
      />
      <Input
        name="address1"
        control={control}
        placeholder="The address of the user goes here"
        label="Address 1"
        error={errors?.address1?.message}
      />{" "}
      <Input
        name="address2"
        control={control}
        placeholder="The address of the user goes here"
        label="Address 2"
        error={errors?.address2?.message}
      />
      <div className="grid grid-cols-12 gap-[33px]">
        <div className="col-span-7">
          <Input
            name="lga"
            control={control}
            placeholder="Surulere"
            label="Local Government"
            error={errors?.lga?.message}
          />
        </div>
        <div className="col-span-5">
          <Input
            inputType="select"
            control={control}
            placeholder="Lagos"
            name="state"
            label="State"
            options={states}
            error={errors?.state?.message}
          />
        </div>
      </div>
      <div className="flex items-center">
        <button type="submit" className="submit-btn mr-[84px]">
          Next
        </button>
        <p className="text-[20px] font-bold text-gray-text2">Cancel Payment</p>
      </div>
    </form>
  );
};

export default PersonalInfo;
