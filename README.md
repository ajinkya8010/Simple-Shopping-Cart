# 🛒 Simple Shopping Cart

A minimal, full-stack e-commerce application built with React and Node.js that allows users to browse products, manage a shopping cart, and simulate checkout.

## 📋 Project Description

This project demonstrates a complete e-commerce workflow with:
- **Product browsing** with search and sort functionality
- **Shopping cart management** with quantity controls
- **Checkout simulation** with backend integration
- **Responsive design** that works on all devices
- **Persistent cart** using localStorage
- **Comprehensive testing** with Jest and Supertest

## 🚀 Local Setup and Installation

### Prerequisites
- Node.js (v16 or higher)
- pnpm (recommended) or npm

### Clone the repository
   ```bash
   git clone https://github.com/ajinkya8010/Simple-Shopping-Cart
   cd Simple-Shopping-Cart
   ```


### Backend Setup

1. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Create environment file:**
   ```bash
   # Create .env file with the following content:
   NODE_ENV=development
   PORT=5000
   ```

4. **Start the backend server:**
   ```bash
   pnpm start
   # or for development with auto-restart:
   pnpm run dev
   ```

   Backend will run on `http://localhost:5000`

### Frontend Setup

1. **Navigate to frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Start the frontend development server:**
   ```bash
   pnpm run dev
   ```

   Frontend will run on `http://localhost:5173`

### Full Application
- Open your browser and navigate to `http://localhost:5173`
- The frontend will automatically connect to the backend API

## 🧪 Running Test Cases

### Backend Tests

```bash
cd backend

# Run all tests
pnpm test

# Run tests in watch mode (re-runs on file changes)
pnpm run test:watch

# Run specific test file
pnpm exec jest products.test.js
```

### Test Coverage
The test suite includes comprehensive coverage:
- ✅ API endpoint validation
- ✅ Data structure verification  
- ✅ Response format checking
- ✅ Data type validation
- ✅ Unique ID verification
- ✅ Image URL validation
- ✅ Price validation

## 🎯 Assumptions and Design Choices

### Backend Design Choices
- **No Database**: Used hardcoded JSON data for simplicity and quick setup
- **ES Modules**: Modern JavaScript with import/export syntax for better tree-shaking
- **Environment Variables**: Configurable settings via .env for different environments
- **CORS Enabled**: Allowed cross-origin requests for frontend-backend communication
- **RESTful API**: Clean, predictable API endpoints following REST conventions
- **Comprehensive Testing**: Full test coverage with Jest and Supertest for reliability

### Frontend Design Choices
- **React Context**: Global cart state management without external state libraries
- **localStorage Persistence**: Cart data persists across browser sessions
- **Responsive Design**: Mobile-first approach with CSS Grid and Flexbox
- **Component Architecture**: Reusable, modular components for maintainability
- **Modern CSS**: Clean, modern styling with hover effects and transitions
- **Client-side Routing**: React Router for seamless navigation

### State Management Assumptions
- **Client-side Cart**: Cart data stored only in browser, not on server
- **Optimistic Updates**: UI updates immediately for better user experience
- **No Authentication**: Users don't need to log in or create accounts
- **Single Currency**: All prices displayed in Indian Rupees (₹)
- **No Payment Processing**: Checkout is simulated only, no real payments

### Technical Assumptions
- **Modern Browsers**: Application targets modern browsers with ES6+ support
- **Local Development**: Primary focus on local development environment
- **No User Accounts**: No user registration, login, or profile management
- **Static Product Data**: Product catalog is hardcoded and doesn't change
- **Single Page Application**: All functionality within one React application

## 🔧 API Endpoints

### Products
- **GET** `/api/products` - Returns list of all products

### Orders  
- **POST** `/api/orders` - Accepts checkout data
  ```json
  {
    "items": [
      { "productId": 1, "quantity": 2 },
      { "productId": 2, "quantity": 1 }
    ]
  }
  ```

## 🛠️ Technologies Used

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management
- **Jest** - Testing framework
- **Supertest** - HTTP assertion library

### Frontend
- **React 18** - UI library
- **React Router** - Client-side routing
- **Vite** - Build tool and dev server
- **Axios** - HTTP client
- **CSS3** - Modern styling

## 🚀 Deployment

### Backend
1. Set `NODE_ENV=production` in environment
2. Configure production PORT
3. Deploy to your preferred platform

### Frontend
1. Build the project: `pnpm run build`
2. Deploy the `dist` folder to static hosting

---

**Happy Shopping! 🛒✨**
