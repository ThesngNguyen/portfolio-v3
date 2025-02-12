import React, { useEffect } from 'react';
import { ToastContainer, toast, Slide } from 'react-toastify';

interface SuccessToastProps {
  message: string;
}

export const SuccessToast = ({ message }: SuccessToastProps) => {
  useEffect(() => {
    if (message) {
      toast.success(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
      });
    }
  }, [message]);

  return <ToastContainer />;
};

export default SuccessToast;