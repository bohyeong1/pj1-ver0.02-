// gsap.registerPlugin(SplitText);

// window.addEventListener('load', () => {
//   let splitText = new SplitText(".eagles", { type: "chars" });
//   let chars = splitText.chars;  // 역순으로 문자 배열

//   let tl = gsap.timeline();

//   tl.to(".hanwha", {
//     duration: 2,
//     left: "-10vw",
//     ease: "power2.inOut"
//   });

//   tl.set(chars, { visibility: "visible", opacity: 0 }, "-=2");
//   tl.to(chars, {
//     duration: 1,
//     opacity: 1,
//     ease: "power2.inOut",
//     stagger: {
//       each: 0.1,
//       from: "end" // 끝에서부터 시작
//     },
//     onStart: () => gsap.set(".eagles", { visibility: "visible" })
//   }, "-=2"); // 두 애니메이션이 동시에 시작되도록 설정
// });

gsap.registerPlugin(SplitText);

window.addEventListener('load', () => {
  let hanwha = document.querySelector(".hanwha");
  let eaglesText = new SplitText(".eagles", { type: "chars" });
  let chars = eaglesText.chars.reverse();  // 역순으로 문자 배열

  gsap.set(chars, { opacity: 0 });

  gsap.to(".hanwha", {
    duration: 2,
    x: "-20vw",
    ease: "power2.inOut",
    onUpdate: function() {
      let hanwhaRight = hanwha.getBoundingClientRect().right;
      chars.forEach((char, index) => {
        let charLeft = char.getBoundingClientRect().left;
        if (hanwhaRight >= charLeft && gsap.getProperty(char, "opacity") === 0) {
          gsap.to(char, { opacity: 1, duration: 0.1 });
        }
      });
    }
  });
});