(function(){
  var width = 24; 
var bpm = 0;

function showHeart() {
Bangle.setHRMPower(1);
Bangle.on('HRM', function(hrm) { 
bpm = hrm.bpm;
conf= hrm.confidence;
console.log(hrm.bpm);
});

}
counterInterval = setInterval(showHeart,50000);
  function draw() {
    g.clear();
    g.reset();
    g.setFontAlign(0,0);     
    g.drawRect(this.x, this.y, this.x+width-1, this.y+23);
    g.setFont("6x8",2);
    g.drawString(bpm, this.x+width/2, this.y+12);
  }

  setInterval(function() {
    WIDGETS["activity"].draw(WIDGETS["activity"]);
    console.log("ho richiamato draw")
  }, 1000); 

  
  WIDGETS["activity"]={
    area:"tl", 
    width: width, 
    draw:draw // called to draw the widget
  };
  
  NRF.setServices({
  "f8b23a4d-89ad-4220-8c9f-d81756009f0c": {
    "f8b23a4d-89ad-4220-8c9f-d81756009f0c": {
      notify: true,
        readable: true,
        value: [bpm]
    }
  }
})();
