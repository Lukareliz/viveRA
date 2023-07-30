const NUMBER_OF_IMAGES = 5;

function injectAScene(){
    const imgNumber = Math.ceil(Math.random()*NUMBER_OF_IMAGES)
    const aSceneHTML = `
        <a-scene vr-mode-ui="enabled: false" embedded arjs="debugUIEnabled: false;">
            <a-assets>
                <img src="/assets/img${imgNumber.toString().padStart(2,"0")}.png" alt="" id="logo">
            </a-assets>
            <a-marker preset="hiro">
                <a-image width="1" height="1" rotation="-90 0 0" position="0 0 0" src="#logo"></a-image>
            </a-marker>
            <a-entity camera></a-entity>
        </a-scene>
    `
    document.body.innerHTML+=aSceneHTML
}