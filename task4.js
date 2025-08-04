var a = isNaN('11');
console.log(a);
/* Output: false
'11' is a numeric string, which can be converted to the number 11.
Since 11 is a valid number, isNaN('11') returns false. */

var a = isNaN(2-10);
console.log(a);
/* Output: false
2 - 10 evaluates to -8, which is a valid number.
Since -8 is not NaN, isNaN(2 - 10) returns false. */