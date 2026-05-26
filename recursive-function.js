function reverseString(string) {
    if (string.length === 0) {
        return string;
    }
    return string[string.length - 1] + reverseString(string.slice(0, string.length - 1));
};

console.log(reverseString("Hello"));