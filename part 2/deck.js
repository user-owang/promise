const baseURL = "https://deckofcardsapi.com/api/deck/";

// 1.
$.get(`${baseURL}new/shuffle/?deck_count=1`)
  .then((data) => {
    return $.get(`${baseURL}${data["deck_id"]}/draw/?count=1`);
  })
  .then((data) => {
    console.log(`${data["cards"][0]["value"]} of ${data["cards"][0]["suit"]}`);
  });

// 2.
$.get(`${baseURL}new/shuffle/?deck_count=1`)
  .then((data) => {
    return Promise.all([
      $.get(`${baseURL}${data["deck_id"]}/draw/?count=1`),
      $.get(`${baseURL}${data["deck_id"]}/draw/?count=1`),
    ]);
  })
  .then((resp) => {
    resp.forEach((data) => {
      console.log(
        `${data["cards"][0]["value"]} of ${data["cards"][0]["suit"]}`
      );
    });
  });

// 3.
const $btn = $("button");
const $cards = $("#cards");
let deckID = "";

$(document).ready(function () {
  $.get(`${baseURL}new/shuffle/?deck_count=1`).then((data) => {
    deckID = data["deck_id"];
  });
});

$btn.on("click", (evt) => {
  $.get(`${baseURL}${deckID}/draw/?count=1`).then((data) => {
    if (data["remaining"] > 0) {
      $cards.append(`<img src="${data["cards"][0]["image"]}" alt=""> <br>`);
    }
  });
});
