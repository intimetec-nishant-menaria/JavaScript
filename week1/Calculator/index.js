let screenContent = "";

const screen = document.getElementById("screen");

function evaltation(rightHandValue , leftHandValue , operation) {
  if (rightHandValue === undefined || leftHandValue === undefined) return NaN;

  let result = 0;

  switch (operation) {
    case "+": {
      result = leftHandValue + rightHandValue;
      break;
    }
    case "-": {
      result = (leftHandValue - rightHandValue);
      break;
    }
    case "/": {
      result = (leftHandValue / rightHandValue);
      break;
    }
    case "%": {
      result = (leftHandValue % rightHandValue);
      break;
    }
    case "*": {
      result =(leftHandValue * rightHandValue);
      break;
    }
  }
  return result;
}

function evaluteExpression(expression) {
  let operator = new Array();
  let operand = new Array();
  let i=0;
  while( i < expression.length ) {
    if(Number(expression[i])>=0 && Number(expression[i])<=9 ){
        let number = "";
        while( i < expression.length && (!isNaN( expression[i]) || expression[i]==".") ){
            number+=expression[i++];
        }
        operand.push(Number(number));
    }else{

        while( operator.length !==0 && precedience(expression[i] <=  precedience(operator[operator.length - 1 ]))){
            let operation = operator.pop();
            let rightHandValue = operation.pop();
            let leftHandValue = operand.pop();
            
            operand.push( evaltation(rightHandValue , leftHandValue , operation));
        }

        operator.push(expression[i++]);
    }
  }

  while( operator.length !==0){
    let operation = operator.pop();
    let rightHandValue = operand.pop();
    let leftHandValue = operand.pop();
            
    operand.push( evaltation(rightHandValue , leftHandValue , operation));
  }

  return operand[0];
}

function precedience(operator) {
  if (operator === "*" || operator === "/" || operator === "%") return 2;
  else return 1;
}

function addToScreen(value) {
  screenContent += value;
  screen.textContent = screenContent;
}

function removeFromScreen() {
  screenContent = screenContent.slice(0, -1);
  screen.textContent = screenContent;
}

function clearAll() {
  screenContent = "";
  screen.textContent = screenContent;
}

function equalsTo() {
  try {
    screenContent = evaluteExpression(screenContent);
    screen.textContent = screenContent;
  } catch (error) {
    console.log("error" + error);
    alert("enter a valid expression");
    clearAll();
  }
}
