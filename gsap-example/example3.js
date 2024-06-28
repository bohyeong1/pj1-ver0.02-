gsap.registerPlugin(Flip)

let leyouts = ['start','grid','flex','final'],
    container = document.querySelector('.his-container'),
    curLeyout = 0


function nextState(){
    const state = Flip.getState('.his-container, .his-container__letter, .his-container__history')
    container.classList.remove(leyouts[curLeyout])
    curLeyout = (curLeyout + 1) % leyouts.length
    container.classList.add(leyouts[curLeyout])

    Flip.from(state, {
        absolute:true,
        stagger:0.07,
        duration:0.7,
        ease:'power2.inOut',
        spin:curLeyout === 3,
        simple:true,
        onEnter:(element) => {gsap.fromTo(element, {opacity:0},{opacity:1, duration:0.4})},
        onLeave:(element)=>{gsap.to(element, {opacity:0})},
    })

    gsap.delayedCall(curLeyout===0? 3.5 : 2, nextState)
}

gsap.delayedCall(2,nextState)