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
    var doc = jsyaml.load(response);
    console.log(doc);
  };
  
  /* the following functions support updateUISuccess */


  /* in case of fetch failure, this function defaults */
  function updateUIFailure() {
    console.log("Request failed.");
  };
})();
