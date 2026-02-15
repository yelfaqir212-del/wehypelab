# 📸 Add Founder Images - Step by Step

## Your Founders:
1. **Ibrahim Jaidi** (First image - black & white photo with sunglasses) → Will display in COLOR
2. **Houda** (Second image - colorful photo with red lipstick) → Will display in BLACK & WHITE

## Steps to Add Images:

### Option 1: Direct Method (Recommended)
1. **Save the images:**
   - Save Ibrahim's image (the B&W one with sunglasses) as `founder1.jpg`
   - Save Houda's image (the colorful one) as `founder2.jpg`

2. **Place them in the `public` folder:**
   ```
   wehypelab/
   ├── public/
   │   ├── founder1.jpg  ← Ibrahim's photo goes here
   │   └── founder2.jpg  ← Houda's photo goes here
   ```

3. **Update the code:**
   Open `src/components/Founders.jsx` and change lines 8-9 from:
   ```javascript
   const founder1 = "/founder1-placeholder.svg";
   const founder2 = "/founder2-placeholder.svg";
   ```
   
   To:
   ```javascript
   const founder1 = "/founder1.jpg";
   const founder2 = "/founder2.jpg";
   ```

4. **Save and restart:**
   ```bash
   npm start
   ```

### Option 2: Using Terminal (Mac/Linux)
If your images are in Downloads folder:
```bash
# Navigate to project
cd wehypelab

# Copy Ibrahim's image (first one)
cp ~/Downloads/ibrahim-image.jpg public/founder1.jpg

# Copy Houda's image (second one)
cp ~/Downloads/houda-image.jpg public/founder2.jpg

# Update the Founders.jsx file (lines 8-9)
# Then restart the server
npm start
```

## ✨ Image Display:
- **Ibrahim's photo** will show in COLOR (as it appears)
- **Houda's photo** will automatically convert to BLACK & WHITE via CSS filter

## Names & Roles Already Updated:
✅ Ibrahim Jaidi - Co-Founder & CEO
✅ Houda - Co-Founder & COO

## Need to Update More Info?
Edit `src/components/Founders.jsx` around lines 18-34 to update:
- Bio text
- Expertise tags
- Roles

Everything else is ready to go! Just add the two images and you're done! 🚀
