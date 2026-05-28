# 💱 Currency Converter

A real-time currency converter built with **React 19** and **Vite**, styled using **Tailwind CSS**. Converts between 150+ world currencies instantly as you type — no button click needed.

---

## ✨ Features

- 🔄 **Real-time conversion** — updates live as you type
- 🔃 **Swap currencies** — instantly flip From ↔ To
- 🌍 **150+ currencies** — powered by live exchange rate API
- 🇵🇰 **Defaults to USD → PKR**
- 🎨 **Clean glassmorphism UI** with Tailwind CSS
- ♿ **Accessible** — labels linked to inputs via `useId`

---

## 🛠️ Tech Stack

| Tech | Purpose |
|------|---------|
| React 19 | UI & state management |
| Vite | Build tool & dev server |
| Tailwind CSS v4 | Styling |
| `useMemo` | Derived conversion (no extra state) |
| `useEffect` | Fetching live exchange rates |
| [Fawaz Ahmed Currency API](https://github.com/fawazahmed0/exchange-api) | Free live exchange rates |

---

## 📁 Project Structure

```
src/
├── components/
│   ├── InputBox.jsx     # Reusable amount + currency selector input
│   └── index.js         # Named exports
├── hooks/
│   └── useCurrencyInfo.js  # Custom hook — fetches live rates
├── App.jsx              # Main app logic
├── main.jsx             # React entry point
└── index.css            # Global styles
```

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

---

## 🔌 API Used

```
https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/{currency}.json
```

- Free & no API key required
- Updates daily with latest exchange rates
- 150+ currencies supported

---

## 🧠 How It Works

1. `useCurrencyInfo(from)` fetches live rates for the selected **From** currency
2. `convertedAmount` is computed via `useMemo` — recalculates instantly on amount or currency change
3. Swap button flips both currencies and sets the converted amount as the new input

---

## 📦 Dependencies

```json
"react": "^19.2.6",
"tailwindcss": "^4.3.0",
"@tailwindcss/vite": "^4.3.0"
```
