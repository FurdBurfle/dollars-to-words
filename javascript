var ones=["", " One", " Two", " Three", " Four", " Five", " Six", " Seven", " Eight", " Nine"];
 var teens=[' Ten', ' Eleven', ' Twelve', ' Thirteen', ' Fourteen', ' Fifteen', ' Sixteen', ' Seventeen', ' Eighteen', ' Nineteen'];
 var tens=['dummyzero', ' dummyTen', ' Twenty', ' Thirty', ' Forty', ' Fifty', ' Sixty', ' Seventy', ' Eighty', ' Ninety' ];
 var bigboys=['Thousand', 'Million', 'Billion', 'Trillion'];


function handleOnes(numLessThanTen)
{
  return ones[numLessThanTen];
}

function handleTeens(numGreaterThan9LessThan20)
{
  return teens[numGreaterThan9LessThan20-10];
}

function handleTens(numGreaterThan19LessThan100)
{
  var numTens = Math.floor((numGreaterThan19LessThan100/10)); 
  var remainder = numGreaterThan19LessThan100 - numTens*10;
  
  return tens[numTens] + numbers_to_words(remainder);
}

function handleHundreds(numGreaterThan99LessThan1000)
{
  var numHundreds = Math.floor((numGreaterThan99LessThan1000/100));
  var remainder = Math.floor(numGreaterThan99LessThan1000) - (numHundreds * 100);
  
  return ones[numHundreds] + " Hundred" + numbers_to_words(remainder);
}

function handleThousands(numGreaterThan999LessThan1000000)
{
  var numThousands = Math.floor((numGreaterThan999LessThan1000000/1000));
  var remainder = Math.floor(numGreaterThan999LessThan1000000) - (numThousands * 1000);
  
  return numbers_to_words(numThousands) + " Thousand" + numbers_to_words(remainder);
}

function handleMillions(numGreaterThan999999LessThan1000000000)
{
  var numMillions = Math.floor((numGreaterThan999999LessThan1000000000/1000000));
  var remainder = Math.floor(numGreaterThan999999LessThan1000000000) - (numMillions * 1000000);
  
  return numbers_to_words(numMillions) + " Million" + numbers_to_words(remainder);
}


function numbers_to_words(val)
{
  var returnString = "";
  
  if(val <= 9)
  {
    returnString = handleOnes(val);
  }
  else if(val >=10 && val <= 19)
  {
    returnString = handleTeens(val);
  }
  else if(val >= 20 && val <= 99)
  {
    returnString = handleTens(val);
  }
  else if(val >= 100 && val <= 999)
  {
    returnString = handleHundreds(val);
  }
  else if(val >= 1000 && val <= 999999)
  {
    returnString = handleThousands(val);
  }
  else if(val >= 1000000 && val <= 999999999)
  {
    returnString = handleMillions(val);
  }
  
  return returnString;
}


function dollars_to_words(val)
{ 
  var numDollars =  parseInt(val);
  
  //grab the fraction of a unit from val, multiply by 100 and take the whole unit value of that remainder
  var numCents = parseInt(val*100)%100;
  
  var centWords = "";
  var dollarWords = "";
  
  if(numDollars == 0)
  {
    dollarWords = " Zero Dollars"; 
  }
  else if (numDollars == 1)
  {
    dollarWords = " One Dollar";
  }
  else
  {
    dollarWords = numbers_to_words(numDollars) + " Dollars";
  }
  
  if(numCents == 0)
  {
    centWords = " Exactly"; 
  }
  else if (numCents == 1)
  {
    centWords = " and One Cent";
  }
  else
  {
    centWords = " and" + numbers_to_words(numCents) + " Cents";
  }
  

  return dollarWords + centWords;
  
}
