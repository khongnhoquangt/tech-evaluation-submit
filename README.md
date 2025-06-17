# Transactions Page Technical Assessment

## Overview
A simple transactions page that displays user activity mock data with filtering capabilities.

## Features
- View recent transactions (Stake, Borrow, Lend)
- Filter transactions by type
- Clean, responsive table design

## Setup
1. Install dependencies:
```bash
pnpm install
```

2. Start the server:
```bash
pnpm run dev
```

3. Visit: `http://localhost:3000/transactions`

## Transaction Table
- Username
- Transaction Type (Stake, Borrow, Lend)
- Token (ETH, USDC, DAI)
- Amount
- Date
- Filter buttons for transaction types

## Styling
- Tailwind CSS for layout
- Alternating row colors
- Mobile-friendly design

## Directory
- Header: @/app/components/Navbar.tsx
- Transactions Page: @/app/transactions/page.tsx

---

