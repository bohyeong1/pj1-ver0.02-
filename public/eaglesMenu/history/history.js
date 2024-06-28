/////////////////////////로드 이벤트
const root_wrapper = document.querySelector('.root_wrapper')

async function disappearWrapper(){
    root_wrapper.style.opacity = 0

    await wait(700)
    root_wrapper.remove()
}

window.addEventListener('load', disappearWrapper)





//gnb라인




//sector1
const textDiv = document.querySelectorAll('.text')

texts = ['항상 최고를 추구하는','Hanwah Eeagles']

let i = 0;

const displayText = async() => {

    for(let i=0; i<2; i++){
    const text = texts[i].split('')
    while(text.length){
        if(i===1){
            await wait(300)
            textDiv[i].innerHTML += text.shift()
        }else{
            await wait(100)
            textDiv[i].innerHTML += text.shift()
        }        
    }}

    await wait(1400)
        
    textDiv[0].style.opacity = 0  
    await wait(300)

    textDiv[1].style.transform = 'translateY(-15vh)'

}

function wait(time){
    return new Promise(dum => setTimeout(dum,time))
}

setTimeout(displayText, 300)


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
const circles = document.querySelectorAll('.circle')
const sector4 = document.querySelector('.sector4')
const box_imgs = document.querySelectorAll('.box-img')
const rotateCircle = async(element)=>{
    let ceta = 0
    let radianCeta
    let x 
    let y 
    browserWidth = window.innerWidth
    pixOfW = browserWidth/100
    
    while(functionBool){
        radianCeta = ceta*Math.PI/180
        x=Math.cos(radianCeta)*3
        y= Math.sin(radianCeta)*3
        element.style.left = `${2.8+x}vw`
        element.style.top = `${2.8+y}vw`
        ceta++
        await wait(Math.random()*30)      
    }    
}

const actCircle = async(elements)=>{
     
    for(element of elements){       
        rotateCircle(element)
        await wait(600)
    }
}

const boxImgBright = async(img)=>{
    
    while(functionBool){
    img.style = 'filter: brightness(0) saturate(100%) invert(32%) sepia(94%) saturate(4209%) hue-rotate(19deg) brightness(92%) contrast(97%)'
    await wait(1000)
    img.style = 'filter: invert(100%) sepia(52%) saturate(20%) hue-rotate(315deg)'
    await wait(1000)}    
}

const actImg = async(imgs)=>{
    boxImgBright(imgs[0])
    boxImgBright(imgs[2])
    boxImgBright(imgs[4])

    await wait(1000)
    boxImgBright(imgs[1])
    boxImgBright(imgs[3])
}

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





