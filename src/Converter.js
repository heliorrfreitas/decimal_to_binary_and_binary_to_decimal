export const decimalToBinary = (decimal=0) => {
    let result = [];
    const binaryBase = 2;
    while(decimal >= binaryBase){
        result.push(parseInt(decimal % binaryBase));
        decimal = parseInt(decimal / binaryBase)
    }

    result.push(decimal);

    return result.reverse().join().replace(/,/g, '');
};

export const binaryToDecimal = (binary=0) => {
    let length = binary.length - 1;
    let result = 0;

    for(let i = 0; i < binary.length; i++){
        if (binary[i] === "1"){
            result += Math.pow(2, length);                
        }

        length -= 1;
    }
    
    return result;
};