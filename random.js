# code-bot

var names = {
		0: {
			"name": "Mike",
			"gender": "male"
			},
		1: {
			"name": "Matt",
			"gender": "male"
			},
		2: {
			"name": "Rich",
			"gender": "male"
			},
		3: {
			"name": "Taylar",
			"gender": "female"
			},
		4: {
			"name": "Court",
			"gender": "female"
			},
		5: {
			"name": "Tiff",
			"gender": "female"
			},
		6: {
			"name": "Nick",
			"gender": "male"
			},
		7: {
			"name": "Megan",
			"gender": "female"
		}
};


// vars for appending to favorite friend html
var favorite = document.getElementById("favorite");
var para = document.createElement("p");

// gives random name with gender from names variable
var count = 0;
for (var i in names) {
	count++;	
} 
var result = Math.floor(Math.random() * (count - 0) + 0);	
var bestFriend = document.createTextNode("My best friend is " + names[result]["name"] + "." + " They are " + names[result]["gender"] + ".");

// appends to "My favorite friend is:" html
para.appendChild(bestFriend);
favorite.appendChild(para);

// pulls all name values from names variable
var friends = [];

for (var i in names) {
	friends.push(names[i]["name"]);
} 
friends = friends.sort();

var node = document.getElementById("friends");
var ul = document.createElement("ul"); 


// adds <li></li> to each string in friends variable and appends it to "Here are my friends:" html
for (var i in friends) {
	var li = document.createElement('li')
	var content = document.createTextNode(friends[i]);

	li.appendChild(content);
	ul.appendChild(li);
}
node.appendChild(ul);


//on click function to refresh favorite friend
function newFriend() {
	location.reload();
}


// changes color of background depending on gender
if (names[result]["gender"] == "male") {
	document.body.style.backgroundColor = "#33ccff";
} else {
	document.body.style.backgroundColor = "#ff99ff";
}
