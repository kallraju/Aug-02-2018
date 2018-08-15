function alertMe(){
    alert('Alerted Me');
    alert(document.getElementById('id1').value);
}

function validateForm(){
    if((document.getElementById('id1').value).trim()===''){
        //alert('Please enter user name');
        document.getElementById("spanUN").innerText="Enter user name";
        return false;
    }
    if(document.getElementById('id2').value===''){
        //alert('Please enter password');
        document.getElementById("spanPWD").innerText="Enter password";
        return false;
    }
    return true;
}

function changeOfElements(elementType){
    if(elementType===1){
        document.getElementById("spanUN").innerText="";
    }
    else if(elementType===2){
        document.getElementById("spanPWD").innerText="";
    }
}

function bhavani(){
    var val1 = $("#id1").val();
    alert(val1);
}
function xyz(){
    console.log("Mouse Over");
}