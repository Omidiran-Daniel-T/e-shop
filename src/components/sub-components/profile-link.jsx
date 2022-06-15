import React from "react";
const ProfileLink = () => {
  return (
    <div className="flex mx-4 cursor-pointer hover:text-gray-700 justify-center mt-2 md:mt-0">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 mx-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>{" "}
      My Profile
    </div>
  );
};

export default ProfileLink;
