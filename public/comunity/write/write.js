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




    
///////////////////////////////////////////////////////////////////////////////////////라이트
const write_cancel = document.querySelector('.write-cancel')
const alert_cancel = document.querySelector('.alert-cancel')
const cancel_cancel = document.querySelector('.cancel-cancel')
const write_writer = document.querySelector('.write-writer')
const write_password = document.querySelector('.write-password')
const write_title = document.querySelector('.write-title')


write_cancel.addEventListener('click', ()=>{
    alert_cancel.style.display = 'block'
})

cancel_cancel.addEventListener('click', ()=>{
    console.log('click')
    alert_cancel.style.display = 'none'
})

write_writer.addEventListener('click', ()=>{
    if(write_writer.value==='작성자'){
        write_writer.value=''
    }
})

write_password.addEventListener('click', ()=>{
    if(write_password.value==='password'){
        write_password.value=''
    }
})

write_title.addEventListener('click', ()=>{
    if(write_title.value==='제목'){
        write_title.value=''
    }
})



///////////////submit
const contentBox_write = document.querySelector('#contentBox-write')

class Board {
    constructor(title, writer, content, password){
        this.title = title
        this.writer = writer
        this.content = content
        this.password = password
        this.data = recordData()
        this.views = 0  
        this.recommend = 0
        this.notRecommend = 0      
    }

    set Title(value){
        if(value.length===0){throw new Error(alert('제목을 입력해 주세요'))}
        this.title = value
    }

    set Writer(value){
        if(value.length===0){throw new Error(alert('작성자를 입력해 주세요'))}
        this.writer = value
    }

    set Password(value){
        if(value.length===0){throw new Error(alert('비밀번호를 입력해 주세요'))}
        this.password = value
    }

    set Content(value){
        if(value.length===0){throw new Error(alert('내용을 입력해 주세요'))}
        this.content = value
    }
}

function recordData(){
    const data = new Date()
    const yyyy = data.getFullYear()
    let mm = data.getMonth()+1
    let dd = data.getDate()

    mm = (mm>9 ? '':0)+mm
    dd = (dd>9 ? '':0)+dd

    const arr = [yyyy,mm,dd]
    return arr.join('.')
}


function submit(e){
    e.preventDefault();    
    const writer = e.target.write_writer.value
    const password = e.target.write_password.value
    const title = e.target.write_title.value
    const content = e.target.write_content.value

    try{
        const boardObj = JSON.parse(localStorage.getItem('boards')) ///로컬스토리지 저장값 불러오기

        //////////////////서브밋한 값 객체만들기
        // const index = boardObj.length
        const instance = new Board(title, writer, content, password)
        boardObj.push(instance)

        ////////////////////////////만든 객체 로컬스토리지에 저장하기
        const boardStr = JSON.stringify(boardObj)
        localStorage.setItem('boards', boardStr)
        location.href = '../list/list.html'
    }catch(e){
        alert(e.message)
    }

}

contentBox_write.addEventListener('submit', submit)










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