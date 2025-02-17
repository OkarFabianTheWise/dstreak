// UpdateTextField.tsx
import { useState } from "react";

interface UpdateTextFieldProps {
  label: string;
}

const sendUpdateRequest = async (label: string, value: string) => {
  try {
    const response = await fetch(
      "https://dev-streak-server-772acc1b2e9a.herokuapp.com/api/users/update",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ label, value }),
      }
    );

    const data = await response.json();
    if (!data.success) {
      throw new Error(data.message || "Update failed");
    }

    alert(`${label} updated successfully!`);
  } catch (error: any) {
    alert(error.message || "An error occurred. Please try again.");
  }
};

const UpdateTextField = ({ label }: UpdateTextFieldProps) => {
  const [value, setValue] = useState("");

  const handleUpdateClick = () => {
    console.log("value", value);
    if (value.trim() !== "") {
      sendUpdateRequest(label, value);
    } else {
      alert("Please enter a value before updating.");
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <label className="text-white font-semibold">{label}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full bg-[#151515] border border-primary rounded-3xl p-2 text-white focus:outline-none focus:ring-2 focus:ring-primary"
      />
      <div className="flex justify-end">
        <button
          onClick={handleUpdateClick}
          className="border border-primary p-2 px-4 rounded-3xl hover:text-white hover:bg-primary transition duration-300"
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default UpdateTextField;
