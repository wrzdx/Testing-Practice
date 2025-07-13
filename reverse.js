export default function reverseString(string=null) {
    if (!string || !string.length) return string;

    return string.split("").reverse().join("");
}