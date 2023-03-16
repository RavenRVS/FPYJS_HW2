function primeNumbers (countOfNumbers) {
    let result = [];
    for (let i = 2; result.length < countOfNumbers; i++) {
        let flag = 1;
        if (i > 2 && i % 2 != 0)
        {
            for (let j = 3; j*j <= i ; j=j+2)
            {
                if (i%j==0)
                {
                    flag=0;
                    break;
                }
            }
        } else if (i != 2) {
            flag = 0;
        }
        if (flag==1) {
            result.push(i);
        }
    }
    return result;
}

console.time('primeNumbers')
console.log(primeNumbers(process.argv[2]))
console.timeEnd('primeNumbers')