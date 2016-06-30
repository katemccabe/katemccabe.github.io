//objectValues() : Should take an object and return its values in an array
// function objectValues(object) {
//     return Object.keys(object).map(key => object[key]);
// }

function objectValues(obj) {
    let output = [];
    for(var key in obj) {
        output.push(obj[key]);
    }
    return output;
}

//keysToString() : Should take an object and return all its keys in a string each separated with a space
function keysToString(obj) {
    let output = "";
    let values = [];
    for(var key in obj) {
        values.push(key);
    }
    for(var i = 0; i < values.length; i++) {
        output += values[i];
        if(i < values.length - 1) {
            output += " ";
        }
    }
    return output;
}

//valuesToString() : Should take an object and return all its string values in a string each separated with a space
function valuesToString(obj) {
    let output = "";
    let values = [];
    for(var key in obj) {
        values.push(key);
    }
    for(var i = 0; i < values.length; i++) {
        if(typeof obj[values[i]] === "string") {
            output += obj[values[i]] + " ";
        }    
    }
    return output.slice(0,-1);
}

//arrayOrObject() : Should take one argument and return 'array' if its an array and 'object' if its an object
function arrayOrObject(value) {
    if(Array.isArray(value)) return "array";
        return "object";
}

//capitalizeWord() : Should take a string of one word, and return the word with its first letter capitalized
function capitalizeWord(string) {
    return string[0].toUpperCase() + string.slice(1);
}

//capitalizeAllWords() : Should take a string of words and return a string with all the words capitalized
function capitalizeAllWords(string) {
    var words = string.split(" ");
    for(var i = 0; i < words.length; i++) {
        words[i] = capitalizeWord(words[i]);
    }
    return words.join(" ");
}

//welcomeMessage() : Should take an object with a name property and return 'Welcome <Name>!'
function welcomeMessage(obj) {
    return "Welcome " + capitalizeWord(obj.name) + "!";
}

//profileInfo() : Should take an object with a name an a species and return '<Name> is a <Species>'
function profileInfo(obj) {
    return capitalizeWord(obj.name) + " is a " + capitalizeWord(obj.species);
}

//maybeNoises() : Should take an object, if this object has a noises array return them as a string separated by a space, if there are no noises return 'there are no noises'
function maybeNoises(obj) {
    if(Array.isArray(obj.noises) && obj.noises.length > 0) {
        return obj.noises.join(" ");
    }
    return "there are no noises";
}

//hasWord() : Should take a string of words and a word and return true if <word> is in <string of words>, otherwise return false.
function hasWord(string1, string2) {
    if(string1.includes(string2)) return true;
        return false;
}

//addFriend() : Should take a name and an object and add the name to the object's friends array then return the object
function addFriend(name, obj) {
    obj.friends.push(name);
    return obj;
}

//isFriend() : Should take a name and an object and return true if <name> is a friend of <object> and false otherwise
function isFriend(name, obj) {
    if(obj.friends === undefined) return false;
    if(obj.friends.indexOf(name) !== -1) return true;
        return false;
}

//nonFriends() : Should take a name and a list of people, and return a list of all the names that <name> is not friends with
function nonFriends(name, list) {
    var holder;
    for(var i = 0; i < list.length; i++) {
        if(name === list[i].name) {
            holder = i;
        }
    }
    var notFriendsList = [];
    for(var j = 0; j < list.length; j++) {
        if(list[j].name !== name) {
            if(!isFriend(list[j].name, list[holder])) notFriendsList.push(list[j].name);
        }
    }
    return notFriendsList;
}

//updateObject() : Should take an object, a key and a value. Should update the property <key> on <object> with new <value>. If <key> does not exist on <object> create it.
function updateObject(obj, key, value) {
    obj[key] = value;
    return obj;
}

//removeProperties() : Should take an object and an array of strings. Should remove any properties on <object> that are listed in <array>
function removeProperties(obj, strings) {
    for(var i = 0; i < strings.length; i++) {
        delete obj[strings[i]];
    }
}

//dedup() : Should take an array and return an array with all the duplicates removed
function dedup(array) {
    var uniqueValues = [];
    for(var i = 0; i < array.length; i++) {
        if(uniqueValues.indexOf(array[i]) === -1) {
            uniqueValues.push(array[i]);
        }
    }
    return uniqueValues;
}





