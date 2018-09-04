var file = document.querySelector('#getfile');

file.onchange = function () {
    var fileList = file.files ;
    
    // 읽기
    var reader = new FileReader();
    reader.readAsDataURL(fileList [0]);

    //로드 한 후
    reader.onload = function  () {
        //로컬 이미지를 보여주기
        document.querySelector('#preview').src = reader.result;
        
        //썸네일 이미지 생성
                var tempImage = new Image(); //drawImage 메서드에 넣기 위해 이미지 객체화
        tempImage.src = reader.result; //data-uri를 이미지 객체에 주입
        tempImage.onload = function() {
            // 리사이즈를 위해 캔버스 객체 생성

            // var c = document.querySelector('#imgBase');

            // var ctx = c.getContext("2d");

            // console.log(ctx);
            // ctx.drawImage(tempImage, 10, 10);

            
            // var canvas = document.createElement('canvas');
            // var canvasContext = canvas.getContext("2d");
            
            // // 캔버스 크기 설정
            // canvas.width = 500; //가로 100px
            // canvas.height = 800; //세로 100px
            
            // // 이미지를 캔버스에 그리기
            // // canvasContext.drawImage(this, 0, 0, 500, 100);

            // // 캔버스에 그린 이미지를 다시 data-uri 형태로 변환
            // var dataURI = canvas.toDataURL("image/jpeg");
            
            // // 썸네일 이미지 보여주기
            // document.querySelector('#thumbnail').src = dataURI;

            // console.log('dataURI : ' , dataURI);
            
            // // 썸네일 이미지를 다운로드할 수 있도록 링크 설정
            // document.querySelector('#download').href = dataURI;



            var canvas = this.__canvas = new fabric.Canvas('imgBase');

            canvas.drawImage(tempImage, 10, 10);

            fabric.Object.prototype.transparentCorners = false;

            var rect1 = new fabric.Rect({
                width: 200, height: 100, left: 0, top: 50, angle: 30,
                fill: 'rgba(255,0,0,0.5)'
            });

            var rect2 = new fabric.Rect({
                width: 100, height: 100, left: 350, top: 250, angle: -10,
                fill: 'rgba(0,200,0,0.5)'
            });

            var rect3 = new fabric.Rect({
                width: 50, height: 100, left: 275, top: 350, angle: 45,
                stroke: '#eee', strokeWidth: 10,
                fill: 'rgba(0,0,200,0.5)'
            });

            var circle = new fabric.Circle({
                radius: 50, left: 275, top: 75, fill: '#aac'
            });

            var triangle = new fabric.Triangle({
                width: 100, height: 100, left: 50, top: 300, fill: '#cca'
            });

            canvas.add(rect1, rect2, rect3, circle, triangle);
            canvas.on({
                'object:moving': onChange,
                'object:scaling': onChange,
                'object:rotating': onChange,
            });

            function onChange(options) {
                options.target.setCoords();
                canvas.forEachObject(function(obj) {
                if (obj === options.target) return;
                obj.set('opacity' ,options.target.intersectsWithObject(obj) ? 0.5 : 1);
                });
            }
        };
    }; 
};



(function() {
    console.log(this);
})();



