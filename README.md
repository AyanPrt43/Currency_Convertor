# Currency Converter

A clean and responsive currency conversion web application built with **React**, **Vite**, and **Tailwind CSS**. The application retrieves live exchange-rate data from ExchangeRate-API and allows users to convert an amount between supported currencies.

## ✨ Features

- 💱 Convert an amount from one currency to another
- 🔄 Swap the selected **From** and **To** currencies
- 🌐 Fetch exchange-rate data dynamically from ExchangeRate-API
- 📋 Populate currency options from the currencies returned by the API
- ⚛️ Reusable `InputBox` component for amount and currency selection
- 🎯 React state management with `useState`
- 🔁 API data fetching with `useEffect`
- 🪝 Custom React hook for exchange-rate data
- 🎨 Tailwind CSS-based interface
- 🧹 ESLint configuration for code quality

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React 19 | Building the user interface |
| Vite | Development server and production build |
| Tailwind CSS 4 | Styling and responsive UI |
| JavaScript (ES Modules) | Application logic |
| ExchangeRate-API | Exchange-rate data |
| ESLint | Code quality and linting |

The project's `package.json` defines React, React DOM, Tailwind CSS, and the Tailwind Vite plugin as runtime dependencies, with Vite and ESLint tooling configured for development. 

## 🧠 How It Works

The application keeps the following core values in React state:

- `amount` — amount entered by the user
- `from` — source currency
- `to` — target currency
- `convertedAmount` — calculated result

A custom hook, `useCurrencyInfo(currency)`, requests the latest exchange-rate data whenever the selected source currency changes. The returned `conversion_rates` object is then used to build the available currency list and calculate the conversion.

The conversion logic is:

```text
Converted Amount = Amount × Exchange Rate
```

The **Swap** action exchanges the source and target currencies and also updates the displayed amounts.

## 📁 Project Structure

```text
06currencyconvertor/
├── src/
│   ├── components/
│   │   └── InputBox.jsx
│   ├── hooks/
│   │   └── useCurrencyInfo.js
│   ├── App.jsx
│   └── App.css
├── package.json
├── package-lock.json
└── README.md
```

> The structure above reflects the files referenced by the current application imports. Additional Vite files may exist in the project but are not listed here.

## 🔌 API Integration

The application uses **ExchangeRate-API** to retrieve the latest exchange rates for the selected source currency.

The custom hook constructs an endpoint based on the selected currency and stores the returned `conversion_rates` in React state.

```js
const URL = `https://v6.exchangerate-api.com/v6/YOUR_API_KEY/latest/${currency}`;
```

### Security Note

For a production deployment, avoid exposing a private API key directly in client-side source code. Use an environment variable and, where appropriate, a backend/proxy layer.

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd 06currencyconvertor
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Vite will start the local development server and provide the URL in the terminal.

### 4. Create a production build

```bash
npm run build
```

### 5. Preview the production build

```bash
npm run preview
```

### 6. Run linting

```bash
npm run lint
```

These commands are defined in the project's `package.json`.

## 🧩 Reusable Component Design

The `InputBox` component is designed to handle both currency inputs through props such as:

- `label`
- `amount`
- `currencyOptions`
- `onAmountChange`
- `onCurrencyChange`
- `selectCurrency`

This keeps the UI reusable while allowing the parent `App` component to control the application's state.

## 📸 Screenshots

Add screenshots here after uploading them to the repository:

```md
![Currency Converter Screenshot](./Screenshot.png)
```

## 🌐 Live Demo

**Live Demo:** `Add your deployed application URL here`

## 📌 What This Project Demonstrates

This project demonstrates practical frontend development concepts including:

- React functional components
- React Hooks
- Custom Hooks
- Controlled form inputs
- Component reusability
- Parent-child communication through props
- API integration using `fetch`
- Dynamic rendering with `.map()`
- State-driven UI updates
- Tailwind CSS styling
- Vite-based development workflow

## 🔮 Future Improvements

Potential improvements for a production-ready version:

- Add API-key management through environment variables
- Add loading and error states
- Validate invalid or empty amounts
- Improve accessibility
- Add conversion history
- Add more polished responsive layouts
- Add unit/integration tests
- Deploy the application and add a live demo URL

## 👨‍💻 Author

**Ayan Pratap**

Computer Science Engineering | Frontend / MERN Stack Developer

Interested in building practical, scalable web applications and continuously improving frontend and full-stack development skills.

---

⭐ If you find this project useful, consider giving the repository a star.
