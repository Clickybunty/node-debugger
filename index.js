// index.js
var items = [1, "2", 3, "four", 5, null, undefined, 6];
const results = [];

items.forEach((i) => {
  if (typeof i === "number") {
    if (i % 2 === 0) results.push(i * 2);
  } else if (i === null) {
    console.log("Found a null item");
  } else {
    results.push(parseInt(i));
    console.log("Found an item that is not a number:", i);
  }
});

console.log("Original items:", items);
console.log("Filtered and transformed items:", results);
