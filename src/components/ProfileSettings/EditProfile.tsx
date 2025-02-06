// EditProfile.tsx
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

const sendUpdateRequest = async (value: string) => {
  try {
    const response = await fetch(
      "https://dev-streak-server-772acc1b2e9a.herokuapp.com/api/users/update",
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ full_name }),
      }
    );

    const data = await response.json();
    console.log(data);
    if (!data.success) {
      throw new Error(data.message || "Update failed");
    }

    alert(`${value} updated successfully!`);
  } catch (error: any) {
    alert(error.message || "An error occurred. Please try again.");
  }
};

const EditProfile = () => {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");

  const handleUpdate = (value: string) => {
    confirm(value);
    if (value.trim() !== "") {
      sendUpdateRequest(value);
    } else {
      alert("Please enter a value before updating.");
    }
  };

  const handleDeleteAccount = async () => {
    console.log("delete account");
    if (
      confirm(
        "Are you sure you want to delete your account? This action is irreversible."
      )
    ) {
      try {
        const response = await fetch(
          "https://dev-streak-server-772acc1b2e9a.herokuapp.com/api/users/delete",
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const data = await response.json();
        if (data.success) {
          alert("Account deleted successfully.");
        } else {
          throw new Error(data.message || "Failed to delete account.");
        }
      } catch (error: any) {
        alert(error.message);
      }
    }
  };

  return (
    <div>
      <div className="text-xl font-bold text-white">Edit Profile</div>
      <div className="font-sans text-white text-sm">
        Manage your Dev-streak profile
      </div>

      <hr className="my-8" />

      <div className="text-white text-sm mb-4">Avatar</div>
      <div className="border border-primary w-20 h-20 rounded-xl"></div>
      <div className="font-sans text-sm text-white my-4">
        Recommended size is 256x256px
      </div>

      <div className="w-4/5 flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <label className="text-white font-semibold">Full Name</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full bg-[#151515] border border-primary rounded-3xl p-2 text-white focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <div className="flex justify-end">
            <button
              onClick={() => handleUpdate(fullName)}
              className="border border-primary p-2 px-4 rounded-3xl hover:text-white hover:bg-primary transition duration-300"
            >
              Update
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-white font-semibold">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full bg-[#151515] border border-primary rounded-3xl p-2 text-white focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <div className="flex justify-end">
            <button
              onClick={() => handleUpdate(username)}
              className="border border-primary p-2 px-4 rounded-3xl hover:text-white hover:bg-primary transition duration-300"
            >
              Update
            </button>
          </div>
        </div>

        <div
          className="flex justify-between items-center text-white cursor-pointer hover:bg-red-600 p-3 rounded-xl"
          onClick={handleDeleteAccount}
        >
          <div>
            <div className="text-red-500 font-bold">Delete my account</div>
            <div className="font-sans text-sm">
              Permanently delete your account and remove all info
            </div>
          </div>
          <IoIosArrowForward size={30} />
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
