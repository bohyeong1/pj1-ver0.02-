///////////////////////////유틸 함수
function wait(time){
    return new Promise((res) => setTimeout(res,time))
}

gsap.registerPlugin(ScrollSmoother,ScrollTrigger,SplitText)

document.addEventListener('DOMContentLoaded', ()=>{

    const smoother = ScrollSmoother.create({
        wrapper:'#smooth-wrapper',
        content:'#smooth-content',
        smooth:1.5,
        effects:true
    })

    sec1_load1()
})




//gnb라인




//sector1
/////////텍스트 에니메이션
function sec1_load1(){
    const title_p = document.querySelectorAll('.his-sector1__container > p')
    const titles = gsap.utils.toArray(title_p)
    const titles_tl = gsap.timeline()
    titles.forEach((el,index)=>{
        const splitTitles = new SplitText(el,{type:'chars'})
        //tq 하나하나 스타일주기 힘드네
        splitTitles.chars.forEach((el)=>{
            gsap.set(el,{opacity:0})
        })
            titles_tl
            .to(splitTitles.chars,{
                opacity:1,
                y:-80,
                stagger:0.05
            },'<')
            .to(el,{
                opacity:1,
            },'<')
            .to(splitTitles.chars,{
            opacity:0,
            y:-160,
            rotateX:90,
            stagger:0.05
            },'<1')  
    })
}

////화면 display 에니메이션
let animationsInitialized = false
const his_sec1 = document.querySelector('.his-sector1')
const animationTexts = his_sec1.querySelectorAll('p:not(.his-sector1__intro-text1):not(.his-sector1__text), .his-sector1__display-logo h1') ////에니메이션 주는 텍스트들
const sec1_intro = document.querySelector('.his-sector1__intro-text1')   /////////인트로텍스트


function display_sec1(){

   
}

function suffleText(finalText, duration, callback){
    let i = 0
    const shuffleInterval = setInterval(()=>{
        if(i<duration){

        }
    })
}

function animateElement(){
    if(animationsInitialized) return
    animationsInitialized = true

    animationTexts.forEach((el)=>{
        let originalText = el.textContent
        let index = 0

        const shuffleText = setInterval(()=>{
            if(index < originalText.length){
                let suffledText=''
                for(let i = 0; i <= index; i++){
                    suffleText += 
                    i < index ? originalText[i] : Math.random().toString(36)[2]
                }
                el.textContent = suffledText + originalText.substring(index + 1)
                index ++
            }else{
                clearInterval(shuffleText)
                ele.textContent = originalText
            }
        },100)
    })
}

function intro_animation(){
    let originalText = sec1_intro.textContent
    let currentText = ''
    let index = 0

    const revealText = setInterval(()=>{
        if(index < originalText.length){
            currentText += originalText[index]
            sec1_intro.textContent = currentText
            index++
        }else{
            clearInterval(revealText)
        }
    },25)
}

function img_animation(){
    const filters = document.querySelectorAll('.his-sector1__mainImg-filter')
    const clipValue = [
        'polygon(10% 0, 0 0, 0 100%, 10% 100%)',
        'polygon(20% 0, 10% 0, 10% 100%, 20% 100%)',
        'polygon(30% 0, 20% 0, 20% 100%, 30% 100%)',
        'polygon(40% 0, 30% 0, 30% 100%, 40% 100%)',
        'polygon(50% 0, 40% 0, 40% 100%, 50% 100%)',
        'polygon(60% 0, 50% 0, 50% 100%, 60% 100%)',
        'polygon(70% 0, 60% 0, 60% 100%, 70% 100%)',
        'polygon(80% 0, 70% 0, 70% 100%, 80% 100%)',
        'polygon(90% 0, 80% 0, 80% 100%, 90% 100%)',
        'polygon(100% 0, 90% 0, 90% 100%, 100% 100%)'
    ]

    setTimeout(()=>{
        filters.forEach((filter, index)=>{
            gsap.to(filter,{
                clipPath:clipValue[index%clipValue.length],
                duration:1,
                delay: index * 0.1
            })
        })
    })
}


img_animation()







////섹션3
const html = document.querySelector('html')
const finalimg2 = document.querySelector('.finalimg2')
const finalimg1 = document.querySelector('.finalimg1')
const finalimg3 = document.querySelector('.finalimg3')
const sec3_logo = document.querySelector('.sec3-logo')

const pixOfH = window.innerHeight/100
let bool = true
let functionBool ;

window.addEventListener('scroll',()=>{

    /////////////////////////섹션3 이벤트
    if(html.scrollTop > 140*pixOfH){
        finalimg2.style.left = 0
        finalimg3.style.left = '100vw'
        sec3_logo.style.left = '25vw'
        sec3_logo.style.opacity = 1
    }else{
        finalimg2.style.left = '-50vw'
        finalimg3.style.left = '50vw'
        sec3_logo.style.left = '100vw'
        sec3_logo.style.opacity = 0
    }



    ///////////////////////////////섹션4 이벤트
    if(html.scrollTop>200*pixOfH){
        if(bool){
            functionBool = true
            actCircle(circles)
            actImg(box_imgs)
            bool = false
        }
    }else if(html.scrollTop<200*pixOfH){
        functionBool = false
        bool = true
    }
})

const video_boxs = document.querySelectorAll('.video-box')


const videoHover = async(e)=>{

    const innerTexts = e.target.querySelectorAll('.innerText')
    const innerVideo = e.target.querySelector('.innerVideo')
    if(innerVideo) {
        let src = innerVideo.getAttribute('src')
        innerVideo.src = `${src} + &autoplay=1&mute=1`

        for(innerText of innerTexts){
            innerText.style.top = 0
            innerText.style.opacity=1
            await wait(70)
        }
    }
}

for(video_box of video_boxs){
video_box.addEventListener('mouseenter', videoHover)
video_box.addEventListener('mouseleave', async(e)=>{
    const innerTexts = e.target.querySelectorAll('.innerText')
    const innerVideo = e.target.querySelector('.innerVideo')

    if(innerVideo) {
        let src = innerVideo.getAttribute('src')
        let textInventory = src.split('&')
        textInventory.splice(1,2)

        innerVideo.src = `${textInventory}`
        for(innerText of innerTexts){
            innerText.style.top = '1vw'
            innerText.style.opacity=0
            await wait(70)
        }
    }    
})}



//////////////////////////////sector4








/////////////////////////////scrollsmoother 등록
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
document.addEventListener('DOMContentLoaded',function(){
    const smoother = ScrollSmoother.create({
        wrapper: '#smooth-wrapper',
        content: '#smooth-content',
        smooth: 1.5,  
        effects: true  
    })
})


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





