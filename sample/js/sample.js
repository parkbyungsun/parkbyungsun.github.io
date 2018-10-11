'use strict';

var _URL = window.URL || window.webkitURL;

var imgFile;

var aList = [];

var svg;
var objSize = 0;

// 이미지 전역 정보                          
var _dispObj;

var _selImageId;
var _selSubImageId;

var _objEv;

function receiveMsgFromParent(e) {
    console.log(e);
    console.log('부모로 부터 받은 메시지 ', e.data);

    var ori = e.origin;
    
    if(ori.search('chrome-extension') !== -1) {
        var imgEm = document.getElementById('img-upload');
        imgEm.src = e.data;
    }
}

$(function() {
    window.addEventListener('message', receiveMsgFromParent );

    $(document).on('change', '.btn-file :file', function() {
        var input = $(this),
            label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
        input.trigger('fileselect', label);
    });

    $('.btn-file :file').on('fileselect', function(event, label) {
        var input = $(this).parents('.input-group').find(':text'),
            log = label;
        
        if( input.length ) {
            input.val(log);
        } else {
            if( log ) alert(log);
        }
    
    });

    $("#imgInp").change(function(e) {
        var file, img;

        if ((file = this.files[0])) {
            imgFile = file;
            img = new Image();
            img.onload = function() {
                console.log('width : ' + this.width + ', height : ' + this.height);
                $('#img-upload').attr('src', this.src);
            };
            img.onerror = function() {
                alert( "not a valid file: " + file.type);
            };
            img.src = _URL.createObjectURL(file);
        }
    });

    // D3 init
    // var width = '100%', height = '100%';
    svg = d3.select('#svg');
        // .attr('width', width)
        // .attr('height', height);

    // svg.append('svg:image').attr('xlink:href', 'http://res.cloudinary.com/dymmtln3y/image/upload/v1536543450/rcf2zihtflxuqrjbbw1o.png');
    svg.append('svg:image');
    // svg.append("circle").attr("cx", 30).attr("cy", 30).attr("r", 20);

    // firebase 에서 기본 정보 가져온다
    var dispRef = db.ref('/sample/disp');
    dispRef.on('value', function(jo){
        var mainImagesEm = $('#mainImages');
        mainImagesEm.empty();
        var src = '';

        var html = '';

        _dispObj = jo.val();
        for(var dt in jo.val()){
            var obj = jo.val()[dt];
            src = obj.url;

            html += "<li class='list-group-item'><img onclick='crop.select(\""+ dt +"\")' src='" + obj.url + "'></li>";
        }

        $('#mainImages').html(html);
    });

    var actionListEm = $('#subAction');
    var rectRef = db.ref('/sample/rect');

    rectRef.on('value', function(jo){
        svg.selectAll('rect.rectangle').remove();
        
        for(var id in jo.val()){
            var obj = jo.val()[id];
            svg.append('rect')
                .attr('id', id)
                .attr('x', obj.x)
                .attr('y', obj.y)
                .attr('width', obj.width)
                .attr('height', obj.height)
                .attr('class', 'rectangle')
                .call(d3.drag()
                    .on('start', rectEv.dragstarted)
                    .on('drag', rectEv.dragged)
                    .on('end', rectEv.dragended))
                .on('click', rectEv.clickFunc);
        }
    });


    var objRef = db.ref('/sample/obj');
    objRef.once('value', function(jo){
        console.log(jo.val());

        var html = "";
        for(var imgId in jo.val()){
            var imgObj = jo.val()[imgId];

            for(var objId in imgObj){
                var objObj = imgObj[objId];
                html += "<li class='list-group-item'><a href='javascript:actionSelect(\""+imgId+"\")'>"+ objObj.action.id +"</a></li>";
            }
        }

        $('#actionList').html(html);
    });

    // tab event
    $('#svg').hide();
    $('a[data-toggle="tab"]').on('show.bs.tab', function (e) {
        var index = $('a[data-toggle="tab"]').index(this);

        if(index === 0){
            $('#img-upload, .cropper-container').show();
            $('#svg').hide();
        }else if(index === 2){
            $('#img-upload, .cropper-container').hide();
            $('#svg').show();
        }
    });
});


