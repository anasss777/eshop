"use client";

import { getUsers } from "@/sanity/sanity-utils";
import { UserProfile } from "@/types/UserProfile";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export const inputStyle =
  "rounded-md px-1 focus:border-2 focus:border-blue-500 outline-none border border-blue-500 mb-1";

const EditProfile = () => {
  const [enableEdit, setEnableEdit] = useState(false);
  const [userInfo, setUserInfo] = useState({
    phoneNumber: 1,
    country: "Please Click Edit",
    city: "Please Click Edit",
    region: "Please Click Edit",
    zipCode: 1,
  });

  const [currentUser, setCurrentUser] = useState<UserProfile>();
  const { data: sessionData } = useSession();

  useEffect(() => {
    const fetchUsers = async () => {
      const fetchedUsers = await getUsers();
      setCurrentUser(
        fetchedUsers.filter((user) => user.email == sessionData?.user?.email)[0]
      );
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
      <div className="mt-10 flex flex-col justify-center font-mcLaren text-gray-700">
        <p className="text-8xl text-center">Loading...</p>
        <Image
          src="/hourglass.gif"
          alt="Laoding"
          width={300}
          height={300}
          className="mt-10 flex justify-center mx-auto"
        />
      </div>
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
              value={String(
                currentUser?.phoneNumber
                  ? currentUser.phoneNumber
                  : userInfo.phoneNumber
              )}
              className={inputStyle}
              onChange={(e) =>
                setUserInfo({
                  ...userInfo,
                  phoneNumber: Number(e.target.value),
                })
              }
            />
            <input
              type="text"
              value={
                currentUser?.country ? currentUser.country : userInfo.country
              }
              className={inputStyle}
              onChange={(e) =>
                setUserInfo({ ...userInfo, country: e.target.value })
              }
            />
            <input
              type="text"
              value={currentUser?.city ? currentUser.city : userInfo.city}
              className={inputStyle}
              onChange={(e) =>
                setUserInfo({ ...userInfo, city: e.target.value })
              }
            />
            <input
              type="text"
              value={currentUser?.region ? currentUser.region : userInfo.region}
              className={inputStyle}
              onChange={(e) =>
                setUserInfo({ ...userInfo, region: e.target.value })
              }
            />
            <input
              type="number"
              min={0}
              value={String(
                currentUser?.zipCode ? currentUser.zipCode : userInfo.zipCode
              )}
              className={inputStyle}
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
              {currentUser?.phoneNumber
                ? currentUser.phoneNumber
                : userInfo.phoneNumber}
            </p>
            <p className="text-gray-200 font-bold mb-1 ml-[60px]">
              {currentUser?.country ? currentUser.country : userInfo.country}
            </p>
            <p className="text-gray-200 font-bold mb-1 ml-[60px]">
              {currentUser?.city ? currentUser.city : userInfo.city}
            </p>
            <p className="text-gray-200 font-bold mb-1 ml-[60px]">
              {currentUser?.region ? currentUser.region : userInfo.region}
            </p>
            <p className="text-gray-200 font-bold mb-1 ml-[60px]">
              {currentUser?.zipCode ? currentUser.zipCode : userInfo.zipCode}
            </p>
          </div>
        )}
      </div>

      {/* Save and Edit button */}
      <div className="flex justify-center">
        {enableEdit ? (
          <button
            onClick={() => {
              setEnableEdit(false);
              editUser();
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
