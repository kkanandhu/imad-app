console.log('Loaded!');

var img=document.getElementById('madi');

function moveRight(){
    marginLeft=marginLeft+10;
    img.style.marginLeft=marginLeft;
}
img.onclik=function(){
  var interval=setInterval(moveRight,100);
 
};