// cropper
var cropFunc = function(){
};
cropFunc.prototype = {
    _URL: 'https://api.cloudinary.com/v1_1/dymmtln3y/image/upload',
    _PRESETS: 'k30ie5ru',

    cropper: null,

    dataUrl: null,
    // method
    init: function(){
        var img = document.querySelector('#img-upload');
        if(img.src){
            var opt = {
                viewMode: 1
            };
            this.cropper = new Cropper(img, opt);
        }
    },
    destroy: function(){
        this.cropper.destroy();
    },
    clear: function(){
        this.cropper.clear();
    },
    getCrop: function(){
        var _this = this;
        if(this.cropper){
            this.dataUrl = this.cropper.getCroppedCanvas().toDataURL('image/jpeg');
            
            var formData = new FormData();

            console.log('getCrop dataUrl : ', this.dataUrl);
            formData.append('file', this.dataUrl);
            formData.append("upload_preset", this._PRESETS);

            axios.post(this._URL, formData, {
                header: {'X-Requested-With': 'XMLHttpRequest'}
            })
            .then(function(res){
                if(res && _selImageId){

                    var imgData = new imgFunc();
                    imgData.url = res.data.url;
                    imgData.name = res.data.public_id;
                    var dispRef = db.ref('/sample/disp/' + _selImageId + '/crop/' + res.data.public_id);
                    // dispRef.push(imgData);
                    dispRef.set(imgData);

                    _this.getSubImages();
                }
            })
            .catch(function(err){console.log(err)});
        }
    },

    upload: function(){
        var _this = this;
        var formData = new FormData();
        var imgFile = document.querySelector('#img-upload');

        console.log('upload imageFile : ', imgFile);


        formData.append('file', imgFile);
        formData.append("upload_preset", this._PRESETS);
        // formData.append('api_key', '256533272476562');

        var id = getId();


        // var imageRef = _st.child('images/' +id +'.png');
        // imageRef.put(imgFile).then(function(snapshot){
        //     imageRef.getDownloadURL().then(function(url){
        //         // console.log('download url : ', url);

        //         var imgData = new imgFunc();
        //         imgData.url = url;
        //         imgData.name = id;
        //         var dispRef = db.ref('/sample/disp/' + id);
        //         dispRef.set(imgData);
        //     });
        // });

        axios.post(this._URL, formData, {
            header: {'X-Requested-With': 'XMLHttpRequest'}
        })
            .then(function(res){
                if(res){
                    _selImageId = res.data.public_id;
                    var imgData = new imgFunc();
                    imgData.url = res.data.url;
                    imgData.name = res.data.public_id;
                    var dispRef = db.ref('/sample/disp/' + res.data.public_id);
                    // dispRef.push(imgData);
                    dispRef.set(imgData);
                }
            })
            .catch(function(err){console.log(err)});



    },
    // main image select
    select: function(id){
        if(_dispObj) {
            var obj = _dispObj[id];
            _selImageId = id;
            $('#img-upload').attr('src', obj.url);


            
            this.getSubImages();
        }
    },
    remove: function() {
        cloudinary.v2.uploader.destroy('gan5jjllouvme3acsnoc', function(error, result){console.log(result, error)});
    },
    getSubImages: function() {
        var dispRef = db.ref('/sample/disp/' + _selImageId + '/crop/');

        dispRef.once('value', function(jo){
            $('#subImages').empty();

            var html = "";
            for(var id in jo.val()) {
                var obj = jo.val()[id];

                console.log('obj : ', obj);

                console.log(obj.url);
                html += '<li class="list-group-item"><img src="' + obj.url + '" onclick="imgSelect(this, \''+id+'\')"></li>';
                // $('#subImages').append('<li class="list-group-item"><img src="' + obj.url + '" onclick="imgSelect(this)"></li>');
            }

            $('#subImages').html(html);
        });
    }

    // test
    ,toImage: function(){
        var svg = document.querySelector('svg');
        var xml = (new XMLSerializer).serializeToString(svg);
        $("#img-upload").attr('src', 'data:image/svg+xml;charset=utf-8,' + xml);
    }
};
var crop = new cropFunc();
// END cropFunc



