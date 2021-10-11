function weather(city, mark, addValue){
    console.log(city, mark, addValue);
}
weather (17);
// 17 undefined undefined

// ********1********
function weather2(city, mark, addValue){
    mark = mark || 45 ;
    console.log(city, mark, addValue);
}
weather2 (17);
// 17 45 undefined

// ********2********
function weather3(city, mark, addValue){
    mark = mark || 45 ;
    console.log(city, mark, addValue);
}
weather2 (17, 23);
// 17 23 undefined

// ********3********
function weather4(city, mark, addValue){
    mark = mark || 45 ;
    addValue = addValue || 3 ;
    console.log(city, mark, addValue);
}
weather4 (17, 23);
// 17 23 3

// ********4********
//use better
function weather5(city, mark = 45, addValue=3){
    console.log(city, mark, addValue);
}
weather5 (17, 23);
// 17 23 3


// ********5********
function weather6(city, mark = 45, addValue){
    console.log(city, mark, addValue);
}
weather6 (17, 23);
// 17 23 undefined

// ********6********
function weather7(city, addValue, mark = 45){
    console.log(city, mark, addValue);
}
weather7 (17, 23);
// 17 45 23