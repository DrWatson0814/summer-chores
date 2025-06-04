function doSummerChores(name) {
    mowYard(name, () => {
        weedEat(name, () => {
            trimHedges(name, () => {
                collectWood(name, () => {
                    waterGarden(name, () => {
                        finishedChores(name);
                    });
                });
            });
        });
    });
}



function mowYard(name, callback) {
    setTimeout(() => {
    console.log(`${name} finished mowing the yard.`);
    callback();
    }, 2000);
}


function weedEat(name, callback) {
    let gotTired = Math.random() < .40;
    if(gotTired) {
        console.log(`${name} fell asleep after mowing the yard.`);
    }else{
        console.log(`${name} finished using the weed eater.`);
        callback();
    };
    }


function trimHedges(name, callback) {
    const isTired = Math.random() < 0.25
    if(isTired) {
        console.log(`${name} fell asleep after weed eating the yard.`);
    }else{
        console.log(`${name} finished trimming the hedges.`);
        callback();
    }
    };



function collectWood(name, callback) {
    const isTired = Math.random() < .35
    if(isTired) {
        console.log(`${name} fell asleep after trimming the hedges.`);
    }else{
        console.log(`${name} finished collecting wood.`);
        callback();
    }
    };


function waterGarden(name, callback) {
    const isTired = Math.random() < .20;
    if(isTired == true) {
        console.log(`${name} fell asleep after collecting wood.`);
    }else{
        console.log(`${name} finished watering the garden.`);
        callback();
    }
    };


function finishedChores(name) {
    console.log(name + ' finished all of their chores!');
    };


    doSummerChores("Nick");








