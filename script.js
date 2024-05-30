function check(e)
{
    console.log("yes");
    var i=document.querySelectorAll("input");
    var p;
    i.forEach(input => {
        if(input.value==""||input.value==null)
            {
                p=document.querySelector("#"+input.id+"p");
                p.textContent="This is a required field!";
                input.style.borderColor="red";
            }
    });
    if(p!=null)
    e.preventDefault();
    else{
        var p1=document.querySelector("#pass");
        var p2=document.querySelector("#confirm");
        if(p1.value!=p2.value)
            {
                var par=document.querySelector("#passp");
                par.textContent="* Passwords do not match"
                p1.value=null;
                p2.value=null;
                e.preventDefault();
            }
    }
}
var b=document.querySelector("#done");
b.addEventListener('click',function(e){check(e)});
var inp=document.querySelectorAll("input");
inp.forEach(input => {
    input.addEventListener('click',function(e){
        var pa=document.querySelector("#"+input.id+"p");
        pa.textContent=null;
        input.style.borderColor=null;
    });
});