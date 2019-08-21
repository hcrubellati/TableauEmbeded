function initViz() {
    var containerDiv = document.getElementById("vizContainer"),
        url = "http://public.tableau.com/views/RegionalSampleWorkbook/Storms",
        options = {
            hideTabs: true,
            onFirstInteractive: function () {
                console.log("Run this code when the viz has finished loading.");
            }
      };

      var viz = new tableau.Viz(containerDiv, url, options);
      // Create a viz object and embed it in the container div.
  }

  window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
  ga('create', 'UA-146052-10', 'getbootstrap.com');
  ga('set', 'anonymizeIp', true);
  ga('send', 'pageview');

var viz;
var containerDiv = document.getElementById("vizContainer");
var url;

function DashboardSelector(){
  document.getElementById("linkdash1").className = "nav-link active";
  document.getElementById("linkdash2").className = "nav-link"
  if(viz) viz.dispose();
  url = "http://public.tableau.com/views/RegionalSampleWorkbook/Storms";
  options = {
     hideTabs: true,
     width: "100%",
     height: "600px",
     onFirstInteractive: function () {
     console.log("Run this code when the viz has finished loading.");
     }
   };

    viz = new tableau.Viz(containerDiv, url, options);
    // Create a viz object and embed it in the container div.
     console.log("dash is opening...")
}

function DashboardSelector2(){
  document.getElementById("linkdash2").className = "nav-link active";
  document.getElementById("linkdash1").className = "nav-link";

  if(viz) viz.dispose();
  url = "http://public.tableau.com/views/RegionalSampleWorkbook/College";
  options = {
    hideTabs: true,
    width: "100%",
    height: "600px",
    onFirstInteractive: function () {
    console.log("Run this code when the viz has finished loading.");
    }
  };

  viz = new tableau.Viz(containerDiv, url, options);
    // Create a viz object and embed it in the container div.
  console.log("dash is opening...")
}

  var vizList = [,
         "http://public.tableau.com/views/RegionalSampleWorkbook/Obesity",
         "http://public.tableau.com/views/RegionalSampleWorkbook/College",
         "http://public.tableau.com/views/RegionalSampleWorkbook/Stocks",
         "http://public.tableau.com/views/RegionalSampleWorkbook/Storms"];
