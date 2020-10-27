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

$.each(dice, function (i, die) {
  board += die[Math.floor(Math.random() * 5)];
});

let field = [
  [board[0], board[1], board[2], board[3]],
  [board[4], board[5], board[6], board[7]],
  [board[8], board[9], board[10], board[11]],
  [board[12], board[13], board[14], board[15]],
];

let table_body = '<table border="1">';

for (let i = 0; i < field.length; i++) {
  table_body += "<tr>";

  for (let j = 0; j < field.length; j++) {
    table_body += "<td>";
    table_body += field[i][j];
    table_body += "</td>";
  }
  table_body += "</tr>";
}
table_body += "</table>";

$(document).ready(function () {
  $("#tableDiv").html(table_body);
});
