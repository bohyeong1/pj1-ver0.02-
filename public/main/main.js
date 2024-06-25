//////////////////////////////////////html, body, gsap등 dom 불러오기 / 유틸함수 선언하기
const html = document.querySelector('html')
function wait(time){
    return new Promise((res)=>{setTimeout(res, time)})
}

// ScrollSmoother 활성화 코드 및 스크롤 이벤트 등록

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

document.addEventListener('DOMContentLoaded', function() {

    // sec2-part2 박스 돌리기
    const boxs = document.querySelectorAll('.box')
        const updateFaceColors = () => {
            boxs.forEach(box => {
                const rect = box.getBoundingClientRect()
                const centerX = window.innerWidth / 2
                const centerY = window.innerHeight / 2
                const distanceX = Math.abs(rect.left + rect.width / 2 - centerX)
                const distanceY = Math.abs(rect.top + rect.height / 2 - centerY)
                const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2)
                const maxDistance = Math.sqrt(centerX ** 2 + centerY ** 2)
                const intensity = distance / maxDistance
                const colorValue = Math.min(255, Math.max(0, Math.round(intensity * 255)))
                box.style.backgroundColor = `rgb(${colorValue}, ${colorValue}, ${colorValue})`
            })
            requestAnimationFrame(updateFaceColors)
        }
        updateFaceColors()




    const smoother = ScrollSmoother.create({
        wrapper: '#smooth-wrapper',
        content: '#smooth-content',
        smooth: 1.5,  
        effects: true  
    })


    // 섹션 1 스크롤 이벤트
    ScrollTrigger.create({
        trigger: '#smooth-wrapper',
        start: 'top top',
        end: '+=400%',
        pin: '.section-1',
        pinSpacing: true,
    })

    //섹션1 part1,part2-t1 밀기
    gsap.to('.s1-p1-t1-container',{
        x:'-100vw',
        scrollTrigger:{
            trigger:'#smooth-wrapper',
            start:'top top',
            end:'+=400%',
            scrub:true
        }
    })
    
    ////////섹션1 part2-t2 밀기, 택스트 에니메이션
    gsap.to('.s1-p2-t2',{
        x:'-200vw',
        scrollTrigger:{
            trigger:'#smmoth-wrapper',
            start:'top top',
            end:'+=400%',
            scrub:true,
        }
    })

    ///////////////////섹션1 part2-t2 텍스트 에니메이션
    s1_p2_t2_contents.forEach((el,index)=>{
        gsap.to(el, {
            y:'33vh',
            rotation:10+Math.random()*2,
            scrollTrigger:{
                trigger:'#smooth-wrapper',
                start:`${(0 + index*10)}%`,
                end:'400%',
                onLeaveBack: () => {
                    gsap.to(el, {
                      y: 0,
                      rotation:0
                    })},
                toggleActions: "play none none reverse"
            },
        })
    })

    //////////////////////섹션1 div박스 짬푸에니메이션

    const boxAni = gsap.timeline({
        scrollTrigger: {
          trigger: '#smooth-wrapper',
          start: '35%',
          end: '120%',
          scrub: true
        }
      })  

    boxAni.to('.s1-mvbox', {
    y: '-50vh',
    x: '5vw',
    rotation: 90
    })
    
    boxAni.to('.s1-mvbox',{
    y:'-50vh'
    })

    boxAni.to('.s1-mvbox', {
    y: '0vh',
    x: '10vw',
    rotation: 180
    })

    boxAni.to('.s1-mvbox',{
    x:'0',
    rotation:0
    })

    /////////////////////////////섹션 1 text2 에니메이션
    gsap.to('.s1-mvbox',{
    scaleX:'6',
    transformOrigin:'left',
    scrollTrigger:{
        trigger:'#smooth-wrapper',
        start:'125%',
        end:'300%',
        scrub:true
    }
    })

    const box2Ani = gsap.timeline({
    scrollTrigger:{
        trigger:'#smooth-wrapper',
        start:'150%',
        end:'210%',
        scrub:true
    }
    })

    s1_p2_t2_contents2.forEach((el,index)=>{
    box2Ani.to(el,{
        x:`${10+(6-index)**2}vw`,
        y:'-100vh',
        rotation:45
    })
    })

    ////////////////////////////s1 마지막 텍스트

    const finalText = gsap.timeline({
        scrollTrigger:{
            trigger:'#smooth-wrapper',
            start:'310%',
            end:'340%',
            scrub:true
        }
    })
    
    finalText.to(s1_mvbox_t1_span,{
        y:'-12.5vw'
    })
    finalText.to(s1_mvbox_t2_span,{
        y:'-3vw'
    })

  ///////////////////////////////////////////////////////////////////
    // 섹션 2 스크롤 이벤트
    ScrollTrigger.create({
    trigger: '#smooth-wrapper',
    start: '400%',
    end: '500%',
    onUpdate: self => {
        let pageY_value = smoother.scrollTop()
        // console.log(pageY_value)
        if (pageY_value > 4200) {
        display_sec2_logo(true)
        displayTitle(true)
        } else {
        display_sec2_logo(false)
        displayTitle(false)
        }
    }
    }) 

    //////핀으로 고정
    ScrollTrigger.create({
        trigger: ".section-2",
        pin: ".section-2",
        start: "top top", 
        end: "+=1000%",
        pinSpacing:true
    });



    ///////////////////////////////container x축 이동
    gsap.to('.sec2-content', {
        x: '-224vw', 
        scrollTrigger: {
          trigger: '.sec2-content', 
          start: 'top top', 
          end: '+=400%', 
          scrub:true
        }
    })



    ////////////선수1
    //////////선수1 width
    gsap.to('.sec2-content-box1', {
    width: '60vw', 
    scrollTrigger: {
        trigger: '.sec2-content',
        start: 'top top', 
        end: '+=400', 
        scrub: true 
    }
    })

    ///////////선수1 img translateY값 조정
    ScrollTrigger.create({
        trigger:'.sec2-content',
        start:'top top',
        end: '+=400',
        scrub:true,
        onUpdate: self => {
            let progress = self.progress
            sec2_box1_img.style.height = `${30 + 40*progress}vh`
            sec2_box1_img.style.transform = `translateY(${50 - 50*progress}%)`
            if(progress > 0.5){
                title_name1.style.top = 0
                text_text1.style.top = 0
            }else{
                title_name1.style.top = '5.5vw'
                text_text1.style.top = '6vh'
            }
        }
    })



    ////////////선수2
    //////////선수2 width
    gsap.to('.sec2-content-box2', {
        width: '60vw', 
        scrollTrigger: {
            trigger: '.sec2-content',
            start: 'top top', 
            end: '+=800', 
            scrub: true 
        }
    })
    
    ///////////선수2 img translateY값 조정
    ScrollTrigger.create({
        trigger:'.sec2-content',
        start: 'top top', 
        end: '+=800',
        scrub:true,
        onUpdate: self => {
            let progress = self.progress
            // console.log('확인')
            sec2_box2_img.style.height = `${30 + 40*progress}vh`
            sec2_box2_img.style.transform = `translateY(${50 - 50*progress}vh)`
            if(progress > 0.7){
                title_name2.style.top = 0
                text_text2.style.top = 0
            }else{
                title_name2.style.top = '5.5vw'
                text_text2.style.top = '6vh'
            }
        }
    })

    ////////////선수3
    //////////선수3 width
    gsap.to('.sec2-content-box3', {
        width: '60vw', 
        scrollTrigger: {
            trigger: '.sec2-content',
            start: 'top top', 
            end: '+=1400', 
            scrub: true 
        }
    })
    
    ///////////선수3 img translateY값 조정
    ScrollTrigger.create({
        trigger:'.sec2-content',
        start: 'top top', 
        end: '+=1400',
        scrub:true,
        onUpdate: self => {
            let progress = self.progress
            sec2_box3_img.style.height = `${20 + 50*progress}vh`
            sec2_box3_img.style.transform = `translateY(${70 - 70*progress}vh)`
            if(progress > 0.7){
                title_name3.style.top = 0
                text_text3.style.top = 0
            }else{
                title_name3.style.top = '5.5vw'
                text_text3.style.top = '6vh'
            }
        }
    })


    ////////////선수4
    //////////선수4 width
    gsap.to('.sec2-content-box4', {
        width: '60vw', 
        scrollTrigger: {
            trigger: '.sec2-content',
            start: 'top top', 
            end: '+=2300', 
            scrub: true 
        }
    })
    
    ///////////선수4 img translateY값 조정
    ScrollTrigger.create({
        trigger:'.sec2-content',
        start: 'top top', 
        end: '+=2300',
        scrub:true,
        onUpdate: self => {
            let progress = self.progress
            sec2_box4_img.style.height = `${10 + 60*progress}vh`
            sec2_box4_img.style.transform = `translateY(${80 - 80*progress}vh)`
            if(progress > 0.9){
                title_name4.style.top = 0
                text_text4.style.top = 0
            }else{
                title_name4.style.top = '5.5vw'
                text_text4.style.top = '6vh'
            }
        }
    })

    ///////////////////// 선수리스트 화면에 등장시키기
    gsap.to('.sec2-box4-wrapper',{
        height:'70vh',
        scrollTrigger:{
            trigger:'#smooth-wrapper',
            start:'900%',
            end:'+=20%',
            scrub:true
        }
    })

    ///////////////////////////////////player4 scale 조절하기
    gsap.to('.sec2-content-box4',{
        scale:'0.5',
        scrollTrigger:{
            trigger:'#smooth-wrapper',
            start:'900%',
            end:'+=80%',
            scrub:true
        }
    })

    /////////////description 위치 조정
    gsap.to('.sec2-text-box',{
        x:'-20vw',
        scrollTrigger:{
            trigger:'#smooth-wrapper',
            start:'900%',
            end:'+=80%',
            scrub:true
        }
    })

    ///////////////////////////////////위로 올리기
    gsap.to('.sec2-content-box4',{
        y:'-210vh',
        scrollTrigger:{
            trigger:'#smooth-wrapper',
            start:'900%',
            end:'+=400%',
            scrub:true
        },
        ease:'power1.inOut'
    })

    ////////////////////sec2- description 등장
    ScrollTrigger.create({
        trigger:'#smooth-wrapper',
        start:'1010%',
        end:'1300%',
        onEnter:self => {
            s2_des_span[0].style.top = 0
            s1_text_box_wrapper2.style.opacity = 1
            s1_text_box_wrapper3.style.opacity = 1
        },
        onLeave:self => {
            s2_des_span[0].style.top = '5vw'
            s1_text_box_wrapper2.style.opacity = 0
            s1_text_box_wrapper3.style.opacity = 0
        },
        onEnterBack: self => {
            s2_des_span[0].style.top = 0
            s1_text_box_wrapper2.style.opacity = 1
            s1_text_box_wrapper3.style.opacity = 1
        },
        onLeaveBack: self => {
            s2_des_span[0].style.top = '5vw'
            s1_text_box_wrapper2.style.opacity = 0
            s1_text_box_wrapper3.style.opacity = 0
        },
    })

    ////////////////////sec2- part2 등장
    gsap.to('.sec2-part2',{
        x:'-71vw',
        scrollTrigger:{
            trigger:'#smooth-wrapper',
            start:'1250%',
            end:'+=150%',
            scrub:true
        }
    })
    ///sec2 - part2로 화면덮기
    gsap.to('.section-2',{
        x:'-29vw',
        scrollTrigger:{
            trigger:'#smooth-wrapper',
            start:'1400%',
            end:'1500%',
            scrub:true
        }
    })
    /////sec2- part2 화면 에니메이션
    gsap.to('.s2-p2-con-img',{
        scale:'0.8',
        scrollTrigger:{
            trigger:'#smooth-wrapper',
            start:'1450%',
            end:'1500%',
            scrub:true
        }
    })
    gsap.to('.s2-p2-con-textbox1',{
        opacity:1,
        scrollTrigger:{
            trigger:'#smooth-wrapper',
            start:'1450%',
            end:'1500%',
            toggleActions: 'play none play reverse'
        }
    })
    gsap.to('.s2-p2-con-textbox2',{
        opacity:1,
        scrollTrigger:{
            trigger:'#smooth-wrapper',
            start:'1450%',
            end:'1500%',
            toggleActions: 'play none play reverse'
        }
    })
})






