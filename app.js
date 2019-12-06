//Start of end point URL
const gitHubURL = "https://api.github.com/users/";

//Gets user input STRING -> clears list -> Makes call to GithubAPI with user name
function userClicksSubmit(){
  $("#the-button").on('click',event => {
    event.preventDefault();
    $(".myList").empty();
    const usersName = $('#the-input').val();
    makeTheCall(usersName);
   
  })
}

//makes call to end point 
function makeTheCall(userName){

  fetch(gitHubURL + userName +"/repos")
  .then(response => response.json())
  .then(responseJson => listOnlyName(responseJson));  
}
// populates list with repos
function listOnlyName(responseObject){

  let loopX = responseObject.length;

  if (loopX > 25){
    $('.myForm').css("height", "900");
  }
  
  for (z = 0; z < loopX; z++){
    
    $(".myList").append(`<a class="list-elements" href="${responseObject[z].owner.html_url}">${responseObject[z].name}<br>`);
  }
}

function runTheApp(){

  userClicksSubmit();
 
}

$(runTheApp)