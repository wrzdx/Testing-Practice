export default function capitalize(string=null) {
    if (!string || !string.length || ('A' <= string.at(0) && string.at(0) <= 'Z')) return string;
    
    return String.fromCharCode(string.charCodeAt(0) - 32) + string.slice(1);
}