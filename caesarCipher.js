export default function caesarCipher(text, shift) {
    const converter = (char) => {
        if (char >= "a" && char <= 'z') {
            const code = char.charCodeAt(0);
            const newCode = code + shift;
            if (newCode > 'z'.charCodeAt(0)) {
                return String.fromCharCode(newCode - 'z'.charCodeAt(0) + 'a'.charCodeAt(0) - 1)
            } else {
                return String.fromCharCode(newCode);
            }
        } 
        
        if (char >= "A" && char <= 'Z') {
            const code = char.charCodeAt(0);
            const newCode = code + shift;
            if (newCode > 'Z'.charCodeAt(0)) {
                return String.fromCharCode(newCode - 'Z'.charCodeAt(0) + 'A'.charCodeAt(0) - 1)
            } else {
                return String.fromCharCode(newCode);
            }
        }

        return char;
    }
    return text.split("").map(converter).join("");
}
