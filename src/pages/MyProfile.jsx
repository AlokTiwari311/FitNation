import React, { useState } from "react";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import userImage from "../assets/user.png";
import gymImage from "../assets/image.png";
import {
  MdDirectionsWalk,
  MdFitnessCenter,
  MdLocalDrink,
  MdKeyboardArrowRight,
  MdKeyboardArrowLeft,
} from "react-icons/md";
import { GiBodyHeight } from "react-icons/gi";
import { IoMdBed } from "react-icons/io";
import { IoFastFood } from "react-icons/io5";

const MyProfile = () => {
  const [activeAchievement, setActiveAchievement] = useState(0);
  const [activeGoal, setActiveGoal] = useState(0);

  const achievements = [
    {
      title: "Achievement 1",
      details: "Details about the achievement 1",
    },
    {
      title: "Achievement 2",
      details: "Details about the achievement 2",
    },
  ];

  const goals = [
    {
      title: "Weight Goal",
      icon: <MdFitnessCenter className="text-3xl text-gray-700 mb-2" />,
      value: "75 kg",
    },
    {
      title: "Height Goal",
      icon: <GiBodyHeight className="text-3xl text-gray-700 mb-2" />,
      value: "190 cm",
    },
    {
      title: "Water Goal",
      icon: <MdLocalDrink className="text-3xl text-gray-700 mb-2" />,
      value: "2 liters",
    },
    {
      title: "Nutritional Goal",
      icon: <IoFastFood className="text-3xl text-gray-700 mb-2" />,
      value: "1000 cal",
    },
    {
      title: "Steps Goal",
      icon: <MdDirectionsWalk className="text-3xl text-gray-700 mb-2" />,
      value: "10,000 steps",
    },
    {
      title: "Sleep Goal",
      icon: <IoMdBed className="text-3xl text-gray-700 mb-2" />,
      value: "7:30 Hours",
    },
  ];

  const handleNextAchievement = () => {
    setActiveAchievement((prevIndex) =>
      prevIndex === achievements.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevAchievement = () => {
    setActiveAchievement((prevIndex) =>
      prevIndex === 0 ? achievements.length - 1 : prevIndex - 1
    );
  };

  const handleNextGoal = () => {
    setActiveGoal((prevIndex) =>
      prevIndex === goals.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevGoal = () => {
    setActiveGoal((prevIndex) =>
      prevIndex === 0 ? goals.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="min-h-auto flex justify-center items-center">
      <div className="flex flex-col md:flex-row items-stretch w-full h-full gap-4">
        <div className="w-full md:w-4/6 bg-white rounded-lg shadow-lg overflow-hidden flex flex-col border border-gray-300">
          <div className="relative h-auto flex-grow">
            <img
              src={gymImage}
              alt="Gym"
              className="w-full h-full object-cover"
            />
            <img
              src={userImage}
              alt="User"
              className="w-28 h-28 md:w-40 md:h-40 rounded-full border-4 border-white absolute -bottom-14 md:-bottom-16 left-56 md:left-auto md:right-4"
            />
          </div>
          <div className="p-8 flex-grow flex flex-col">
            <h1 className="text-3xl font-bold mb-2">User Name</h1>
            <div className="flex justify-between py-6">
              <div className="flex flex-col">
                <span className="text-sm text-gray-700">Age</span>
                <span className="text-lg font-semibold">25</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-gray-700">Gender</span>
                <span className="text-lg font-semibold">Male</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-gray-700">Weight (kg)</span>
                <span className="text-lg font-semibold">75</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-gray-700">Height (cm)</span>
                <span className="text-lg font-semibold">180</span>
              </div>
            </div>
            <div className="flex justify-between p-4">
              <div className="flex flex-row items-center">
                <AiOutlinePhone className="text-2xl text-gray-700 mr-2" />
                <span className="text-lg font-semibold">1234567890</span>
              </div>
              <div className="flex flex-row items-center">
                <AiOutlineMail className="text-2xl text-gray-700 mr-2" />
                <span className="text-lg font-semibold">
                  temp@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center w-full px-4 md:w-1/3 ">
          <div className="w-full flex flex-col ">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8 flex-grow border border-gray-300">
              <div className="p-6 flex-grow flex flex-col">
                <h1 className="text-xl font-bold mb-4">Goals</h1>
                <div className="bg-gray-100 border border-gray-200 rounded-lg p-4 mb-4">
                  <h2 className="text-lg font-bold mb-2">
                    {goals[activeGoal].title}
                  </h2>
                  <span className="text-lg font-semibold flex flex-row justify-between">
                    {goals[activeGoal].icon}
                    {goals[activeGoal].value}
                  </span>
                </div>
                <div className="flex justify-between">
                  <button
                    className="bg-gray-200 border border-gray-500 opacity-50 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded"
                    onClick={handlePrevGoal}
                  >
                    <MdKeyboardArrowLeft className="text-xl text-black" />
                  </button>
                  <button
                    className="bg-gray-200 border border-gray-500 opacity-50 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded"
                    onClick={handleNextGoal}
                  >
                    <MdKeyboardArrowRight className="text-xl text-black" />
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex-grow border border-gray-300">
              <div className="p-6 flex-grow flex flex-col">
                <h1 className="text-xl font-bold mb-4">Achievements</h1>
                <div className="bg-gray-100 border border-gray-200 rounded-lg p-4 mb-4">
                  <h2 className="text-lg font-bold mb-2">
                    {achievements[activeAchievement].title}
                  </h2>
                  <p>{achievements[activeAchievement].details}</p>
                </div>
                <div className="flex justify-between">
                  <button
                    className="bg-gray-200 border border-gray-500 opacity-50 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded"
                    onClick={handlePrevAchievement}
                  >
                    <MdKeyboardArrowLeft className="text-xl text-black" />
                  </button>
                  <button
                    className="bg-gray-200 border border-gray-500 opacity-50 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded"
                    onClick={handleNextAchievement}
                  >
                    <MdKeyboardArrowRight className="text-xl text-black" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
