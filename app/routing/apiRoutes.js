//Get the dataTable from friends.js
var dataTable = require('../data/friends')
console.log("log the dataTable to check the access:\n " + JSON.stringify(dataTable))
// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function (req, res) {
    res.json(dataTable);
  });

  // API POST Requests
  app.post("/api/friends", function (req, res) {
    // this is the data of the current user that need to post to the dataarray 
    var currentUser = req.body;
    var matchIndex = 0;
    //comparison logics
    //for loop to compare each data in the dataTable 
    for (var i = 0; i < dataTable.length; i++) {
      var currentScore = currentUser.scores;
      var tableScore = dataTable[i].scores;
      var sumDifference = 0;
      //declare a variable for compare the sumDifference
      var matching = 51;
      //for loop to compare each result of the question of current user to the existing user
      for (var j = 0; j < currentScore.length; j++) {
        //this will check the different between each index in the score array
        sumDifference += Math.abs(parseInt(currentScore[j]) - parseInt(tableScore[j]))

      } //end of the score comaparison
      if (sumDifference < matching) {
        matching = sumDifference;
        matchIndex = i;

        console.log("new match score is " + matching + " and the index in friendTable is " + matchIndex);
      }
    } // end of the for loop mehtod

    //this push the newform to the array of data, at the end of comparison to prevent return of self
    dataTable.push(currentUser)
    //return the data in the dataTable for the best match
    res.json(dataTable[matchIndex])
  }); //end of the post function
}; // end of the  export function