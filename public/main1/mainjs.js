const html = document.querySelector('html')

// const scrollbar = require('smooth-scrollbar')
// const {Scrollbar} = scrollbar
// console.log(scrollbar)
// const options = {
//     'damping':0.05
// }

// Scrollbar.initAll(options)

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

    manu_click_btn.style.textDecoration = 'underline'

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


////////////////////////////////////섹션1




const sec4_logo = document.querySelector('.sec4-logo')
const section_5 = document.querySelector('.section-5')
const sec5_2_imgbox1 = document.querySelector('.sec5-2-imgbox1')
const sec5_2_imgbox2 = document.querySelector('.sec5-2-imgbox2')
const sec5_2_imgbox3 = document.querySelector('.sec5-2-imgbox3')
const sec5_2_imgbox4 = document.querySelector('.sec5-2-imgbox4')
const sec6_logo = document.querySelector('.sec6-logo')
const section_1 = document.querySelector('.section-1')



let vool = true               //////////////////섹션3 1번만 동작하게 하는 변수


const s1_imgs = document.querySelectorAll('#s1_imgs')
const s1_text = document.querySelector('.s1-text')
const s1_imgbox = document.querySelectorAll('#s1-imgbox')
const sec2_content_box1 = document.querySelector('.sec2-content-box1')
const sec2_content_box2 = document.querySelector('.sec2-content-box2')
const sec2_box1_img = document.querySelector('.sec2-box1-img')
const sec2_content_box3 = document.querySelector('.sec2-content-box3')
const sec2_content_box4 = document.querySelector('.sec2-content-box4')
const sec2_box2_img = document.querySelector('.sec2-box2-img')
const sec2_box3_img = document.querySelector('.sec2-box3-img')
const sec2_box4_img = document.querySelector('.sec2-box4-img')

const title_name1 = document.querySelector('.sec2-text1-title-wrapper > .title-name')
const text_text1 = document.querySelector('.s2-text1-wrapper > .text-text')
const title_name2= document.querySelector('.sec2-text2-title-wrapper > .title-name')
const text_text2 = document.querySelector('.s2-text2-wrapper > .text-text')
const title_name3 = document.querySelector('.sec2-text3-title-wrapper > .title-name')
const text_text3 = document.querySelector('.s2-text3-wrapper > .text-text')
const title_name4 = document.querySelector('.sec2-text4-title-wrapper > .title-name')
const text_text4 = document.querySelector('.s2-text4-wrapper > .text-text')

const s2_des_span = document.querySelectorAll('.s1-text-box-wrapper > span')



async function onload_sec1(){
    for(const img of s1_imgs){
        img.style.width = '100%'
        img.style.height = '100%'
        await wait(80+Math.random()*100)
    }
    s1_text.style.top = 0
}




