import { toast, Slide } from "react-toastify";
const toastSlide = {
  transition: Slide,
  hideProgressBar: true,
  autoClose: 2000,
  toastId: "9star_admin_panel",
};
export const extractDataFromResponse = ({
  response,
  successCode = 200,
  successStatus = true,
  showSuccessToast = true,
  showPopUpOnSuccess = false,
  showErrorToast = true,
}) => {
  const data = response?.data ?? {};
  if (
    response.status === successCode &&
    response.data.statusCode === successCode &&
    successStatus
  ) {
    if (showSuccessToast) {
      toast.success(response.data.message, toastSlide);
    }
    data.error = false;
    return data;
  }
  if (showErrorToast) {
    toast.error(response.data.message, toastSlide);
  }
  data.error = true;
  return data;
};

export const parseApiErrorResponse = ({ error, showToast = true }) => {
  console.log("parse api error response", error);
  if (error.response) {
    const response = error.response;
    const data = response?.data?.data ?? {};
    data.error = true;
    if (showToast) {
      toast.error(response.data.message, toastSlide);
    }
    return data;
  }
  if (showToast) {
    toast.error("Something went wrong, Please try again later.", toastSlide);
  }
  return { error: true };
};
