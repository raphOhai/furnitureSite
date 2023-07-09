import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
// import { getCartItems } from "../../function/FingertippsApiCall";
import { useDispatch } from "react-redux";
import { InitializeHandShake } from "fingertipps-handshakes";
import { storeId } from "../../function/FingertippsApiCall";

export const UserId = () => {
  const dispatch = useDispatch();
  return useEffect(() => {
    const quest = JSON.parse(localStorage.getItem("quest"));
    if (!quest) {
      const id = uuidv4();
      const quest = { _id: id, name: "quest" };
      //   dispatch(saveUser(quest));
      localStorage.setItem("quest", JSON.stringify(quest));
    }
    // getCartItems(dispatch);
 
  }, []);
};
