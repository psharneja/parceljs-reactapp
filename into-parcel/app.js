import { square } from './lib';
import $ from 'jquery';
import './styles.scss';
let i = 2;

function setMessageText(msg) {
    $('#message').text(msg);
}

setMessageText("This square of "+i+" is " + square(i));

$('#message').click(() => {
    i++;
setMessageText("This square of "+i+" is " + square(i));
})
//document.getElementById('message').innerText = "This square of 2 is " + square(2);