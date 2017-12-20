function getMedia() {
    if (navigator.getUserMedia) {
        navigator.getUserMedia({
            'video': {
                'optional': [{}]
            }
        }, successFunc, errorFunc);
    } else {
        alert('Native device media streaming (getUserMedia) not supported in this browser.');
    }
}
var localStream;

function successFunc(stream) {
    document.getElementById('video').src = window.URL && window.URL.createObjectURL(stream) || stream;
    localStream = stream;
}

function errorFunc(e) {
    alert('Error！' + e);
}

function closeMedia() {
    localStream.stop();
    document.getElementById('video').src = '';
}