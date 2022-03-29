

// Solution 1

/*function countPets(pets, text) const pets = ["cat", "dog"];const count = (pets.text.matchAll(/cat|dog/g) || []).length;return count;*/
function countPets() {
    var pets = ["cat", "dog"];
    var s = "My cat and dog fight. Dog is more friendly.";
    for (let i = 0; i < pets.length; i++) {
        if (s.includes(pets[i])) {
            console.log("pets = " + pets[i].length);
        }
        else {
            console.log("no pets :( ");
            break;
        }
    }
}

// output: ‘pets = 3’

// countPets();




/**
 * 2. Write a function that takes a string as input and returns the longest word in the sentence. 
 * The following is an example of an input and the expected output:

"This is a short sentence." should return the word "sentence". 
**/

// Solution 2

function longestWord(string) {
    var longest = "";
    var words = string.split(" ");

    for (var i = 0; i < words.length; i++) {
        if (longest.length < words[i].length)
            longest = words[i];
    }
    return longest; // or return longest.length for numerical value
}

longestWord("this is a sentence");

// output: "sentence"

