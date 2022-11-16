const config = {
    video: { width: 640, height: 480, fps: 30 }
};

async function main() {
    const videoElement = document.querySelector("#sign-video");
    const resultElement = document.querySelector("#sign-result");
    const debugElement = document.querySelector("#debug");

    const knownGestures = numberGestures;

    const GE = new fp.GestureEstimator(knownGestures);

    const model = await handpose.load();
    console.log("Handpose model loaded");

    const estimateHands = async () => {

        const predictions = await model.estimateHands(videoElement, true);

        for(let i = 0; i < predictions.length; i++) {
            const est = GE.estimate(predictions[i].landmarks, 7);

            if(est.gestures.length > 0) {
                let result = est.gestures.reduce((p, c) => { 
                    return (p.score > c.score) ? p : c;
                });

                resultElement.innerText = result.name;
                debugElement.innerText = JSON.stringify(est.gestures);
                
            }
        }

        setTimeout(() => { estimateHands(); }, 1000 / config.video.fps);
    };
    
    estimateHands();
}

async function initCamera(width, height, fps) {
    const constraints = {
        audio: false,
        video: {
            facingMode: "user",
            width: width,
            height: height,
            frameRate: { max: fps }
        }
    };

    const video = document.querySelector("#sign-video");
    video.width = width;
    video.height = height;

    const stream = await navigator.mediaDevices.getUserMedia(constraints);
    video.srcObject = stream;

    return new Promise(resolve => {
        video.onloadedmetadata = () => { resolve(video) };
    });
}

window.addEventListener("DOMContentLoaded", () => {
    initCamera(
        config.video.width, config.video.height, config.video.fps
    ).then(video => {
        video.play();
        video.addEventListener("loadeddata", event => {
        console.log("Camera is ready");
        main();
    })});
});