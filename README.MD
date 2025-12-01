# STRKVeil 🦄

**STRKVeil** is a modern, sleek decentralized exchange (DEX) interface built for the Starknet ecosystem. It features a "dark pool" aesthetic, an intuitive swap interface, and seamless wallet integration simulation.

<img src="dex-frontend/public/Logo.png" alt="STRKVeil Preview" width="500" height="400">

## ✨ Features

- **Modern UI/UX**: A premium "dark pool" aesthetic with glassmorphism effects and smooth animations.
- **Token Swap Interface**: Intuitive card-based swap UI with real-time token selection.
- **Wallet Integration**: Simulated wallet connection for Argent X, Braavos, and MetaMask.
- **Token Selector**: Searchable token list with real icons (ETH, USDC, USDT, WBTC, STRK).
- **Responsive Design**: Fully optimized for desktop and mobile devices.

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **State Management**: React Context API

## 🚀 Getting Started

Follow these steps to run the project locally.

### Prerequisites

- Node.js 18+ installed.
- npm or yarn.

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/Gaganub/STRKVeil.git
    cd STRKVeil
    ```

2.  Navigate to the frontend directory:
    ```bash
    cd dex-frontend
    ```

3.  Install dependencies:
    ```bash
    npm install
    ```

4.  Run the development server:
    ```bash
    npm run dev
    ```

5.  Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📂 Project Structure

```
STRKVeil/
├── dex-frontend/          # Next.js application
│   ├── public/            # Static assets (Logo, icons)
│   ├── src/
│   │   ├── app/           # App Router pages (Swap, Explore, Pool)
│   │   ├── components/    # Reusable UI components (Navbar, SwapCard)
│   │   ├── context/       # Global state (WalletContext)
│   │   └── lib/           # Utilities
│   └── ...
└── README.md              # Project documentation
```

## 🚢 Deployment

The easiest way to deploy this app is using [Vercel](https://vercel.com/).

1.  Push your code to GitHub.
2.  Import the project into Vercel.
3.  **Important**: Set the **Root Directory** to `dex-frontend` in the Vercel project settings.
4.  Deploy!

## 📄 License

This project is licensed under the MIT License.
