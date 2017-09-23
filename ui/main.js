







var submit=document.getElementById('submit_btn');
submit.onclick=function(){
    
    
    var request=new XMLHttpRequest();
    request.onreadystatechange=function(){
         if (request.readyState ==XMLHttpRequest.DONE){
             if(request.status == 200){
                 
                 var names=request.responseText;
                 names=JSON.parse(names);
               var names=['name1','name2','name3','name4'];
                var list='';
            for(var i=0;i<names.length;i++){
                 list+=names[i]+"<br/> ";
            }
  
     var ul=document.getElementById('namelist');
   ul.innerHTML=list;
   
             }
         }
    };
var nameinput=document.getElementById('name');
var name=nameinput.value;
    request.open('GET','http://kkanandhu97.imad.hasura-app.io/submit-name?name='+name,true);
     request.send(null);
   
};