//////////화면 리사이즈 시 스크롤 트리거의 스크롤량 다시 체크
function refreshScrollTrigger(){
    ScrollTrigger.refresh()
  }

window.addEventListener('resize', refreshScrollTrigger)




//gnb라인

const header = document.querySelector('header')
const main_menu = document.querySelector('.main-menu')
const menu_boxs = document.querySelectorAll('.manu-click-img > div')
const menu_wrapper = document.querySelector('.menu-wrapper')
const manu_click_btn = document.querySelector('.manu-click-btn')

// gnb- 메뉴호버시 x만들기
function animation_menu_boxs(){

    menu_boxs[1].style.opacity = 0
    menu_boxs[0].style.top = '11.5px'
    menu_boxs[0].style.transform = 'rotateZ(45deg)'
    menu_boxs[2].style.top = '11.5px'
    menu_boxs[2].style.transform = 'rotateZ(-45deg)'
}

async function click_menu_tap(){
    const menu_state = main_menu.getAttribute('state')

    // 메뉴 열기
    if(menu_state === 'false'){
        menu_wrapper.style.display='block'
        html.style.overflowY = 'hidden'
        main_menu.setAttribute('state','true')

        await appear_back_menu_box(160)
        await display_menus(true)
    }else{        //닫기
        html.style.overflowY = 'visible'
        main_menu.setAttribute('state','false')
        await display_menus(false)
        await appear_back_menu_box(0)
        // menu_wrapper.style.opacity = 0
        await wait(100)
        menu_wrapper.style.display='none'
    }

}

