let age = 22;
let userName = "Seungbin";
let hobbies = ["Gaming", "Youtube", "Reading"];
let job = {
  title: "Developer",
  place: "New York",
  salary: 50000,
};

let totalAdultYears;

function calculateAdultYears(userAge) {
  return userAge - 18;
}

totalAdultYears = calculateAdultYears(age);
alert(totalAdultYears);
