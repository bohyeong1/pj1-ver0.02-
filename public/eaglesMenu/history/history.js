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
const nav = document.querySelector('.nav')
const body = document.querySelector('body')
const header = document.querySelector('header')
const main_menu = document.querySelector('.main-menu')
const menus = document.querySelectorAll('.menu')
const log_in = document.querySelector('.log-in')
const menu_line = document.querySelector('.lines')
const eaglesMenu = ['HISTORY', '오시는길', '마스코트']
const playerMenu = ['선수단', '선수기록']
const menuMap = {
  EAGLES : eaglesMenu,
  PLAYER : playerMenu
}
var submenu;

function createDropdown(menus, target){
  submenu = document.createElement('div')
  submenu.className = 'sub-menu'
  for(menu of menus){
    submenu.innerHTML += `<span id='${menu}'>${menu}</span>`
  }
  nav.appendChild(submenu)
  const hisMenu = document.querySelector('#HISTORY')
  const mapMenu = document.querySelector('#오시는길') 
  const mascot = document.querySelector('#마스코트')
  const player = document.querySelector('#선수단')

  if(target.innerText==='EAGLES'){
    hisMenu.addEventListener('click', ()=>{location.href = '../../eaglesMenu/history/history.html'})
    mapMenu.addEventListener('click', ()=>{location.href = '../../eaglesMenu/map/map.html'})
    mascot.addEventListener('click', ()=>{location.href = '../../eaglesMenu/mascot/mascot.html'})
    }else if(target.innerHTML==='PLAYER'){
        player.addEventListener('click', ()=>{location.href = '../../playerMenu/player/player.html'})
    }
}



function showSubmenu(e){
    
    if(e.target.className === 'menu'){
    if(e.target===menus[0] || e.target===menus[1]){ 
        menu_line.style.opacity = '1'
        if(submenu){
            submenu.remove()
        } 
        main_menu.style.height = 12.5+'vh'
        createDropdown(menuMap[e.target.innerText], e.target)  

    }

    if(e.target === menus[2]||e.target===menus[3]){
        if(submenu){
            submenu.remove()
        }        
        menu_line.style.opacity = '1'
        main_menu.style.height= 6+'vh'
    }
    main_menu.style.background = 'rgb(78, 74, 74,0.5)'
    }
}

log_in.addEventListener('mouseover',()=>{main_menu.style.background = 'rgb(78, 74, 74,0.5)', menu_line.style.opacity = '1'})
log_in.addEventListener('mouseleave',()=>{main_menu.style.background='black',     menu_line.style.opacity = '0'})
main_menu.addEventListener('mouseover', showSubmenu)
nav.addEventListener('mouseleave', ()=>{
    if(submenu){submenu.remove()}
    main_menu.style.background='black'
    main_menu.style.height=6+'vh'
    menu_line.style.opacity = '0'})




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

    // animateCircle()
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
})


