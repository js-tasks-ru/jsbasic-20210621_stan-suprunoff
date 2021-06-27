// немного усложнил задачку для сеябя
function truncate(str, maxlength) {
  if (str.length > +maxlength) {
    return (str.slice(0, maxlength -1)).padEnd(str.length, "…");
  } else {
    return str;
  }
    
}

truncate('тише едешь дальше будешь', 10);
truncate('дурь', 5);

// Если нужен пробел, то второй параметр не указывается

function truncate(str, maxlength) {
  if (str.length > +maxlength) {
    return (str.slice(0, maxlength -1)).padEnd(str.length);
  } else {
    return str;
  }
    
}

truncate('тише едешь дальше будешь', 10);
truncate('дурь', 5);

// по задачнику
function truncate(str, maxlength) {
  if (str.length > +maxlength) {
    return (str.slice(0, maxlength -1)).padEnd(maxlength, "…");
  } else {
    return str;
  }
    
}

truncate('тише едешь дальше будешь', 10);
truncate('дурь', 5);
