

(function(){
    console.log('test.js !!!!!!!!!!!');

    // location.href = "https://parkbyungsun.github.io/sample/index.html";
})();




function sendMsgToChild(msg) {
    var child = document.getElementById('iframeContent');

    child.contentWindow.postMessage(msg, '*');
}