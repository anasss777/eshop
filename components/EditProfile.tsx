"use client";

import React, { useState } from "react";

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
              value={userInfo.country}
              className={inputStyle}
              onChange={(e) =>
                setUserInfo({ ...userInfo, country: e.target.value })
              }
            />
            <input
              type="text"
              value={userInfo.city}
              className={inputStyle}
              onChange={(e) =>
                setUserInfo({ ...userInfo, city: e.target.value })
              }
            />
            <input
              type="text"
              value={userInfo.region}
              className={inputStyle}
              onChange={(e) =>
                setUserInfo({ ...userInfo, region: e.target.value })
              }
            />
            <input
              type="number"
              min={0}
              value={String(userInfo.zipCode)}
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
              {userInfo.phoneNumber}
            </p>
            <p className="text-gray-200 font-bold mb-1 ml-[60px]">
              {userInfo.country}
            </p>
            <p className="text-gray-200 font-bold mb-1 ml-[60px]">
              {userInfo.city}
            </p>
            <p className="text-gray-200 font-bold mb-1 ml-[60px]">
              {userInfo.region}
            </p>
            <p className="text-gray-200 font-bold mb-1 ml-[60px]">
              {userInfo.zipCode}
            </p>
          </div>
        )}
      </div>

      {/* Save and Edit button */}
      <div className="flex justify-center">
        {enableEdit ? (
          <button
            onClick={() => setEnableEdit(false)}
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
