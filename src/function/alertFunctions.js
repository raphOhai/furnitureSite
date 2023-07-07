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
    if (window.scrollY >= 50) {
      InfoBox.classList.add("show");
    } else {
      InfoBox.classList.remove("show");
    }
  };
  window.addEventListener("scroll", ShowPriceLables);
};

export const drawSvg = () => {
  const path = document.getElementById("path1");

  path.classList.add("drawPath1");

  const text = document.getElementById("logoText");
  const showText = () => {
    text.classList.add("show");
  };

  setTimeout(showText, 2000);

  setTimeout(unDrawSvg, 3000);
};

const unDrawSvg = () => {
  const path = document.getElementById("path1");
  const loader = document.getElementById("loader");
  path.classList.replace("drawPath1", "path1");

  const text = document.getElementById("logoText");
  const HideText = () => {
    text.classList.remove("show");
  };

  const closeLoader = () => {
    loader.classList.add("remove");
  };

  setTimeout(HideText, 1000);
  setTimeout(closeLoader, 2000);
};
