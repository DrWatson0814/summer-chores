function mowYard(name) {
const chores = new Promise ((resolve, reject) => {
        setTimeout(() => {
                resolve(`${name} finished mowing the yard.`);
            }, 2000);
    });
}
function weedEat(name) {
    const isTired = Math.random() < .40;
    const weed = new Promise((resolve, reject) => {
        if(isTired) {
            resolve(`${name} finished weed eating the yard.`);
        }else {
            reject (`${name} fell asleep after mowing the yard.`);
        }
    });
}
function trimHedges(name) {
    const isTired = Math.random() < .25;
    const trim = new Promise((resolve, reject) => {
        if(isTired) {
            resolve(`${name} finished trimming the hedges.`);
        }else {
            reject(`${name} fell asleep after weed eating the yard.`);
        }
    });
}
function collectWood(name) {
    const isTired = Math.random() < .35;
    const collect = new Promise((resolve, reject) => {
        if(isTired) {
            resolve(`${name} finished collecting wood.`) ;
        }else {
            reject(`${name} fell asleep after trimming the hedges.`) ;
        }
    });
}
function waterGarden(name) {
    const isTired = Math.random() < .20;
    const water = new Promise((resolve, reject) => {
        if(isTired) {
            resolve(`${name} finished weed watering the garden.`) ;
        }else {
            reject(`${name} fell asleep after collecting the wood.`) ;
        }
    });
}
function finishedChores(name) {
    console.log(`${name} finished all of the chores!`) ;
};


function doSummerChores(name) {
    mowYard(name)
    .then(value => {
        console.log(value);
        return weedEat(name);
    })
    .then(value => {
    console.log(value);
    return trimHedges(name);
    })
    .then(value => {
        console.log(value);
        return collectWood(name);
    })
    .then(value => {
        console.log(value);
        return waterGarden(name);
    })
    .then(value => {
        console.log(value);
        return finishedChores(name);
    })
    .catch(error => console.error())
}    


doSummerChores('AJ');