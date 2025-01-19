function printNumber(num: number): void {
  console.log(num);
}

function printString(str: string): void {
  console.log(str);
}

function processValue(value: number | string | null): void {
  if (value === null) {
    console.log('Value is null'); //Handle null case 
    return; //Added return to stop further execution
  } else if (typeof value === 'number') {
    printNumber(value);
  } else {
    printString(value);
  }
}

processValue(10); // Works fine
processValue('hello'); // Works fine
processValue(null); // Value is null 