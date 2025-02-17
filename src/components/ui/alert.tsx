import React from "react";
import { AlertTriangle, CheckCircle, Info, XCircle } from "lucide-react";

const AlertTypes = {
  success: {
    icon: CheckCircle,
    baseClass: "bg-green-100 border-green-200 text-green-800",
  },
  warning: {
    icon: AlertTriangle,
    baseClass: "bg-yellow-100 border-yellow-200 text-yellow-800",
  },
  error: {
    icon: XCircle,
    baseClass: "bg-red-100 border-red-200 text-red-800",
  },
  info: {
    icon: Info,
    baseClass: "bg-blue-100 border-blue-200 text-blue-800",
  },
};

type AlertType = "success" | "warning" | "error" | "info";

interface AlertProps {
  type?: AlertType;
  message: string;
  title?: string;
  className?: string;
}

const Alert: React.FC<AlertProps> = ({
  type = "info",
  message,
  title,
  className = "",
}) => {
  const { icon: Icon, baseClass } = AlertTypes[type] || AlertTypes.info;

  return (
    <div
      className={`
        flex items-start 
        p-4 border rounded-lg 
        ${baseClass} 
        ${className}
      `}
      role="alert"
    >
      <Icon className="mr-3 mt-1 flex-shrink-0" size={24} />
      <div>
        {title && <div className="font-bold mb-1">{title}</div>}
        <div>{message}</div>
      </div>
    </div>
  );
};

export default Alert;
