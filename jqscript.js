let lista = [
    "kepek/alszik.jpg",
    "kepek/bocsok.jpg",
    "kepek/cirkusz.jpg",
    "kepek/eszik.jpg",
    "kepek/integet.jpg",
    "kepek/maci.jpg",
    "kepek/medve.jpg",
    "kepek/taj.jpg",
];

$(function(){
    let currentIndex = 0;
        
    const ARTICLE = $("article");
    let txt = feltolt();
    ARTICLE.eq(0).html(txt);

    const NAGYKEP = $(".nagykep img").eq(0);
    const JOBB = $(".jobb").eq(0);
    JOBB.on("click", function () {
        currentIndex = leptetes(+1, currentIndex);
        NAGYKEP.attr("src", lista[currentIndex]);
    });
    const BAL = $(".bal").eq(0);
    BAL.on("click", function () {
        currentIndex = leptetes(-1, currentIndex);
        NAGYKEP.attr("src", lista[currentIndex]);
    });
      
    const KEPEK = $("article div img");
    for (let j = 0; j < KEPEK.length; j++) {
        const KEP = KEPEK.eq(j);
        KEP.on("click", function (event) {
            NAGYKEP.attr("src", event.target.src);
            currentIndex = j;
        });
    } 
})

function feltolt(){
    let text = "";
    for (let i = 0; i < lista.length; i++) {
      text +=`<div><img src="${lista[i]}" alt=""></div>`;
    }
    return text;
}
  
function leptetes(ertek, currentIndex){
    currentIndex += ertek;
    if (currentIndex > lista.length - 1) {
      currentIndex = 0;
    }
    if (currentIndex < 0) {
      currentIndex = lista.length - 1;
    }
    return currentIndex;
}