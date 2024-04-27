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

function evalQuery(exp){
    console.log(exp);
}




buttons.forEach(btn => {
    btn.addEventListener('click', btnHandler.bind(btn))
})


