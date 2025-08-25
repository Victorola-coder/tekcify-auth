# Tekcify Auth - Next.js Authentication System

A modern, full-stack authentication system built with Next.js 15, TypeScript, and Tekcify OAuth. Features a beautiful minimalist UI with secure authentication flow.

## ✨ Features

- 🔐 **Tekcify OAuth Integration** - Secure authentication with Tekcify
- 🎨 **Minimalist UI Design** - Clean, modern interface with dark theme
- 📱 **Responsive Design** - Works perfectly on all devices
- 🔒 **Protected Routes** - Server-side and client-side route protection
- 🍪 **Secure Session Management** - HTTP-only cookies with proper security
- ⚡ **TypeScript Support** - Full type safety throughout the application
- 🎭 **Beautiful Animations** - Smooth transitions with Framer Motion
- 🎯 **Error Handling** - Comprehensive error management and user feedback

## 🚀 Quick Start

### Prerequisites

- Node.js 16 or higher
- npm or yarn
- Tekcify OAuth credentials

### Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd tekcify-auth
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   cp env.example .env.local
   ```

   Update `.env.local` with your credentials:

   ```env
   # Tekcify Authentication
   TEKCIFY_CLIENT_ID=your_tekcify_client_id
   TEKCIFY_CLIENT_SECRET=your_tekcify_client_secret

   # NextAuth Configuration
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your_generated_secret
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Configuration

### Getting Tekcify Credentials

1. **Visit Tekcify Developer Portal**: [https://tekcify.com/developers](https://tekcify.com/developers)
2. **Create New Application**: Register a new OAuth application
3. **Configure Redirect URLs**: Add `http://localhost:3000/api/auth/callback`
4. **Get Credentials**: Copy your Client ID and Client Secret

### Environment Variables

| Variable                | Description                          | Required |
| ----------------------- | ------------------------------------ | -------- |
| `TEKCIFY_CLIENT_ID`     | Your Tekcify OAuth Client ID         | ✅       |
| `TEKCIFY_CLIENT_SECRET` | Your Tekcify OAuth Client Secret     | ✅       |
| `NEXTAUTH_URL`          | Your application URL                 | ✅       |
| `NEXTAUTH_SECRET`       | Random secret for session encryption | ✅       |

## 📁 Project Structure

```
tekcify-auth/
├── app/
│   ├── api/
│   │   └── auth/
│   │       ├── callback/     # OAuth callback handler
│   │       ├── login/        # Login initialization
│   │       └── logout/       # Logout handler
│   ├── auth/
│   │   ├── login/           # Login page
│   │   ├── signup/          # Signup page
│   │   └── error/           # Error page
│   ├── components/
│   │   ├── ui/              # Reusable UI components
│   │   └── global/          # Global components
│   ├── lib/
│   │   ├── auth-context.tsx # Authentication context
│   │   ├── tekcify.ts       # Tekcify client configuration
│   │   └── validations/     # Form validation schemas
│   ├── profile/             # User profile page
│   └── page.tsx             # Home page
├── public/
│   └── images/              # Static images
└── next.config.ts           # Next.js configuration
```

## 🔐 Authentication Flow

1. **User clicks "Sign in with Tekcify"**
2. **Redirected to Tekcify OAuth** for authentication
3. **User authenticates** with Tekcify
4. **Callback handled** by `/api/auth/callback`
5. **Tokens exchanged** for access token
6. **User redirected** to profile page
7. **Session stored** in secure HTTP-only cookies

## 🎨 UI Components

The application includes a comprehensive set of reusable UI components:

- **Buttons** - Multiple variants (primary, secondary, danger, etc.)
- **Inputs** - Form inputs with validation
- **Cards** - Content containers with glow effects
- **Modals** - Overlay dialogs
- **Loaders** - Loading spinners
- **Toast Notifications** - User feedback messages

## 🛠️ Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Authentication**: Tekcify OAuth
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Validation**: Zod
- **Notifications**: Sonner

## 🔒 Security Features

- **HTTP-only Cookies** - Secure session storage
- **CSRF Protection** - State parameter validation
- **Secure Headers** - Proper security headers
- **Input Validation** - Zod schema validation
- **Error Handling** - Comprehensive error management

## 📱 Responsive Design

The application is fully responsive and works on:

- Desktop computers
- Tablets
- Mobile phones
- All modern browsers

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

If you encounter any issues:

1. Check the [Tekcify documentation](https://www.npmjs.com/package/tekcify-auth)
2. Review the error logs in your browser console
3. Ensure your environment variables are correctly set
4. Verify your Tekcify OAuth application configuration

## 🔄 Updates

Stay updated with the latest changes by:

- Following the repository
- Checking the releases page
- Reading the changelog

---

Built with ❤️ using Next.js, TypeScript, and Tekcify Auth
