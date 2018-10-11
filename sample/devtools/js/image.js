

(function(){


    console.log('Test');


    // var args = URL.createObjectURL(arguments[0]);


    console.log('args : ', location.hash);


    var imgEm = document.querySelector('#hashImage');
    var imgName = (location.hash).substring(1, location.hash.length);
    imgEm.src = imgName;


})();