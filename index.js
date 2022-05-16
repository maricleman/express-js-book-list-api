// Import Express.js
import express from 'express';

// Import body-parser (to handle parameters more easily)
import bodyParser from 'body-parser';


// Link: https://herewecode.io/blog/step-by-step-guide-create-first-api-with-node-express/

// This variable defines the port of your computer where the API will be available
const PORT = 3000

// This variable instantiate the Express.js library
const app = express()

// The code below starts the API with these parameters:
// 1 - The PORT where your API will be available
// 2 - The callback function (function to call) when your API is ready
app.listen(PORT, () =>
  console.log(`The Books API is running on: http://localhost:${PORT}.`)
)

let bookList = [
    'Make Time: How to Focus on what Matters Every Day',
    'The Power Of Habit',
]

// The code below creates a GET route with these parameters:
// 1 - The route where the code will be executed
// 2 - The function containing the code to execute
app.get('/books', (request, response) => {
    // The string we want to display on http://localhost:3000
    // response.send('Welcome on the books API! Take a breath and start using it!')
    return response.json({ allBooks: bookList });
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/books', (request, response) => {
    const testing = request.body;
    // We get the parameter 'name' from the body
    const bookName = request.body.name
  
    // We check if the book list includes the new book
    // If it is, we return 'false'
    if (bookList.includes(bookName)) return response.json({ success: false })
  
    // Otherwise, we add the new book in the list and return 'true'
    bookList.push(bookName)
    return response.json({ success: true })
  })