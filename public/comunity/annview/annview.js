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




////////////////////////////////////////////////////////////////////////////뷰


/////////////////////////////////////////////////공지사항
const announcement = [
    {title : '게시판 이용규칙',
     writer : '서보형',
     data : '2024-04-04',
     content : '욕설과 음담패설 사행성행위를 철저하게 금지합니닷'
     },
    {title : '제작자 소개',
     writer : '서보형',
     data : '2024-04-04',
     content : 'css, html, 자바스크립트를 이용해 제작하였으며 사적인 이익을 추구하지 않습니다. 모든 사진파일들은 한화이글스 공식홈페이지나 인스타 저작권에서 자유로운 무료 사진 배포사이트를 이용하였습니다.' 
     },
     {title : '추후 개발 계획',
     writer : '서보형',
     data : '2024-04-05',
     content : '로그인 기능을 통해서 하루 추천 1번제한<br> 욕설 필터링 기능<br> 개시글 리스트 전체글/공지글/추천순으로 분류기능<br> 이미지업로드기능 <br>을 추가할 예정입니다. 개발기한:2024-4-15일' 
     }
]



///////////데이터가져오기

const idx = location.search
const index = idx.split('=')[1] // 

const board = announcement[index]

const view_title_title = document.querySelector('.view-title-title')
const view_title_writer = document.querySelector('.view-title-writer')
const view_title_date = document.querySelector('.view-title-date')
const contentBox_view_content = document.querySelector('.contentBox-view-content')
const view_title_views = document.querySelector('.view-title-views')
const view_title_recommend = document.querySelector('.view-title-recommend')

view_title_title.innerHTML = `${board.title}`
view_title_writer.innerHTML = `${board.writer}`
view_title_date.innerHTML = `${board.data}`
contentBox_view_content.innerHTML = `${board.content}`






















////////////////////////////////////////댓글 기능

const contentBox_reply = document.querySelector('.contentBox-reply')
const replyWriter = document.querySelector('.reply-writer')
const replyContent = document.querySelector('.reply-content')
const replyPassword = document.querySelector('.reply-password')
const contentBox_reply_list = document.querySelector('.contentBox-reply-list')

replyWriter.addEventListener('click',()=>{
    if(replyWriter.value==='댓글러'){
        replyWriter.value=''
    }
})
replyPassword.addEventListener('click', ()=>{
    if(replyPassword.value==='q.mo'){
        replyPassword.value=''
    }
})

class Reply{
    constructor(writer, password, content, replyKey){
        this.writer = writer
        this.password = password
        this.content = content
        this.keyvalue = replyKey
    }
}



const view_title_reply = document.querySelector('.view-title-reply')

const repliesAll = JSON.parse(localStorage.getItem('reply'))|| []
const replies = repliesAll[index]||[]


view_title_reply.innerHTML = `${replies.length}`

////////////////리플객체에서 키값 받아오기
let replyKey

if(replies.length!=0){
    replyKey = replies[replies.length-1].keyvalue    
}else{
    replyKey=-1
}




if(replies){
    let i = 0
for(reply of replies){
    const reply_wrapper = document.createElement('div')
    reply_wrapper.className = 'reply-wrapper'

    const reply_list_writer = document.createElement('div')
    reply_list_writer.innerHTML = `${reply.writer}`
    reply_list_writer.className = 'reply-list-writer'
    reply_wrapper.appendChild(reply_list_writer)

    const reply_list_content = document.createElement('div')
    reply_list_content.innerHTML = `${reply.content}`
    reply_list_content.className = 'reply-list-content'
    reply_wrapper.appendChild(reply_list_content)

    const reply_list_delete = document.createElement('div')
    reply_list_delete.innerHTML = '삭제'
    reply_list_delete.id = `${i}`                 //////////////////////조회할 키값위치
    reply_list_delete.className = 'reply-list-delete'
    reply_wrapper.appendChild(reply_list_delete)

    contentBox_reply_list.appendChild(reply_wrapper)
    i++
}}

