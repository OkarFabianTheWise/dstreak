import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface SuccessModalProps {
  message: string;
  isOpen: boolean;
  onClose: () => void;
  onConfirm?: () => void;
  autoCloseDelay?: number;
}

const ApiSuccessAlert: React.FC<SuccessModalProps> = ({
  message,
  isOpen,
  onClose,
  onConfirm,
  autoCloseDelay = 4000, // default to 4 seconds
}) => {
  const [isVisible, setIsVisible] = useState(isOpen);

  useEffect(() => {
    setIsVisible(isOpen);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, autoCloseDelay);
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose, autoCloseDelay]);

  const handleConfirm = () => {
    if (onConfirm) {
      onConfirm();
    }
    onClose();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-0"
        >
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="relative bg-[#000000] border-2 border-green-500 rounded-lg p-6 max-w-sm w-full shadow-lg"
          >
            <button
              onClick={onClose}
              className="absolute top-2 right-2 text-gray-400 hover:text-white"
            >
              <X size={20} />
            </button>
            <p className="text-white text-sm sm:text-base break-words overflow-hidden mb-6">
              {message}
            </p>

            <div className="flex justify-end space-x-4 mt-4">
              <button
                onClick={handleConfirm}
                className="px-4 py-2 text-sm font-medium text-white rounded-md bg-green-600 hover:bg-green-700"
              >
                OK
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ApiSuccessAlert;
