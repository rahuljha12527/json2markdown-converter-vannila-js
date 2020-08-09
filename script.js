const data = [
  {
    name: "Frozen yoghurt",
    calories: "159",
    fat: "6",
    carbs: "24",
    protein: "4",
  },
  {
    name: "Ice cream sandwich",
    calories: "237",
    fat: "9",
    carbs: "37",
    protein: "4",
  },
  {
    name: "Eclair",
    calories: "262",
    fat: "16",
    carbs: "24",
    protein: "6",
  },
  {
    name: "Cupcake",
    calories: " 305",
    fat: " 3",
    carbs: "67",
    protein: "4",
  },
  {
    name: "Gingerbread",
    calories: "356",
    fat: "16",
    carbs: "49",
    protein: "3",
  },
];

function CreateTableFromJSON(input) {
  const jsonObj = {
    table: {
      headers: Object.keys(input[0]),
      rows: input,
    },
  };
  console.log("data array", jsonObj, json2md(jsonObj));
  return jsonObj;
}
//CreateTableFromJSON(data);
function downloadAsOnject(data, exportName) {
    let dataStr =
      "data:text;charset=utf-8," + encodeURIComponent(json2md(data));
    let downloadAnchorNode = document.createElement("a");
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", exportName + ".md");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  }
document.getElementById("converter").addEventListener("click", function () {
    downloadAsOnject(CreateTableFromJSON(data),"rahul");
});

//console.log(CreateTableFromJSON());
// function jsonToMdConverter() {

// }

//let storeData = CreateTableFromJSON(data);
//console.log(CreateTableFromJSON(data));
//console.log(json2md(storeData));
