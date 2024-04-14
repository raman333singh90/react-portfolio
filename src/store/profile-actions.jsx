import { uiActions } from "./ui-slice";
import { profileActions } from "./profile-slice";

export const fetchProfileData = () => {
  return async (dispatch) => {
    const getProfileData = async () => {
      const response = await fetch("http://localhost:8080/profile");

      if (!response.ok) {
        throw new Error("Fetching Cart Data Failed");
      }

      const data = await response.json();

      return data;
    };

    try {
      const fetchData = await getProfileData();
      dispatch(
        profileActions.setDetail({
          profile: fetchData.profile || [],
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Fetching Profile Data Failed!",
        })
      );
    }
  };
};