function partImg(){
    let pixOfH = window.innerHeight/100

    // section1
    if(html.scrollTop>0&&html.scrollTop<200*pixOfH){

        s1_imgbox[5].style.left = `${63 + (html.scrollTop)*0.006}%` 
        s1_imgbox[5].style.top = `${530 + (html.scrollTop)*0.3}px` 
        s1_imgbox[4].style.left = `${30 - (html.scrollTop)*0.05}%` 
        s1_imgbox[4].style.top = `${338.5 + (html.scrollTop)*0.3}px` 

        if(html.scrollTop>30*pixOfH){
            s1_imgbox[0].style.left = `${40 - (html.scrollTop-30*pixOfH)*0.006}%` 
            s1_imgbox[0].style.top = `${120 - (html.scrollTop-30*pixOfH)*0.25}px` 
    
            s1_imgbox[1].style.left = `${60 + (html.scrollTop-30*pixOfH)*0.012}%` 
            s1_imgbox[1].style.top = `${135 - (html.scrollTop-30*pixOfH)*0.25}px` 
        }
        if(html.scrollTop>60*pixOfH){
            s1_imgbox[6].style.left = `${50 + (html.scrollTop-60*pixOfH)*0.006}%` 
            s1_imgbox[6].style.top = `${590 + (html.scrollTop-60*pixOfH)*0.5}px` 
    
            s1_imgbox[3].style.left = `${58 + (html.scrollTop-60*pixOfH)*0.012}%` 
            s1_imgbox[3].style.top = `${324.5 - (html.scrollTop-60*pixOfH)*0.8}px` 

            s1_imgbox[2].style.left = `${45 - (html.scrollTop-60*pixOfH)*0.02}%` 
            s1_imgbox[2].style.top = `${280.5 - (html.scrollTop-60*pixOfH)*0.8}px` 
        }

        for(const img of s1_imgbox){

            if(img.getBoundingClientRect().top <-50){
                // console.log('confirm')
                // img.style.opacity = 1.3 + img.getBoundingClientRect().top/img.offsetHeight
                img.style.opacity = 0.3
            }else if(img.getBoundingClientRect().top > 840){
                // img.style.opacity = 1.3 + img.getBoundingClientRect().bottom/img.offsetHeight
                img.style.opacity = 0.3
            }
            else{
                img.style.opacity = 1
            }
        }
    }

    
    if(html.scrollTop >= 200*pixOfH){
        section_1.classList.replace('s1_default','s1_active')
    }else{
        section_1.classList.replace('s1_active','s1_default')
    }


//////////////////////////////////////////////////////////////            섹션2 이벤트

console.log(html.scrollTop/pixOfH)
    if(html.scrollTop < 300*pixOfH){
        sec2_content.style.transform = `translateX(0)`
    }
    if(html.scrollTop>300*pixOfH){
        displayTitle()
    }
    if(html.scrollTop>340*pixOfH && html.scrollTop<600*pixOfH){
        sec2_content.style.transform = `translateX(${-((html.scrollTop-340*pixOfH)/pixOfH)}vw)`
        if(html.scrollTop>340*pixOfH && html.scrollTop < 400*pixOfH){

            sec2_content_box1.style.width = `${30 + (html.scrollTop-340*pixOfH)/pixOfH*2/3}vw`
            sec2_box1_img.style.height = `${30 + (html.scrollTop-340*pixOfH)/pixOfH*1/2}vh`
            sec2_content_box2.style.width = `${10 + (html.scrollTop-340*pixOfH)/pixOfH*1/3}vw`
            
        }
        if(html.scrollTop>380*pixOfH && html.scrollTop < 470*pixOfH){
            title_name1.style.top = 0
            text_text1.style.top = 0
        }
        else{
            title_name1.style.top = '3.5vw'
            text_text1.style.top = '6vh'
        }



        if(html.scrollTop>400*pixOfH && html.scrollTop < 470*pixOfH){

            sec2_content_box2.style.width = `${30 + (html.scrollTop-400*pixOfH)/pixOfH*4/7}vw`
            sec2_box2_img.style.height = `${30 + (html.scrollTop-400*pixOfH)/pixOfH*3/7}vh`
            sec2_content_box3.style.width = `${10 + (html.scrollTop-400*pixOfH)/pixOfH*3/7}vw`
            sec2_content_box4.style.width = `${10 + (html.scrollTop-400*pixOfH)/pixOfH*2/7}vw`
        }
        if(html.scrollTop>440*pixOfH && html.scrollTop < 540*pixOfH){
            title_name2.style.top = 0
            text_text2.style.top = 0
        }
        else{
            title_name2.style.top = '3.5vw'
            text_text2.style.top = '6vh'
        }



        if(html.scrollTop>470*pixOfH && html.scrollTop < 540*pixOfH){


            sec2_content_box3.style.width = `${40 + (html.scrollTop-470*pixOfH)/pixOfH*3/7}vw`
            sec2_box3_img.style.height = `${30 + (html.scrollTop-470*pixOfH)/pixOfH*3/7}vh`
            sec2_content_box4.style.width = `${30 + (html.scrollTop-470*pixOfH)/pixOfH*1/7}vw`
        }
        if(html.scrollTop>510*pixOfH && html.scrollTop < 600*pixOfH){
            title_name3.style.top = 0
            text_text3.style.top = 0
        }
        else{
            title_name3.style.top = '3.5vw'
            text_text3.style.top = '6vh'
        }



        if(html.scrollTop>540*pixOfH && html.scrollTop < 600*pixOfH){

            sec2_content_box4.style.width = `${40 + (html.scrollTop-540*pixOfH)/pixOfH*1/2}vw`
            sec2_box4_img.style.height = `${30 + (html.scrollTop-540*pixOfH)/pixOfH*1/2}vh`
        }
        if(html.scrollTop>580*pixOfH && html.scrollTop < 670*pixOfH){
            title_name4.style.top = 0
            text_text4.style.top = 0

        }
        else{
            title_name4.style.top = '3.5vw'
            text_text4.style.top = '6vh'

        }
    }

    if(html.scrollTop>610*pixOfH && html.scrollTop < 900*pixOfH){
        console.log('확인')
            s2_des_span[0].style.top = 0
            s2_des_span[1].style.top = 0
            s2_des_span[2].style.top = 0
            s2_des_span[3].style.top = 0
    }else{
            s2_des_span[0].style.top = '5vw'
            s2_des_span[1].style.top = '5vw'
            s2_des_span[2].style.top = '5vw'
            s2_des_span[3].style.top = '5vw'
    }
    if( html.scrollTop>600*pixOfH){
        sec2_content.style.transform = `translateX(-270vw)`
        const sec2_box4_img = document.querySelector('.sec2-box4-img')
        sec2_box4_img.style.height = `60vh`
    }

////////////////////////////////////////////////////////////////// 섹션3이벤트

    if(html.scrollTop>740*pixOfH){
        if(vool){
            movePhoto()
            vool = false
        }

    }


/////////////////////////////////////////////////////////////                섹션4이벤트
    if(html.scrollTop>760*pixOfH&&html.scrollTop<830*pixOfH){

    sec4_logo.style.transform = `scaleX(${1-(html.scrollTop-760*pixOfH)/pixOfH*0.0015}) translateY(${(html.scrollTop-760*pixOfH)/pixOfH*0.1}vh)`
    sec4_logo.style.opacity = `${1-(html.scrollTop-760*pixOfH)/pixOfH*0.008}`    
    }
    if(html.scrollTop>820*pixOfH&&html.scrollTop<870*pixOfH){
        section_5.style.transform = `translateY(${(html.scrollTop-820*pixOfH)/pixOfH*2.5}vh)`
    }

//////////////////////////////////////////////////////////               섹션5-2이벤트
    if(html.scrollTop>1010*pixOfH&&html.scrollTop<1295*pixOfH){
        sec5_2_imgbox2.style.transform = `translateY(${(html.scrollTop/pixOfH-1010)*0.3108108108108108}vh)`
        sec5_2_imgbox4.style.transform = `translateY(${(html.scrollTop/pixOfH-1010)*0.3108108108108108}vh)`
        sec5_2_imgbox3.style.transform = `translateY(${-(html.scrollTop/pixOfH-1010)*0.1108108108108108}vh)`
        sec5_2_imgbox1.style.transform = `translateY(${-(html.scrollTop/pixOfH-1010)*0.1108108108108108}vh)`

    }

////////////////////////////////////////////////////////                   섹션6 이벤트
    if(html.scrollTop>1210*pixOfH){
        sec6_logo.style.top = 0
    }else{
        sec6_logo.style.top = '20vh'
    }

    // console.log((html.scrollTop)/pixOfH)
}