main_menu.addEventListener('mouseover', animation_menu_boxs)
main_menu.addEventListener('click', click_menu_tap)

///////////////메인메뉴 클릭시 뒷배경 디브 깔아놓기
for (let i = 0; i < 12; i++){
    const back_menu_box = document.createElement('div')
    back_menu_box.className = 'back_menu_box'
    back_menu_box.style.left = i*160 + 80 + 'px'
    menu_wrapper.appendChild(back_menu_box)
}

// 메인메뉴 클릭시 촤라락 효과 내기
async function appear_back_menu_box(width){
    const back_boxs = menu_wrapper.querySelectorAll('.back_menu_box')
    for(const box of back_boxs){
        box.style.width = width + 'px'
        await wait(100)
    }
}

const menus = [
    {
        name : 'History',
        url : '../eaglesMenu/history/history.html'
    },
    {
        name : 'Mascot',
        url : '../eaglesMenu/mascot/mascot.html'
    },
    {
        name : 'Player',
        url : '../playerMenu/player/player.html'
    },
    {
        name : 'Gallery',
        url : '../gallery/photo.html'
    },
]

////메뉴 순서대로 opacity 조절해서 출력하기
const root_menu_box = document.querySelector('.root_menu_box')
async function display_menus(bool){
    if(bool){
        for(let data of menus){
            root_menu_box.style.opacity = 1
            const menu_list = document.createElement('div')
            menu_list.className = 'menu_list'
            menu_list.innerText = data.name
            menu_list.onclick = function(){location.href=data.url}    
            root_menu_box.appendChild(menu_list)
            await wait(100)
            menu_list.style.opacity = 1
            await wait(100)        
        }
    }else{
        root_menu_box.style.opacity = 0
        await wait(100)
        const menu_lists = document.querySelectorAll('.menu_list')
        for(const menu of menu_lists){
            menu.remove()
        }
    }
}





