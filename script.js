/* Reset default browser styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Global styles */
body {
  font-family: Arial, sans-serif;
  line-height: 1.5;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

/* Header styles */
header {
  background-color: #333;
  color: #fff;
  padding: 20px;
}

header h1 {
  font-size: 24px;
}

/* Main content styles */
main {
  margin-top: 20px;
}

section {
  margin-bottom: 20px;
}

h2 {
  font-size: 20px;
  margin-bottom: 10px;
}

form {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

label {
  display: block;
}

input[type="number"],
button {
  padding: 5px;
  font-size: 16px;
}

button {
  background-color: #333;
  color: #fff;
  border: none;
  cursor: pointer;
}

#recommendations-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 10px;
}

#recommendations-list > div {
  border: 1px solid #ccc;
  padding: 10px;
}

#strategies-list {
  list-style: none;
}

/* Styles for sorting and filtering section */
#sorting-section select {
  padding: 5px;
  font-size: 16px;
}

/* Styles for tips and simulations section */
#tips-section p {
  margin-bottom: 10px;
}

