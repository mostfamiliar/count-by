var countBy = function(max,countBy) {
  var arr = []
  for (var i=countBy; i <= max; i += countBy) {
    arr.push(i);
    var final = arr.join(", ")
  }
      console.log(final)
  return final;
}
