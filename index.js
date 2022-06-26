function SplitText(text){
    let current = [];
    let result = [];
    for(var i = 0; i < text.length; i++){
        if(IsCapital(text[i]) && !IsCapital(text[i-1]) && text[i-1] != ' ' && text[i-1] != '-'){
            result.push(current.join(''));
            current = [];
        }
        current.push(text[i]);
    }
    result.push(current.join(''));
    return result.filter(x => x.length > 0);    
}

function IsCapital(text = ''){
    if(text.length == 0){
        return false;
    }
    if(text == ' ') return false;
    return text[0] == text[0].toUpperCase() && text[0] != text[0].toLowerCase();
}

let text = "Linux ToolsLinuxAlgorithms and Data StructuresNode.js"

let result = SplitText(text);

console.log(result)