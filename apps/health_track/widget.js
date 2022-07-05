/* run widgets in their own function scope so they don't interfere with
currently-running apps */
(() => {
  function draw() {
    g.reset(); // reset the graphics context to defaults (color/font/etc)
    // add your code
    
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
        g.setFont("6x8");
        g.drawString(bpm, this.x+width/2, this.y+12);
      }
    
      setInterval(function() {
        WIDGETS["7chname"].draw(WIDGETS["7chname"]);
        console.log("ho richiamato draw")
      }, 1000); 
    
      
      NRF.setServices({
      "f8b23a4d-89ad-4220-8c9f-d81756009f0c": {
        "f8b23a4d-89ad-4220-8c9f-d81756009f0c": {
          notify: true,
            readable: true,
            value: [bpm]
        }
      }
    })
    g.drawString("X", this.x, this.y);
  }

  // add your widget
  WIDGETS["7chname"]={
    area:"tl", // tl (top left), tr (top right), bl (bottom left), br (bottom right), be aware that not all apps support widgets at the bottom of the screen
    width: 24, // how wide is the widget? You can change this and call Bangle.drawWidgets() to re-layout
    draw:draw // called to draw the widget
  };
})()
