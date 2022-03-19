/* Include this script inside html body tag to add all options for time zones */



/* options for continents/areas */
const areaSelector = document.getElementById("starting-area");
const dstAreaSelector = document.getElementById("ending-area");
var numAreas = 10; 
var areasArr = new Array();

for(var i = 0; i < numAreas; i++) {
    areasArr[i] = new Option();
}

areasArr[0] = new Option("America", "America");
areasArr[1] = new Option("Africa", "Africa");
areasArr[2] = new Option("Antarctica", "Antarctica");
areasArr[3] = new Option("Arctic", "Arctic");
areasArr[4] = new Option("Asia", "Asia");
areasArr[5] = new Option("Atlantic", "Atlantic");
areasArr[6] = new Option("Australia", "Australia");
areasArr[7] = new Option("Europe", "Europe");
areasArr[8] = new Option("Indian", "Indian");
areasArr[9] = new Option("Pacific", "Pacific");

for(var i = 0; i < numAreas; i++) {
    areaSelector.add(areasArr[i], undefined);
}

for(var i = 0; i < numAreas; i++) {
    dstAreaSelector.add(new Option(areasArr[i].text, areasArr[i].value));
}







const selector = document.getElementById("input-time-zones");
const dstSelector = document.getElementById("dest-time-zones");



n = 100; /* number of options */
arr = new Array();

    for(var i = 0; i < n; i++) {
        arr.push(new Option());
    }

        arr[0] = new Option("America/Chicago", "America/Chicago");
        arr[1] = new Option("America/Denver", "America/Denver");
        arr[2] = new Option("America/Los_Angeles", "America/Los_Angeles");
        arr[3] = new Option("America/New_York", "America/New_York");
        arr[4] = new Option("Asia/Tokyo", "Asia/Tokyo");
   
      

/* Add ALL options to dropdown - may want to limit */

let areaChosen = areaSelector.options[areaSelector.selectedIndex].text; // this wouldn't work with Other - i.e. places without one of the area prefixes, so for those you could use array index if you know their location in the array arr- put them at the end intentionally
if(areaChosen != 'Other') {
    for(var i = 0; i < n; i++) {
        if(arr[i].text.includes(areaChosen)) {
            selector.add(arr[i], undefined);
        }
    }
}
else {
    /* add to selector if it doesn't contain any of the other areas in the areasArray? could be another option. Or, place all 'other' locations at end of array - try this method. This is an indicator that you don't HAVE to. */
    /* Goal: change the indices */ 
    for(var i = 0; i < n; i++) {
            selector.add(arr[i], undefined);
    }
}


function notify() {
    console.log("Hello");
}

/* Add the same options to destination time zone selector */
/* var options = selector.innerHTML;
var options = dstSelector.innerHTML + options;
dstSelector.innerHTML = options;
*/ 

let dstAreaChosen = dstAreaSelector.options[dstAreaSelector.selectedIndex].text; // this wouldn't work with Other - i.e. places without one of the area prefixes, so for those you could use array index if you know their location in the array arr- put them at the end intentionally
if(dstAreaChosen != 'Other') {
    for(var i = 0; i < n; i++) {
        console.log(arr[i].text);
        if(arr[i].text.includes(dstAreaChosen)) {
            dstSelector.add(new Option(arr[i].text, arr[i].value)); // adding new options to this selector isn't working
        }
    }
}
else {
    /* add to selector if it doesn't contain any of the other areas in the areasArray? could be another option. Or, place all 'other' locations at end of array - try this method. This is an indicator that you don't HAVE to. */
    /* Goal: change the indices */ 
    for(var i = 0; i < n; i++) {
            dstSelector.add(new Option(arr[i].text, arr[i].value));
    }
}





/* now change the options - only choose certain ones based on area selection */




