const taxRate=[
    {taxableAmount: 24000, rate:0.1},
    {taxableAmount:32333, rate:0.25},
    {taxableAmount:Infinity, rate:0.3}
];


const basicSalary=parseFloat(prompt('Enter the basic salary'))
const benefits=parseFloat(prompt('Enter the benefits'))
const grossPay= basicSalary+benefits
const personalRelief=2400;
//calculate NHIF deduction
const nhifRates=[150, 300, 400, 500, 600, 750, 850, 900, 950, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700]
let nhifDeduction;
if (grossPay<5999){
    return nhifDeduction=nhifRates[0];

}
else if(grossPay<=7999){
    return nhifDeduction= nhifRates[1]
}else if(grossPay<=11999){
    return nhifDeduction= nhifRates[2]
}
else if(grossPay<=14999){
    return nhifDeduction= nhifRates[3]
}
else if(grossPay<=19999){
    return nhifDeduction= nhifRates[4]
}
else if(grossPay<=24999){
    return nhifDeduction= nhifRates[5]
}
else if(grossPay<=29999){
    return nhifDeduction= nhifRates[6]
}
else if(grossPay<=34999){
    return nhifDeduction= nhifRates[7]
}
else if(grossPay<=39999){
    return nhifDeduction= nhifRates[8]
}
else if(grossPay<=44999){
    return nhifDeduction= nhifRates[9]
}
else if(grossPay<=49999){
    return nhifDeduction= nhifRates[10]
}
else if(grossPay<=59999){
    return nhifDeduction= nhifRates[11]
}
else if(grossPay<=69999){
    return nhifDeduction= nhifRates[12]
}
else if(grossPay<=79999){
    return nhifDeduction= nhifRates[13]
}
else if(grossPay<=89999){
    return nhifDeduction= nhifRates[14]
}
else if(grossPay<=99999){
    return nhifDeduction= nhifRates[15]
}
else {
    return nhifDeduction= nhifRates[16]
}
const nssfRate=0.06;
let nssfDeduction
if (grossPay<=6000){
    console.log(nssfRate*grossPay)
}
else if(grossPay<=18000){
    console.log(((nssfRate*grossPay)+((grossPay-6000)*nssfRate)))
}else if(grossPay>18000){
    console.log(((nssfRate*grossPay)+((grossPay-6000)*nssfRate)))

}
// taxable income after all deductions
const taxableIncome= grossPay -nhifDeduction-nssfDeduction-personalRelief;

// payee tax
let tax=0;
for (const{taxableAmount,rate}of taxRate){
    if(taxableIncome<=0){
        const amount=Math.min(taxableIncome, taxableAmount);
        tax += amount*rate
        taxableIncome-=amount;
    }
    const natSalary=grossPay -nhifDeduction-nssfDeduction-tax;

    

}
// output
// return ``



