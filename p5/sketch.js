//TURN OFF AUTO-REFRESH NOW !!!

let classData;
let loading = true;
let url = "https://xivapi.com/character/42001477";

function setup() {
  createCanvas(1300, 510);
  angleMode(DEGREES);

  //HAVE YOU TURNED OFF AUTO-REFRESH?

  // perform request
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log("Got data");
      console.log(data);
      //HAVE YOU TURNED OFF AUTO-REFRESH?k

      classData = data.Character.ClassJobs; //classjobs array
      loading = false;
      console.log(classData);
    })
    .catch(function (err) {
      console.log(`Something went wrong: ${err}`);
    });
}

function draw() {
  textAlign(CENTER);
  background(240);

  if (loading) {
    // loading screen
    textSize(30);
    text("Loading...", 0, height / 2 - 25, width, 50);
  } else {
    drawChart();
    stroke(0);
    line(20, 20, 20, 480);
    line(20, 480, 1280, 480);
    //display using the simple line-graph code
    //HAVE YOU TURNED OFF AUTO-REFRESH?
  }
}

function drawChart() {
  let rectW = 20;
  let rectStartX = 40;
  let rectY = 480;
  let textX = 475;
  let textY = 57;

  for (let i = 0; i < classData.length; i++) {
    let level = classData[i];
    let name = classData[i];

    let className = name.Name;
    let levelHeight = level.Level;

    let rectH = map(levelHeight, 0, 90, 0, 400);

    fill(252, 186, 3);
    noStroke();
    rect(rectStartX, rectY, rectW, -rectH);

    push();
    rotate(90);
    fill(0);
    textSize(12);
    textAlign(RIGHT, TOP);
    text(className, textX - 20, -textY);
    pop();

    fill(0);
    textAlign(CENTER);
    textSize(12);
    text(levelHeight, rectStartX + 10, 475);

    text("FFXIV Character Jobs", width/2, 500);

    rectStartX += 40;
    textY += 40;
  }
  
}

