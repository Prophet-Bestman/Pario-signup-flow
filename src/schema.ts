import * as yup from "yup";

export const personalInfoSchema = yup
  .object({
    name: yup.string(),
    email: yup
      .string()
      .email("Enter a Valid Email")
      .required("Email is required"),

    address1: yup.string(),
    address2: yup.string(),
    lga: yup.string(),
    state: yup.string(),
  })
  .required();

export const billingInfoSchema = yup
  .object({
    cardName: yup.string().required("Card name is required"),
    cardType: yup.string().required("Card type is required"),

    cardDetails: yup.string().required("Card details is required"),
    expiryDate: yup.string().required("Expiry date is required"),
    cvv: yup.string().required("cvv  is required"),
  })
  .required();
