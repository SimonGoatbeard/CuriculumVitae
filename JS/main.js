/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//START Text Randomizer

var count = 0;
var ind = 0;
var signs = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-"];
var txt = "Łukasz Szymkowski";
var onFloor = true;

function ra() {
var text = signs[Math.floor(Math.random() * 10)];
    if(ind<txt.length){
        document.getElementById("rand2").innerHTML = txt.slice(0,ind) + text;
    }else{
        document.getElementById("rand2").innerHTML = txt.slice(0,ind);
            if(count>10){
                document.getElementById("rand2").innerHTML = txt.slice(0,ind)+"_";
                count=0;
            }
        }
    if (count > 1 && ind<txt.length){
        ind++;
        count=0;
    }
count++;
}
var textRandomizer = setInterval(ra, 100);

//END Text Randomizer

//START Hover
function onMouseOver(text){
    document.getElementById("textbar").innerHTML = text;
    document.getElementById("textbar").style.backgroundColor = "#431d3c";
};
function onMouseOut(){
    document.getElementById("textbar").innerHTML = "";
    document.getElementById("textbar").style.backgroundColor = "#4a2043";
};

function onMouseOverSkill(text){
    if(text==="head"){
        input1="Kapelusz prastarej wiedzy.";
        input2="Inteligencja +8. Niegdyś przedmiot przekazywany z pokolenia na pokolenie, kumulujący doświadcenia przedków, teraz w moim posiadaniu.";
    }
    if(text==="body"){
        input1="Pancerz z włosia blond łosia.";
        input2="Wytrwałość +14. Nie pozwala porzucić wcześniej zaplanowanych zadań i pomaga doprowadzić je do końca.";
    }
    if(text==="boots"){
        input1="Kierpce najstarszego górala.";
        input2="Percepcja +10. Rzadki przedmiot zwiększający szansę przewidywania wyniku działania programu lub algorytmu.";
    }
    if(text==="gloves"){
        input1="Rękawice ozdobne.";
        input2="Persfazja +2. Oprócz wyglądu wnoszą tylko powiększoną pewność siebie.";
    }
    if(text==="weapon"){
        input1="Scyzoryk giganta.";
        input2="Wszytkie statystyki +2. Niby scyzoryk a większy niż normalny miecz.";
    }
    document.getElementById("skillName").innerHTML = input1;
    document.getElementById("skillDescription").innerHTML = input2;
};
function onMouseOutSkill(){
    document.getElementById("skillName").innerHTML = "Aby przyjrzeć się moim umiejętnościom, wybierz przedmiot.";
    document.getElementById("skillDescription").innerHTML = "Przykładowy tekst, który będzie opisywał przedmiot.";
};
//STOP Hover


//START Clock
function time(){
var czas=new Date().toLocaleTimeString();
    document.getElementById("watch").innerHTML=czas;
}
var co=setInterval(time,1000);
//END Clock