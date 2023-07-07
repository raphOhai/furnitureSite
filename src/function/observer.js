import { useEffect } from "react";

export default function InterSectionChecker(
  trigger,
  //   item,
  action
) {
  useEffect(() => {
    // const hiddenElements1 = document.getElementById(item);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(
        (entry) => {
          if (entry.isIntersecting) {
            action();
          } else {
            //     revarseAction();
            //     const showPicture = () => {
            //       hiddenElements1?.classList.remove("show");
            //       entry.target.classList.remove("show");
            //     };
            //     setTimeout(showPicture, 1000);
          }
        },
        { threshold: 0.2 }
      );
    });
    const hiddenElements = document.querySelectorAll("." + trigger);
    hiddenElements.forEach((el) => observer.observe(el));
  }, []);
}
