let inputslider=document.getElementById("slider");
let slidervalue=document.getElementById("slidervalue");
let genebutton=document.getElementById("genebutton");
let passwbox=document.getElementById("passwbox");
let lowercase=document.getElementById("lowercase");
let uppercase=document.getElementById("uppercase");
let digits=document.getElementById("digits");
let symbols=document.getElementById("symbols");
let copyicon=document.getElementById("copyicon");

inputslider.addEventListener('input',()=>{
    slidervalue.textContent=inputslider.value;  //showing input value when it changes

});

genebutton.addEventListener('click',()=>{
    passwbox.value=generatepassword();

})

let lowerchars="abcdefghijklmnopqrstuvwxyz";
let upperchars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allnumbers="0123456789";
let allsymbol="~!@#$%^&*";




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
copyicon.addEventListener('click',()=>{
    navigator.clipboard.writeText(passwbox.value);
})


