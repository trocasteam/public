var chars = ["4JFG6-BFM6Q-53WK6", "ZJH57-XT998-FZDX2", "GY5D8-IGMBI-IECE5", "8CKZ0-BVJVB-Y8E0F"];

var button = document.querySelector("#generateKey");
var keyDisplay = document.querySelector("#key");

function init() {
  //Generate 5 random characters from chars array and concatenate them
  function generateString() {
    var result = "";
    for (var i = 0; i < 1; i++) {
      result += chars[Math.floor(Math.random() * 4)];
    }
    return result;
  }
  //Generate 3 sets of 5 random characters and concatenate them together
  function addRandomStrings() {
    var string = "";
    for (var i = 0; i < 1; i++) {
      if (string === "") {
        string += generateString();
      } else {
        string += "-" + generateString();
      }
    }
    //jQUERY
    // $("#key").text(string);
    keyDisplay.textContent = string;
  }
  //Add a click listener to the button then call addRandomString();
  //jQUERY
  // $("#generateKey").on("click", function() {
  //   addRandomStrings();
  // });
  button.addEventListener("click", function() {
    addRandomStrings();
  });
  //Show random chars on init
  addRandomStrings();
}
init();

// script esconder e mostrar

function main() {
  $('.skillset').hide();
  $('.skillset').fadeIn(1000);
  
  $('.projects').hide();
  
  $('.projects-button').on('click', function() {
		$(this).next().slideToggle(400);
    $(this).toggleClass('active');
    $(this).text('Revelar sua Chave')
	});
}

$(document).ready(main);