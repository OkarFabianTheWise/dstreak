import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IoMdShareAlt } from "react-icons/io";
import { FaXTwitter, FaDiscord, FaWhatsapp } from "react-icons/fa6";
import { IoCopy } from "react-icons/io5";
import { toast } from "sonner";

interface ShareMenuProps {
  url?: string;
  title?: string;
}

const ShareMenu: React.FC<ShareMenuProps> = ({
  url = window.location.href,
  title = "Check out my profile on DevStreak!",
}) => {
  const shareOptions = [
    {
      name: "X (Twitter)",
      icon: <FaXTwitter size={20} />,
      action: () => {
        window.open(
          `https://twitter.com/intent/tweet?text=${encodeURIComponent(
            title
          )}&url=${encodeURIComponent(url)}`,
          "_blank"
        );
      },
    },
    {
      name: "WhatsApp",
      icon: <FaWhatsapp size={20} />,
      action: () => {
        window.open(
          `https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`,
          "_blank"
        );
      },
    },
    {
      name: "Discord",
      icon: <FaDiscord size={20} />,
      action: () => {
        navigator.clipboard.writeText(url);
        toast.success("Link copied to clipboard! Share it on Discord.");
      },
    },
    {
      name: "Copy Link",
      icon: <IoCopy size={20} />,
      action: () => {
        navigator.clipboard.writeText(url);
        toast.success("Link copied to clipboard!");
      },
    },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex hover:opacity-50 justify-center items-center gap-2 p-3 bg-transparent border-2 border-secondary rounded-lg text-xs">
          <IoMdShareAlt size={24} /> Share
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-48 bg-[#151515] border-secondary"
      >
        {shareOptions.map((option) => (
          <DropdownMenuItem
            key={option.name}
            onClick={option.action}
            className="flex items-center gap-3 px-4 py-2.5 text-accent hover:bg-[#252525] cursor-pointer text-sm"
          >
            {option.icon}
            <span>{option.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ShareMenu;
