import {
  decreaseItemCountInCart,
  deleteItemIncart,
  inscreaseItemCount,
  saveCartItems,
  updateCartCount,
} from "../reducer/cartItems";
import { UserId } from "../shoppingPageComponents/hooks/userId";

const store = "644ecffe38fa62672d349ebd";
const quest = JSON.parse(localStorage.getItem("quest"));

// export const addToCart = (item, dispatch) => {
//   const store = "644ecffe38fa62672d349ebd";
//   const quest = JSON.parse(localStorage.getItem("quest"));
//   fetch("https://fingertipps.store/addtocart", {
//     method: "post",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: "Bearer " + localStorage.getItem("jwt"),
//     },
//     body: JSON.stringify({
//       owner: quest._id,
//       price: item.price,
//       photo: item.photos,
//       count: 1,
//       itemId: item._id,
//       name: item.name,
//       choosenSize: "",
//       choosenColor: "",
//       store: store,
//     }),
//   })
//     .then((res) => res.json())
//     .then((data) => {
//       if (data.error) {
//         console.log("  postCartAuth cart error", data.error);
//       } else {
//         console.log("success");
//         console.log(data);
//         dispatch(updateCartCount(data.cartCount));
//       }
//     })
//     .catch((err) => {
//       console.log(err);
//       console.log("error");
//     });
// };

// export const getCartItems = (dispatch) => {
//   // if (items ? items.length > 0 : "") {
//   //   return;
//   // }
//   const store = "644ecffe38fa62672d349ebd";
//   const quest = JSON.parse(localStorage.getItem("quest"));
//   fetch("https://fingertipps.store/getcart", {
//     method: "post",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: "Bearer " + localStorage.getItem("jwt"),
//     },
//     body: JSON.stringify({
//       ownId: quest._id,
//       storeId: store,
//     }),
//   })
//     .then((res) => res.json())
//     .then((result) => {
//       console.log(result);
//       console.log(typeof(result))
//       dispatch(saveCartItems(result));
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

export const scrollToTop = () => {
  const goToTop = () => window.scrollTo(0, 0);
  goToTop();
};

// export const increaseItemCount = (item, dispatch) => {
//   dispatch(inscreaseItemCount(item));
//   fetch("https://fingertipps.store/increase", {
//     method: "post",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: "Bearer " + localStorage.getItem("jwt"),
//     },
//     body: JSON.stringify({
//       id: item._id,
//       owner: quest._id,
//       store: store,
//       name: item.name,
//       choosenColor: item.choosenColor,
//       choosenSize: item.choosenSize,
//     }),
//   })
//     .then((res) => res.json())
//     .then((result) => {
//       console.log(result);
//       // setAdded(true);
//       // setIncrease("");
//       // dispatch({ type: "CARTL", payload: result });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// export const decreaseItemCount = (item, dispatch) => {
//   dispatch(decreaseItemCountInCart(item));
//   fetch("https://fingertipps.store/decrease", {
//     method: "post",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: "Bearer " + localStorage.getItem("jwt"),
//     },
//     body: JSON.stringify({
//       id: item._id,
//       owner: quest._id,
//       store: store,
//       name: item.name,
//       choosenColor: item.choosenColor,
//       choosenSize: item.choosenSize,
//     }),
//   })
//     .then((res) => res.json())
//     .then((result) => {
//       // setAdded(true);
//       console.log(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// export const deleteSingleCartItem = (item, dispatch) => {
//   dispatch(deleteItemIncart(item));
//   fetch("https://fingertipps.store/deleteCart", {
//     method: "post",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: "Bearer " + localStorage.getItem("jwt"),
//     },
//     body: JSON.stringify({
//       id: item._id,
//       owner: quest._id,
//       store: store,
//       name: item.name,
//       choosenColor: item.choosenColor,
//       choosenSize: item.choosenSize,
//     }),
//   })
//     .then((res) => res.json())
//     .then((data) => {
//       if (data.error) {
//         console.log(" isIncart c error", data.error);
//       } else {
//         // setAdded(true);
//         // setOpen(true);
//         // setPush(false);
//         // dispatch({ type: "CLR" });
//         console.log(data);
//         dispatch(updateCartCount(data.cartCount));
//       }
//     })
//     .catch(() => {});
// };

// export const submit = (reference, total, address, name, email, itemsInCart) => {
//   console.log(reference);
//   const phoneNumber = 909876545;
//   // dispatch(closeModal());
//   const reviews = reference.reference;
//   fetch("https://fingertipps.store/conversations", {
//     method: "post",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: "Bearer " + localStorage.getItem("jwt"),
//     },
//     body: JSON.stringify({
//       senderId: quest._id,
//       receiverId: store,
//       total,
//       reference: reviews,
//     }),
//   })
//     .then((res) => res.json())
//     .then((result) => {
//       saveOrder(
//         result.convo._id,
//         address,
//         phoneNumber,
//         email,
//         name,
//         total,
//         itemsInCart
//       );
//       console.log(result);
//     });
// };

// const saveOrder = (
//   conversationID,
//   address,
//   phoneNumber,
//   email,
//   name,
//   total,
//   itemsInCart
// ) => {
//   fetch("https://fingertipps.store/messages", {
//     method: "post",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: "Bearer " + localStorage.getItem("jwt"),
//     },
//     body: JSON.stringify({
//       sender: quest._id,
//       reciever: store,
//       text: itemsInCart,
//       conversationId: conversationID,
//       address: address,
//       number: phoneNumber,
//       buyerEmail: email,
//       total,
//       name,
//     }),
//   })
//     .then((res) => res.json())
//     .then((result) => {
//       console.log(result);
//       clear();
//     });
// };

// export const clear = () => {
//   fetch("https://fingertipps.store/clear", {
//     method: "post",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: "Bearer " + localStorage.getItem("jwt"),
//     },
//     body: JSON.stringify({
//       ownId: quest._id,
//       storeId: store,
//     }),
//   })
//     .then((res) => res.json())
//     .then((result) => {
//       console.log(result);
//     });
// };

export const Search = (searchQuery, ResolveAction) => {
  fetch("https://fingertipps.store/search", {
    method: "post",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify({
      search: searchQuery,
      id: store,
    }),
  })
    .then((res) => res.json())
    .then((results) => {
      console.log(results);
      ResolveAction(results);
    })
    .catch((err) => {});
};


export const GetMoreSearch = (searchQuery, page, ResolveAction) => {
  fetch("https://fingertipps.store/search", {
    method: "post",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify({
      search: searchQuery,
      id: store,
      page: page
    }),
  })
    .then((res) => res.json())
    .then((results) => {
      console.log(results);
      ResolveAction(results);
    })
    .catch((err) => {});
};

// export const GetCartLength = (ResolveAction) => {
//   fetch("https://fingertipps.store/search", {
//     method: "post",
//     headers: {
//       "content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       ownId: quest._id,
//       storeId: store,
//     }),
//   })
//     .then((res) => res.json())
//     .then((results) => {
//       console.log(results);
//       ResolveAction(results);
//     })
//     .catch((err) => {});
// };
export const GetMoreProduct = (page, resolve) => {
  fetch(`https://fingertipps.store/user/collection1/644ecffe38fa62672d349ebd`, {
    method: "post",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify({
      page: page,
    }),
  })
    .then((res) => res.json())
    .then((result) => {
      resolve(result);
    })
    .catch((err) => {});
};

export const storeId = "644ecffe38fa62672d349ebd"
export const visitorId = quest