window.addEventListener('scroll', partImg, { passive: true })





////////////////////////////////섹션2
const sec2_container1 = document.querySelector('.sec2-container1')
const sec2_container2 = document.querySelector('.sec2-container2')
const sec2_container3 = document.querySelector('.sec2-container3')
const sec2_container4 = document.querySelector('.sec2-container4')
const sec2_slogun_wrapper = document.querySelector('.sec2-slogun-wrapper')
const sec2_content = document.querySelector('.sec2-content')



const displayTitle = async()=>{
    sec2_container1.style.transform = 'translateY(-30vh)'
    sec2_container2.style.transform = 'translateY(-50vh)'
    sec2_container3.style.transform = 'translateY(-70vh)'
    sec2_container4.style.transform = 'translateY(-90vh)'

    await wait(1100)
    sec2_slogun_wrapper.style.transform = 'translateY(-8vh)'
}









//////////////////////////섹션3
const photo_box = document.querySelector('.photo-box')
const section_3 = document.querySelector('.section-3')
for(i=1; i<67; i++){
    photo = document.createElement('div')
    photo.className = 'img-box'
    photo.innerHTML = `<img class='photo-img' src='../../project-img/img/slide/slide-photo${i}.jpg' onclick="location.href='../gallery/photo.html'">`
    photo.style.left = `${Math.random()*10+35}vw`
    if(i===66){photo.style.left = '40vw'}
    photo_box.appendChild(photo)
}
const photos = document.querySelectorAll('.img-box')

