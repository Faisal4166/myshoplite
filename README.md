# E-Commerce Mobile App

A cross-platform e-commerce mobile application built with **React Native Expo** and **TypeScript**. 
Build Android, IOS and Web app.

The app features:
- Product Listing
- Product Details Page
- Favorites
- Add to Cart
- How it works:

The app fetches the product listing from the Mocki API and displays the product image, name, and price. On mobile devices, a single product is shown per row, while on the web, two products are displayed per row, fully responsive.

Each product has an Add to Cart button. When a user taps or clicks this button, the product is saved in the basket, and the button is disabled with the text "Added".

At the bottom tab, there is a Cart tab showing a basket icon and the text "Cart". Tapping this tab displays all products added to the cart. Users can:

Add multiple products individually.
Increase the quantity of a product by tapping the "+" button.
Decrease the quantity by tapping the "-" button.
Remove a single item by clicking the trash icon (in red).
Clear the entire cart by clicking the "Clear Cart" button.
When a user clicks on a product, they are taken to the Product Details Page, which shows the product image, title, price, description, and a Favorite toggle button.

If a user adds a product to favorites, it will appear in the Favorites tab (icon: heart, text: "Favorite"). Users can remove products from favorites by navigating to the product detail page and toggling the "Remove from Favorite" button. Multiple products can be added to the favorites list.

How to Setup follow these instructions  
---

## 🚀 Getting Started

### Prerequisites

- Node.js v22 or higher  
- npm or Yarn  
- Expo 
- iOS Simulator (for iOS) / Android Studio Emulator (for Android)

### Installation

```bash
# Clone repository
git clone https://github.com/Faisal4166/myshoplite
cd myshoplite

# Install dependencies
npm install             
# or
yarn install

# Running the App
# iOS
npm run ios
# or
yarn ios

# Android
npm run android
# or
yarn android

# Web
npm run web
# or
yarn web


# Test Case Run
npx jest
 PASS  src/services/__test__/api.test.ts
 PASS  src/components/__test__/ProductCard.test.tsx
 PASS  src/components/__test__/CategoryFilter.test.tsx
 PASS  src/redux/__tests__/productsSlice.test.ts
 PASS  src/redux/__tests__/cartSlice.test.ts
 PASS  src/redux/__tests__/favoritesSlice.test.ts

Test Suites: 6 passed, 6 total
Tests:       32 passed, 32 total
Snapshots:   0 total
Time:        1.561 s
Ran all test suites.

# run this command for test case coverage.
npx jest --coverage
 PASS  src/services/__test__/api.test.ts
 PASS  src/components/__test__/ProductCard.test.tsx
 PASS  src/components/__test__/CategoryFilter.test.tsx
 PASS  src/redux/__tests__/productsSlice.test.ts
 PASS  src/redux/__tests__/cartSlice.test.ts
 PASS  src/redux/__tests__/favoritesSlice.test.ts
-------------------|---------|----------|---------|---------|-------------------
File               | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
-------------------|---------|----------|---------|---------|-------------------
All files          |   95.78 |    72.22 |   97.22 |   95.06 |                   
 ...CategoryFilter |     100 |      100 |     100 |     100 |                   
  index.tsx        |     100 |      100 |     100 |     100 |                   
  styles.ts        |     100 |      100 |     100 |     100 |                   
 ...ts/ProductCard |     100 |     92.3 |     100 |     100 |                   
  index.tsx        |     100 |     92.3 |     100 |     100 | 27                
  styles.ts        |     100 |      100 |     100 |     100 |                   
 redux             |     100 |      100 |     100 |     100 |                   
  hooks.ts         |     100 |      100 |     100 |     100 |                   
 redux/slice       |     100 |       75 |     100 |     100 |                   
  cartSlice.ts     |     100 |       75 |     100 |     100 | 36                
  ...ritesSlice.ts |     100 |      100 |     100 |     100 |                   
  productsSlice.ts |     100 |       50 |     100 |     100 | 22-46             
 services          |   91.66 |       50 |     100 |    90.9 |                   
  api.ts           |     100 |       50 |     100 |     100 | 10-22             
  index.ts         |       0 |      100 |     100 |       0 | 3                 
 utils             |   86.36 |    47.05 |   83.33 |   84.21 |                   
  colors.ts        |     100 |      100 |     100 |     100 |                   
  dimensions.ts    |      85 |    46.66 |   83.33 |   82.35 | 22-24             
  globalStyles.ts  |     100 |       50 |     100 |     100 | 22                
-------------------|---------|----------|---------|---------|-------------------

Test Suites: 6 passed, 6 total
Tests:       32 passed, 32 total
Snapshots:   0 total
Time:        1.216 s
Ran all test suites.

95–96% coverage overall.


```

