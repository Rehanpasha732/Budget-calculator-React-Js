import React from "react";
import "./story.css"

function Story() {
   let object =
   {
      name: "virat",
      img: "https://m.cricbuzz.com/a/img/v1/192x192/i1/c170661/virat-kohli.jpg",
      story: "Virat Kohli is an Indian cricketer who plays for India national cricket team. He was born in Delhi, India on November 5, 1988. Virat is the first player in ICC cricket history to win all 3 ICC awards in a single year- ICC ODI player of the year, ICC Test player of the year and ICC Player of the year award in 2018.",
   }
 

 
  
 

 



   return (
      <>
<div className="data">
   <div className="right">
<h1>virat kohli{object[0].name} </h1>

      
   </div>

   <div className="left">

      
</div>


</div>

      </>
   )
}
export default Story