// crop -> svg image
function imgSelect(em, id){
    // svg.select('image').attr('href', em.src);

    // console.log(_dispObj);

    



    for(var i in _dispObj){
        var obj = _dispObj[i]["crop"];
        // console.log(_dispObj[i]);
        for(var j in obj) {
            var cropObj = obj[j];
            
            if(id == cropObj.name) {
                svg.select('image').attr('href', cropObj.url);
            }
        }
    }




    _selSubImageId = id;

    var actionListEm = $('#subAction');
    svg.selectAll('g').remove();
    actionListEm.empty();
    if(_objEv) {
        _objEv.off();
    }
    

    _objEv = db.ref('/sample/obj/' + _selSubImageId);
    _objEv.on('value', function(jo){

        if(jo.val()){

            var html = '';
            objSize = 0;

            var data = [];


            var _listEm = document.querySelector('#accordianId');
            _listEm.innerHTML = '';

            var _actionTempEm = document.querySelector('#actionTemp');


            for(var id in jo.val()){
                var obj = jo.val()[id];

                html += "<li class='list-group-item' id='L"+ id +"'><div class='row'><div class='col-1' onclick='listSelect(\""+id+"\")'>"+obj.num+"</div>"
                    + "<div class='col-10'>"
                    + (obj.action.id || '') +"<button type='button' class='btn btn-sm' data-toggle='modal' data-target='#actionFormModal' data-whatever='"+id+"' data-actionid='"+ (obj.action.id || '')+"'>edit</button>"
                    + "</div>"
                    + "<div class='col-1'><button type='button' class='close' aria-label='Close' onclick='actionDelete(\""+ id +"\")'>"
                    + "<span aria-hidden='true'>&times;</span>"
                    + "</button></div>"
                    + "</div></li>";

                data.push({x: obj.x, y: obj.y, num: obj.num, id: id});
                objSize++;

                // var tabEm = _actionTempEm.content.querySelector('[role="tab"] [data-toggle="collapse"]');
                // tabEm.textContent = id;
                // tabEm.setAttribute('href', '#l' + id);

                // var contentEm = _actionTempEm.content.querySelector('[role="tabpanel"]');
                // contentEm.setAttribute('id', 'l' + id);

                // var clone = document.importNode(_actionTempEm.content, true);
                // _listEm.appendChild(clone);


            }
            actionListEm.html(html);

            var objG = svg.selectAll('g').data(data).enter().append('g');
            objG.append('rect')
                .attr('id', function(d){return d.id})
                .attr('x', function(d){return d.x - 13})
                .attr('y', function(d){return d.y - 14})
                .attr('width', 26)
                .attr('height', 28)
                .attr('rx', 8);

            objG.append('text')
                .attr('x', function(d){return d.x - (d.num >= 10 ? 7 : 4)})
                .attr('y', function(d){return d.y + 5})
                .text(function(d){return d.num});

            dragEv.init(svg.selectAll('g'));

            objG.on('click', function(d){
                d3.selectAll('rect').style('fill', 'white');
                d3.select(this).select('rect').transition().duration(500).style('fill', 'red');

                actionListEm.find('li').removeClass('active');
                actionListEm.find('#L' + d.id).addClass('active');
            });



        }
    });


    $('#contact-tab').trigger('click');
}