Technical Decisions and Architecture Choices
1. State Management Approach and Rationale

The app uses React Redux for global state management.

Rationale:

Centralized management of the cart and favorite products.

Simplifies data sharing across multiple screens and components.

Predictable state updates with Redux Toolkit, reducing boilerplate.

Local component state (via useState) is used for UI-specific interactions, such as toggling the Add to Cart or Favorite buttons.

2. Component Architecture Decisions

Component-based structure:

ProductList – Displays a list of products fetched from the API.

ProductItem – Individual product card used in the list.

ProductDetail – Detailed view of a selected product.

Cart – Displays all products added to the cart with quantity management.

Favorites – Displays products marked as favorite.

Rationale:

Reusable components reduce code duplication.

Clear separation of concerns improves maintainability.

Supports responsive design for mobile and web layouts.

3. Data Persistence Strategy

Cart and Favorites data are persisted using Redux-Persist with AsyncStorage (for mobile) or localStorage (for web).

Rationale:

Ensures that user data remains intact across app restarts or page refreshes.

Provides a seamless user experience without requiring backend storage for temporary data.

4. Performance Considerations

Virtualized lists (FlatList) are used for product listings to render only visible items.

Memoization with React.memo and useCallback to prevent unnecessary re-renders.

Lazy loading images to reduce initial load time and memory usage.

Responsive design ensures minimal layout recalculation on different devices.

5. Security Considerations

API endpoints accessed over HTTPS to protect data in transit.

Sensitive data (if any, such as user tokens) is stored securely in AsyncStorage or SecureStore.

Input validation is applied to prevent potential UI-level issues.

6. Testing Strategy

Unit Testing: Using Jest to test Redux slices, utility functions, and individual components.

Integration Testing: Using React Native Testing Library to verify component interactions (e.g., adding to cart, toggling favorites).

Manual Testing: Across mobile and web platforms to ensure responsiveness and proper functionality.

# Technical Stack
Framework: React Native Expo
Language: TypeScript
Navigation: React Navigation
State Management: Redux Toolkit,
Storage: @react-native-async-storage/async-storage
Testing: Jest + @testing-library/react-native
Styling: React Native StyleSheet 
Devices: Running on Android, IOS, Web app.


# Prerequisites

🎨 UI/UX Guidelines
# Design Principles

Color Palette (suggested)

Layout Breakpoints

🧪 Testing Requirements
Unit Tests
. Component Test - Test a React component (e.g., ProductCard)
The sample.json file contains sample products structure:
sample.json

Node.js (v22 or higher)
npm or yarn
Expo 
iOS Simulator (for iOS testing)
Android Studio/Emulator (for Android testing)
Web for web app testing.


Clean, modern interface
Consistent spacing and typography
Clear visual hierarchy
Responsive design patterns
Accessibility-first approach

# Color Palette (suggested)
Primary: #007AFF (iOS Blue)
Secondary: #5856D6
Background: #F2F2F7
Text: #000000 / #FFFFFF
Success: #34C759
Error: #FF3B30

# Layout Breakpoints
Mobile: < 768px (single column)
Tablet/Desktop: ≥ 768px (two columns)


# Testing Requirements
Unit Tests
. Component Test - Test a React component (e.g., ProductCard)
. Render correctly
. Handle user interactions
. Display correct data

# Store/Action Test - Test state management (e.g., favorites functionality)
. Add to favorites
. Remove from favorites
. Persist state

# Working on Devices and platform.
✅ App runs on iOS, Android, and Web
✅ All core features functional
✅ TypeScript throughout
✅ At least 2 passing unit tests
✅ Favorites persist across restarts
✅ Deep links work correctly


# Nice to Have
🚀 Error handling
🚀 Performance optimizations
🚀 Additional features
🚀 Comprehensive testing
🚀 Code documentation

Thank You.