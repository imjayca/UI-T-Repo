// Check if a given string is palindrom or not!

// Method1:
function checkPalindrom(str) {
    return str == str.split('').reverse().join('');
}

document.write(checkPalindrom("kate") + "</br>");

// Method2:
function isPalindrom(str) {
    if (str.length === 0) {
        return true;
    }
    if (str[0] !== str[str.length - 1]) {
        return false;
    }
    return isPalindrom(str.slice(1, str.length - 1));
}

document.write(isPalindrom("ABADCD") + '</br>');


// ----------------------------------------------------------------------------------------


// Write a function that accepts a string as a parameter and converts the second letter of the string of words into capital letter
function uppercase(str) {
    var array1 = str.split(' ');
    var newarray1 = [];

    for (var x = 0; x < array1.length; x++) {
        newarray1.push(array1[x].charAt(0).toUpperCase() + array1[x].slice(1));
    }
    return newarray1.join(' ');
}
document.write(uppercase("the quick brown fox")+"<br/>");


// ----------------------------------------------------------------------------------------


// Convert temp from C to F
function convert(degree) {
    if (degree == "C") {
        F = document.getElementById("c").value * 9 / 5 + 32;
        document.getElementById("f").value = Math.round(F);
    } else {
        C = (document.getElementById("f").value - 32) * 5 / 9;
        document.getElementById("c").value = Math.round(C);
    }
}


// ----------------------------------------------------------------------------------------


//Program that revers the string
function reverse(s) {
    return s.split("").reverse().join("");
}

document.write(reverse("hello") + "<br/>");


// ----------------------------------------------------------------------------------------


//Count the number of vowels that are present in a given string.
function countVowels(subject) {
    return subject.match(/[aeiou]/gi).length;
}

document.write(countVowels("umbrella") + "<br/>");