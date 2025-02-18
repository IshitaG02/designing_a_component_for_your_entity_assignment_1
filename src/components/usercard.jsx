// write the component code here
import React from "react";

const Usercard = () => {
  // Static user details
  const profilePhoto = "https://tse1.mm.bing.net/th?id=OIP.xzenARvYAfou1YQzMQB_YgHaJ3&pid=Api&P=0&h=180";
  const name = "Rashi Rawal";
  const email = "rawalrashi@example.com";
  const phone = "+1 234 567 890";
  const address = "123 Main Street, City, Country";

  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white p-4 border border-gray-200">
      <img className="w-24 h-24 rounded-full mx-auto" src={profilePhoto} alt="Profile" />
      <div className="text-center mt-4">
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        <p className="text-gray-600">{email}</p>
        <p className="text-gray-600">{phone}</p>
        <p className="text-gray-600">{address}</p>
      </div>
    </div>
  );
};

export default Usercard;
