

function log(l) {
    chrome.extension.getBackgroundPage().console.log(l);
}
(function(){


})();


function sendObjectToInspectedPage(message) {
    message.tabId = chrome.devtools.inspectedWindow.tabId;
    chrome.extension.sendMessage(message);
}


document.querySelector('#executescript').addEventListener('click', function() {
    // sendObjectToInspectedPage({action: 'code', content: 'console.log("inline script executed")'});

    // sendObjectToInspectedPage({action: 'script', content: 'js/customer.js'});

 log('console002');

 var tab = _TAB;
 currentTab = tab; // used in later calls to get tab info

 var filename = getFilename(tab.url);




 CaptureAPI.captureToFiles(tab, filename, displayCaptures, errorHandler, progress, splitnotifier);


}, false);



// document.querySelector('#insertscript').addEventListener('click', function() {alert('bbbbbbbbbbb');
//     sendObjectToInspectedPage({action: 'script', content: 'scripts/inserted-script.js'});
// }, false);

// document.querySelector('#insertmessagebutton').addEventListener('click', function() {
//     sendObjectToInspectedPage({action: 'code', content: 'document.body.innerHTML = "<button>Send message to Dev Tools</button>"'});
//     sendObjectToInspectedPage({action: 'script', content: 'scripts/messageback-script.js'})
// }, false);


function init() {
    // sendObjectToInspectedPage({action: 'script', content: 'js/customer.js'});

    log('customer.js @@@@@@@@');


    var port = chrome.runtime.connect({name: 'Eval in context'});
    var clickFocus = '';

    // document.getElementById('mung').addEventListener('click', function() {
    //     clickFocus = 'mung';
    //     // alert(clickFocus);
    // });


    log(port);
    // port.onMessage.addEventListener(function(msg){
    //     var text = msg;
    //     document.getElementById(clickFocus).value = text;
    // });
}

window.onLoad = init();














// =================================================================================================

var currentTab, // result of chrome.tabs.query of current active tab
    resultWindowId; // window id for putting resulting images

//
// Utility methods
//

function $(id) { return document.getElementById(id); }
function show(id) { $(id).style.display = 'block'; }
function hide(id) { $(id).style.display = 'none'; }


function getFilename(contentURL) {
    var name = contentURL.split('?')[0].split('#')[0];
    if (name) {
        name = name
            .replace(/^https?:\/\//, '')
            .replace(/[^A-z0-9]+/g, '-')
            .replace(/-+/g, '-')
            .replace(/^[_\-]+/, '')
            .replace(/[_\-]+$/, '');
        name = '-' + name;
    } else {
        name = '';
    }
    return 'screencapture' + name + '-' + Date.now() + '.png';
}

//
// Capture Handlers
//

function displayCaptures(filenames) {
    if (!filenames || !filenames.length) {
        show('uh-oh');
        return;
    }

    _displayCapture(filenames);
}

function _displayCapture(filenames, index) {
    index = index || 0;

    var filename = filenames[index];
    var last = index === filenames.length - 1;

    if (currentTab.incognito && index === 0) {
        // cannot access file system in incognito, so open in non-incognito
        // window and add any additional tabs to that window.
        //
        // we have to be careful with focused too, because that will close
        // the popup.
        chrome.windows.create({
            url: filename,
            incognito: false,
            focused: last
        }, function(win) {
            resultWindowId = win.id;
        });
    } else {
        // chrome.tabs.create({
        //     url: filename,
        //     active: last,
        //     windowId: resultWindowId,
        //     openerTabId: currentTab.id,
        //     index: (currentTab.incognito ? 0 : currentTab.index) + 1 + index
        // });

        // chrome.tabs.create( {url:chrome.extension.getURL('/image.html#' + filename)});


        // 이미지 devtools 생성
        // var em = document.querySelector('#devtools_div');
        // em.innerHTML = "<img src='" + filename + "'>";
    }

    if (!last) {
        _displayCapture(filenames, index + 1);
    }
}

function errorHandler(reason) {
    // show('uh-oh'); // TODO - extra uh-oh info?
}

function progress(complete) {
    if (complete === 0) {
        // Page capture has just been initiated.
        // show('loading');
    }
    else {
        // $('bar').style.width = parseInt(complete * 100, 10) + '%';
    }
}

function splitnotifier() {
    // show('split-image');
}

//
// start doing stuff immediately! - including error cases
//
var _TAB;
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    _TAB = tabs[0];

    // alert('alert!!');
    // console.log('console001');
    // log('console002');

    var tab = tabs[0];
    currentTab = tab; // used in later calls to get tab info

    var filename = getFilename(tab.url);





    log(tab.url + ' , ' + filename + ' , ' + tab);
    log(tab);



    // CaptureAPI.captureToFiles(tab, filename, displayCaptures, errorHandler, progress, splitnotifier);
    // CaptureAPI.captureToBlobs(tab, returnFunc, displayCaptures, errorHandler, progress, splitnotifier);
});

function returnFunc(e){

    chrome.runtime.sendMessage(e, function(x) {
        console.warn('popup_fail', x);
    });
}

