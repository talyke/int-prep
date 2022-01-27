// JavaScript source code
//find length of longest subString without repeating charachters

//Javascript

function lengthOfLongestSubstring(s) {
    if (!s || s === '') return 0;

    let startOfKnownSubstring = 0;
    let lengthOfKnownSubstring = 1;
    let maxFoundLength = 1;

    for (let a = 1; a < s.length; a++) {
        const substring = s.substring(startOfKnownSubstring, a);
        const charsInPrevKnownSubstring = substring.indexOg(s[a]);
        if (charsInPrevKnownSubstring >= 0) {
            //calculate to start next substring at index[2]
            startOfKnownSubstring += (charsInPrevKnownSubstring + 1);
            // find new length of second substring
            lengthOfKnownSubstring = a - startOfKnownSubstring + 1;

        } else {
            lengthOfKnownSubstring++;
            if (lengthOfKnownSubstring > maxFoundLength) maxFoundLength++;
        }
    }

    return maxFoundLength;

};

console.log(lengthOfLongestSubstring('abrkaabcdefghijjxxx'));
