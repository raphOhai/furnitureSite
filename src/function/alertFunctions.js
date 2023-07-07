export const ShowAlert = () => {
  const AlertBox = document.getElementById("alertBox");
  AlertBox.classList.add("show");
  const hideAlert = () => {
    AlertBox.classList.remove("show");
  };
  setTimeout(hideAlert, 1000);
};

export const AnimateOnScroll = (id) => {
  const ShowPriceLables = () => {
    const InfoBox = document.getElementById(id);
    if (window.scrollY >= 150) {
  
      InfoBox.classList.add("show");
    } else {
      InfoBox.classList.remove("show");
    }
  };
  window.addEventListener("scroll", ShowPriceLables);
};
