random(){
  winningCombinations.filter(v => {
    v.filter(c => {
      return playerMoves.indexOf(c) > -1;
    }).length == 2
  })
}

random(){
  let res = winningCombinations.filter(v => v.filter(c => {
    return playerMoves.indexOf(c) > -1;
  }).length == 2);

}

let finalFilter = res.filter(v => v.filter(c => {
  return playerMoves.indexOf(c) > -1;
}).length === 3);
