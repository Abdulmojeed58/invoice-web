import { Button, DialogBox, Divider, Input } from "@/components";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { DeleteButtonTrigger } from "../components";

const Profile = () => {
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState<File | null>(null);
  const [photoURL, setPhotoURL] = useState<string>("");

  const toggleDeleteDialog = () => {
    setDeleteDialog((value) => !value);
  };

  const hadleDeletePhoto = () => {
    setProfilePhoto(null);
    setDeleteDialog(false);
  };

  const handleChangeProfilePhoto = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event?.target.files?.[0] || null;
    if (file) {
      setProfilePhoto(file);
    }
  };

  useEffect(() => {
    if (profilePhoto) {
      const url = URL.createObjectURL(profilePhoto);
      setPhotoURL(url);

      // Clean up the URL object when the component unmounts or the image changes
      return () => URL.revokeObjectURL(url);
    } else {
      setPhotoURL("");
    }
  }, [profilePhoto]);

  return (
    <main className="dashboardContainer">
      <h2 className="pb-[30px] font-bold text-dark text-[20px]">
        Personal Information
      </h2>
      <Divider />
      <section className="pt-[41px]">
        <div className="flex gap-6 py-[14px]">
          <div className="rounded-full w-[88px] h-[88px] overflow-hidden relative">
            <Image
              src={
                photoURL ||
                "https://www.londondentalsmiles.co.uk/wp-content/uploads/2017/06/person-dummy.jpg"
              }
              alt=""
              width={88}
              height={88}
              className="w-full h-full"
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleChangeProfilePhoto}
              className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
            />
          </div>
          <div>
            <p className="font-medium text-greyPrimary text-sm">
              We only support .JPG, .JPEG, or .PNG file.
            </p>
            <div className="flex flex-wrap mt-4">
              <Button label="Upload your photo" variant="contained" />
              <DeleteButtonTrigger
                isOpen={deleteDialog}
                handleCancel={toggleDeleteDialog}
                handleDelete={hadleDeletePhoto}
              >
                <Button
                  label="Delete Image"
                  variant="text"
                  onClick={toggleDeleteDialog}
                />
              </DeleteButtonTrigger>
            </div>
          </div>
        </div>
        <div className="mt-[51px]">
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                id="first name"
                type="text"
                label="First Name"
                inputprops={{ placeholder: "Abdulmojeed" }}
              />
              <Input
                id="last name"
                type="text"
                label="Last Name"
                inputprops={{ placeholder: "Ayoola" }}
              />
              <Input
                id="email"
                type="email"
                label="Email"
                inputprops={{ placeholder: "mojeedayoola58@gmail.com" }}
              />
              <Input
                id="phone"
                type="tel"
                label="Phone Number (Optional)"
                inputprops={{ placeholder: "(800) 555-0127" }}
              />
            </div>
            <h2 className="pb-[30px] font-bold text-dark text-[20px] mt-2">
              Personal Address
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                id="address"
                type="text"
                label="Address"
                inputprops={{ placeholder: "Oluyole Extension, Ibadan" }}
              />
              <Input id="postal code" type="text" label="Postal Code" />
            </div>
            <div className="mt-[26px] flex justify-end">
              <Button type="button" label="Edit Profile" variant="contained" />
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Profile;
