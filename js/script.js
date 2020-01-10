'use strict';

//script.js

(function () {
  var seminars = 'https://raw.githubusercontent.com/WilliamBarela/eeb-seminar/master/seminars/2020_spring.yml';

  /* fetch statement which uses the updateUISuccess and updateUIFailure functions to create the UI */
  fetch(seminars).then(function (response) {
    return response.text();
  }).then(function (response) {
    updateUISuccess(response);
  }).catch(function () {
    updateUIFailure();
  });

  /* in case of fetch success, this function to creates the UI */
  function updateUISuccess(response) {
    const seminars = jsyaml.load(response).seminars;
    let seminar_list = document.querySelector('#seminars');

    for (let i = 0; i < seminars.length; i++) {
      let seminar = seminars[i];
      genSeminarRow(seminar_list, seminar);
    }
  };
  
  /* the following functions support updateUISuccess */

  function genSeminarRow(seminar_list, seminar){
    let row = document.createElement('section');
    let date = document.createElement('h3');
    let title = document.createElement('div');
    let speaker = document.createElement('div');
    let host = document.createElement('div');

    //FIXME: check if seminar.is_holiday is true

    setRowElements(seminar, date, title, speaker, host);
    appendRowElements(row, date, title, speaker, host);
    seminar_list.appendChild(row);

    console.log(seminar);
  }
  
  function setDate(seminar, date){
    date.textContent = seminar.date
  }

  function setTitle(seminar, title){
    title.textContent = seminar.title
  }

  function setSpeaker(seminar, speaker){
    speaker.textContent = seminar.speaker
  }

  function setHost(seminar, host){
    host.textContent = seminar.host
  }

  function setRowElements(seminar, date, title, speaker, host){
    setDate(seminar, date);
    setTitle(seminar, title);
    setSpeaker(seminar, speaker);
    setHost(seminar, host);
  }

  function appendRowElements(row, date, title, speaker, host){
    row.appendChild(date);
    row.appendChild(title);
    row.appendChild(speaker);
    row.appendChild(host);
  }

  /* in case of fetch failure, this function defaults */
  function updateUIFailure() {
    console.log("Request failed.");
  };
})();
