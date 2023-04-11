import { useState } from "react";
import "./App.css";
import FormLayout from "./layout/FormLayout";
import {
  BillingInfo,
  PersonalInfo,
  ConfirmPayment,
  PaymentCard,
} from "./components";

const tabs = ["Personal Info", "Billing Info", "Confirm Payment"];

function App() {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [showPaymentCard, setShowPayment] = useState(false);

  const makePayment = () => {
    setShowPayment(true);
  };

  const close = () => {
    setActiveTab("Personal Info"), setShowPayment(false);
  };

  return (
    <FormLayout>
      {showPaymentCard ? (
        <PaymentCard close={close} />
      ) : (
        <>
          <h2 className="text-gray-text2 font-bold text-[36px] mb-[59px]">
            Complete your Purchase
          </h2>

          <div className="pb-40">
            <div className="border-b-[#000000] border-b flex justify-between">
              {tabs.map((tab, idx) => (
                <div
                  key={idx}
                  className="pb-5 pr-4 relative cursor-pointer "
                  // onClick={() => setActiveTab(tab)}
                >
                  <h4
                    className={`text-2xl font-bold ${
                      activeTab === tab ? "text-primary" : "text-gray-text"
                    }`}
                  >
                    {tab}
                  </h4>
                  {activeTab === tab && (
                    <div className="bg-primary h-[13px] absolute -bottom-2 rounded-md w-full "></div>
                  )}
                </div>
              ))}
            </div>
            {activeTab == "Personal Info" && (
              <PersonalInfo setActiveTab={setActiveTab} />
            )}
            {activeTab == "Billing Info" && (
              <BillingInfo setActiveTab={setActiveTab} />
            )}
            {activeTab == "Confirm Payment" && (
              <ConfirmPayment
                setActiveTab={setActiveTab}
                makePayment={makePayment}
              />
            )}
          </div>
        </>
      )}
    </FormLayout>
  );
}

export default App;
