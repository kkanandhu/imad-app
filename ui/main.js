console.log('Loaded!');

var img=document.getElementById('madi');
var marginLeft=300;
function moveRight(){
    marginLeft=marginLeft-1;
    img.style.marginLeft=marginLeft +'px';
}
img.onclick=function(){
  var interval=setInterval(moveRight,10);
 
};

var nameinput=document.getElementById('name');
var name=nameinput.value;
var submit=document.getElementById('submit_btn');
submit.onclick=function(){
    var names=['name1','name2','name3','name4'];
    var list='';
    for(var i=0;i<names.length;i++){
        list<= '<li>'+names[i]+'</li>';
    }
    var ul=document.getElementById('namelist');
    ul.innerHTML=list;
};

