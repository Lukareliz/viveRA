const INTRO_TIME = 3000

function showIntro(){
    const divIntro = document.createElement("div")
    divIntro.classList.add("intro-modal")
    divIntro.innerHTML=`
        <div class="image-modal-container">
            <img src="./assets/vivera.png" class="image-modal"/>
            <span class="intro-modal-loader loader circle"></span>
        </div>
    `
    document.body.appendChild(divIntro)
}

function hideIntro(){
    const divIntro = document.querySelector(".intro-modal")
    divIntro.remove()
}

function handleInit(){
    showIntro()
    setTimeout(function(){
        hideIntro()
        injectAScene()
    },INTRO_TIME)
}

handleInit()