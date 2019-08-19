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

  return {
    candidates: [
      {
        name: "yes",
        alignment: Math.floor((yesCounter / numberOfQs) * 100),
        bio: bios.Biden
      },
      {
        name: "no",
        alignment: Math.floor((noCounter / numberOfQs) * 100),
        bio: bios.Sanders
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
