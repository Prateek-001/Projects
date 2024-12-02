import superheroes from 'superheroes';
import {randomSuperhero} from 'superheroes';

const hero= randomSuperhero();

console.log('I am $(hero)!');
// var generateName = require('sillyname');
// var sillyName = generateName();

// console.log("my name is $(sillyName).");
//     const fs = require("fs");
//     // fs.writeFile("message.txt","Hello from node JS",(err) => {
//     //     if (err) throw err;
//     //     console.log('The file has been saved!');
//     //   });

//   fs.readFile("./message.txt","utf8",(err, data) => {
//     if (err) throw err;
//     console.log(data);
//   })