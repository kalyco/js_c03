// 1: The details about the page are collected from properties of the DOM

var msg = '<p><b>page title: </b>' + document.title + '<br />';
msg += '<b>page address: </b>' + document.URL + '</br>';
msg + = '<b>last modified: </b>' + document.lastModified + '</p>';

// 2:

var el = document.getElementById('footer');
el.innerHTML = msg;

// side note: read close details on using innerHTML because it can be a
// security risk if not used correctly.
