i-1,  i
x,    a a a

2,    4  3  2  // step 1,
2,    2  3  4  // step 2,
3,    2 (2) 4  // step 3,

[1,2,3,4].splice(2);
> [3, 4]

[7,2,5,4].splice(2).sort();
> [4, 5]


function nextBigger(n){
  str = n.toString().split("");
  for (var i=str.length-1; i>0; i--) {
  	if (str[i] > str[i-1]) {
  		break;
  	}
  }
  console.log(i);
  if (i===0) {
  	return -1;
  }
  var lag = str.splice(i).sort();
  for (var j=0; j<lag.length; j++) {
  	if (lag[j] > str[i-1]) {
  		var t = lag[j];
  		lag[j] = str[i-1];
  		str[i-1] = t;
  		break;
  	}
  }
  return Number(str.concat(lag).join(""));
}

nextBigger(2017);
nextBigger(11);


// my 1st solution,

function nextBigger(n){
  var arr = n.toString().split("");
  var arrCurr = arr.slice();
  var big = n.toString().split("").sort().reverse();
  var bigLeft = big.slice();
  var dPos = 0;
  var d = 0;
  var foundBig = false;
  console.log(big);

  if (arr.join("") === big.join("")) {
    return -1;
  }

  arr.forEach( function(element, index) {
    if (foundBig) {
      return;
    }
    if (arr.slice(index).join("") === bigLeft.join("")) {
      console.log(bigLeft);
      arrCurr = arr.slice(index);
      foundBig = true;
    } else {
      d = element;
      dPos = bigLeft.indexOf(element);
      bigLeft.splice(dPos, 1);
    }
  });

  var minNext = 10;
  for (var dig of arrCurr) {
    if (dig > d) {
      minNext = Math.min(dig, minNext);
    }
  }
  console.log(arrCurr, arrCurr.indexOf(minNext.toString()));
  arrCurr.splice(arrCurr.indexOf(minNext.toString()), 1);
  console.log("deleted minNext:" + minNext + " from " + arrCurr);
  arrCurr.push(d);
  console.log("added last digit:" + arrCurr);
  var bigger = minNext + arrCurr.sort().join("");
  console.log("Bigger number: " + bigger);
  var ret = arr.slice(0, -bigger.length).join("") + bigger;
  return ret;
}

nextBigger(23);

nextBigger(2017);

nextBigger(4932);
nextBigger(4952);
nextBigger(4985);
