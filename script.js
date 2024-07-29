var hobbies = [
    "reading",
    "video games",
    "watching Bones",
    "Harry Potter",
    "mysteries",
    "riddles"
];

console.log(hobbies.length);

hobbies.push("baking)";

console.log(hobbies[2]);

hobbies.pop();

hobbies.splice(2, 0, "driving", "cats");

console.log(hobbies);

hobbies.shift();

hobbies.unshift("paint by numbers");

var goals = ["Build myself a profile site", "Understand JavaScript better", "Get a job coding"];

var allTheThings = [...hobbies, ...goals];

console.log(allTheThings);

console.log(allTheThings.indexOf("Harry Potter"));

allTheThings.splice(8, 1);

console.log(allTheThings);

var plans = allTheThings.map(function (item) {
  return `I can't wait to start ${item}!`;
});
console.log(plans);
