import { useEffect } from "react";
export default function Animate(products,) {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          // entry.target.classList.remove("show");
        }
      });
    });
    const hiddenElements = document.querySelectorAll(".hidden");
    const hiddenElement = document.querySelectorAll(".slideDown");
    const slideUpElement = document.querySelectorAll(".sideSlide1");
    const slideElement = document.querySelectorAll(".slideIn");
    const fadeinElement = document.querySelectorAll(".fadeIn");
    const boxElement = document.querySelectorAll(".boxAnimation");
    const shoeElement = document.querySelectorAll(".shoeAnimation");
    const flipElement = document.querySelectorAll(".flipIn");
    const colorElement = document.querySelectorAll(".color");
    const tranlateElement = document.querySelectorAll(".tranlatetop");
    hiddenElements.forEach((el) => observer.observe(el));
    slideUpElement.forEach((el) => observer.observe(el));
    slideElement.forEach((el) => observer.observe(el));
    flipElement.forEach((el) => observer.observe(el));
    hiddenElement.forEach((el) => observer.observe(el));
    fadeinElement.forEach((el) => observer.observe(el));
    boxElement.forEach((el) => observer.observe(el));
    shoeElement.forEach((el) => observer.observe(el));
    colorElement.forEach((el) => observer.observe(el));
    tranlateElement.forEach((el) => observer.observe(el));
  }, [products]);
}
