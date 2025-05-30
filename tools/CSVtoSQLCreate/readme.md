# CSV to SQL CREATE Tool

A simple web tool that converts CSV column definitions into a SQL `CREATE TABLE` statement. Paste your CSV data, click "Generate SQL", and copy the resulting SQL statement to your clipboard.

---

## Features

- **Paste CSV**: Input your CSV column definitions directly into the web interface.
- **Generate SQL**: Instantly create a SQL `CREATE TABLE` statement based on your CSV.
- **Copy to Clipboard**: One-click copy of the generated SQL for easy use in your database projects.
- **Client-side**: All processing is done in your browser—no data is sent to a server.

---

## Usage

1. **Clone or Download the Repository**
   ```sh
   git clone https://github.com/yourusername/CSVtoSQLCreate.git
   cd CSVtoSQLCreate
   ```

2. **Open `index.html` in your browser**

3. **Paste your CSV**
   - The CSV should have column names in the first row.
   - Optionally, the second row can indicate key types (e.g., `1` for primary key, `2` for foreign key).

   **Example:**
   ```
   id,name,dept_id
   1, ,2
   101,John,10
   102,Alice,20
   ```

4. **Click "Generate SQL"**
   - The SQL `CREATE TABLE` statement will appear in the output box.

5. **Click "Copy to Clipboard"**
   - The SQL statement is copied for use elsewhere.

---

## File Structure

```
CSVtoSQLCreate/
│
├── index.html      # Main HTML file
├── style.css       # Optional: Styles for the tool
├── script.js       # JavaScript logic for parsing and SQL generation
├── readme.md       # This file
└── libs/
    └── papaparse.min.js  # PapaParse library for CSV parsing (if not using CDN)
```

---

## Dependencies

- [PapaParse](https://www.papaparse.com/) (for CSV parsing, loaded via CDN)

---

## Customization

- **Table Name**: You can modify the JavaScript to prompt for or infer a table name.
- **Data Types**: The script can be extended to infer SQL data types from sample data.

---

## License

MIT License

---

## Credits

- [PapaParse](https://www.papaparse.com/) for robust CSV parsing.

---

## Contributing

Pull requests and suggestions are welcome! Please open an issue or submit a PR.
