function CheckYuGiOh(n) {
  var array = [];
  for ( var i = 1; i <= 100; i++);{
    array.push(i);

    if (i % 2 ===0){
      array.map(i-1,1,'Yu');
    }
    if (i % 3 === 0){
      array.map(i-1,1,'Gi');
    }
    if (i % 5 === 0){
      array.map(i-1,1,'Oh');
    }
  if (i % 30 === 0){
    array.map(i-1,1,'YuGiOh');
  }
  }
}