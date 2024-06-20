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
    hisMenu.addEventListener('click', ()=>{location.href = '../eaglesMenu/history/history.html'})
    mapMenu.addEventListener('click', ()=>{location.href = '../eaglesMenu/map/map.html'})
    mascot.addEventListener('click', ()=>{location.href = '../eaglesMenu/mascot/mascot.html'})
    }else if(target.innerHTML==='PLAYER'){
        player.addEventListener('click', ()=>{location.href = '../playerMenu/player/player.html'})
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


//////////////////////////////이미지섹션
//더보기 버튼
const btn = document.querySelector('.view-btn')
const contents_section = document.querySelector('.contents-section')
const contents_logo = document.querySelector('.contents-logo')
const img_section = document.querySelector('.img-section')
const conents_box = document.querySelector('.contents-box')
const more_btn = document.querySelector('.more-btn')
const photo_container = document.querySelector('.photo-container')
const html = document.querySelector('html')
const overlay = document.querySelector('.overlay')

let imgNumber = 66
for(let i=0; i<22; i++){   //width : 23vw height:41.75vh
    for(let j=0; j<3; j++){
    imgs = document.createElement('div')
    imgs.className='imgs-box'
    imgs.id = `${imgNumber}`
    imgs.innerHTML = `<img class='contents-img' id='img${imgNumber}' src='../../project-img/img/slide/slide-photo${imgNumber}.jpg'>`
    imgs.style.top = `${i*44.75}vh`
    imgs.style.left = `${j*24.5}vw`
    conents_box.appendChild(imgs)
    imgNumber--}
}

const imgs_boxs = document.querySelectorAll('.imgs-box')
const contents_imgs = document.querySelectorAll('.contents-img')


const btnclick = async()=>{

    contents_logo.style.opacity = 0
    img_section.style.opacity = 0
    btn.style.opacity = 0
    await wait(400)
    btn.remove()
    contents_logo.remove()
    img_section.remove()
    conents_box.classList.add('act')
    for(let img of imgs_boxs){
        img.style.opacity=0.99
    }
    more_btn.style.bottom = '2vh'
    more_btn.style.opacity=1  
    more_btn.style.animationName = 'btn-ani'
}

function wait(time){
    return new Promise(dum => setTimeout(dum,time))
}

btn.addEventListener('click', btnclick)

const pixOfH = window.innerHeight/100 //1vh 당 px값
const pixOfW = window.innerWidth/100 //1vw 당 px값
const btnCloser = (function(){
let h = 87.5

const moreBtnClick = async(e)=>{
    if(more_btn.style.opacity==='1'){
    h += 179
    if(h===1161.5){
        photo_container.style.height = '87.5vh'
        h = 87.5
        more_btn.innerHTML='More imgs!'}
    if(h===1161.5){h=982.5}
    


    photo_container.style.height = `${h}vh`

    await wait(300)
    if(h===266.5){
        html.scrollTop = `${100*pixOfH}`
    }else{
        html.scrollTop = `${(h-266)*pixOfH+100*pixOfH}`
    }

    if(h===982.5){
        
        more_btn.innerHTML='Close!'
    }}
    

}
return moreBtnClick})()

more_btn.addEventListener('click', btnCloser)


//이미지 클릭시

const exit = document.createElement('div')
exit.innerHTML = 'close!'
exit.className = 'exitBtn'
photo_container.appendChild(exit)

let imgName;  //이미지박스 아이디값(문자열임)
let x;      //x좌표값
let y;      //y좌표값
const imgClick = async(e)=>{

    if(e.target.parentNode.style.opacity==='0.99'){
        overlay.style.display='block'
        x = e.target.parentNode.getBoundingClientRect().left
        y = e.target.parentNode.getBoundingClientRect().top
        imgName = e.target.parentNode.id

        main_menu.style.opacity = 0
       
   
        for(let img of imgs_boxs){   
            img.style.opacity = 0                        //width : 23vw height:41.75vh   , 콘테이너  width : 72vw height : 87.5
            
        // img.style.display = 'none'
            if(html.scrollTop<12.5*pixOfH){
                e.target.parentNode.style.display = 'block'
                e.target.parentNode.style.opacity = 1
                e.target.parentNode.style.width = '40vw'
                e.target.parentNode.style.height = '60vh'
                e.target.parentNode.style.left = '16.5vw'
                e.target.parentNode.style.top = '4.875vh'
                more_btn.style.display = 'none' 
                exit.style.display = 'block' 
                

            }
            if(html.scrollTop>12.5*pixOfH){
                // e.target.parentNode.style.transition = '2s'
                e.target.parentNode.style.opacity = 1
                e.target.parentNode.style.width = '40vw'
                e.target.parentNode.style.height = '60vh'
                e.target.parentNode.style.left = '16vw'
                e.target.parentNode.style.top = `${50+html.scrollTop/pixOfH-12.5-30}vh`
                more_btn.style.display = 'none' 
                exit.style.display = 'block'              
            }
        }
        await wait(300)
        for(let img of imgs_boxs){
            
            if(img===e.target.parentNode){
                continue
            }else{img.style.display = 'none'}
        }

}
}

const clickExit = async()=>{
    const targetImg = document.getElementById(`${imgName}`)
    overlay.style.display = 'none'
    await(400)
    main_menu.style.opacity = 1

    for(let img of imgs_boxs){
            
        img.style.display = 'block'
    }
    for(let img of imgs_boxs){
    img.style.opacity = 0.99
    img.style.transition = '0.5s'}
    if(html.scrollTop<12.5*pixOfH){
        // targetImg.style.transition = '2s'
        targetImg.style.width = '23vw'
        targetImg.style.height = '41.75vh'
        targetImg.style.left = `${x/pixOfW -14}vw`
        targetImg.style.top = `${y/pixOfH - 12.5}vh`
        more_btn.style.display = 'block' 
        exit.style.display = 'none'      
    }
    if(html.scrollTop>12.5*pixOfH){
        // targetImg.style.transition = '2s'
        targetImg.style.width = '23vw'
        targetImg.style.height = '41.75vh'
        targetImg.style.left = `${x/pixOfW -14}vw`
        targetImg.style.top = `${y/pixOfH -12.5+html.scrollTop/pixOfH}vh`
        more_btn.style.display = 'block' 
        exit.style.display = 'none'      
    }
}



photo_container.addEventListener('click', imgClick)
exit.addEventListener('click', clickExit)


//이미지 이;펙트
overlay.addEventListener('mousemove', contentsRotate)

function contentsRotate(e){
    const targetImg = document.getElementById(`img${imgName}`)
        if(targetImg){
        overlay.style.display='block'
        overlay.style.filter = 'opacity(0.4)'
        let mouseX = e.offsetX
        let mouseY = e.offsetY            
        rotateY = 5 -0.5/75*mouseX
        rotateX = 5 -5/545*mouseY        
        overlay.style.backgroundPosition = `${mouseX/15 + mouseY/11.4-10}%`
        targetImg.style = `transform : perspective(350px) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`
    }

}
overlay.addEventListener('mouseout', ()=>{
    const targetImg = document.getElementById(`img${imgName}`)
    //     if(targetImg){ 
            targetImg.style = 'transform : perspective(350px) rotateY(0deg) rotateX(0deg)'
            overlay.style.filter = ' opacity(0)'
        // }
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








btn.addEventListener('mousemove', mousemove)
btn.addEventListener('mousedown', mousedown)
btn.addEventListener('mouseout',()=>{
    cursorParent.style.display = 'none'
})


more_btn.addEventListener('mousemove', mousemove)
more_btn.addEventListener('mousedown', mousedown)
more_btn.addEventListener('mouseout',()=>{
    cursorParent.style.display = 'none'
})


for(imgs_box of imgs_boxs){
    imgs_box.addEventListener('mousemove', mousemove)
    imgs_box.addEventListener('mousedown', mousedown)
    imgs_box.addEventListener('mouseout',()=>{
        cursorParent.style.display = 'none'
})

}