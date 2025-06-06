
function mowYard(name) {
    return new Promise ((resolve, reject) => {
    resolve `${name} finished mowing the yard.`;
});
}
function weedEat(name) {
    const isTired = Math.random() < .40;
    return new Promise((resolve, reject) => {
        if(isTired) {
            resolve `${name} finished weed eating the yard.`;
        }else {
            reject `${name} fell asleep after mowing the yard.`;
        }
    });
}
function trimHedges(name) {
    const isTired = Math.random() < .40;
    return new Promise((resolve, reject) => {
        if(isTired) {
            resolve `${name} finished trimming the hedges.`;
        }else {
            reject `${name} fell asleep after weed eating the yard.`;
        }
    });
}
function collectWood(name) {
    const isTired = Math.random() < .40;
    return new Promise((resolve, reject) => {
        if(isTired) {
            resolve `${name} finished collecting wood.`;
        }else {
            reject `${name} fell asleep after trimming the hedges.`;
        }
    });
}
function waterGarden(name) {
    const isTired = Math.random() < .40;
    return new Promise((resolve, reject) => {
        if(isTired) {
            resolve `${name} finished weed watering the garden.`;
        }else {
            reject `${name} fell asleep after collecting the wood.`;
        }
    });
}
function finishedChores(name) {
    console.log `${name} finished all of the chores!`;
};


