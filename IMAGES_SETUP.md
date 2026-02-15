# How to Add Founder Images

## Step 1: Prepare Your Images
You have two founder images that need to be added to the website.

## Step 2: Add Images to Public Folder
1. Save your first founder image as `founder1.jpg` 
2. Save your second founder image as `founder2.jpg`
3. Place both images in the `public/` folder

## Step 3: Update the Founders Component
Open `src/components/Founders.jsx` and update these lines (around line 8-9):

**Change from:**
```javascript
const founder1 = "/founder1-placeholder.svg";
const founder2 = "/founder2-placeholder.svg";
```

**Change to:**
```javascript
const founder1 = "/founder1.jpg";
const founder2 = "/founder2.jpg";
```

## Step 4: Update Founder Names and Info
In the same file, update the founder details (around line 17-33):

```javascript
{
  id: 1,
  name: "First Founder Name",  // Update this
  role: "Co-Founder & CEO",    // Update this
  image: founder1,
  bio: "Your founder bio here...",  // Update this
  expertise: ["Skill 1", "Skill 2", "Skill 3"]  // Update this
},
{
  id: 2,
  name: "Second Founder Name",  // Update this
  role: "Co-Founder & COO",     // Update this
  image: founder2,
  bio: "Your founder bio here...",  // Update this
  expertise: ["Skill 1", "Skill 2", "Skill 3"]  // Update this
}
```

## Note About Second Image
The second founder image (founder2.jpg) will automatically have a black and white filter applied through CSS. No additional steps needed!

## Quick Command (Linux/Mac)
If your images are in your Downloads folder:
```bash
cp ~/Downloads/your-first-image.jpg public/founder1.jpg
cp ~/Downloads/your-second-image.jpg public/founder2.jpg
```

Then restart the development server:
```bash
npm start
```