/////////////////////////로드 이벤트
const root_wrapper = document.querySelector('.root_wrapper')

async function disappearWrapper(){
    root_wrapper.style.opacity = 0

    await wait(700)
    root_wrapper.remove()
}




window.addEventListener('load', disappearWrapper)





////////////////////////////////////섹션1
// const section_1 = document.querySelector('.section-1')
const s1_p2_t2_contents = document.querySelectorAll('.s1-p2-t2-contents')
const s1_p2_t2_contents2 = document.querySelectorAll('.s1-p2-t2-contents2')
const s1_mvbox_t1_span = document.querySelector('.s1-mvbox-t1-span')
const s1_mvbox_t2_span = document.querySelector('.s1-mvbox-t2-span')
const s1_text_box_wrapper2 = document.querySelector('.s1-text-box-wrapper2')
const s1_text_box_wrapper3 = document.querySelector('.s1-text-box-wrapper3')

///////////////////////////////////섹션2
const sec2_title_spans = document.querySelectorAll('.newplayer-logo > span')
const sec2_container1 = document.querySelector('.sec2-container1')
const sec2_container2 = document.querySelector('.sec2-container2')
const sec2_container3 = document.querySelector('.sec2-container3')
const sec2_container4 = document.querySelector('.sec2-container4')
const sec2_slogun_wrapper = document.querySelector('.sec2-slogun-wrapper')
const sec2_content = document.querySelector('.sec2-content')
//섹션2 플레이어
const sec2_content_box1 = document.querySelector('.sec2-content-box1')
const sec2_content_box2 = document.querySelector('.sec2-content-box2')
const sec2_content_box3 = document.querySelector('.sec2-content-box3')
const sec2_content_box4 = document.querySelector('.sec2-content-box4')

