// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// 1. Create a variable to keep track of all the filters as an object.
var filters = {}

// 3. Use this function to update the filters. 
function updateFilters() {

    // 4a. Save the element that was changed as a variable.
    let Element = d3.select(this);

    // 4b. Save the value that was changed as a variable.
    let Value = Element.property("value");
    console.log(Value);

    // 4c. Save the id of the filter that was changed as a variable.
    let filterId = Element.attr("id");
    console.log(filterId);


  
    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.
    if (Value) {
      filters[filterId] = Value;
    }
    else {
      delete filters[filterId];
    }
  
    // 6. Call function to apply all filters and rebuild the table
    filterTable();
  
  };
  
  // 7. Use this function to filter the table when data is entered.
  function filterTable() {
    console.log(filters);
  
    // 8. Set the filtered data to the tableData.
    let filteredData = tableData 
    
    let filteredData2 = []
    // 9. Loop through all of the filters and keep any data that
    var filtersUsed = Object.keys(filters)
    //console.log(filtersUsed);
    if (filtersUsed.includes("state")){
      for (let index in filteredData){
        //console.log(filteredData[index])
        let sighting = filteredData[index]
        if (sighting.state === filters.state){
           filteredData2 = filteredData.filter(function(sighting){
            return (sighting.state === filters["state"])
           })   
        }
      }
    }
    if (filtersUsed.includes("city")){
      for (let index in filteredData){
        let sighting = filteredData[index]
        if (sighting.city === filters.city){
           filteredData2 = filteredData.filter(function(sighting){
            return (sighting.city === filters["city"])
           })   
        }
      }
    }
    if (filtersUsed.includes("country")){
      for (let index in filteredData){
        let sighting = filteredData[index]
        if (sighting.country === filters.country){
           filteredData2 = filteredData.filter(function(sighting){
            return (sighting.country === filters["country"])
           })   
        }
      }
    }
    if (filtersUsed.includes("datetime")){
      for (let index in filteredData){
        let sighting = filteredData[index]
        if (sighting.datetime === filters.datetime){
           filteredData2 = filteredData.filter(function(sighting){
            return (sighting.datetime === filters["datetime"])
           })   
        }
      }
    }
    if (filtersUsed.includes("shape")){
      for (let index in filteredData){
        let sighting = filteredData[index]
        if (sighting.shape === filters.shape){
           filteredData2 = filteredData.filter(function(sighting){
            return (sighting.shape === filters["shape"])
           })   
        }
      }
    }
    if (filtersUsed.length === 0){
     filteredData2 = tableData
    }

    console.log(filteredData2);

  
    //const filteredData2 = filteredData.filter(function(sighting){
      //return (sighting.state === filters["state"] && sighting.shape === filters["shape"] && \
              //sighting.city === filters["city"] && sighting.country === filters["country"] && sighting.datetime === filters["datetime"] )

    //});
    //console.log(filteredData2);

    // 10. Finally, rebuild the table using the filtered data
    buildTable(filteredData2);
  }
  
  // 2. Attach an event to listen for changes to each filter
  d3.selectAll("input").on("change", updateFilters);
  
  // Build the table when the page loads
  buildTable(tableData); 


  