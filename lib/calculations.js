const bios = require("./bios.json");

function calculateResults(data) {
  let numberOfQs = 10;
  //(
  //let bidenCounter = 0;
  //let sandersCounter = 0;
  //let bookerCounter = 0;
  //let harrisCounter = 0;
  //let buttigiegCounter = 0;
  //let yangCounter = 0;
  //let trumpCounter = 0;
  //let warrenCounter = 0;
  //let betoCounter = 0;
  //let klobucharCounter = 0;
  //let castroCounter = 0;
  //let gillibrandCounter = 0;
  //let weldCounter = 0;
  //let timRyanCounter = 0;
  //let steveBullockCounter = 0; 
  //)
  let yesCounter = 0;
  let noCounter = 0;

  let data1 = Object.entries(data);
  data1 = dataSorter(data1);
  data1 = String(data1);
  data1 = data1.split(" ");
  console.log(data1);

  console.log("test for sylan");
  alignmentFinder(data1);

  let  bio = "NO BIO SELECTED"
  let name = "no name"

  if((yesCounter / numberOfQs)* 100<= 10){
     bio = bios.ten
     pic = "benedict"
     name = "Benedict Arnold"
  }
  else if((yesCounter / numberOfQs)* 100<= 20){
    bio = bios.twenty
    pic = "king"
    name ="King George III"
 }
 else if((yesCounter / numberOfQs)* 100<= 30){
  bio = bios.thirty
  pic = "redcoat"
  name ="Red Coat"
}
else if((yesCounter / numberOfQs)* 100<= 40){
  bio = bios.forty
  pic = "sympathzier"
  name ="British Sympathzier"
}
else if((yesCounter / numberOfQs)* 100<= 50){
  bio = bios.fifty
  pic = "hancock"
  name ="John Hancock"
}
else if((yesCounter / numberOfQs)* 100<= 60){
  bio = bios.sixty
  pic = "adams"
  name ="John Adams"
}
else if((yesCounter / numberOfQs)* 100<= 70){
  bio = bios.seventy
  pic = "franklin"
  name ="Benjamin Franklin"
}
else if((yesCounter / numberOfQs)* 100<= 80){
  bio = bios.eighty
  pic = "hamilton"
  name ="Alexander Hamilton"
}
else if((yesCounter / numberOfQs)* 100<= 90){
  bio = bios.ninety
  pic = "jefferson"
  name ="Thomas Jefferson"
}
else if((yesCounter / numberOfQs)* 100<= 100){
  bio = bios.onehundred
  pic = "washington"
  name ="George Washington"
}
  //console.log("hello world")

  return {
    answer: [
    { 
        name: name,
        pic: pic,
        alignment: Math.floor((yesCounter / numberOfQs) * 100),
        bio: bio
      }
    ]
  };

  function alignmentFinder(data) {
    for (let index = 0; index < data.length; index++) {
      //a loop that adds one to the animal count for each time the animals name appears in the document
      if (data[index].includes("yes")) {
        console.log("correct")
        yesCounter++;
      }
      else if (data[index].includes("no")) {
        noCounter++;
      }
    }
  }

  function dataSorter(data) {
    data = data.flat();
    data = filterItems(data, "q");
    return data;
  }

  function filterItems(arr, query) {
    return arr.filter(function(filt) {
      return filt.indexOf(query.toLowerCase()) == -1;
    });
  }
}

module.exports = calculateResults;
