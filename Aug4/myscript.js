// ClassWork1: Check if a given string is palindrom or not!

// Method1:
function checkPalindrom(str) {
    return str == str.split('').reverse().join('');
}

document.write(checkPalindrom("dad") + "</br>");

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

document.write(isPalindrom("ABADCD" + "</br>"));


// ClassWork2: Write a function that accepts a string as a parameter and converts the second letter of the string of words into capital letter


// ClassWork2: Convert temp from C to F
function convert(degree) {
    if (degree == "C") {
        F = document.getElementById("c").value * 9 / 5 + 32;
        document.getElementById("f").value = Math.round(F);
    } else	{
        C = (document.getElementById("f").value -32) * 5 / 9;
        document.getElementById("c").value = Math.round(C);
    }
}

// ClassWork2: Program that revers the string
function reverse(s){
    return s.split("").reverse().join("");
}

document.write(reverse("hello"));



// ClassWork2: Count the number of vowels that are present in a given string.
