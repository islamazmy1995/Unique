# Fixing Build Errors

Follow these steps to resolve the build issues:

## 1. Update package.json

Replace the contents of your `package.json` with the following:

```json
{
  "name": "e-commerce-app",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "^14.1.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "@types/node": "^20.0.0",
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "typescript": "^5.0.0",
    "tailwindcss": "^3.3.0",
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.0",
    "critters": "^0.0.21"
  },
  "devDependencies": {
    "eslint": "^8.0.0",
    "eslint-config-next": "14.1.0"
  }
}
```

## 2. Install Dependencies

Run the following command in your terminal:

```bash
npm install
# or
yarn install
```

## 3. Create Error Pages

### Create `app/500/page.tsx` with this content:

```tsx
export default function Custom500() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">500</h1>
        <p className="text-xl text-gray-600">Server-side error occurred</p>
        <p className="mt-4 text-gray-500">
          We're working on fixing this. Please try again later.
        </p>
      </div>
    </div>
  );
}
```

### Create `app/not-found.tsx` with this content:

```tsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-6">Page not found</p>
        <p className="text-gray-500 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link 
          href="/"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
}
```

## 4. Rebuild the Application

After completing the above steps, try building the application again:

```bash
npm run build
# or
yarn build
```

## 5. Start the Application

```bash
npm run dev
# or
yarn dev
```

These changes should resolve the build errors you were experiencing. The updates include:
- Updated Next.js and related dependencies
- Added the missing 'critters' package
- Created proper error pages for 404 and 500 errors
