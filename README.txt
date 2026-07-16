YARELI'S FINAL BIRTHDAY WEBSITE

This version was rebuilt to match the approved preview:
- Dark purple/pink glowing visual style
- Welcome screen with Yareli's name
- Light cream-orange Benito and Balvin
- Benito has the fluffy tail
- Balvin has the slimmer normal tail
- Interactive heart collection
- Swipeable/clickable reasons
- Opening envelope and full letter
- Three gifts with separate reveal screens
- Gift 2 is a personal present Alex selected and bought for Yareli
- Cat birthday message
- Memory gallery placeholders
- Future-together section
- Final animated heart and paw-print surprise
- Mobile responsive layout

OPEN THE WEBSITE
Open index.html in Chrome or Safari.

ADD PHOTOS
Replace any memory-card button in index.html with:
<img class="memory-photo" src="your-photo.jpg" alt="Alex and Yareli">

Then add this to style.css:
.memory-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 7px;
}

ADD MUSIC
1. Put an MP3 file in the same folder.
2. Find the audio element at the top of index.html.
3. Replace the comment with:
   <source src="song.mp3" type="audio/mpeg">

PERSONALIZE GIFT 2
Search index.html for:
"A special present I chose for you"

You can replace that heading and description with the exact item after Yareli opens it.

PUBLISH
Upload index.html, style.css, script.js, photos, and music to:
- GitHub Pages
- Netlify
- Vercel


ADD THE YOUTUBE SONG
1. Open index.html.
2. Search for VIDEO_ID.
3. Copy the part after v= in the official YouTube video's URL.
4. Replace VIDEO_ID with that value.

Example:
https://www.youtube.com/watch?v=abc123XYZ
becomes:
https://www.youtube.com/embed/abc123XYZ?rel=0

GITHUB PAGES
1. Create a GitHub repository.
2. Upload every file from this folder.
3. Commit the files.
4. Go to Settings > Pages.
5. Choose Deploy from a branch.
6. Select main and /(root).
7. Save and use the generated link.

PRIVACY NOTE
A public repository can appear on your profile before Yareli sees the surprise.
