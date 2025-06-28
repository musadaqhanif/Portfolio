#!/bin/bash

# Deployment Script for Musadaq Hanif Portfolio
# This script helps automate the deployment process

echo "🚀 Starting deployment process..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18 or higher."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18 or higher is required. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js version: $(node -v)"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Run linting
echo "🔍 Running linting..."
npm run lint

# Build the project
echo "🏗️ Building the project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build completed successfully!"
    
    # Ask user which platform to deploy to
    echo ""
    echo "🌐 Choose deployment platform:"
    echo "1) Vercel (Recommended)"
    echo "2) Netlify"
    echo "3) Railway"
    echo "4) Render"
    echo "5) Exit"
    echo ""
    read -p "Enter your choice (1-5): " choice
    
    case $choice in
        1)
            echo "🚀 Deploying to Vercel..."
            if command -v vercel &> /dev/null; then
                vercel --prod
            else
                echo "📦 Installing Vercel CLI..."
                npm install -g vercel
                vercel --prod
            fi
            ;;
        2)
            echo "🚀 Deploying to Netlify..."
            if command -v netlify &> /dev/null; then
                netlify deploy --prod
            else
                echo "📦 Installing Netlify CLI..."
                npm install -g netlify-cli
                netlify deploy --prod
            fi
            ;;
        3)
            echo "🚀 Deploying to Railway..."
            echo "Please visit https://railway.app and deploy manually"
            echo "Or use Railway CLI: npm install -g @railway/cli && railway login"
            ;;
        4)
            echo "🚀 Deploying to Render..."
            echo "Please visit https://render.com and deploy manually"
            ;;
        5)
            echo "👋 Deployment cancelled. Goodbye!"
            exit 0
            ;;
        *)
            echo "❌ Invalid choice. Please run the script again."
            exit 1
            ;;
    esac
else
    echo "❌ Build failed. Please check the errors above."
    exit 1
fi

echo "🎉 Deployment process completed!" 