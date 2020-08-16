
window.addEventListener("keypress",function(e){

    if(e.which == 13){

        document.querySelector("#bt").click();
    }
});

function validation(){

    let username = document.querySelector("#user").value;
    let password = document.querySelector("#pwd").value;

    let span1 = document.querySelector("#s1").innerHTML;

    let span2 = document.querySelector("#s2").innerHTML;

    if(username=="" || password==""){

        if(username == "" && password == ""){

            document.querySelector("#s1").innerHTML = "Please enter Username";
    
            document.querySelector("#s2").innerHTML = "Please enter Password";
    
    
            return false;
        }
    
        if(username == ""){
    
            document.querySelector("#s1").innerHTML = "Please enter Username";
    
            document.querySelector("#user").value="";

            document.querySelector("#pwd").value="";
    
            return false;
        }
    
        else{
    
            document.querySelector("#s2").innerHTML = "Please enter Password";
    
            document.querySelector("#pwd").value="";

            document.querySelector("#user").value="";
    
            return false;
        }

    }


    let cloneEle = document.querySelector("#cloneBox").cloneNode(true);

    cloneEle.children[0].innerHTML ="Username-->"+ username;

    cloneEle.children[1].innerHTML ="Password-->"+ password;
    cloneEle.style.visibility="visible";

    cloneEle.style.color="tomato";

    let parent = document.querySelector("#box");

    parent.appendChild(cloneEle);

    document.querySelector("#pwd").value="";

    document.querySelector("#user").value="";






}