// 사각영역 그리기
d3.select('#rectangle').on('click', function(){ new Rectangle(); });
function Rectangle(){
    var self = this, rect, rectData = [], isDown = false, m1, m2, isDrag = false;
    
    var id = getId();

    svg.on('mousedown', function() {
        m1 = d3.mouse(this);
        if (!isDown && !isDrag) {
            self.rectData = [ { x: m1[0], y: m1[1] }, { x: m1[0], y: m1[1] } ];
            self.rectangleElement = d3.select('svg').append('rect')
                .attr('id', id)
                .attr('class', 'rectangle');

            // console.log(self.rectangleElement);
            // self.pointElement1 = d3.select('svg').append('circle').attr('class', 'pointC').call(dragC1);
            // self.pointElement2 = d3.select('svg').append('circle').attr('class', 'pointC').call(dragC2);            
            // self.pointElement3 = svg.append('circle').attr('class', 'pointC').call(dragC3);
            // self.pointElement4 = svg.append('circle').attr('class', 'pointC').call(dragC4);
            updateRect();
            isDrag = false;
        } else { 
            isDrag = true;
        }
        isDown = !isDown;     
    })
    .on('mousemove', function() {
        m2 = d3.mouse(this);
        if(isDown && !isDrag) {
            self.rectData[1] = { x: m2[0], y: m2[1] };
            updateRect();
        } 
    })
    .on('mouseup', function(){
        if(!isDrag){
            var pars = {
                x: self.rectData[1].x - self.rectData[0].x > 0 ? self.rectData[0].x :  self.rectData[1].x,
                y: self.rectData[1].y - self.rectData[0].y > 0 ? self.rectData[0].y :  self.rectData[1].y,
                width: Math.abs(self.rectData[1].x - self.rectData[0].x),
                height: Math.abs(self.rectData[1].y - self.rectData[0].y)
            };

            var rectRef = db.ref('/sample/rect/' + id);
            rectRef.set(pars);
        }
        isDown = false;
        isDrag = true;
    });

    function updateRect() {
        rect = d3.select(self.rectangleElement._groups[0][0]);

        var opt = {
                x: self.rectData[1].x - self.rectData[0].x > 0 ? self.rectData[0].x :  self.rectData[1].x,
                y: self.rectData[1].y - self.rectData[0].y > 0 ? self.rectData[0].y :  self.rectData[1].y,
                width: Math.abs(self.rectData[1].x - self.rectData[0].x),
                height: Math.abs(self.rectData[1].y - self.rectData[0].y)
            };

        rect.attr("x", opt.x).attr("y", opt.y).attr("width", opt.width).attr("height", opt.height);

        // rect.attr({
        //     "x": opt.x,
        //     "y": opt.y,
        //     "width": opt.width,
        //     "height": opt.height
        // });   
        
        // var point1 = d3.select(self.pointElement1[0][0]).data(self.rectData);
        // point1.attr('r', 5)
        //       .attr('cx', self.rectData[0].x)
        //       .attr('cy', self.rectData[0].y);        
        // var point2 = d3.select(self.pointElement2[0][0]).data(self.rectData);
        // point2.attr('r', 5)
        //       .attr('cx', self.rectData[1].x)
        //       .attr('cy', self.rectData[1].y);
        // var point3 = d3.select(self.pointElement3[0][0]).data(self.rectData);
        // point3.attr('r', 5)
        //       .attr('cx', self.rectData[1].x)
        //       .attr('cy', self.rectData[0].y);        
        // var point3 = d3.select(self.pointElement4[0][0]).data(self.rectData);
        // point3.attr('r', 5)
        //       .attr('cx', self.rectData[0].x)
        //       .attr('cy', self.rectData[1].y);
    }
}

// obj 객체 drag 이벤트
var dragEv = {
    deltaX: 0,
    deltaY: 0,
    init: function(d3Obj) {
        var dragHandler = d3.drag()
        // .on("start", function () {
        //     var current = d3.select(this).selectAll('rect, text');
        //     deltaX = current.attr("x") - d3.event.x;
        //     deltaY = current.attr("y") - d3.event.y;
        // })
        // .on("drag", function (d) {console.log(d);
        //     d3.select(this).selectAll('rect, text')
        //         .attr("x", d3.event.x + deltaX)
        //         .attr("y", d3.event.y + deltaY);
        // });
        .on('start', function(d){
            this.deltaX = d.x;
            this.deltaY = d.y;
        })
        .on("drag", function (d) {
            d3.select(this).selectAll('text')
                .attr("x", (d.x = d3.event.x) - (d.num >= 10 ? 7 : 4))
                .attr("y", (d.y = d3.event.y) + 5);
            d3.select(this).selectAll('rect')
                .attr("x", (d.x = d3.event.x) - 13)
                .attr("y", (d.y = d3.event.y) - 14);
        })
        .on('end', function(d){

            if(d.x - this.deltaX !== 0 || d.y - this.deltaY !== 0) {
                
                var pars = {x: d.x, y: d.y, num: d.num};
                var rectRef = db.ref('/sample/obj/' + _selSubImageId + '/' + d.id);
                // rectRef.set(pars);
                rectRef.update(pars);

                // var actionRef = db.ref('/sample/obj/' + d.id + '/action');
                // actionRef.set({id: 'id', os: 'os_name'});
                console.log('변경OK');
            }
        });
        dragHandler(d3Obj);
    }
};

