import { Button, Divider, Input } from "@/components";
import React from "react";

const Settings = () => {
  return (
    <main className="dashboardContainer">
      <form>
        <div>
          <h2 className="mb-1 font-bold text-dark text-[20px]">Password</h2>
          <p className="font-Montserrat text-greyPrimary text-[16px] font-medium">
            Change or view your password.
          </p>
          <div className="grid gap-6 mt-6">
            <Input
              id="oldPassword"
              type="password"
              label="Old password"
              inputprops={{ placeholder: "*******" }}
            />
            <Input
              id="newPassword"
              type="password"
              label="New password"
              inputprops={{ placeholder: "*******" }}
            />
          </div>
        </div>
        <Divider className="my-[20px] lg:my-[49px]" />
        <div>
          <h2 className="mb-1 font-bold text-dark text-[20px]">
            Business Details
          </h2>
          <p className="font-Montserrat text-greyPrimary text-[16px] font-medium">
            Salesline and your customers will use this information to contact
            you.
          </p>
          <div className="grid lg:grid-cols-2 gap-6 mt-6">
            <Input
              id="storeName"
              type="text"
              label="Store name"
              inputprops={{ placeholder: "Makostore" }}
            />
            <Input
              id="industry"
              type="text"
              label="Industry"
              inputprops={{ placeholder: "Digital Creator" }}
            />
            <Input
              id="storeCurrency"
              type="text"
              label="Store currency"
              inputprops={{ placeholder: "Naira (NGN)" }}
            />
            <Input
              id="timezone"
              type="text"
              label="Timezone"
              inputprops={{ placeholder: "West Central Africa" }}
            />
          </div>
        </div>
        <Divider className="my-[20px] lg:my-[49px]" />
        <div>
          <h2 className="mb-1 font-bold text-dark text-[20px]">
            Business Address
          </h2>
          <p className="font-Montserrat text-greyPrimary text-[16px] font-medium">
            This address will appear on your invoices.
          </p>
          <div className="grid lg:grid-cols-2 gap-6 mt-6">
            <div className="col-span-2">
              <Input
                id="legalName"
                type="text"
                label="Legal name of company"
                inputprops={{ placeholder: "Makostore" }}
              />
            </div>
            <Input
              id="address"
              type="text"
              label="Address"
              inputprops={{ placeholder: "Oluyole Extension, Ibadan" }}
            />
            <Input
              id="city"
              type="text"
              label="City"
              inputprops={{ placeholder: "Ibadan" }}
            />
            <Input
              id="country"
              type="text"
              label="Country or region"
              inputprops={{ placeholder: "Nigeria" }}
            />
            <Input
              id="postalCode"
              type="text"
              label="Postal code"
              inputprops={{ placeholder: "" }}
            />
          </div>
        </div>
        <div className="mt-[26px] flex justify-end">
          <Button type="button" label="Save Changes" variant="contained" />
        </div>
      </form>
    </main>
  );
};

export default Settings;
