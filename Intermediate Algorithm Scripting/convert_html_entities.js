//Convert HTML Entities
const amp = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&apos;",
};

const convertHTML = (str) => str.replace(/[&<>"']/g, (m) => amp[m]);

convertHTML("Dolce & Gabbana"); //return 'Dolce &amp; Gabbana'
