const config = {
    video: { width: 640, height: 480, fps: 30 }
};

async function main() {
    const videoElement = document.querySelector("#sign-video");
    const resultElement = document.querySelector("#sign-result");
    const debugElement = document.querySelector("#debug");

    bslNumberGestures = [SIGN_1, SIGN_2, SIGN_3, SIGN_4, SIGN_5];

    const GE = new fp.GestureEstimator(bslNumberGestures);

    const handpose = handPoseDetection.SupportedModels.MediaPipeHands;
    const hpConfig = {
        runtime: 'tfjs',
        modelType: 'full'
    }

    const model = await handPoseDetection.createDetector(handpose, hpConfig);

    const estimateHands = async () => {

        const predictions = await model.estimateHands(videoElement, true);

        //if(predictions.length > 0) { console.log(predictions) };

        let signsFound = [];

        for(let i = 0; i < predictions.length; i++) {

            const est = GE.estimate(predictions[i].keypoints3D, 6);

            if(est.gestures.length > 0) {
                let result = est.gestures.reduce((p, c) => { 
                    return (p.score > c.score) ? p : c;
                });

                signsFound.push(result.name);
            }
        }

        resultElement.innerText = signsFound;

        if(signsFound.length > 1) {
            resultElement.innerText = signsFound;
        } else if (signsFound.length == 1) {
            resultElement.innerText = signsFound;
        } else {
            resultElement.innerText = " ";
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
        main();
    })});
});