function checkSpam(str) { 
  if (str.match(/1xBet/i) || str.match(/XXX/i)) { 
    return true;
  } else 
      { 
        return false;
    }
}

checkSpam('will watch XXX');
checkSpam('moscow');
checkSpam('xxxxxx in the city')
checkSpam('1xbet');
checkSpam('go to x and then to y');


