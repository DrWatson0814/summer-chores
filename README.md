# <u>Summer Chores</u>


## <u>Description:</u>

	Summer Chores is a JavaScript program that shows the outcome of a list of chores. Specifically, it shows whether a certain chore was either completed or if the person fell asleep before the chore was finished.



## <u>Installation Instructions:</u>

	1. Make sure Git and VsCode are installed on your computer.
	2. Open VsCode and select New File.
	3. Use ctrl + ` to open a new terminal.
	4. In the terminal run the command `git clone https://github.com/drwatson0814/summer-chores.git`. This will clone the repository to your computer.


## <u>Usage Instructions:</u>

	1. Open a Terminal.
	2. Check if Node.js is installed by running the command `npm -v`. If Node.js' version number is not displayed, then download and install Node.js.
	3. Navigate to the folder containing the JvaScript file named, summer-chores.js.


## <u>Examples:</u>

This is an example showing the main function and also the method chain utilizing async/await that the program is intended to teach and highlight.


```javascript
async function doSummerChores(name) {

  try {

    const mow = await mowYard(name);

    console.log(mow);

  

    const eat = await weedEat(name);

    console.log(eat);

  

    const trim = await trimHedges(name);

    console.log(trim);

  

    const collect = await collectWood(name);

    console.log(collect);

  

    const water = await waterGarden(name);

    console.log(water);

  

    console.log(`${name} finished all of the chores!`);

  } catch (error) {

    console.error(error);

  }

}
```




## <u>Contributing:</u>

Anyone who wishes to add to or improve on the program, can feel free to fork and do what they can.


## <u>Licensing:</u>

This project can be freely used by anyone, and I relinquish all rights I have to its ownership.


## <u>Credits:</u>

Thank you to all of the instructors and mentors at Code:You.