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




//representative
const main_img3 = document.querySelector('.main-img3')
const img3 = document.querySelector('#img3')
const html = document.querySelector('html')
const representative = document.querySelector('.representative')

function wait(time){
    return new Promise(dum => setTimeout(dum,time))
}

const pixOfH =  window.innerHeight/100
let timer = 0

const expendImg = async()=>{
    const img1 = document.querySelector('#img1')
    const img2 = document.querySelector('#img2')
    const img4 = document.querySelector('#img4')
    const img5 = document.querySelector('#img5')
    let scrollVh = html.scrollTop/pixOfH             ///스크롤 한 양만큼의 vh값

     
    if(50<scrollVh){
        img1.style.top = '-30vh'
        img2.style.top = '-30vh'
        img4.style.top = '-30vh'
        img5.style.top = '-30vh'
    }else if(50>scrollVh){
        img1.style.top = '0vh'
        img2.style.top = '0vh'
        img4.style.top = '0vh'
        img5.style.top = '0vh'
    }
    
    if(scrollVh>50&&scrollVh<150){
        main_img3.style.width = `${10+0.9*(scrollVh-50)}vw`
        main_img3.style.height = `${30+0.7*(scrollVh-50)}vh`
    }
    else if(scrollVh>=150){
        main_img3.style.width = `100vw`
        main_img3.style.height = `100vh`
        representative.style.position = 'absolute'
        representative.style.top = '150vh'
        main_img3.style.position = 'fixed'
        main_img3.style.top = 0
        main_img3.style.transform = 'translate(-50%)'
    }    

    if(scrollVh<150){
        representative.style.position = 'sticky'
        representative.style.top = '0vh'
        main_img3.style.position = 'absolute'
        main_img3.style.top = '50%'
        main_img3.style.transform = 'translate(-50%,-50%)'
    }

    if(scrollVh >= 276){                     //////////////////fixed된 메뉴 디스플레이
        fixed_menu.style.display = 'block'
    }else if(scrollVh < 276){
        fixed_menu.style.display = 'none'
    }
}

window.addEventListener('scroll',expendImg)






/////////////////////////////섹션1////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const sec1_player = document.querySelector('.sec1-player')///////////////////////////////코치 동적 생성 코드
const popup_sideMenu = document.querySelector('.popup-sideMenu')
for(i=0; i<15; i++){
    let sec1_player_list = document.createElement('div')
    sec1_player_list.className = 'sec1-player-lists'
    sec1_player.appendChild(sec1_player_list)

    let player_picture = document.createElement('div')
    player_picture.className = 'player-picture'
    player_picture.innerHTML = `<img src='../../../project-img/img/player/coach${i+1}.png'>`
    sec1_player_list.appendChild(player_picture)

    let player_text = document.createElement('div')
    player_text.className = 'player-text'
    sec1_player_list.appendChild(player_text)

    let player_number = document.createElement('div')
    player_number.className = 'player-number'
    player_text.appendChild(player_number)

    player_name = document.createElement('div')
    player_name.className = 'player-name'
    player_text.appendChild(player_name)

    /////////////////////////////////////////////////팝업창 동적생성
    let side_player = document.createElement('div')
    side_player.className = 'side-player'
    popup_sideMenu.appendChild(side_player)

    let side_img = document.createElement('div')
    side_img.className = 'side-img'
    side_img.innerHTML = `<img src="../../../project-img/img/player/coach${i+1}.png" alt="">`
    side_player.appendChild(side_img)

    let side_text = document.createElement('div')
    side_text.className = 'side-text'
    side_player.appendChild(side_text)
}

const sec1_player_lists = document.querySelectorAll('.sec1-player-lists')
const player_pictures = document.querySelectorAll('.player-picture')
const player_texts = document.querySelectorAll('.player-text')
const player_numbers = document.querySelectorAll('.player-number')
const player_names = document.querySelectorAll('.player-name')

player_numbers[0].innerText = '10'
player_names[0].innerHTML = '최원호 <br> CHOI WONHO'


//섹션1 메뉴
const sec1_menu_lists = document.querySelectorAll('.sec1-menu-list')

for(sec1_menu_list of sec1_menu_lists){
    sec1_menu_list.addEventListener('mouseover', (e)=>{
       e.target.style.color = 'white'        
       
    })
    sec1_menu_list.addEventListener('mouseout', (e)=>{
        e.target.style.color = 'rgb(175, 172, 172)'        
    })   
}


////fixed된 메뉴

const fixed_menu = document.querySelector('.fixed-menu')
const fixed_menu_list = document.querySelectorAll('.fixed-menu-list')

for(sec1_menu_list of fixed_menu_list){
    sec1_menu_list.addEventListener('mouseover', (e)=>{
       e.target.style.color = 'white'   

    })
    sec1_menu_list.addEventListener('mouseout', (e)=>{
        e.target.style.color = 'rgb(175, 172, 172)'   
        
    
    })   
}




///이미지클릭

sec1_player_lists[0].addEventListener('click', popupImg)

function popupImg(e){
    //    let targetParent = e.target

    // for(; targetParent.className!='sec1-player-lists'; targetParent = targetParent.parentNode){}

    // let targetImg = [[targetParent]] 
    // let spreadTargetImg = []


    // (function findChildNode(){

    //     targetImg.forEach((x)=>{
    //         x.forEach((y)=>{
    //             targetImg = targetImg.push(y.childNodes)
    //         } )
    //         targetImg.splice(0,1)           
    //     })          
    //     for(img of targetImg){
    //     }

    //     findChildNode
    // })()

    popUp.style.left = '15vw'

    console.log(this.querySelector('.player-picture img').getAttribute('src'))
}









//////////////////////////////////////////////////////////팝업창/////////////////////////////////////////////////////
const side_texts = document.querySelectorAll('.side-text')
const side_imgs = document.querySelectorAll('.side-img')
const side_players = document.querySelectorAll('.side-player')



const popUp = document.querySelector('.popUp')
const closeBtn = document.querySelector('.closeBtn')
function displayPopUp(){
    popUp.style.left = '15vw'
}

closeBtn.addEventListener('click', (e)=>{
    console.log(e.target)
    popUp.style.left = '-85vw'})
closeBtn.addEventListener('mouseover',(e)=>{
    e.target.style.color = 'black'})
closeBtn.addEventListener('mouseout',(e)=>{e.target.style.color = 'white'
                                           cursorParent.style.display = 'none'})


side_texts[1].innerHTML = '<h2>정경배</h2> <p>생년월일 : </p> <p>보직 : </p> <p>프로필 : </p>'















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








closeBtn.addEventListener('mousemove', mousemove)
closeBtn.addEventListener('mousedown', mousedown)

for(sec1_player_list of sec1_player_lists){
    sec1_player_list.addEventListener('mousemove', mousemove)
    sec1_player_list.addEventListener('mousedown', mousedown)
    sec1_player_list.addEventListener('mouseout',()=>{
        cursorParent.style.display = 'none'
    })

}

for(side_player of side_players){
    side_player.addEventListener('mousemove', mousemove)
    side_player.addEventListener('mousedown', mousedown)
    side_player.addEventListener('mouseout',()=>{
        cursorParent.style.display = 'none'
    })
}