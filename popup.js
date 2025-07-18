let inputslider=document.getElementById("slider");
let slidervalue=document.getElementById("slidervalue");
let genebutton=document.getElementById("genebutton");
let passwbox=document.getElementById("passwbox");
let lowercase=document.getElementById("lowercase");
let uppercase=document.getElementById("uppercase");
let digits=document.getElementById("digits");
let symbols=document.getElementById("symbols");
let copyicon=document.getElementById("copyicon");
let tickicon=document.getElementById("tickicon");


inputslider.addEventListener('input',()=>{
    slidervalue.textContent=inputslider.value;  //showing input value when it changes

});

genebutton.addEventListener('click',()=>{
    if(lowercase.checked == false &&
        uppercase.checked == false &&
        digits.checked == false    &&
        symbols.checked == false){
        passwbox.value="Please select an option";
        }
    else{
    passwbox.value=generatepassword();
    }
    

});

let lowerchars="abcdefghijklmnopqrstuvwxyz";
let upperchars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allnumbers="0123456789";
let allsymbol="~!@#$%^&*";



copyicon.addEventListener('click',()=>{
    if(lowercase.checked == false &&
        uppercase.checked == false &&
        digits.checked == false    &&
        symbols.checked == false){
        passwbox.value="Please select an option";
        }
    else{
    navigator.clipboard.writeText(passwbox.value);
    passwbox.value=null;  //setting passwbox value to null
    copyicon.classList.add("hidden");  //hiding copy icon and displaying tick
    tickicon.classList.remove("hidden");
    passwbox.value = "Password Copied to Clipboard!";
    //unchecking checkboxes
        lowercase.checked = false; 
        uppercase.checked = false;
        digits.checked = false;
        symbols.checked = false;
        slidervalue.textContent=1;
        inputslider.value=1;
        // Optionally, revert back to the copy icon after a short delay
        setTimeout(function() {
            
            document.getElementById("copyicon").classList.remove("hidden");
            document.getElementById("tickicon").classList.add("hidden");
            
            passwbox.value=null;
            
        }, 2000); // 2 seconds delay
    }
        
});

//func for generating password.


generatepassword=()=>{
    let genpass="";
    let allchars="";
    allchars+=lowercase.checked?lowerchars:""; //will retrun true if checkbox is checked.
    allchars+=uppercase.checked?upperchars:"";
    allchars+=digits.checked?allnumbers:"";
    allchars+=symbols.checked?allsymbol:"";


    let i=1;
    while(i<=inputslider.value){
        genpass+=allchars.charAt(Math.floor(Math.random()*allchars.length));
        i++;
    }
    
    
    return genpass;

}
