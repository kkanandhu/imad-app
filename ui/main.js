

var nameinput=document.getElementById('name');
var name=nameinput.value;
var submit=document.getElementById('submit_btn');
submit.onclick=function(){
    var names=['name1','name2','name3','name4'];
   // var list ='<li>'+ names[1] +'</li>';
    for(var i=0;i<=names.length;i++){
        //list<='<li>'+ names[i] +'</li>';
       var list ='<li>'+ names[1] +'</li>'; 
    }
    var ul=document.getElementById('namelist');
   ul.innerHTML=list;
};

