import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { IO } from "./observer";
import SplitType from "split-type";

export const split = () => {
  gsap.registerPlugin(ScrollTrigger);

  const f = document.querySelectorAll("[data-animation='h']");
  const upDown = document.querySelectorAll("[data-animation='ud']");

  const g = document.querySelectorAll("[data-animation='v']");
  const j = document.querySelectorAll("[data-animation='j']");
  const ltr = document.querySelectorAll("[data-animation='ltr']");
  const rtl = document.querySelectorAll("[data-animation='rtl']");
  const upBeat = document.querySelectorAll("[data-animation='up-beat']");

  const cardNeon = document.querySelectorAll("[data-animation='card']");

  cardNeon.forEach((item) => {
    const cardTitle = item.querySelector(".card-title");
    const cardImg = item.querySelector(".card-img");
    const cardDescription = item.querySelector(".card-description");

    const titleText = new SplitType(cardTitle as any, { types: ["chars"] });
    const descriptionText = new SplitType(cardDescription as any, { types: ["chars"] });
  
    item.addEventListener('mouseover', function() {
        gsap.to(cardImg, { duration: 0.5, scale: 1.2 });
    });

    // Mouseout event to scale the image back down
    item.addEventListener('mouseout', function() {
        gsap.to(cardImg, { duration: 0.5, scale: 1 });
    });

    gsap.set(cardImg, {
      opacity: 0,
      scale: 0,
      transformStyle: "preserve-3d",
    });
    gsap.set(titleText.chars, {
      opacity: 0,
      y: "-30px",
    });
    gsap.set(descriptionText.chars, {
      opacity: 0,
      y: "-10px",
    });
    IO(item).then(
      () => {
        const tl = gsap.timeline();

        tl.to(cardImg, {
          opacity: 1,
          duration: 1,
          scale: 1,
          ease: "easeOut",
        }).to(titleText.chars, {
          opacity: 1,
          stagger: 0.05,
          duration: 0.4,
          ease: "power4.out",
          y: 0
        }).to(descriptionText.chars, {
          opacity: 1,
          stagger: 0.05,
          duration: 0.2,
          ease: "power4.out",
          y: 0
        })
        // gsap.to(item, {
        //   opacity: 1,
        //   duration: 1,
        //   scale: 1,
        //   ease: "easeOut",
        // });
      }
      // { threshold: 1 }
    );
  });

  upDown.forEach((item) => {
    gsap.set(item, {
      opacity: 0,
      autoAlpha: 0,
      yPercent: -50,
      transformStyle: "preserve-3d",
    });
    IO(item).then(
      () => {
        gsap.to(item, {
          autoAlpha: 1,
          yPercent: 0,
          opacity: 1,
          duration: 1,
          ease: "easeOut",
        });
      }
      // { threshold: 1 }
    );
  });
  f.forEach((item) => {
    gsap.set(item, {
      opacity: 0,
      autoAlpha: 0,
      yPercent: 100,
      transformStyle: "preserve-3d",
    });
    IO(item).then(
      () => {
        gsap.to(item, {
          autoAlpha: 1,
          yPercent: 0,
          opacity: 1,
          duration: 1,
          ease: "easeOut",
        });
      }
      // { threshold: 1 }
    );
  });

  g.forEach((item) => {
    gsap.set(item, {
      autoAlpha: 0,
      opacity: 1,
      xPercent: 50,
      transformStyle: "preserve-3d",
    });
    IO(item).then(() => {
      gsap.to(item, {
        autoAlpha: 1,
        xPercent: 0,
        duration: 1,
        ease: "easeOut",
      });
    });
  });

  rtl.forEach((item) => {
    gsap.set(item, {
      autoAlpha: 0,
      opacity: 1,
      xPercent: 100,
      transformStyle: "preserve-3d",
    });
    IO(item).then(
      () => {
        gsap.to(item, {
          autoAlpha: 1,
          xPercent: 0,
          duration: 1,
          ease: "easeOut",
        });
      }
      // { threshold: 1 }
    );
  });
  ltr.forEach((item) => {
    gsap.set(item, {
      autoAlpha: 0,
      opacity: 1,
      xPercent: -100,
      transformStyle: "preserve-3d",
    });
    IO(item).then(
      () => {
        gsap.to(item, {
          autoAlpha: 1,
          xPercent: 0,
          duration: 1,
          ease: "easeOut",
        });
      }
      // { threshold: 1 }
    );
  });
  j.forEach((item) => {
    gsap.set(item, {
      autoAlpha: 1,
      opacity: 0.3,
      yPercent: -50,
      transformStyle: "preserve-3d",
    });
    gsap.to(item, {
      scrollTrigger: {
        trigger: item,
        scrub: 1,
        start: "top 100%",
        end: "+=100px",
      },
      opacity: 1,
      autoAlpha: 1,
      duration: 0.3,
      yPercent: 0,
      ease: "easeInOut",
    });
  });

  upBeat.forEach((item) => {
    gsap.set(item, {
      autoAlpha: 1,
      // rotateX: -90,
      yPercent: 10,
      scaleY: 0.5,
      skewX: -20,
      transformStyle: "preserve-3d",
    });

    IO(item).then(
      () => {
        gsap.to(item, {
          autoAlpha: 1,
          yPercent: 0,
          delay: 1,
          stagger: 1,
          scaleY: 1,
          duration: 2,
          skewX: 0,
          // rotateX: 90,
          ease: "easeOut",
        });
        gsap.to(item, {
          scrollTrigger: {
            trigger: item,
            start: "300px",
            scrub: 1,
          },
          skewX: -20,
          duration: 1.5,
        });
      }
      // { threshold: 1 }
    );
  });
};
