"use strict";
let x = Number(prompt("Enter value", "0"));

let start = new Date();
let b = isPrime(x);
let stop = new Date();
let elapsed = stop - start;

document.write("is it a prime number?: "+b, "<br>time elapsed: "+elapsed+" miliseconds");