# First Next.js Project

🚀 **[View Live Demo](https://first-nextjs-project-snowy-eight.vercel.app/)**

A modern e-commerce application built with Next.js and TypeScript, featuring product listings, categories, and user reviews.

## Features

- **Product Catalog**: Browse through a wide range of products with detailed information
- **Categories**: Organized product categories for easy navigation
- **Product Details**: Individual product pages with ratings and reviews
- **Responsive Design**: Mobile-first design that works on all devices
- **TypeScript**: Full type safety throughout the application
- **Modern UI**: Clean and intuitive user interface with shadcn/ui components

## Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **API**: DummyJSON API for mock data
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn


```


## Project Structure

```
├── app/                    # Next.js app directory
│   ├── _components/        # Page-specific components
│   ├── products/          # Dynamic product routes
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   └── ui/               # UI components (shadcn/ui)
├── lib/                  # Utility functions and API calls
│   ├── categories/       # Category-related utilities
│   └── products/         # Product-related utilities
└── public/               # Static assets
```

## API Integration

This project uses [DummyJSON](https://dummyjson.com/) for mock API data, including:

- Products API
- Categories API
- User reviews and ratings

## License

This project is licensed under the MIT License.