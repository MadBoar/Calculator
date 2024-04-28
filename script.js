const buttons = document.querySelectorAll("button");
const [answer, query] = document.querySelectorAll('.screen');

function btnHandler() {
    const btn = this.textContent;

    if(btn === 'CE'){
        query.textContent = "0";
    } else if(btn === '='){
        query.textContent = "0"
    } else if("+-/*".includes(btn)){    //Checks if '+-/*' button was pressed
        
        if("+-/*".includes(query.textContent.slice(-1))){   //Checks if prior button pressed was '+-/*'
            query.textContent = query.textContent.slice(0,-1) + btn; 
        } else {
            query.textContent += btn;
        }

    } else {
        if(query.textContent === "0")  {
            query.textContent = btn;
        } else {
            query.textContent += btn;
        }
    }

    if(!("+-/*".includes(btn) && "+-/*".includes(query.textContent.slice(-1)))){
        evalQuery(query.textContent);
    }
}

function evalExp(exp){

    if(exp.includes("*") || exp.includes("/")){

        let index = exp.findIndex(el => el === '*' || el ==='/');

        let first = parseFloat(exp[index - 1]);
        let second = parseFloat(exp[index + 1]);

        if(exp[index] === "*") {
            exp.splice(index-1,3, (first * second));
            return evalExp(exp);
        } else {
            exp.splice(index-1,3, (first / second))
            return evalExp(exp);
        }
    } else if (exp.includes("+") || exp.includes("-")) {
        let index = exp.findIndex(el => el === '+' || el ==='-');

        let first = parseFloat(exp[index - 1]);
        let second = parseFloat(exp[index + 1]);

        if(exp[index] === "+") {
            exp.splice(index-1,3, (first + second));
            return evalExp(exp);
        } else {
            exp.splice(index-1,3, (first - second))
            return evalExp(exp);
        }
    }

    return exp;
}

function evalQuery(exp){
    answer.textContent = exp;
    const components = exp.split(/([-+*\/])/g);

    const sum = evalExp(components);
    answer.textContent = sum;
    console.log(sum)
}

// -+*\/


buttons.forEach(btn => {
    btn.addEventListener('click', btnHandler.bind(btn))
})


