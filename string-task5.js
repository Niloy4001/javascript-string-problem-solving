
// ### Task-5:
// Capitalize Every first Letter of each word in a String




let resource = 'freeCodeCamp is an awesome resource';
let newResource = resource.split(' ');

for (i = 0; i < newResource.length; i++) {

    newResource[i] = newResource[i].substring(0, 1).toUpperCase() + newResource[i].substring(1);

}

let arr = newResource.join(' ');
console.log(arr);









