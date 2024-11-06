// json2html.js

export default function json2html(data) {
  // Extract headers from keys of the first object, if any.
  const headers = [...new Set(data.flatMap(Object.keys))];

  // Generate table headers row
  const headerRow = headers.map((header) => `<th>${header}</th>`).join("");

  // Generate rows of data
  const rows = data
    .map((row) => {
      const cells = headers.map(
        (header) => `<td>${row[header] !== undefined ? row[header] : ""}</td>`
      );
      return `<tr>${cells.join("")}</tr>`;
    })
    .join("");

  // Return the HTML table as a string
  return `
      <table data-user="imsumitbhade@gmail.com">
        <thead>
          <tr>${headerRow}</tr>
        </thead>
        <tbody>
          ${rows}
        </tbody>
      </table>
    `;
}
