
var kellekord="pildid/X.png";
var lopp=false;


function klik(pilt){
    pilt.src=kellekord;

    if(vyidukontroll()){
        alert("Sa võitsid");
        lopp=true;
    }


    if(kellekord=="pildid/X.png"){
        kellekord="pildid/O.png";
    }else {
        kellekord="pildid/X.png";
    }
    if(ruuududKasutatud()){
        lopp=true;
        alert("Mäng ob läbi!");
    }


}
// проверяет все картинки и возращает false если найдет пустую картинку

function ruuududKasutatud(){
    pildid=document.images;
    for(var i=0;i<pildid.length;i++){
         if(pildid[i].src.split("/").pop()=="list.jpg"){

             return false;
             //split("/")- делает массив из пути к файлу
             //pop() -выберает из массива последние значение или имя файла
         }
    }
    return true;
}
// пределяем имя файла
function sisu(nr){
    var fnimi=document.getElementById("pilt"+nr).src;
    fnimi=fnimi.split("/").pop();
    return fnimi;
}
function kontrollsisu(a,b,c,sisuloop){
    sisuloop=sisuloop.split("/").pop();
    //a,b,c-номера картинок и sisuloop - адресс нужной картинки
    if(sisu(a)==sisuloop && sisu(b)==sisuloop && sisu(c)==sisuloop)
    {return true;}else {return false;}


    }



function vyidukontroll(){
    if(kontrollsisu(1,2,3,kellekord)){return true;}
    if(kontrollsisu(4,5,6,kellekord)){return true;}
    if(kontrollsisu(7,8,9,kellekord)){return true;}
    if(kontrollsisu(1,4,7,kellekord)){return true;}
    if(kontrollsisu(2,5,8,kellekord)){return true;}
    if(kontrollsisu(1,5,9,kellekord)){return true;}
    if(kontrollsisu(3,6,9,kellekord)){return true;}
    if(kontrollsisu(3,5,7,kellekord)){return true;}
    return false;


}