import React, { useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

export const UserId = () => {
  return useEffect(() => {
    const quest = JSON.parse(localStorage.getItem("quest"));
    if (!quest) {
      const id = uuidv4()
      const quest = { _id: id, name: "quest" };
    //   dispatch(saveUser(quest));
      localStorage.setItem("quest", JSON.stringify(quest));
    }
  }, []);
};
