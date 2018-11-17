//Get the data
var dataTable=require('../data/friends')
console.log(`log the dataTable to check the access ${dataTable}`)
// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  //and in the page use the ajax to get the information use url in the orange text to shown 
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(dataTable);
  });

  // API POST Requests
  app.post("/api/friends", function(req, res) {
    // this is the data of the current user that need to post to the dataarray 
 var currentUser=req.body;
 console.log("new user data received\n" + currentUser)
 dataTable.push(currentUser)
 //create a variable to hold the each total difference between the two compariosn, then at the end , match the smallest score
 var differenceArray=[];
 res.json(currentUser)
 //comparison logics

 /*for (var j;j<dataTable.length;j++){
  var currentScore=currentuser.scores;
   console.log( dataTable[j].scores)
   var tableScore= dataTable[j].scores
   var sumDifference=0;
   //var matching=[51,0]
   //for loop to compare each result of the question of current user to the each elments.socre
   for (var i; i <currentScore.length;i++){
     //this will check the different between each index in the score array
    sumDifference += Math.abs(currentScore[i] - tableScore[i])

   }//end of the score comaparison
/*
 * if (sumDifference < matching[0])
        {
            mathcing[0] = summed;
            mathcing[1] = i;
            console.log("new match score is " + sumDifference + " and the position in friendbase is " + mathcing[1]);
        }
 

differenceArray.push(sumDifference)
 }// end of the forEach mehtod
 
 //this push the newform to the array of data, at the end of comparison to prevent return of self
 dataTable.push(currentUser)
//to find the index of the data that made that sum and then response that matching user data to the  current user
var matchIndex= differenceArray.indexof( Math.min(... differenceArray))
return res.json(dataTable[matchIndex])*/
 //after each different got into the array ,  then 
 //if the currentUser matching logics down here
  });//end of the post function


};// end of the  export function
/*. Determine the user's most compatible friend using the following as a guide:

   * Convert each user's results into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`).
   * With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the ` sumDifference`.
     * Example: 
       * User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`
       * User 2: `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]`
       * Total Difference: **2 + 1 + 2 =** **_5_**
   * Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both `5-3` and `3-5` as `2`, and so on. 
   * The closest match will be the user with the least amount of difference.

7. Once you've found the current user's most compatible friend, display the result as a modal pop-up.
   * The modal should display both the name and picture of the closest match.*/
