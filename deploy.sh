#!/bin/bash

# Deploy script voor Match AI Website
# Dit script kopieert de nieuwste build en deploy naar Firebase

set -e  # Stop bij errors

echo "🚀 Match AI Website Deployment"
echo "================================"
echo ""

# Check of we in de juiste directory zitten
if [ ! -f "firebase.json" ]; then
    echo "❌ Error: firebase.json not found. Run this from match-ai-website directory!"
    exit 1
fi

# Stap 1: Kopieer de nieuwste build
echo "📦 Step 1: Copying latest build from match-ai-website-new..."
rm -rf out
cp -r ../match-ai-website-new/out .
echo "✅ Build copied"
echo ""

# Stap 2: Verificatie
echo "🔍 Step 2: Verifying blog files..."
if [ -d "out/nl/ai-academy/blogs/hubspot-ai-agents" ]; then
    echo "✅ Blog files found"
else
    echo "❌ Warning: Blog files not found!"
fi
echo ""

# Stap 3: Firebase deploy
echo "🔥 Step 3: Deploying to Firebase..."
firebase deploy --only hosting

echo ""
echo "✅ Deployment complete!"
echo ""
echo "🌐 Check your site at:"
echo "   - https://match-ai.nl/nl/ai-academy"
echo "   - https://match-ai-website.web.app/nl/ai-academy"