// rectangle Event
var rectEv = {
    m1:{}, m2:{},
    dragstarted: function() {
        var e = d3.event;
        var rectEm = d3.select(this);
        var rect_x = parseInt(rectEm.attr('x'));
        var rect_y = parseInt(rectEm.attr('y'));
        var ox = e.x - rect_x;
        var oy = e.y - rect_y;
        this.m1 = {x: ox, y: oy};
        this.m2 = e;
        // d3.select(this).raise().classed("active", true);
    },
    dragged: function() {
        var e = d3.event;
        d3.select(this).attr("x", e.x - this.m1.x).attr("y", e.y - this.m1.y);
    },
    dragended: function() {
        var e = d3.event;
        if(e.x - this.m2.x !== 0 || e.y - this.m2.y !== 0) {
            console.log('move 완료!!');

            var rectEm = d3.select(this);
            var pars = {
                x: rectEm.attr('x'),
                y: rectEm.attr('y'),
                width: rectEm.attr('width'),
                height: rectEm.attr('height')
            };

            var rectRef = db.ref('/sample/rect/' + rectEm.attr('id'));
            rectRef.set(pars);
        }
        // d3.select(this).classed("active", false);
    },
    clickFunc: function() {
        var rectEm = d3.select(this);
        console.log(rectEm.attr('id'));
        d3.event.stopPropagation();
    }
};

// 생성버튼 클릭시 object 생성
d3.select('#objCreate').on('click', function(){ new ObjCreate(); });
function ObjCreate() {
    var isDraw = true;
    svg.on('mousedown', function() {
        if(isDraw && _selSubImageId) {
            var e = d3.mouse(this);

            var id = getId();

            var pars = {
                x: e[0],
                y: e[1],
                num: objSize + 1,
                action: {id: ''}
            };

            var objRef = db.ref('/sample/obj/'+_selSubImageId+'/' + id);
            objRef.set(pars);
        }else{
            console.log('x');
        }
    })
    .on('mousemove', function() {
    })
    .on('mouseup', function(){
        isDraw = false;
    });

}

// 리스트에서 x 클릭하여 삭제
function actionDelete(id){
    db.ref('/sample/obj/'+_selSubImageId+'/' + id).set(null);
}

// 리스트 항목 선택
function listSelect(id){
    $('#subAction li').removeClass('active');
    $('#subAction #L' + id).addClass('active');

    svg.selectAll('rect').style('fill', 'white').each(function(d){
        var rectId = d3.select(this).attr('id');
        if(id === rectId) {
            d3.select(this).transition().duration(200).style('fill', 'red');
        }
    });
}





// modal
$('#actionFormModal').on('shown.bs.modal', function (e) {
    var button = $(e.relatedTarget);
    var recipient = button.data('whatever');
    var actionId = button.data('actionid');
    listSelect(recipient + '');

    var modal = $(this);
    modal.find("#modalTitle").text(recipient);

    modal.find('.modal-footer .btn-primary').off().on('click', {id: recipient}, function(e) {
        var id = e.data.id;
        actionIdSave(id);
        modal.modal('hide');
    });

    modal.find('#actionIdInput').val(actionId).focus().off().on('keypress', {id: recipient}, function(e) {
        var id = e.data.id;

        if(e.which == 13) {
            actionIdSave(id);
            modal.modal('hide');
        }

    });
});

function actionIdSave(id){
    var actionId = $("#actionIdInput").val();

    if(actionId) {
        var pars = {
            id: actionId
        };
        var objRef = db.ref('/sample/obj/'+_selSubImageId+'/' + id + '/action');
        objRef.update(pars);

        $('#actionFormModal').modal('hide');
    }else{
        console.log('auction id error');
    }

}


function actionSelect(imgId){
    imgSelect(1, imgId);
}







// unique id
function getId(){
    var date = new Date();
        var components = [
            date.getYear(),
            date.getMonth(),
            date.getDate(),
            date.getHours(),
            date.getMinutes(),
            date.getSeconds(),
            date.getMilliseconds()
        ];

        return components.join("");
}






// data object

var dispFunc = function(){};
dispFunc.prototype = {
    id: '',
    baseImageUrl: '',
    name: '',
    subImages: []
};

var imgFunc = function(){};
imgFunc.prototype = {
    url: '',
    name: ''
};


var actionFunc = function(){};
actionFunc.prototype = {
    x: 0,
    y: 0,
    num: '',
    page_id: '',
    action_id: ''
};















// Add a request interceptor
axios.interceptors.request.use(function (config) {console.log('request interceptor');
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {console.log('response interceptor');
    // Do something with response data
    return response;
}, function (error) {
    // Do something with response error
    return Promise.reject(error);
});









