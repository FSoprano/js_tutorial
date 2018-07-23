// Match extended zip codes like 10118-0110
zipCode = /\d{5}-\d{4}/g;
// 'g' is the global flag. It finds all occurrences of a regex in a a string
let s = "Beverly Hills 90210 was a '90s TV show set in Los Angeles.";
s += " 91210-0118 is the extended zip code of that area.";

console.log(s.match(zipCode));