// part one
const baseURL = "http://numbersapi.com";
// #1
$.get(`${baseURL}/69?json`).then((data) => {
  console.log(data);
});
// #2
let numbers = [3, 5, 99];
$.get(`${baseURL}/${numbers}?json`).then((data) => {
  console.log(data);
});
// #3
Promise.all([
  $.get(`${baseURL}/69?json`),
  $.get(`${baseURL}/69?json`),
  $.get(`${baseURL}/69?json`),
  $.get(`${baseURL}/69?json`),
]).then((resp) => {
  resp.forEach((data) => {
    console.log(data);
  });
});
