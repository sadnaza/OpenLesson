/**
 * Created by SvirbutovichEV on 07.04.2015.
 */
var nowElem="";
$(".person").draggable({
        start: function () {
            nowElem=$(this).attr("title");
        }
    }
);
var userAnsw=[];
var nowQuest=0;

$("#sent").droppable({
    drop:function(event,ui){
        ShowNextQuest();
    }
});
var sentenses=[];
sentenses[0]="right 1";
sentenses[1]="right 2";
sentenses[2]="right 3";
sentenses[3]="right 4";
sentenses[4]="right 1";
sentenses[5]="right 2";
sentenses[6]="right 3";
sentenses[7]="right 4";
sentenses[8]="right 1";
sentenses[9]="right 2";
var rightAnswers=[];
rightAnswers[0]="s1";
rightAnswers[1]="s2";
rightAnswers[2]="s3";
rightAnswers[3]="s4";
rightAnswers[4]="s1";
rightAnswers[5]="s2";
rightAnswers[6]="s3";
rightAnswers[7]="s4";
rightAnswers[8]="s1";
rightAnswers[9]="s2";

$(document).ready(function(){
   document.getElementById("s1").innerHTML=sentenses[nowQuest];
});

var ShowNextQuest=function(){
    userAnsw.push(nowElem);
  if (nowQuest<9){
      nowQuest++;
      document.getElementById("s1").innerHTML=sentenses[nowQuest];
      $("#q1").animate({"left":"0px","top":"0px"},"normal");

      $("#q2").animate({"left":"650px","top":"0px"},"normal");

      $("#q3").animate({"left":"0px","top":"500px"},"normal");

      $("#q4").animate({"left":"650px","top":"500px"},"normal");
  }
    else{
        y=0;
        for (i=0;i<10;i++){
            if (rightAnswers[i]==userAnsw[i]){y++};
        }
        $("#f1").animate({"left":"-800px"},"normal");
        document.getElementById("s2").innerHTML="Дакладна "+y+" пытанняу з 10";
        $("#f2").animate({"left":"0px"},"normal");
  }
};