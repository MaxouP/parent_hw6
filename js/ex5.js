const createTable = () => {
  const table = document.createElement('table');

  for(let i = 1; i <= 12; i++) {
    const tr = table.insertRow();
    const td = tr.insertCell();
    if(i % 4 === 0) {
      td.className = 'bg-blue';
      td.appendChild(document.createTextNode(`${i}`));
    } else {
      td.appendChild(document.createTextNode(`${i}`));
    }
  }
  document.getElementById('output').appendChild(table)
}

createTable();