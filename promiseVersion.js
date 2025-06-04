function mowYard(name) {
    setTimeout(() => {
    console.log(`${name} finished mowing the yard.`);
    }, 0);
}


function weedEat(name) {
    const gotTired = Math.random() < .05;
    if(gotTired) {
        // return `${name} fell asleep after mowing the yard.`;
        throw new Error(`${name} fell asleep after mowing the yard`);
    }else{
        console.log(`${name} finished using the weed eater.`);
    };
    }


function trimHedges(name) {
    const isTired = Math.random() < 0.25
    if(isTired) {
        // return `${name} fell asleep after weed eating the yard.`;
        throw new Error(`${name} fell asleep after weed eating the yard`);
    }else{
        console.log(`${name} finished trimming the hedges.`);
    }
    };



function collectWood(name) {
    const isTired = Math.random() < .35
    if(isTired) {
        // return `${name} fell asleep after trimming the hedges.`;
        throw new Error(`${name} fell asleep after trimming the hedges.`);
    }else{
        console.log(`${name} finished collecting wood.`);
    }
    };


function waterGarden(name) {
    const isTired = Math.random() < .20
    if(isTired == true) {
        // return `${name} fell asleep after collecting wood.`;
        throw new Error(`${name} fell asleep after collecting woods`);
    }else{
        console.log(`${name} finished watering the garden.`);
    }
    };


function finishedChores(name) {
    console.log(name + ' finished all of their chores!');
    };



function doSummerChores(name) {
    new Promise ((resolve, reject) => {
        resolve (() => {
            return mowYard(name)
    }).then(() => {
        return weedEat(name);
   
    }).then(() => {
        return trimHedges(name);
 
    }).then(() => {
        return collectWood(name);
    
    }).then(() => {
        return waterGarden(name);
   
    }).then(() => {
        return finishedChores(name);
    }).catch(error => {
        console.error(error.message);
    })
});
}





doSummerChores('rex');