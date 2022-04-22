///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

 const summedPrice = cart.reduce((acc, curr) => acc + curr.price, 0);
 console.log(summedPrice)


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

const calcFinalPrice = (couponValue, tax, totalPrice) => {
    return (tax + 1) * totalPrice - couponValue
}

console.log(calcFinalPrice(300, .06, 2000))


//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
  What i would do is, create the object template that had 4 properties.
 i would have a First Name, I would have a Last name,  i would have an email address, and i would have a mailing address. a date of checkout.
   my reasoning for this is simple. It would store the name of the person checking out, it would have a place to send them their items, it would have a way to contact them. 
   it would have a date of checkout so that i can see if it is urgent that i do their order first and foremost. all data types will be strings. i chose strings because it's
   the easiest way to represent the properties that i chose. 
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
const customer = {
    firstName: "Lyla",
    LastName: "Smith",
    emailAddress: "LylaSmith@gmail.com",
    mailingAddress: "random address",
    dateOfCheckout: "10/03/1996"
}