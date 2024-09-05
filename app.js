// Age calculator    

function lifeInWeeks(age) {
    
    //  Current age 
    var currentAge = prompt("Please Enter Your Current Age: ");
    
        
        var daysPassed = currentAge * 365;
        var weeksPassed = currentAge * 52;
        var monthsPassed = currentAge * 12;
      
        //step b - Calculate days, weeks and months of limit age.
        var daysLimit = 90 * 365;
        var weeksLimit = 90 * 52;
        var monthsLimit = 90 * 12;
      
        //step c - subtract days, weeks and months of current and limit age.
        var remainingDays = daysLimit - daysPassed;
        var remainingWeeks = weeksLimit - weeksPassed;
        var remainingMonths = monthsLimit - monthsPassed;
      
        //step d - output:
        alert("You have "+ remainingDays + " days, " + remainingWeeks + " weeks, and " + remainingMonths + " months left.");
    }
    
    lifeInWeeks();