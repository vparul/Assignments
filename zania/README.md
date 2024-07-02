

This React application manages data fetched from an API and stores them locally using `localStorage` for persistence. It includes features for drag and drop reordering of documents.

## Features

- Fetches documents from a REST API endpoint.
- Stores fetched documents locally using `localStorage`.
- Allows drag and drop to reorder documents.

## Setup Instructions

To run this application locally with JSON Server, follow these steps:

1. **Clone the Repository:**
   git clone https://github.com/your/repository.git
   cd repository-name

2. **Install Dependencies:**
   npm install

3. **Start JSON Server:**
   Ensure you have `json-server` installed globally:
   npm install -g json-server

   Start JSON Server with the provided `documents.json` file:
   json-server --watch documents.json --port 3001

   The JSON Server will start running on `http://localhost:3001`.

4. **Start the Development Server for React App:**
   Open a new terminal window/tab in the project directory.

   Start the React development server:
   ```bash
   npm start
   ```

   The React application will start running on `http://localhost:3000`.

5. **Open in Browser:**
   Open your web browser and go to `http://localhost:3000` to view the application.

## Usage

- **Drag and Drop:**
  - Drag document cards to reorder them.

## Additional Notes

- Modify the API endpoint (`http://localhost:3001/documents/`) in `DocumentList.js` if necessary.