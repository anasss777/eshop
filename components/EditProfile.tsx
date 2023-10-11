"use client";

import { getUserByEmail, getUsers } from "@/sanity/sanity-utils";
import { UserProfile } from "@/types/UserProfile";
import Image from "next/image";
import React, { useEffect, useState } from "react";

type Props = {
  userEmail: string;
};

const EditProfile = (props: Props) => {
  const [enableEdit, setEnableEdit] = useState(false);
  const [userInfo, setUserInfo] = useState({
    phoneNumber: 1,
    country: "Please Click Edit",
    city: "Please Click Edit",
    region: "Please Click Edit",
    zipCode: 1,
  });
  const [currentUser, setCurrentUser] = useState<UserProfile | null>();

  useEffect(() => {
    const fetchUsers = async () => {
      const fetchedUser = await getUserByEmail(props.userEmail);
      setCurrentUser(fetchedUser);
    };

    fetchUsers();
  });

  const editUser = async () => {
    await fetch("/api/hi", {
      method: "PUT",
      body: JSON.stringify({
        _id: currentUser?._id,
        phoneNumber: userInfo.phoneNumber,
        country: userInfo.country,
        city: userInfo.city,
        region: userInfo.region,
        zipCode: userInfo.zipCode,
      }),
    });
  };

  if (!currentUser) {
    return (
      <div className="mt-10 flex flex-col justify-center font-mcLaren text-gray-700 h-52 w-72 bg-transparent animate-pulse shadow-md"></div>
    );
  }

  return (
    <div className="flex flex-col">
      {/* User info fileds */}
      <div className="grid grid-rows-1 grid-cols-2 px-6 py-3 mb-5 shadow-md">
        <div className="flex flex-col justify-start">
          <p className="font-bold text-white mb-1">Phone number :</p>
          <p className="font-bold text-white mb-1">Country :</p>
          <p className="font-bold text-white mb-1">City :</p>
          <p className="font-bold text-white mb-1">Region :</p>
          <p className="font-bold text-white mb-1">Zip code :</p>
        </div>

        {enableEdit ? (
          <div className="flex flex-col justify-end items-end">
            <input
              type="text"
              min={-1}
              value={String(userInfo.phoneNumber)}
              className="inputStyle"
              onChange={(e) =>
                setUserInfo({
                  ...userInfo,
                  phoneNumber: Number(e.target.value),
                })
              }
            />
            <input
              type="text"
              value={userInfo.country}
              className="inputStyle"
              onChange={(e) =>
                setUserInfo({ ...userInfo, country: e.target.value })
              }
            />
            <input
              type="text"
              value={userInfo.city}
              className="inputStyle"
              onChange={(e) =>
                setUserInfo({ ...userInfo, city: e.target.value })
              }
            />
            <input
              type="text"
              value={userInfo.region}
              className="inputStyle"
              onChange={(e) =>
                setUserInfo({ ...userInfo, region: e.target.value })
              }
            />
            <input
              type="number"
              min={0}
              value={String(userInfo.zipCode)}
              className="inputStyle"
              onChange={(e) =>
                setUserInfo({
                  ...userInfo,
                  zipCode: Number(e.target.value),
                })
              }
            />
          </div>
        ) : (
          <div className="flex flex-col justify-end items-end">
            <p className="text-gray-200 font-bold mb-1 ml-[60px]">
              {currentUser?.phoneNumber}
            </p>
            <p className="text-gray-200 font-bold mb-1 ml-[60px]">
              {currentUser?.country}
            </p>
            <p className="text-gray-200 font-bold mb-1 ml-[60px]">
              {currentUser?.city}
            </p>
            <p className="text-gray-200 font-bold mb-1 ml-[60px]">
              {currentUser?.region}
            </p>
            <p className="text-gray-200 font-bold mb-1 ml-[60px]">
              {currentUser?.zipCode}
            </p>
          </div>
        )}
      </div>

      {/* Save and Edit button */}
      <div className="flex justify-center">
        {enableEdit ? (
          <button
            onClick={() => {
              editUser();
              setTimeout(() => {
                setEnableEdit(false);
              }, 1000);
            }}
            className="py-1 px-3 rounded-md bg-green-400 mx-1 text-white shadow-lightShadowing hover:shadow-shadowing hover:scale-105 
      duration-300 transition-all ease-linear"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setEnableEdit(true)}
            className="py-1 px-3 rounded-md bg-yellow-400 mx-1 text-white shadow-lightShadowing hover:shadow-shadowing hover:scale-105 
      duration-300 transition-all ease-linear"
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default EditProfile;