const movePhoto = async() =>{       
    
    for(let i=1; i<67; i++){
        photos[i-1].style.width = `${Math.random()*5+17.5}vw`
        photos[i-1].style.height = `${Math.random()*3+10.5}vw`
        photos[i-1].style.opacity=1
        photos[i-1].style.left = `${Math.random()*3+38.5}vw`
        photos[i-1].style.top = `${Math.random()*3+41.5}vh`
        if(i===66){
            photos[i-1].style.width ='29vw'
            photos[i-1].style.height = `17vw`
            photos[i-1].style.opacity=1
            photos[i-1].style.left = '35.5vw'
            photos[i-1].style.top = '38vh'
        }
        await wait(100)
    }

    await wait(2000)
    for(let i=1; i<52; i++){
           let radi = Math.random()*360*Math.PI/180
           let cosRad = Math.cos(radi)  //left거리
           let sinRad = Math.sin(radi)    //top거리
           let hypotenuse = 150            //빗변거리
           photos[i-1].style.left = `${hypotenuse*cosRad}vw`
           photos[i-1].style.top = `${hypotenuse*sinRad}vh`
      
        await wait(10)
    }

        let i = 0
        let k = 52
        let q = 1
        for(let j=1; j<16; j++){
            photos[k-1].style.left = `${-Math.random()*1.5+25.5*(q-1)-11}vw`
            photos[k-1].style.top = `${Math.random()*3+i*40}vh`
            photos[k-1].style.width = `${Math.random()*3+19.5}vw`
            photos[k-1].style.height = `${Math.random()*2+8.5}vw`
            
            if(k===66){
                photos[k-1].style.left = '35.5vw'
                photos[k-1].style.top = '38vh'
                photos[k-1].style.width ='29vw'
                photos[k-1].style.height = `17vw`
            }
            if(k===59){
                photos[k-1].style.left = `90vw`
                photos[k-1].style.top = `80vh`
                photos[k-1].style.width = `${Math.random()*3+18.5}vw`
                photos[k-1].style.height = `${Math.random()*2+10.5}vw`
            }
            k++
            q++

            if(j%5===0){i++}
            if((q-1)%5===0){q=1}   
    }
}

function wait(time){
    return new Promise(dum => setTimeout(dum,time))
}




////////////////////////////////////////////////////////섹션6

const sec6_con_box = document.querySelectorAll('.sec6-con-box')
const sec6_img = document.querySelectorAll('.sec6-img')
const sec6_tex = document.querySelectorAll('.sec6-tex')

function extendContent(e){

    sec6_con_box.forEach((ele)=>{ele.style.width = '25%'})
    sec6_img.forEach((ele)=>{ele.style.opacity = 0})
    sec6_tex.forEach((ele)=>{ele.style.transform = 'translateY(0vh)'})

    this.style.width = '40%'
    this.childNodes[3].style.opacity = 1
    this.childNodes[1].childNodes[1].style.transform = 'translateY(-8vh)'
    this.childNodes[1].childNodes[3].style.transform = 'translateY(-8vh)'
}


sec6_con_box.forEach((ele)=>{ele.addEventListener('mouseover', extendContent)})



/////////////////////////로드 이벤트
const root_wrapper = document.querySelector('.root_wrapper')

async function disappearWrapper(){
    root_wrapper.style.opacity = 0

    await wait(700)
    root_wrapper.remove()

    await wait(100)
    onload_sec1()
}

window.addEventListener('load', disappearWrapper)













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








const masBtn = document.querySelector('.masBtn')
const cheerBtn = document.querySelector('.cheerBtn')
const sec6_container = document.querySelectorAll('.sec6-container')



for(photo of photos){
    photo.addEventListener('mousemove', mousemove)
    photo.addEventListener('mousedown', mousedown)
    photo.addEventListener('mouseout',()=>{
        cursorParent.style.display = 'none'
})
}

masBtn.addEventListener('mousemove', mousemove)
masBtn.addEventListener('mousedown', mousedown)
masBtn.addEventListener('mouseout',()=>{
    cursorParent.style.display = 'none'
})


cheerBtn.addEventListener('mousemove', mousemove)
cheerBtn.addEventListener('mousedown', mousedown)
cheerBtn.addEventListener('mouseout',()=>{
    cursorParent.style.display = 'none'
})


for(sec6_contain of sec6_container){
sec6_contain.addEventListener('mousemove', mousemove)
sec6_contain.addEventListener('mousedown', mousedown)
sec6_contain.addEventListener('mouseout',()=>{
    cursorParent.style.display = 'none'
})}