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




    
///////////////////////////////////////////////////////////////////////////////////////리스트

const content_text = document.querySelector('.content-text')

/////////////////////////////////////////////////공지사항
const announcement = [
    {title : '게시판 이용규칙',
     writer : '서보형',
     data : '2024-04-04',
     content : '욕설과 음담패설을 금지하고 사행성행위를 철저하게 금지합니닷'
     },
    {title : '제작자 소개',
     writer : '서보형',
     data : '2024-04-04',
     content : 'css, html, 자바스크립트를 이용해 제작하였으며 사적인 이익을 추구하지 않습니다. 모든 사진파일들은 한화이글스 공식홈페이지나 인스타 저작권에서 자유로운 무료 사진 배포사이트를 이용하였습니다.' 
     },
     {title : '추후 개발 계획',
     writer : '서보형',
     data : '2024-04-05',
     content : '로그인 기능을 통해서 하루 추천 1번제한 <br> 욕설 필터링 기능, 개시글 리스트 전체글/공지글/추천순으로 분류기능을 추가할 예정입니다. 개발기한:2024-4-10일' 
     }
]

//////////////////////////////////////공지사항 리스트에 출력하기
function displayAnnouncement(ele){
    for(i=0; i<ele.length; i++){
        const newList = document.createElement('div')
        newList.innerHTML = `
            <div class="content-text-body"  >
                <div class="content-text-text" id="tex-1"> - </div>
                <div class="content-text-text" id="tex-2"  onclick="location.href='../annview/annview.html?announce=${i}'">${ele[i].title}</div>
                <div class="content-text-text" id="tex-3" style='background:beige'>${ele[i].writer}</div>
                <div class="content-text-text" id="tex-4">${ele[i].data}</div>
                <div class="content-text-text" id="tex-5"> - </div>
                <div class="content-text-text" id="tex-6"> - </div>
            </div>`

            content_text.appendChild(newList)
    }
}

displayAnnouncement(announcement)










const content_header_box1 = document.querySelector('.content-header-box1')
const content_header_box2 = document.querySelector('.content-header-box2')
const content_header_box3 = document.querySelector('.content-header-box3')
const content_header_text = document.querySelectorAll('#content-header-text')
const content_header = document.querySelector('.content-header')
const content_header_box4 = document.querySelector('.content-header-box4')

content_header_text.forEach((ele)=>{
    ele.addEventListener('mouseover', (e)=>{
        if(getComputedStyle(content_header_box1).background==='rgb(255, 165, 0) none repeat scroll 0% 0% / auto padding-box border-box'){
            content_header_box1.style.background='white'
        }
        e.target.style.background='orange'        
    })

    ele.addEventListener('mouseout',(e)=>{
        e.target.style.background='white'
    })
})

///////////로컬스토리지 초기 배열만들기
let boardStr = localStorage.getItem('boards')

if(boardStr===null){

    const listStr = JSON.stringify([])
    localStorage.setItem('boards', listStr)
    boardStr = listStr
}


////////////로컬스토리지 데이터 가져오기
const content_text_body = document.querySelector('.content-text-body')

const boardObj = JSON.parse(boardStr)


function template(index, obj){
    const newList = document.createElement('div')
    newList.innerHTML = `
        <div class="content-text-body">
            <div class="content-text-text" id="tex-1">${index+1}</div>
            <div class="content-text-text" id="tex-2" onclick="location.href='../view/view.html?index=${index}'">${obj.title}</div>
            <div class="content-text-text" id="tex-3">${obj.writer}</div>
            <div class="content-text-text" id="tex-4">${obj.data}</div>
            <div class="content-text-text" id="tex-5">${obj.views}</div>
            <div class="content-text-text" id="tex-6">${obj.recommend}</div>
        </div>`
    return newList
        
}


for(let i=0; i<boardObj.length; i++){
    content_text.appendChild(template(i,boardObj[i]))
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