const sec2_box1_img = document.querySelector('.sec2-box1-img')
const sec2_box2_img = document.querySelector('.sec2-box2-img')
const sec2_box3_img = document.querySelector('.sec2-box3-img')
const sec2_box4_img = document.querySelector('.sec2-box4-img')
////////////섹션2 text
const title_name1 = document.querySelector('.sec2-text1-title-wrapper > .title-name')
const text_text1 = document.querySelector('.s2-text1-wrapper > .text-text')
const title_name2= document.querySelector('.sec2-text2-title-wrapper > .title-name')
const text_text2 = document.querySelector('.s2-text2-wrapper > .text-text')
const title_name3 = document.querySelector('.sec2-text3-title-wrapper > .title-name')
const text_text3 = document.querySelector('.s2-text3-wrapper > .text-text')
const title_name4 = document.querySelector('.sec2-text4-title-wrapper > .title-name')
const text_text4 = document.querySelector('.s2-text4-wrapper > .text-text')

////////////////섹션2 description
const s2_des_span = document.querySelectorAll('.s1-text-box-wrapper > span')

////섹2-하위logo
async function displayTitle(bool){
    if(bool){
        sec2_container1.style.transform = 'translateY(-30vh)'
        sec2_container2.style.transform = 'translateY(-50vh)'
        sec2_container3.style.transform = 'translateY(-70vh)'
        sec2_container4.style.transform = 'translateY(-90vh)'
    
        await wait(800)
        sec2_slogun_wrapper.style.transform = 'translateY(-8vh)'
    }else{
        sec2_container1.style.transform = 'translateY(0)'
        sec2_container2.style.transform = 'translateY(0)'
        sec2_container3.style.transform = 'translateY(0)'
        sec2_container4.style.transform = 'translateY(0)'
        sec2_slogun_wrapper.style.transform = 'translateY(0)'
    }

}

///섹2-상위logo
async function display_sec2_logo(bool){
    if(bool){
        for(const span of sec2_title_spans){
            await wait(100)
            span.style.transform = 'translateY(-45vh)'
        }
    }else{
        for(const span of sec2_title_spans){
            await wait(100)
            span.style.transform = 'translateY(0)'
        }
    }
}












//////////////////////////마우스 호버 이벤트
const cursorParent = document.querySelector('#mouse-cursor')
const cursorChild = document.querySelector('#inner-cursor')



let cursorX = 0, cursorY = 0
function mousemove(e){
    cursorParent.style.display = 'block'
    cursorX = e.pageX - cursorParent.offsetWidth/2
    cursorY = e.pageY - cursorParent.offsetHeight/2
    cursorParent.style.left = `${cursorX}px` 
    cursorParent.style.top = `${cursorY}px`
    e.target.style.cursor = 'none'
}
function mousedown(e){
    cursorChild.style.setProperty('--cursor-scale',0.8)
}
function mouseup(e){
    cursorChild.style.setProperty('--cursor-scale',1)
}





main_menu.addEventListener('mousemove', mousemove)
main_menu.addEventListener('mousedown', mousedown)
main_menu.addEventListener('mouseout',()=>{
    cursorParent.style.display = 'none'
    manu_click_btn.style.textDecoration = 'none'
    const menu_state = main_menu.getAttribute('state')
    if(menu_state === 'false'){
        menu_boxs[1].style.opacity = 1
        menu_boxs[0].style.transform = 'rotateZ(0)'
        menu_boxs[0].style.top = '4.5px'
        menu_boxs[2].style.transform = 'rotateZ(0)'
        menu_boxs[2].style.top = '18.5px'
    }else{
        menu_boxs[1].style.opacity = 0
        menu_boxs[0].style.top = '11.5px'
        menu_boxs[0].style.transform = 'rotateZ(45deg)'
        menu_boxs[2].style.top = '11.5px'
        menu_boxs[2].style.transform = 'rotateZ(-45deg)'
    }

})