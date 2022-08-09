
////////// PROBLEM 5 //////////
/*
  Write a function called uniq that takes in an array and a callback function.
  Remove any duplicate values from the array, and invoke the callback with the modified array as an argument.
  Hint: you can use a nested for loop to do this.
*/

"use strict";

const defaultCallBack = (array, oldArray) => console.log(`The array has ${array.length} elements.  
${oldArray.length - array.length} duplicate elements were removed.`);

const myCallBack = (array, oldArray) => array.length <= 15 ? console.log( 
    `\n\tDear StackOverFlow.com & Reddit,

    \tMy horrible boss, Kelvin asked me to write an arrow function to remove dupes from
    \tan array like this [${oldArray}] using nested loops instead of a Set. 
    
    \tNested loops bro!!

    \tApparently, Kevin Corporation is ok with this dude directing us to create algorithms with a 
    \ttime complexity of O(n^2) to accomplish the task.  
    
    \tI'm pretty sure at Google they solve this problem in one line using a Set...  

    \tconst unique = (array, func => func([...new Set(array)]);' 
        
    \tto get [${array}].

    \tImagine if the original array had 1000 items. LIKE OBVIOUSLY, the set solution would be faster,
    \tthan the nested loop solution like 1,000 times faster.  Yes - 1,000 times, right bro?

    \tDudes, what should I do?
    
    
    \tSigned, 
    
    \tYours truly.  A geeky - disgruntled - stackoverflow lovin' employee of Kevin Corporation Inc.\n`)
    
    : defaultCallBack(array, oldArray);

    const uniqUsingLoops = (array, callback = defaultCallBack, showDebug = false) => {
        const noDupesArray = [...array];
        let counter = 0; // debug
      
        for (let outer = 0; outer < noDupesArray.length; outer++) {
          for (let inner = 0; inner < noDupesArray.length; inner++) {
            counter++; // debug
      
            if (outer === inner) continue;
      
            if (noDupesArray[outer] === noDupesArray[inner]) {
                noDupesArray.splice(inner, 1);
                inner--;           
            }
          }

        }
        if (showDebug) console.log(`${this.name} executed ${counter} times, BRO!!`); // debug
        callback(noDupesArray, array);
    }
    
    
    const uniq = (array, callback = defaultCallBack) => {
        
        //I can't use a set so...
        const this_is_not_a_set_kelvin = {};
        for (const item of array) 
            this_is_not_a_set_kelvin[item] = item;
        callback([...Object.keys(this_is_not_a_set_kelvin)], array);
        
      
    }

    const uniqUsingSet = (array, callback = defaultCallBack) => callback([...new Set(array)], array);

    const arrayMaker = (size, maxValue) => 
        Array(size).fill(1).map( () => Math.floor(Math.random() * maxValue) + 1);

    
    const dupArray = arrayMaker(15, 15);
    uniq(dupArray, myCallBack); 
    uniqUsingLoops(dupArray, myCallBack);  

    let enableTimings = false;

    if (enableTimings) {
        
        const timeMyFunction = (func, ...parameters) => {
            const startTime = new Date().getTime();
            func(...parameters);
            return new Date().getTime() - startTime;


        }    
        
        const printTimings = (name1, name2, name3, tm1, tm2, tm3) => {
           
            let decimal = 0;

            console.log(`Calling ${name1} took ${tm1} ms to complete.`);  
            console.log(`Calling ${name2} took ${tm2} ms to complete.`);
            console.log(`Calling ${name3} took ${tm3} ms to complete.`);
           
            decimal = (tm1/tm2).toLocaleString(undefined, { minimumFractionDigits: 2 });  
            console.log(`${name2} executes ${decimal} faster than ${name1}, BRO!!`);
            decimal = (tm3/tm2).toLocaleString(undefined, { minimumFractionDigits: 2 })
            console.log(`${name2} executes ${decimal} faster than ${name3}, BRO!!`);

        }

    
        console.log(`\nBegin Test \n`);   

        
        let arrayWithDupes = arrayMaker(20_000, 500_000); 
        console.log(`Calling uniq`);
        console.log(`*************`)
        let t1 = timeMyFunction(uniq, arrayWithDupes);
        console.log(`\nCalling uniqUsingSet`);
        console.log(`*********************`);
        let t2 = timeMyFunction(uniqUsingSet, arrayWithDupes);
        console.log(`\nCalling uniqUsingLoops`);
        console.log(`*****************`);
        let t3 = timeMyFunction(uniqUsingLoops, arrayWithDupes);
        console.log(`\nTiming Summary 20K`);
        console.log(`*****************`);
        printTimings(uniq.name, uniqUsingSet.name, uniqUsingLoops.name, t1, t2, t3);

        console.log(`\n`);
        
        arrayWithDupes = arrayMaker(200_000, 1_000_000)
        console.log(`Calling uniq`);
        console.log(`*************`);
        t1 = timeMyFunction(uniq, arrayWithDupes);
        console.log(`\nCalling uniqUsingSet`);
        console.log(`*********************`);
        t2 = timeMyFunction(uniqUsingSet, arrayWithDupes);
        console.log(`\nCalling uniqUsingLoops`);
        console.log(`*****************`);
        t3 = timeMyFunction(uniqUsingLoops, arrayWithDupes, true);
        console.log(`\nTiming Summary 200K`);
        console.log(`*****************`);
        printTimings(uniq.name, uniqUsingSet.name, uniqUsingLoops.name, t1, t2, t3);

        console.log(`\n`);

        arrayWithDupes = arrayMaker(2_000_000, 10_000_000);
        console.log(`Calling uniq`);
        console.log(`*************`);
        t1 = timeMyFunction(uniq, arrayWithDupes);
        console.log(`\nCalling uniqUsingSet`);
        console.log(`*********************`);
        t2 = timeMyFunction(uniqUsingSet, arrayWithDupes);
        console.log(`\nCalling uniqUsingLoops`);
        console.log(`*****************`);
        t3 = timeMyFunction(uniqUsingLoops, arrayWithDupes);
        console.log(`\nTiming Summary 2,000K`);
        console.log(`*****************`);
        printTimings(uniq.name, uniqUsingSet.name, uniqUsingLoops.name, t1, t2, t3);
        console.log(`\nEnd Test\n`);
    }




