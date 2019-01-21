import { Synchronous } from './synchronous';
import { Asynchronous } from './asynchronous';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const newSyncTest = new Synchronous();
const newAsyncTest = new Asynchronous();

const messageFromSyncA = newSyncTest.functionA();
const messageFromSyncB = newSyncTest.functionB();
const messageFromSyncC = newSyncTest.functionC();
const messageFromSyncD = newSyncTest.functionD();

const messageFromAsyncA = newAsyncTest.asyncFunctionA();
const messageFromAsyncB = newAsyncTest.asyncFunctionB();
const messageFromAsyncC = newAsyncTest.asyncFunctionC();
const messageFromAsyncD = newAsyncTest.asyncFunctionD();

$(document).ready(function() {

  $('#displaySynchMessage').append(`<li>${messageFromSyncA}</li>`);
  $('#displaySynchMessage').append(`<li>${messageFromSyncB}</li>`);
  $('#displaySynchMessage').append(`<li>${messageFromSyncC}</li>`);
  $('#displaySynchMessage').append(`<li>${messageFromSyncD}</li>`);

  // let promise = newAsyncTest.asyncFunctionB();

  $('#displayAsynchMessage').append(`<li>${messageFromAsyncA}</li>`);

  messageFromAsyncB.then(function(yay) {
    $('#displayAsynchMessage').append(`<li>${yay}</li>`);
  }, function(fuck) {
    $('#showErrors').text(`There was an error: ${fuck.message}`);
  });

  $('#displayAsynchMessage').append(`<li>${messageFromAsyncC}</li>`);
  $('#displayAsynchMessage').append(`<li>${messageFromAsyncD}</li>`);


});
