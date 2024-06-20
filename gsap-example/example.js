gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

document.addEventListener('DOMContentLoaded', function() {
    const smoother = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1.5,
        effects: true
    });

    const images = gsap.utils.toArray(".s1_imgs");

        // // 각 이미지를 각각 다른 각도로 이동
        // const angle = [45, -45, 60, -60, 30, -30, 15][i % 7];
        
            ScrollTrigger.create({
                trigger: ".section-1",
                start: "top top",
                end: "bottom top",
                scrub: true,
                onUpdate: (self) => {
                    let scrolltop = smoother.scrollTop()
                    console.log(scrolltop)
                }
            })


    ScrollTrigger.create({
        trigger: '.section-1',
        start: 'top top',
        end: '+=100%', // 섹션 1이 뷰포트 높이의 100% 동안 고정
        pin: '.section-1',
        pinSpacing: true // 고정된 요소 뒤에 공간을 추가
    });
});