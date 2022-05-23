const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];



console.table(characters);

// MAP function

// Get an array of all names
console.log("Array of names only : ", characters.map((x) => {
    return x.name;
}));

// Get an array of all first name only
console.log('Array of first name only : ',characters.map(x => x.name.split(' ')[0]));


// Get an array of all heights

const heights = characters.map(function(x){
    return x.height;
})
console.log('Array of heights = ', heights);
console.table(heights);


// Get an array of objects with just name and height properties

console.log(characters.map(x => {    
    return {
        name : x.name,
        height : x.height
};
}));


// Get an array of all first names

console.log(characters.map(x => {
    return x.name.split(' ')[0];
}));





// REDUCE array function 

// Get the total mass of all characters

const totalMass = characters.reduce(function(acc, item){
    acc = acc + Number(item.mass);
    return acc;
}, 0) // 0 is acc variable initial value

console.log('Get the total mass of all characters : ', totalMass);


// Get the total height of all characters

const getTotalHeightOfCharacters = characters.reduce((acc, x) => {
    return acc+=Number(x.height);
}, 0);

console.log('Get the total height of all characters : ', getTotalHeightOfCharacters)



// Get the total number of characters in all the character names

const getTotalCharactersInAllNames = characters.reduce((acc, x) => {
    return acc += Number(x.name.replace(' ','').length);
}, 0);

console.log('Get the total number of characters in all the character names : ', getTotalCharactersInAllNames);

 
// Get the total number of characters by eye color (hint. a map of eye color to count)

const charactersByEyeColor = characters.reduce((acc, x) => {
    if(acc[x.eye_color])
        acc[x.eye_color] += 1;
    else 
        acc[x.eye_color] = 1;

        return acc;
}, {});

console.log('Get the total number of characters by eye color : ', charactersByEyeColor);




// FILTER array function

// Get characters with mass greater than 100
console.log('Get characters with mass greater than 100 : ', characters.filter(x => {
    return x.mass > 100;
}));


// Get characters with height less than 200

console.log('Get characters with height less than 200 : ', characters.filter(x => {
    return x.height <200;
}));


// Get all male characters

console.log('Get all male characters : ', characters.filter(x => x.gender == 'male'));

// Get all female characters


console.log('Get all female characters : ', characters.filter(x => x.gender == 'female'));


// SORT array method 
// Sort by name

console.log('Sort by name : ', characters.sort((a,b) => {
    if(a.name < b.name){
        return -1;
    }else if(a.name > b.name){
        return 1;
    }else{
        return 0;
    }
}))




// Sort by mass

console.log('sort by mass ' , characters.sort((a,b) => {
    if(a.mass < b.mass){
        return -1;
    }else if(a.mass > b.mass){
        return 1;
    }else{
        return 0;
    }
}));

// Sort by height

console.log('Sort by height : ', characters.sort((x, y) => {
    if(x.height < y.height) return -1;
    else if(x.height > y.height) return 1;
    else return 0;
}));

// Sort by gender

console.log('Sort by gender : ', characters.sort((x,y) => {
    if(x.height < y.height) return -1;
    else if(x.height > y.height) return 1;
    else return 0;
}));



// EVERY javascript array function 
console.log('Every javascript array methods:');
// Does every character have blue eyes?
// Does every character have mass more than 40?
// Is every character shorter than 200?
// Is every character male?


// SOME javascript array function 

console.log('Sort javascript array methods:');

// Is there at least one male character?
// Is there at least one character with blue eyes?
// Is there at least one character taller than 200?
// Is there at least one character that has mass less than 50?

