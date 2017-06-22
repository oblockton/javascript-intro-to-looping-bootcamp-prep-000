function forLoopComparison(array) {
  for (let i=0; i<5; i++) {
    if (i === 1) {
      array.push(`"I am ${i} strange loop."`)

    } else {
      array.push(`"I am ${i} strange loops."`)

    }

  }
  return array
}


function whileLoopComparison(array) {
  let a = 0
  while( a < 5 ) {
    if (a===1){
      array.push(`"I am ${a} strange loop."`)
      a = a + 1
    } else {
      array.push(`"I am ${a} stange loops."`)
      a = a + 1
    }
  }
  return array
}



function comparison(array) {
  if (forLoopComparison(array) === whileLoopComparison(array)) {
    return "same"
  }
}

var birthday = []
console.log(comparison(birthday));
