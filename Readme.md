# Hyper Store: Full-Stack E-commerce PWA

<div align="center">

![Hyper Store Logo](https://via.placeholder.com/200x100/6366f1/ffffff?text=Hyper+Store)

[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-14+-green.svg)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green.svg)](https://www.mongodb.com/)
[![PWA](https://img.shields.io/badge/PWA-Ready-purple.svg)](https://web.dev/progressive-web-apps/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Netlify Status](https://api.netlify.com/api/v1/badges/placeholder/deploy-status)](https://app.netlify.com/)

*A modern, full-stack e-commerce Progressive Web Application with futuristic design and cutting-edge features*

[🚀 Live Demo](https://hyperstore-demo.netlify.app) • [📖 Documentation](#documentation) • [🐛 Report Bug](https://github.com/username/hyper-store/issues) • [✨ Request Feature](https://github.com/username/hyper-store/issues)

</div>

---

## 📋 Table of Contents

- [🌟 Overview](#-overview)
- [✨ Key Features](#-key-features)
- [🎯 Demo & Screenshots](#-demo--screenshots)
- [🛠️ Technology Stack](#️-technology-stack)
- [🏗️ System Architecture](#️-system-architecture)
- [📋 Prerequisites](#-prerequisites)
- [🚀 Installation Guide](#-installation-guide)
- [📁 Project Structure](#-project-structure)
- [🔐 Authentication System](#-authentication-system)
- [🛒 Shopping Cart Implementation](#-shopping-cart-implementation)
- [📱 Progressive Web App Features](#-progressive-web-app-features)
- [🔌 API Documentation](#-api-documentation)
- [🎨 UI/UX Design System](#-uiux-design-system)
- [🔒 Security Implementation](#-security-implementation)
- [🚀 Deployment Guide](#-deployment-guide)
- [🧪 Testing](#-testing)
- [🔧 Troubleshooting](#-troubleshooting)
- [📊 Performance Optimization](#-performance-optimization)
- [🔮 Roadmap](#-roadmap)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [👨‍💻 Author](#-author)

---

## 🌟 Overview

Hyper Store is a cutting-edge, full-stack e-commerce Progressive Web Application that combines modern web technologies with a futuristic design aesthetic. Built with scalability and user experience in mind, it offers a complete shopping platform with advanced features like offline capabilities, social authentication, and real-time notifications.

### 🎯 Project Goals

- **User Experience**: Deliver a seamless, app-like shopping experience
- **Performance**: Achieve fast loading times and smooth interactions
- **Accessibility**: Ensure the platform is usable by everyone
- **Scalability**: Build with future growth and feature additions in mind
- **Modern Standards**: Implement latest web development best practices

### 🏆 What Makes It Special

- **PWA Implementation**: Full offline functionality with service workers
- **Dual Authentication**: Both local and OAuth 2.0 social login
- **Real-time Features**: Live cart updates and instant notifications
- **Responsive Design**: Seamless experience across all devices
- **Cyber-tech Aesthetic**: Unique futuristic design that stands out

---

## ✨ Key Features

### 🛍️ Core E-commerce Features
- **Product Catalog**: Browse products with advanced search and filtering
- **Shopping Cart**: Add, remove, and modify cart items with persistence
- **Checkout Process**: Streamlined order placement with validation
- **Order Management**: View order history and track status
- **User Profiles**: Manage personal information and preferences

### 🔐 Authentication & Security
- **Local Authentication**: Secure email/password registration and login
- **Google OAuth 2.0**: One-click social login integration
- **JWT Tokens**: Stateless authentication with secure token management
- **Password Security**: bcrypt hashing for password protection
- **Session Management**: Automatic token refresh and logout

### 📱 Progressive Web App
- **Installable**: Add to home screen on any device
- **Offline Support**: App shell works without internet connection
- **Push Notifications**: Real-time updates and promotions
- **Background Sync**: Sync data when connection is restored
- **App-like Experience**: Native feel with web technologies

### 🎨 Modern UI/UX
- **Futuristic Design**: Cyber-tech aesthetic with dark theme
- **Responsive Layout**: Mobile-first design approach
- **Smooth Animations**: Micro-interactions and transitions
- **Accessibility**: WCAG compliant with keyboard navigation
- **Toast Notifications**: Real-time user feedback

### ⚡ Performance Features
- **Fast Loading**: Vite build tool for optimal performance
- **Code Splitting**: Lazy loading for better initial load times
- **Image Optimization**: Responsive images with modern formats
- **Caching Strategy**: Smart caching for static and dynamic content
- **Bundle Optimization**: Tree shaking and minification

---

## 🎯 Demo & Screenshots

### 🌐 Live Demo
Visit the live application: [https://hyperstore-demo.netlify.app](https://hyperstore-demo.netlify.app)

### 📸 Screenshots

<details>
<summary>Click to view screenshots</summary>

#### Home Page
![Home Page](https://via.placeholder.com/800x600/1e1e2e/ffffff?text=Home+Page)

#### Product Catalog
![Product Catalog](https://via.placeholder.com/800x600/1e1e2e/ffffff?text=Product+Catalog)

#### Shopping Cart
![Shopping Cart](https://via.placeholder.com/800x600/1e1e2e/ffffff?text=Shopping+Cart)

#### User Profile
![User Profile](https://via.placeholder.com/800x600/1e1e2e/ffffff?text=User+Profile)

#### Mobile View
![Mobile View](https://via.placeholder.com/400x800/1e1e2e/ffffff?text=Mobile+View)

</details>

### 🎥 Video Demo
[![Video Demo](https://via.placeholder.com/800x450/ff0000/ffffff?text=▶️+Watch+Demo)](https://youtube.com/watch?v=demo)

---

## 🛠️ Technology Stack

### Frontend Technologies

| Technology | Version | Purpose | Documentation |
|------------|---------|---------|---------------|
| **React** | 18.3.1 | UI Framework | [React Docs](https://reactjs.org/docs) |
| **Vite** | Latest | Build Tool | [Vite Guide](https://vitejs.dev/guide/) |
| **React Router** | 6.30.1 | Client Routing | [Router Docs](https://reactrouter.com/) |
| **Lucide React** | Latest | Icon Library | [Lucide Icons](https://lucide.dev/) |
| **React Hot Toast** | Latest | Notifications | [Toast Docs](https://react-hot-toast.com/) |

### Backend Technologies

| Technology | Version | Purpose | Documentation |
|------------|---------|---------|---------------|
| **Node.js** | 14+ | Runtime | [Node.js Docs](https://nodejs.org/docs) |
| **Express** | Latest | Web Framework | [Express Guide](https://expressjs.com/) |
| **MongoDB** | Atlas | Database | [MongoDB Docs](https://docs.mongodb.com/) |
| **Mongoose** | Latest | ODM | [Mongoose Docs](https://mongoosejs.com/) |
| **Passport.js** | Latest | Authentication | [Passport Docs](http://www.passportjs.org/) |
| **JWT** | Latest | Tokens | [JWT.io](https://jwt.io/) |

### Development Tools

- **ESLint**: Code linting and formatting
- **Prettier**: Code formatting
- **Git**: Version control
- **VS Code**: Recommended IDE
- **Postman**: API testing
- **Chrome DevTools**: Debugging and performance

### Deployment & Hosting

- **Netlify**: Frontend hosting with CI/CD
- **Heroku**: Backend hosting and deployment
- **MongoDB Atlas**: Cloud database hosting
- **Cloudinary**: Image storage and optimization

---

## 🏗️ System Architecture

### 🔄 Architecture Overview

```mermaid
graph TB
    subgraph "Client Side"
        A[React App] --> B[Service Worker]
        A --> C[Local Storage]
        A --> D[Auth Context]
        A --> E[Cart Context]
    end
    
    subgraph "Server Side"
        F[Express Server] --> G[Auth Middleware]
        F --> H[API Routes]
        H --> I[Controllers]
        I --> J[MongoDB Models]
    end
    
    subgraph "External Services"
        K[Google OAuth]
        L[MongoDB Atlas]
        M[Netlify CDN]
    end
    
    A -->|HTTP/HTTPS| F
    F -->|OAuth| K
    J -->|Database Queries| L
    A -->|Static Assets| M
```

### 📊 Data Flow Diagram

```mermaid
sequenceDiagram
    participant U as User
    participant F as Frontend
    participant SW as Service Worker
    participant B as Backend
    participant DB as Database
    participant G as Google OAuth
    
    U->>F: Interact with App
    F->>SW: Check Cache
    SW-->>F: Return Cached Data
    F->>B: API Request (if not cached)
    B->>DB: Query Database
    DB-->>B: Return Data
    B-->>F: JSON Response
    F->>U: Update UI
    
    Note over U,G: Authentication Flow
    U->>F: Login with Google
    F->>B: Redirect to OAuth
    B->>G: OAuth Request
    G-->>B: User Data
    B->>DB: Store/Update User
    B-->>F: JWT Token
    F->>U: Authenticated State
```

### 🗄️ Database Schema

```mermaid
erDiagram
    User ||--o{ Order : places
    Order ||--o{ OrderItem : contains
    Product ||--o{ OrderItem : referenced_in
    
    User {
        string _id PK
        string name
        string email UK
        string password
        string googleId
        date createdAt
        date updatedAt
    }
    
    Product {
        string _id PK
        string name
        string description
        number price
        string category
        string image
        number stock
        boolean featured
        date createdAt
    }
    
    Order {
        string _id PK
        string userId FK
        array items
        object shippingAddress
        number totalAmount
        string status
        date createdAt
    }
    
    OrderItem {
        string productId FK
        string name
        number price
        number quantity
        string image
    }
```

---

## 📋 Prerequisites

### System Requirements

| Component | Minimum | Recommended |
|-----------|---------|-------------|
| **Node.js** | 14.0.0 | 18.0.0+ |
| **npm** | 6.0.0 | 8.0.0+ |
| **RAM** | 4GB | 8GB+ |
| **Storage** | 2GB | 5GB+ |

### Required Accounts & Services

1. **MongoDB Atlas**
   - Create account at [mongodb.com](https://www.mongodb.com/cloud/atlas)
   - Set up a free cluster
   - Configure network access and database user

2. **Google Cloud Console**
   - Create project at [console.cloud.google.com](https://console.cloud.google.com)
   - Enable Google+ API
   - Create OAuth 2.0 credentials

3. **Git & GitHub** (for deployment)
   - GitHub account for version control
   - Git installed locally

### Development Tools

```bash
# Check Node.js version
node --version

# Check npm version
npm --version

# Install recommended global packages
npm install -g nodemon concurrently
```

---

## 🚀 Installation Guide

### 📥 Quick Start (5 minutes)

```bash
# Clone the repository
git clone https://github.com/username/hyper-store.git
cd hyper-store

# Install all dependencies (both frontend and backend)
npm run install-all

# Set up environment variables
npm run setup-env

# Start both servers
npm run dev
```

### 📋 Detailed Installation

#### Step 1: Clone and Setup

```bash
# Clone the repository
git clone https://github.com/username/hyper-store.git
cd hyper-store

# Check project structure
ls -la
```

#### Step 2: Backend Configuration

```bash
# Navigate to backend
cd backend

# Install dependencies
npm install

# Create environment file
cp .env.example .env
```

Edit the `.env` file with your configuration:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/hyperstore?retryWrites=true&w=majority

# Authentication
JWT_SECRET=your-super-secret-jwt-key-here
SESSION_SECRET=your-session-secret-here

# Google OAuth
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

# CORS
CLIENT_URL=http://localhost:5173

# Optional: Email service (for future features)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

#### Step 3: Database Setup

```bash
# Seed the database with sample data
npm run seed

# Verify database connection
npm run db:check
```

#### Step 4: Frontend Configuration

```bash
# Navigate to frontend
cd ../frontend

# Install dependencies
npm install

# Create environment file
cp .env.example .env
```

Edit the frontend `.env` file:

```env
# API Configuration
VITE_REACT_APP_API_URL=http://localhost:5000/api

# App Configuration
VITE_APP_NAME=Hyper Store
VITE_APP_VERSION=1.0.0

# Optional: Analytics (for future features)
VITE_GA_TRACKING_ID=your-google-analytics-id
```

#### Step 5: Start Development Servers

```bash
# Option 1: Start both servers simultaneously (from root directory)
npm run dev

# Option 2: Start servers separately
# Terminal 1 - Backend
cd backend && npm run dev

# Terminal 2 - Frontend
cd frontend && npm run dev
```

### 🔧 Development Scripts

Add these scripts to your root `package.json`:

```json
{
  "scripts": {
    "dev": "concurrently \"npm run server\" \"npm run client\"",
    "server": "cd backend && npm run dev",
    "client": "cd frontend && npm run dev",
    "install-all": "npm install && cd backend && npm install && cd ../frontend && npm install",
    "build": "cd frontend && npm run build",
    "test": "cd backend && npm test && cd ../frontend && npm test",
    "seed": "cd backend && npm run seed",
    "setup-env": "node scripts/setup-env.js"
  }
}
```

### ✅ Verify Installation

1. **Backend Health Check**
   ```bash
   curl http://localhost:5000/api/health
   # Expected: {"status": "OK", "timestamp": "..."}
   ```

2. **Frontend Access**
   - Open browser to `http://localhost:5173`
   - Verify the app loads without errors

3. **Database Connection**
   ```bash
   cd backend && npm run db:status
   # Expected: "Database connected successfully"
   ```

---

## 📁 Project Structure

### 🗂️ Root Directory Structure

```
hyper-store/
├── 📁 backend/                 # Server-side application
├── 📁 frontend/                # Client-side application
├── 📁 docs/                    # Documentation files
├── 📁 scripts/                 # Utility scripts
├── 📄 README.md               # This file
├── 📄 package.json            # Root package configuration
├── 📄 .gitignore              # Git ignore rules
├── 📄 LICENSE                 # License file
└── 📄 docker-compose.yml      # Docker configuration
```

### 🖥️ Backend Structure

```
backend/
├── 📁 config/
│   ├── 📄 database.js         # Database configuration
│   ├── 📄 passport.js         # Authentication strategies
│   └── 📄 cloudinary.js       # Image upload config
├── 📁 controllers/
│   ├── 📄 authController.js   # Authentication logic
│   ├── 📄 productController.js # Product operations
│   ├── 📄 orderController.js  # Order management
│   └── 📄 userController.js   # User management
├── 📁 middleware/
│   ├── 📄 auth.js             # JWT verification
│   ├── 📄 validation.js       # Input validation
│   ├── 📄 errorHandler.js     # Error handling
│   └── 📄 rateLimit.js        # Rate limiting
├── 📁 models/
│   ├── 📄 User.js             # User schema
│   ├── 📄 Product.js          # Product schema
│   ├── 📄 Order.js            # Order schema
│   └── 📄 Category.js         # Category schema
├── 📁 routes/
│   ├── 📄 auth.js             # Authentication routes
│   ├── 📄 products.js         # Product routes
│   ├── 📄 orders.js           # Order routes
│   ├── 📄 users.js            # User routes
│   └── 📄 admin.js            # Admin routes
├── 📁 scripts/
│   ├── 📄 seed.js             # Database seeding
│   ├── 📄 seedData.js         # Seed data
│   └── 📄 migrate.js          # Database migrations
├── 📁 tests/
│   ├── 📄 auth.test.js        # Authentication tests
│   ├── 📄 products.test.js    # Product tests
│   └── 📄 orders.test.js      # Order tests
├── 📁 utils/
│   ├── 📄 logger.js           # Logging utility
│   ├── 📄 email.js            # Email service
│   └── 📄 helpers.js          # Helper functions
├── 📄 server.js               # Main server file
├── 📄 app.js                  # Express app configuration
├── 📄 package.json            # Dependencies and scripts
└── 📄 .env                    # Environment variables
```

### 🌐 Frontend Structure

```
frontend/
├── 📁 public/
│   ├── 📁 icons/              # PWA icons (multiple sizes)
│   │   ├── 📄 icon-192x192.png
│   │   ├── 📄 icon-512x512.png
│   │   └── 📄 favicon.ico
│   ├── 📁 images/             # Static images
│   │   ├── 📄 hero-bg.jpg
│   │   ├── 📄 logo.png
│   │   └── 📁 products/       # Product images
│   ├── 📄 manifest.json       # PWA manifest
│   ├── 📄 sw.js               # Service worker
│   └── 📄 robots.txt          # SEO robots file
├── 📁 src/
│   ├── 📁 components/         # Reusable components
│   │   ├── 📁 common/         # Common UI components
│   │   │   ├── 📄 Header.jsx
│   │   │   ├── 📄 Footer.jsx
│   │   │   ├── 📄 Loading.jsx
│   │   │   └── 📄 Modal.jsx
│   │   ├── 📁 product/        # Product-related components
│   │   │   ├── 📄 ProductCard.jsx
│   │   │   ├── 📄 ProductList.jsx
│   │   │   └── 📄 ProductFilter.jsx
│   │   ├── 📁 cart/           # Cart components
│   │   │   ├── 📄 CartItem.jsx
│   │   │   ├── 📄 CartSummary.jsx
│   │   │   └── 📄 Checkout.jsx
│   │   └── 📁 auth/           # Authentication components
│   │       ├── 📄 LoginForm.jsx
│   │       ├── 📄 RegisterForm.jsx
│   │       └── 📄 ProfileForm.jsx
│   ├── 📁 pages/              # Page components
│   │   ├── 📄 Home.jsx        # Homepage
│   │   ├── 📄 Products.jsx    # Product listing
│   │   ├── 📄 ProductDetail.jsx # Single product
│   │   ├── 📄 Cart.jsx        # Shopping cart
│   │   ├── 📄 Checkout.jsx    # Checkout process
│   │   ├── 📄 Profile.jsx     # User profile
│   │   ├── 📄 Orders.jsx      # Order history
│   │   ├── 📄 Login.jsx       # Login page
│   │   ├── 📄 Register.jsx    # Registration page
│   │   └── 📄 NotFound.jsx    # 404 page
│   ├── 📁 hooks/              # Custom React hooks
│   │   ├── 📄 useAuth.js      # Authentication hook
│   │   ├── 📄 useCart.js      # Cart management hook
│   │   ├── 📄 useApi.js       # API request hook
│   │   └── 📄 useLocalStorage.js # Local storage hook
│   ├── 📁 context/            # React contexts
│   │   ├── 📄 AuthContext.jsx # Authentication context
│   │   ├── 📄 CartContext.jsx # Cart context
│   │   └── 📄 ThemeContext.jsx # Theme context
│   ├── 📁 utils/              # Utility functions
│   │   ├── 📄 api.js          # API client
│   │   ├── 📄 constants.js    # App constants
│   │   ├── 📄 helpers.js      # Helper functions
│   │   └── 📄 validators.js   # Form validators
│   ├── 📁 styles/             # Styling files
│   │   ├── 📄 globals.css     # Global styles
│   │   ├── 📄 variables.css   # CSS variables
│   │   ├── 📄 components.css  # Component styles
│   │   └── 📄 responsive.css  # Responsive styles
│   ├── 📁 assets/             # Static assets
│   │   ├── 📁 icons/          # SVG icons
│   │   ├── 📁 fonts/          # Custom fonts
│   │   └── 📁 animations/     # Animation files
│   ├── 📄 App.jsx             # Root component
│   ├── 📄 main.jsx            # Application entry
│   └── 📄 index.css           # Base styles
├── 📄 index.html              # HTML template
├── 📄 vite.config.js          # Vite configuration
├── 📄 package.json            # Dependencies
├── 📄 .env                    # Environment variables
└── 📄 .eslintrc.js            # ESLint configuration
```

### 📚 Key File Explanations

#### Backend Key Files

- **`server.js`**: Main entry point, sets up Express server and middleware
- **`config/passport.js`**: Configures Google OAuth and local authentication strategies
- **`middleware/auth.js`**: JWT verification middleware for protected routes
- **`models/User.js`**: User schema with password hashing and validation
- **`routes/products.js`**: Product CRUD operations with search and filtering
- **`scripts/seed.js`**: Populates database with sample products and users

#### Frontend Key Files

- **`App.jsx`**: Root component with routing and context providers
- **`utils/api.js`**: Centralized API client with interceptors and error handling
- **`context/AuthContext.jsx`**: Global authentication state management
- **`context/CartContext.jsx`**: Shopping cart state with localStorage persistence
- **`public/sw.js`**: Service worker for PWA functionality and caching
- **`public/manifest.json`**: PWA manifest for installability

---

## 🔐 Authentication System

### 🏗️ Authentication Architecture

The authentication system supports both local and social login methods with JWT-based session management.

```mermaid
graph TD
    A[User] --> B{Login Method}
    B -->|Email/Password| C[Local Auth]
    B -->|Google OAuth| D[Google Auth]
    
    C --> E[Validate Credentials]
    D --> F[OAuth Flow]
    
    E -->|Valid| G[Generate JWT]
    E -->|Invalid| H[Return Error]
    F -->|Success| G
    F -->|Failed| H
    
    G --> I[Return Token]
    I --> J[Store in Frontend]
    J --> K[Include in API Requests]
    
    H --> L[Show Error Message]
```

### 📝 Local Authentication Flow

#### Registration Process

```javascript
// Frontend - Registration
const register = async (userData) => {
  try {
    const response = await api.post('/auth/register', {
      name: userData.name,
      email: userData.email,
      password: userData.password
    });
    
    const { token, user } = response.data;
    localStorage.setItem('token', token);
    setAuthState({ user, token, isAuthenticated: true });
    
    toast.success('Registration successful!');
    navigate('/dashboard');
  } catch (error) {
    toast.error(error.response.data.message);
  }
};
```

```javascript
// Backend - Registration Handler
const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }
    
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);
    
    // Create user
    const user = new User({
      name,
      email,
      password: hashedPassword
    });
    
    await user.save();
    
    // Generate JWT
    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );
    
    res.status(201).json({
      message: 'User created successfully',
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
```

#### Login Process

```javascript
// Frontend - Login
const login = async (credentials) => {
  try {
    const response = await api.post('/auth/login', credentials);
    const { token, user } = response.data;
    
    localStorage.setItem('token', token);
    setAuthState({ user, token, isAuthenticated: true });
    
    toast.success(`Welcome back, ${user.name}!`);
    navigate('/dashboard');
  } catch (error) {
    toast.error(error.response.data.message);
  }
};
```

### 🔗 Google OAuth Integration

#### OAuth Configuration

```javascript
// config/passport.js
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "/api/auth/google/callback"
}, async (accessToken, refreshToken, profile, done) => {
  try {
    // Check if user already exists
    let user = await User.findOne({ googleId: profile.id });
    
    if (user) {
      return done(null, user);
    }
    
    // Check if user exists with same email
    user = await User.findOne({ email: profile.emails[0].value });
    
    if (user) {
      // Link Google account
      user.googleId = profile.id;
      await user.save();
      return done(null, user);
    }
    
    // Create new user
    user = new User({
      googleId: profile.id,
      name: profile.displayName,
      email: profile.emails[0].value,
      avatar: profile.photos[0].value
    });
    
    await user.save();
    done(null, user);
  } catch (error) {
    done(error, null);
  }
}));
```

#### OAuth Routes

```javascript
// routes/auth.js
// Initiate Google OAuth
router.get('/google', 
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

// Google OAuth callback
router.get('/google/callback',
  passport.authenticate('google', { session: false }),
  (req, res) => {
    const token = jwt.sign(
      { userId: req.user._id },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );
    
    // Redirect to frontend with token
    res.redirect(`${process.env.CLIENT_URL}/auth/success?token=${token}`);
  }
);
```

### 🛡️ JWT Middleware

```javascript
// middleware/auth.js
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    
    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId).select('-password');
    
    if (!user) {
      return res.status(401).json({ message: 'Invalid token' });
    }
    
    req.user = user;
    next();
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ message: 'Token expired' });
    }
    res.status(401).json({ message: 'Invalid token' });
  }
};

module.exports = authMiddleware;
```

### 🔄 Token Refresh Strategy

```javascript
// utils/api.js - Frontend API client with auto-refresh
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_API_URL
});

// Request interceptor to add token
api.intercept