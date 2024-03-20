// layouts/DataProvider.js
import React, { Fragment, useContext, useEffect, useState } from "react";
import Preloader from "../../components/ui/Preloader";
import { UserDataContext } from "../../contexts/userData";
const API_URL =
  "https://dashboard-backend.cyclic.app/api/v1/get/user/65b3a22c01d900e96c4219ae";

const DataProvider = ({ children }) => {
  const [isLoading, setLoadingState] = useState(true);
  const { setUserData } = useContext(UserDataContext);

  const fetchUserData = async () => {
    try {
      const respose = await fetch(API_URL);
      const { success, user } = await respose.json();
      if (success) {
        setUserData(user);
        setLoadingState(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);
  return (
    <Fragment>
      {isLoading && <Preloader />}
      {!isLoading && children}
    </Fragment>
  );
};

export default DataProvider;
