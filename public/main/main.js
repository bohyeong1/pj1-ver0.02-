//////////////////////////////////////html, body, gsap등 dom 불러오기 / 유틸함수 선언하기
const html = document.querySelector('html')
function wait(time){
    return new Promise((res)=>{setTimeout(res, time)})
}

// ScrollSmoother 활성화 코드 및 스크롤 이벤트 등록

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

document.addEventListener('DOMContentLoaded', function() {
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
        end: '+=200%',
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
    gsap.to('.s1-p2-t1-span',{
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
            onUpdate:self => {
                
            }
        }
    })


  ///////////////////////////////////////////////////////////////////
    // 섹션 2 스크롤 이벤트
    ScrollTrigger.create({
    trigger: '#smooth-wrapper',
    start: '200%',
    end: '300%',
    onUpdate: self => {
        let pageY_value = smoother.scrollTop()
        console.log(pageY_value)
        if (pageY_value > 2400) {
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
        end: "+=1000%"
    });



    ///////////////////////////////container x축 이동
    gsap.to('.sec2-content', {
        x: '-230vw', 
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
            start:'700%',
            end:'+=20%',
            scrub:true
        }
    })

    ///////////////////////////////////player4 scale 조절하기
    gsap.to('.sec2-content-box4',{
        scale:'0.5',
        scrollTrigger:{
            trigger:'#smooth-wrapper',
            start:'700%',
            end:'+=80%',
            scrub:true
        }
    })

    ///////////////////////////////////위로 올리기
    gsap.to('.sec2-content-box4',{
        y:'-210vh',
        scrollTrigger:{
            trigger:'#smooth-wrapper',
            start:'700%',
            end:'+=400%',
            scrub:true
        },
        ease:'power1.inOut'
    })

    ////////////////////sec2- description 등장
    ScrollTrigger.create({
        trigger:'#smooth-wrapper',
        start:'810%',
        end:'1100%',
        onEnter:self => {
            s2_des_span[0].style.top = 0
            s2_des_span[1].style.top = 0
            s2_des_span[2].style.top = 0
            s2_des_span[3].style.top = 0
        },
        onLeave:self => {
            s2_des_span[0].style.top = '5vw'
            s2_des_span[1].style.top = '5vw'
            s2_des_span[2].style.top = '5vw'
            s2_des_span[3].style.top = '5vw'
        },
        onEnterBack: self => {
            s2_des_span[0].style.top = 0
            s2_des_span[1].style.top = 0
            s2_des_span[2].style.top = 0
            s2_des_span[3].style.top = 0
        },
        onLeaveBack: self => {
            s2_des_span[0].style.top = '5vw'
            s2_des_span[1].style.top = '5vw'
            s2_des_span[2].style.top = '5vw'
            s2_des_span[3].style.top = '5vw'
        },
    })
})














/////////////////////////사이드메뉴
const sideBtn = document.querySelectorAll('.side-box')
const terms_description = document.querySelector('.terms-description')
const des_cancel = document.querySelector('.des-cancel')
const lang = document.querySelector('.lang')
const creater = document.querySelector('.creater')

des_cancel.addEventListener('click', ()=>{
    terms_description.style.width = '0vw'
    terms_description.style.height = '0vh'
    terms_description.style.opacity = 0 
})
sideBtn[1].addEventListener('click', ()=>{
    html.scrollTop = 0
})
sideBtn[0].addEventListener('click', (e)=>{

    if(terms_description.style.width==='15vw'){
        terms_description.style.width = '0vw'
        terms_description.style.height = '0vh'
        terms_description.style.opacity = 0    

    }else{
        terms_description.style.width = '15vw'
        terms_description.style.height = '40vh'
        terms_description.style.opacity = 1
    }
    
})



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
// const s1_imgs = document.querySelectorAll('#s1_imgs')
// const s1_text = document.querySelector('.s1-text')
// const s1_imgbox = document.querySelectorAll('#s1-imgbox')




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



for(sideBt of sideBtn){
sideBt.addEventListener('mousemove', mousemove)
sideBt.addEventListener('mousedown', mousedown)
sideBt.addEventListener('mouseout',()=>{
    cursorParent.style.display = 'none'
})}

des_cancel.addEventListener('mousemove', mousemove)
des_cancel.addEventListener('mousedown', mousedown)
des_cancel.addEventListener('mouseout',()=>{
    cursorParent.style.display = 'none'
})


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