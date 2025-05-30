document.getElementById('generateBtn').addEventListener('click', () => {
  const csv = document.getElementById('csvInput').value.trim();
  if (!csv) return alert("Please paste CSV data or upload a file.");

  generateSQL(csv);
});

document.getElementById('csvFile').addEventListener('change', function () {
  const file = this.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    const csvText = e.target.result;
    document.getElementById('csvInput').value = csvText;
    generateSQL(csvText);
  };
  reader.readAsText(file);
});

document.getElementById('copyBtn').addEventListener('click', () => {
  const output = document.getElementById('sqlOutput');
  output.select();
  document.execCommand('copy');
});

function generateSQL(csv) {
  const parsed = Papa.parse(csv.trim());
  const data = parsed.data.map(row => row.map(cell => cell.trim()));
  generateSQLFromData(data);
}

function generateSQLFromData(data) {
  if (data.length < 3) return alert("CSV must have at least 3 rows: column names, key indicators, and data.");

  const columns = data[0];
  const keys = data[1];
  const rows = data.slice(2);

  const colDefs = columns.map((col, i) => {
    const type = inferType(rows.map(row => row[i]));
    let def = `\`${col}\` ${type}`;
    if (keys[i] === '1') def += ' PRIMARY KEY';
    else if (keys[i] === '2') def += ' FOREIGN KEY REFERENCES <Placeholder>';
    return def;
  });

  const createStmt = `CREATE TABLE my_table (\n  ${colDefs.join(',\n  ')}\n);`;

  const insertStmts = rows.map(row => {
    const values = row.map(val => isNaN(val) ? `'${val.replace(/'/g, "''")}'` : val);
    return `INSERT INTO my_table (${columns.join(', ')}) VALUES (${values.join(', ')});`;
  });

  document.getElementById('sqlOutput').value = [createStmt, ...insertStmts].join('\n');
}

function inferType(values) {
  return values.every(val => /^\d+$/.test(val)) ? 'INT' : 'VARCHAR(255)';
}
