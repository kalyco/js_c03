// 1: Two of the object's properties, innerWidth and innerHeight, show width
// and height of the browser window.
var msg = '<h2>browser window</h2><p>width: ' + window.innerWidth + '</p>';
msg += '<p>height: ' + window.innerHeight + '</p>';

// 2: Child objects are stored as properties of their parent object.

msg += '<h2>history</h2><p>items: ' + window.history.length + '</p>';
msg += '<h2>screen</h2><p>width: ' + window.screen.width + '</p>';
msg += '<p>height: ' + window.screen.height + '</p>';


// 3: An element who's id attribute has a value of info is selected,
// and the message that has been built up to this point is written on that page.

var el = document.getElementById('info');
el.innerHTML = msg;


// 4: although alert() is a method of the window object, it can be automatically
// called because window is treated as the default object.
alert('Current page: ' + window.location);

// Fun fact: Historically the alert() method was used to display warnings
// to users. Nowadays, there are better ways to provide feedback.
