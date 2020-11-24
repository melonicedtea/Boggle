let dice = [
  ["R", "I", "F", "O", "B", "X"],
  ["I", "F", "E", "H", "E", "Y"],
  ["D", "E", "N", "O", "W", "S"],
  ["U", "T", "O", "K", "N", "D"],
  ["H", "M", "S", "R", "A", "O"],
  ["L", "U", "P", "E", "T", "S"],
  ["A", "C", "I", "T", "O", "A"],
  ["Y", "L", "G", "K", "U", "E"],
  ["Q", "B", "M", "J", "O", "A"],
  ["E", "H", "I", "S", "P", "N"],
  ["V", "E", "T", "I", "G", "N"],
  ["B", "A", "L", "I", "Y", "T"],
  ["E", "Z", "A", "V", "N", "D"],
  ["R", "A", "L", "E", "S", "C"],
  ["U", "W", "I", "L", "R", "G"],
  ["P", "A", "C", "E", "M", "D"],
];

let board = "";

$(dice).each( function (i, die) {
  board += die[Math.floor(Math.random() * 5)];
});

let field = [
  [board[0], board[1], board[2], board[3]],
  [board[4], board[5], board[6], board[7]],
  [board[8], board[9], board[10], board[11]],
  [board[12], board[13], board[14], board[15]],
];

let table_body = '<table id="board" border="1">';

for (let i = 0; i < field.length; i++) {
  table_body += '<tr>';

  for (let j = 0; j < field.length; j++) {
    table_body += '<td class="cell">' ;
    table_body += field[i][j];
    table_body += '</td>';
  }
  table_body += '</tr>';
}
table_body += '</table>';

// button
let button = 
'<input id="button-submit" type="button" value="submit"/>';

let string = "";

function clear() {
  string ="";
  $(".cell").css({
    "background-color": "transparent",

  });
}

function submit() {   
  $("body").append('<div>' + string + '</div>');
  clear();
}

function addToString(e) {
  string += e;
}

function removeFromString(e) {
  string = string.replace(e, '');
}

function select(e){
  if ($(e).css("background-color") == "rgb(255, 0, 0)") {
    $(e).css({
      "background-color": "transparent",

    });
    removeFromString($(e).text());
  } else {
    $(e).css({
      "background-color": "red",

    });
    addToString($(e).text());
  }
}



// onready
$(document).ready(function () {

  // append html
  $("body").append(table_body);
  $("body").append(button);

  //document css
  $("html").css({
    "font-family": "'Lucida Console', Courier, monospace",

  });

  // board/table css
  $("#board").css({
    "-webkit-touch-callout": "none",
    "-webkit-user-select": "none",
    "-khtml-user-select": "none",
    "-moz-user-select": "none",
    "-ms-user-select": "none",
    "user-select": "none",

    "margin-left": "auto",
    "margin-right": "auto",

    "table-layout": "fixed",
    "height" : "320px",
    "width" : "320px",

    "text-align": "center",
  });

  // cell css
  $("#board .cell").css({
    "cursor":"pointer",
  
  });

  // cell click
  $("#board .cell").click(function (e) {
    select(this);
    e.preventDefault();
  });

  // button submit click
  $("#button-submit").click(function (e) { 
    submit();
    e.preventDefault();
    
  });
});
