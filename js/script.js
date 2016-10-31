/**
 * Created by FreeLancerPC on 31.10.2016.
 */
function shuffle(array){
    for(var j,x,i=array.length;i;j=parseInt(Math.random()*i),x=array[--i],array[i]=array[j],array[j]=x);
    return true;
}
function generate(){
    var adjective=["Левая","Правая"];
    var subject=["нога", "рука"];
    var adverb=[", красный",", зеленый", ", желтый", ", синий"];
    shuffle(adjective);
    shuffle(subject);
    shuffle(adverb);
    var phrase=adjective[1] + " " + subject[1] + adverb[1];
    document.getElementById("phrase").innerHTML=phrase;
}