// from data.js
var tableData = data;

// Console.log the data from data.js
console.log(data);

// Get a reference to the table body
var tbody = d3.select("tbody");

// Step 1: Loop Through `data` and log each object
data.forEach(sightings => {
    console.log(sightings);

    // Step 2:  Use d3 to append one table row `tr` for each object
    var row = tbody.append("tr");

    // Step 3:  Use `Object.entries` to log each value
    Object.entries(sightings).forEach(([key, value]) => {
    console.log(key, value);

    // Step 4: Use d3 to append 1 cell per weather report value
    var cell = row.append("td");

    // Step 5: Use d3 to update each cell's text with values
    cell.text(value);
  });
});

// Select the submit button
var submit = d3.select("#filter-btn");

//Click event of datetime filter
submit.on("click", function() {

// Remove existing table
d3.select("tbody").html("");

// Prevent the page from refreshing
d3.event.preventDefault();

// Get the value property of the input element
var dateTime = d3.select("#datetime").property("value");
console.log(dateTime);

// Filter reports
var filteredData = tableData.filter(record => record.datetime === dateTime);
console.log(filteredData);

// Display the filtered dataset
filteredData.forEach((report) => {
    var row = tbody.append('tr');

    Object.entries(report).forEach(([key, value]) => {
        console.log(key, value);
        var cell = row.append('td');
        cell.text(value);
    });
});

});