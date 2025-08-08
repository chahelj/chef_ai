# Chef AI

Chef AI is a React application that helps you generate recipes based on a list of ingredients you provide. It uses the Google Gemini API to generate recipe suggestions.

## Features

- Add ingredients to your list
- View your current list of ingredients
- Generate a recipe suggestion using AI (requires at least 5 ingredients)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/chef_ai.git
   cd chef_ai
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Set up your API key:

   - Copy your Google Gemini API key into a `.env` file in the project root:
     ```
     VITE_GEMINI_API_KEY="your-api-key-here"
     ```

### Running the App

Start the development server:

```sh
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the app.

### Building for Production

```sh
npm run build
```

## Project Structure

- `src/` - Main source code
  - `components/` - React components (Header, Main, IngredientsList, Recipe)
  - `assets/` - Images and icons
- `public/` - Static assets
- `.env` - Environment variables (API keys, etc.)

## License

MIT

---

Made with ❤️ using [React](https://react.dev/) and [Vite](https://vitejs.dev/).
