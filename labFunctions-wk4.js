var isAlpha = function(a) {
  var ltr="A";
  if ((a >= "a") && (a <= "z"))
    return a;
   else
   return false;
};
function  isAlpha(a){
    return a.length==1 && a.match(/^[A-Z]$/i) !=null;
}

var countLetters=function(b){
    var count=0;
    for(var i=0;i<b.length;i++){
      var a=b.charAt(i);
      if(isAlpha(a)){
        count++;
      }
    }
    return count;
};
function countOccurrences(s,c){
    var count=0;
    for(var i=0;i<s.length;i++){
      if(s.charAt(i)==c) count++;
    }
    return count;
}
