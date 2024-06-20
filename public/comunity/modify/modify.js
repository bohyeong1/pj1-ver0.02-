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






/////////////////////////////////////////////////modify
const modify_cancel = document.querySelector('.modify-cancel')
const alert_cancel = document.querySelector('.alert-cancel')
const cancel_cancel = document.querySelector('.cancel-cancel')
const modify_writer = document.querySelector('.modify-writer')
const modify_password = document.querySelector('.modify-password')
const modify_title = document.querySelector('.modify-title')
const modify_content = document.querySelector('.modify-content')

modify_cancel.addEventListener('click', ()=>{
    alert_cancel.style.display = 'block'
})

cancel_cancel.addEventListener('click', ()=>{
    console.log('click')
    alert_cancel.style.display = 'none'
})




const boardStr = localStorage.getItem('boards')
const boardObj = JSON.parse(boardStr)
const beforeUrl = document.referrer
const index = beforeUrl.split('=')[1]
const board = boardObj[index]


console.log(board)

modify_writer.value = `${board.writer}`
modify_password.value = `${board.password}`
modify_title.value = `${board.title}`
modify_content.value = `${board.content}`


////////서브밋
const contentBox_modify = document.querySelector('#contentBox-modify')

function modifyContent(e){
    e.preventDefault()
    console.log(e.target.modify_writer)
    console.log(e.target)
    boardObj[index].writer =  e.target.modify_writer.value
    boardObj[index].password =  e.target.modify_password.value
    boardObj[index].title =  e.target.modify_title.value
    boardObj[index].content =  e.target.modify_content.value

    console.log(boardObj)

    localStorage.setItem('boards', JSON.stringify(boardObj))
    location.href = '../list/list.html'

}

contentBox_modify.addEventListener('submit', modifyContent)







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