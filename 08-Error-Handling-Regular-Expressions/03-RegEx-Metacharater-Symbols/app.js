let re;
re = /hello/; // Literal Characters
re = /hello/i; // i flag - Case insensitive

// ========== Metacharacter Symbols ==========
re = /^h/i; // The whole string must start with specified character/string
re = /d$/i; // The whold string must end with specificied character/string
re = /^hello$/i; // The whole string must start and end with the specified character/string
re = /^h.llo$/i; // . is wildcard for just exactly ONE character
re = /^h*llo$/i; // * is wildcard for 0 or any number of characters
re = /gre?a?y/i; // The character right before ? is optional. If there are many ?, just one can be matched
re = /gre?a?y\?/i; // Escape character. Use \ to escape the special characters from the regex

// ========== Brackets [] - Character Sets ==========
re = /gr[ae]y/i; // Must be one of the characters inside [], cannot be missing, cannot be all of them
re = /[GF]ray/;
re = /[^GF]ray/; // Match any character at location of [^...] except for those characters inside []
re = /[A-Z]ray/; // Match only uppercase charaters at location of []
re = /[a-z]ray/; // Match only lowercase charaters at location of []
re = /[A-Za-z]ray/; // Match characters of any case at location of []
re = /[0-9]ray/; // Match any digit between 0 and 9 at location of []
re = /[0-9][0-9]ray/;

// ========== Braces {} - Quantifiers ==========
re = /Hel{2}o/i; // To match, there must be the same quantity of the character right before {} as the number specified inside {}
re = /Hel{2, 4}o/i; // {a, b} - there can be a to b number of that character before {}
re = /Hel{2,}o/i; // {a,} - there must be at least a number of that character before {}

// ========== Parentheses () - Grouping ==========
re = /^([0-9]x){3}$/; // Group components together to extend the effect of {} or any similar operator

// ========== Shorthand Character Classes ==========
re = /\w/; // One single word character - alphanumeric or an underscore _
re = /\w+/; // One or more word character - alphanumeric or an underscore _
re = /\W/; // One single non-word character
re = /\d/; // One single digit
re = /\d+/; // One or more digit
re = /\D/; // One single non-digit
re = /\s/; // One single whitespace character
re = /\S/; // One single non-whitespace character
re = /Hell\b/i; // Word boundary - Match this exact word only, not this pattern inside other words

// ========== Assertions ==========
re = /x(?=y)/; // Match x only if followed by y
re = /x(?!y)/;// Match x only if not followed by y

// ========== String to match ==========
const str = "xyxxy";

// ========== Log Results ==========
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
  if (re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} does NOT match ${re.source}`);
  }
}

reTest(re, str);