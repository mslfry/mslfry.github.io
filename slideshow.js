/**
 * This function takes in a reference to a DOM element,
 * assumes each of its children are <img> tags,
 * and then makes a simple slideshow out of the images.
 * @param container A DOM element
 */
var slideShow = function(container) {
    this.images = [];
    this.curImage = 0;
    for (i = 0; i < container.childElementCount; i++) {
        this.images.push(container.children[i]);
        this.images[i].style.display = "none";
    }
    
    // Handle going to to the next slide
    var nextSlide = function() {
        for (var i = 0; i < this.images.length; i++) {
            this.images[i].style.display = "none";
        }
        this.images[this.curImage].style.display = "block";
        this.curImage++;
        if (this.curImage >= this.images.length) {
            this.curImage = 0;
        }
        window.setTimeout(nextSlide.bind(this), 1500);
    };
    
    nextSlide.call(this);
};
noStroke();

draw = function() {
    fill(random(mouseX), 0, 0);
    ellipse(mouseX, mouseY, random(400),random(400));
};
<!DOCTYPE html>
<!-- This is based on DillingerLee's great template here:
https://github.com/Team-Code/KA_Offline -->
<html> 
 <head><style>.xpdopen.rYczAc, .duf3 { display: none !important; }</style>
    <title>Processing.JS inside Webpages: Template</title> 
</head>
 <body>
    <p align="center"> 
	<!--This draws the Canvas on the webpage -->
      <canvas id="mycanvas"></canvas> 
    </p>
 </body>
 
 <!-- Run all the JavaScript stuff -->
 <!-- Include the processing.js library -->
 <!-- See https://khanacademy.zendesk.com/hc/en-us/articles/202260404-What-parts-of-ProcessingJS-does-Khan-Academy-support- for differences -->
 <script src="https://cdn.jsdelivr.net/processing.js/1.4.8/processing.min.js"></script> 
 
 <script>
    var sketchProc = function(processingInstance) {
     with (processingInstance) {
        size(400, 400); 
        frameRate(30);
        
        // ProgramCodeGoesHere
        fill(255, 255, 0);
        ellipse(200, 200, 200, 200);
        noFill();
        stroke(0, 0, 0);
        strokeWeight(2);
        arc(200, 200, 150, 100, 0, PI);
        fill(0, 0, 0);
        ellipse(250, 200, 10, 10);
        ellipse(153, 200, 10, 10);
    }};

    // Get the canvas that Processing-js will use
    var canvas = document.getElementById("mycanvas"); 
    // Pass the function sketchProc (defined in myCode.js) to Processing's constructor.
    var processingInstance = new Processing(canvas, sketchProc); 
 </script>

</html>

