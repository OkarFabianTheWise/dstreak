### **BEING UPDATED...**


# Devstreak-Frontend

> Frontend for the Devstreak platform built with Vite, React, TypeScript, and TailwindCSS.
> Designed to handle both traditional web integration and blockchain workflows, specifically for Solana development. The template comes with built-in polyfills to facilitate seamless Solana integration.

> webpack.config.js: holds the polyfills

> COLOUR SCHEMES: Defined in the tailwindcss.config.json. Please request if you need a colour scheme and it's not there.


```plaintext
TASKS:

OrkarFabianTheWise: 
Google login/SignUp screen
Registration Form Screen
Successful Joined Screen
.
.
@antonineutron 
Onboarding Screen
Menu-Community List Dropdown
.
```

### API Feedback Modals

The application includes three modal components for handling API interactions
(api-call-confirmation, api-error-alert, api-success-alert):

- **ApiCallConfirmation**: A confirmation modal with "Continue" and "Cancel" buttons, designed for destructive actions like account deletion - use by passing `isOpen`, `onClose`, `onConfirm`, and `isDestructive` props.
- **ApiErrorAlert**: A red-bordered modal that displays error messages from failed API calls - implement by providing `message`, `isOpen`, and `onClose` props, with automatic closure after 4 seconds.
- **ApiSuccessAlert**: A green-bordered modal showing successful API responses - integrate using `message`, `isOpen`, `onClose` props, featuring auto-close functionality and optional confirmation callback.

Example usage:
```tsx
<ApiCallConfirmation
  message="Are you sure you want to delete your account?"
  isOpen={isModalOpen}
  onClose={() => setIsModalOpen(false)}
  onConfirm={handleDeleteAccount}
  isDestructive={true}
/>
```

## 🔌 API Authentication Endpoints

The `utils/api/auth.ts` file contains authentication-related API calls:

### Authentication Functions

1. **handleSignup**
```typescript
handleSignup({
  full_name: string,
  username: string,
  email: string,
  password: string,
  walletAddress: string,
  state: string,
  socials: {
    discord: string,
    telegram: string,
    github: string,
    twitter: string
  },
  skills: string[]
}, setIsLoading, setErrorMessage, navigate)
```

2. **handleLogin**
```typescript
handleLogin(
  email: string,
  password: string,
  setIsLoading,
  setErrorMessage,
  setIsAlertOpen,
  navigate
)
```

3. **handleProfileUpdate**
```typescript
handleProfileUpdate(
  _label: string,
  value: string,
  setErrorMessage,
  setIsAlertOpen,
  setIsSuccess
)
```

4. **handleDeleteAccount**
```typescript
handleDeleteAccount(
  setErrorMessage,
  setIsAlertOpen,
  setIsSuccess
)
```

### Example Usage

```tsx
// Login Example
const YourLoginComponent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await handleLogin(
      email,
      password,
      setIsLoading,
      setErrorMessage,
      setIsAlertOpen,
      navigate
    );
  };
};

// Delete Account Example
const YourDeleteComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const confirmDelete = async () => {
    await handleDeleteAccount(
      setErrorMessage,
      setIsAlertOpen,
      setIsSuccess
    );
  };

  return (
    <>
      <button onClick={() => setIsModalOpen(true)}>Delete Account</button>
      <ApiCallConfirmation
        message="Are you sure you want to delete your account?"
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={confirmDelete}
        isDestructive={true}
      />
    </>
  );
};
```

All endpoints return a response object with the following structure:
```typescript
interface AuthResponse {
  success: boolean;
  message?: string;
  data?: {
    user?: any;
    token?: string;
  };
}
```

## 🚀 Features

- 🔒 Role-based authentication (Superadmin, Admin)
- 🌟 Built with modern technologies: Vite, React, TypeScript, TailwindCSS
- 📦 Modular folder structure: components, pages, assets..

## 🛠️ Tech Stack

- **Frontend Framework:** React + Vite
- **CSS Framework:** TailwindCSS
- **Language:** TypeScript

## 📂 Project Structure

```plaintext
.
├── README.md
├── babel.config.json
├── components.json
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.cjs
├── public
│   └── icon.png
├── src
│   ├── App.css
│   ├── App.tsx
│   ├── assets # images to be used, design perks like dark bg dotlike stars 
│   ├── components
│   ├── data # dummy data
│   ├── index.css
│   ├── layouts # admin, superadmin, user interfaces
│   ├── lib
│   ├── main.tsx
│   ├── pages
│   ├── store
│   ├── styles
│   ├── utils
│   └── vite-env.d.ts
├── tailwind.config.js # contains colour settings
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── webpack.config.js
```

## 🔧 Setup and Development

1. Clone the repository:
   ```bash
   git clone <repo>
   cd Devstreak-frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## Milestones
- [x] Home Page
- [x] Login Page
- [x] SignUp Page
- [x] Onboarding Page
- [x] Menu-Comm. List
- [x] Mobile view of Account Settings page
- [/] Backend api integration


## 🧩 Contributing

Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch (`feature/my-feature`).
3. Commit your changes.
4. Push your branch and submit a pull request.

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

```

---