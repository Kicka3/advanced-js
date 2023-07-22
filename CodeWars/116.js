
function problem(x){
  if (typeof(x) == "string"){
    return "Error";
  } else {
    return x * 50 + 6;
  }
}

const problem = x => typeof x !== "number" ? "Error" : x * 50 + 6;

const problem = x => typeof x == "number" ? x * 50 + 6 : "Error"