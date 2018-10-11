
/*
var duplicateClickProtect = '';
chrome.extension.onConnect.addListener(function(port){

    var extensionListener = function(message, sender, sendResponse) {
        
        console.log('message : ', message);

        console.log(message.action, message.tabId, message.content);


        console.log('tabId', message.tabId);
        console.log('content', message.content);

        if(message.tabId && message.content) {
            if(message.action === 'code') {

                console.log('message.action code!!!!!!!');
                chrome.tabs.executeScript(message.tabId, {code: message.content});
            }else if(message.action === 'script') {
                console.log('message.action script !!!!!!!');
                chrome.tabs.executeScript(message.tabId, {file:message.content});
            }else{
                chrome.tabs.sendMessage(message.tabId, Message, sendResponse);
            }
        }else{
            duplicateClickProtect = message.source;
            port.postMessage(duplicateClickProtect);
        }
        sendResponse(message);
    };

    chrome.extension.onMessage.addListener(extensionListener);

    port.onDisconnect.addListener(function(port){
        chrome.extension.onMessage.removeListener(extensionListener);
    });

    port.onMessage.addListener(function(message){
        port.postMessage(message);
    });

    chrome.runtime.onMessage.addListener(function(request, sender, sendReponse){
        return true;
    })
});



chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log('on message : ', request);

    if(request.type === ';aslkdfjsadfk') {

    }


    sendResponse();
});


*/










var saveData = (function () {
	var a = document.createElement("a");
	var emBody = document.querySelector('body');
	// emBody.appendChild(a);
    // emBody.append(a);
    
    a.style = "display: none";
    return function (data, fileName) {
        var json = JSON.stringify(data),
            blob = new Blob([json], {type: "octet/stream"}),
            url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = fileName;
        a.click();
        window.URL.revokeObjectURL(url);
    };
}());