function createReply(e){
    e.preventDefault()    
        replyKey++////////////////////////////////새로운 키값 삽ㄷ입
    let instance = new Reply(e.target.reply_writer.value, e.target.reply_password.value, e.target.reply_content.value, replyKey)
    replies.push(instance)

        const reply_wrapper = document.createElement('div')
        reply_wrapper.className = 'reply-wrapper'


        const reply_list_writer = document.createElement('div')
        reply_list_writer.innerHTML = `${e.target.reply_writer.value}`
        reply_list_writer.className = 'reply-list-writer'
        reply_wrapper.appendChild(reply_list_writer)

        const reply_list_content = document.createElement('div')
        reply_list_content.innerHTML = `${e.target.reply_content.value}`
        reply_list_content.className = 'reply-list-content'
        reply_wrapper.appendChild(reply_list_content)

        const reply_list_delete = document.createElement('div')
        reply_list_delete.innerHTML = '삭제'
        reply_list_delete.id = `${replyKey}`                 //////////////////////조회할 키값위치
        reply_list_delete.className = 'reply-list-delete'
        reply_wrapper.appendChild(reply_list_delete)


        contentBox_reply_list.appendChild(reply_wrapper)

        repliesAll[index] = replies
        localStorage.setItem('reply', JSON.stringify(repliesAll))


        replyContent.value = ''
        replyPassword.value = ''                     /////////////////////////////////////////댓글 등록후 댓글 입력창 초기화
        replyWriter.value = ''

        location.reload(true) ///////////////////////////////////페이지 초기화하여 버튼이벤트 생성하기
}

contentBox_reply.addEventListener('submit', createReply)



///////////////////////////////댓글 삭제기능

const reply_cancel = document.querySelector('.reply-cancel')
const reply_input = document.querySelector('#reply-input')
const reply_confirm = document.querySelector('.reply-confirm')
const reply_list_deletes = document.querySelectorAll('.reply-list-delete')
const reply_wrapper = document.querySelectorAll('.reply-wrapper')


function deleteReply(e){
    e.preventDefault()

    console.log(replies[replyIndex].password)
    if(e.target.password.value===replies[replyIndex].password){
        if(confirm('게시글을 삭제하면 복구되지 않습니다.')){
            replies.splice(replyIndex,1)
            reply_wrapper[replyIndex].remove()
            reply_confirm.style.display = 'none'
            replyKey--               ////////////////////////////////////////////////////키값 인덱스깎기
            ///////////////////////////////////////////////////////////객체의 keyvalue값 다시 초기화
            for(let i=0; i<replies.length; i++){
                replies[i].keyvalue = i
                reply_list_deletes[i].id = `${i}`  
            }

            repliesAll[index] = replies                                     ///////////////////////////수정된 키값 로컬스토리지에 저장하기
            localStorage.setItem('reply',JSON.stringify(repliesAll))

            location.reload(true)                    ///////////////////////////////////////////////////페이지 새로고침(id값 키값 다시 불러오기)
        }else {
            reply_confirm.style.display = 'none'
        }
       
    } else{
        reply_confirm.style.display = 'none'
        alert('비밀번호가 맞지 않습니다.')
    }  
    console.log(replies)
}


reply_input.addEventListener('submit',deleteReply )
reply_cancel.addEventListener('click', ()=>{
    reply_confirm.style.display = 'none'
})


let replyIndex                              ///////////////////////////////////////////선택된 댓글의 인덱스

reply_list_deletes.forEach((ele)=>{
    ele.addEventListener('click', (e)=>{
    reply_confirm.style.display = 'block'



    replies.forEach((ele)=>{
        if(ele.keyvalue == e.target.id){
            replyIndex = replies.indexOf(ele)
            console.log(replies[replyIndex].password)
            console.log(replies)

        }
    })
})
}) 

console.log(replies)








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