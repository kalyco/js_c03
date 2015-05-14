Global Objects: Strings

length
toUpperCase()
chartAt() - takes an index as a param and returns that character
indexOf() - Returns index number of the first time a character is found
lastIndexOf() - Returns the index number of the last time a character is found within a string
substring() - Returns characters found between two index numbers where the characters for the first index number is included and the characters for the last index number is not included
split() - When a character is specified, it splits the string each time it is found
trim() - removes whitespace from start and end of string
replace() - like find and replace, it takes one value that should be found, and another to replace it(by default, only replaces the first match it finds)


Examples:
'Home sweet home'

saying.indexOf('ee'); 7
saying.lastIndexOf('e'); 14
saying.substring(8,14); 'et hom'
saying.split(' '); ['Home', 'sweet', 'home', '']
saying.trim(); 'Home sweet home'
saying.replace('me', 'w'); 'How sweet home'
