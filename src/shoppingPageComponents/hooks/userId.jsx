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
      const quest = id;
      //   dispatch(saveUser(quest));
      localStorage.setItem("quest", JSON.stringify(quest));
      InitializeHandShake(
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDRlY2ZmZTM4ZmE2MjY3MmQzNDllYmQiLCJpYXQiOjE2ODg1ODkwNTJ9.vzbL2l2n2yQxPCfzLClGjEkruThNFfTmNH3yIXsP_aY",
        storeId,
        quest
      );
    }
    // getCartItems(dispatch);
  }, []);
};
