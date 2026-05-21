# Andrew Perez Portfolio — Sanity Editing Guide

Studio URL: https://andrew-perez-portfolio.sanity.studio/

Use this guide to update the website content without editing code.

## 1. Logging in

1. Open the Studio URL.
2. Log in or create a Sanity account using the email address that was invited to the project.
3. Once logged in, you should see three main content areas:
   - Site Settings
   - Photos
   - Film Projects

If you cannot access the Studio after logging in, ask the developer to invite your email to the Sanity project.

---

## 2. Site Settings

This controls the general profile/contact content used across the website.

### Artist Name
Your full display name.

Example:

```txt
Andrew Perez
```

The homepage automatically splits this into two lines using the first space.

### Initials / Logo Text
The short text shown in the top-left navigation.

Example:

```txt
AP
```

Keep this short, ideally 2–4 characters.

### Role Label
The short description shown near the homepage profile image.

Example:

```txt
Filmmaker / Photographer
```

### Profile Image
The portrait/profile image shown on the homepage.

Recommended:

- vertical or square image
- clear subject
- high quality

### Profile Image Alt Text
A short description of the image for accessibility.

Example:

```txt
Portrait of Andrew Perez
```

### Contact Email
The email shown in the contact section.

Example:

```txt
hello@example.com
```

### Instagram URL
Full Instagram profile link.

Example:

```txt
https://instagram.com/username
```

### YouTube URL
Full YouTube channel/profile link.

Example:

```txt
https://youtube.com/@username
```

---

## 3. Photos

Photos control the photography gallery on the website.

Each photo is one gallery item.

### Title
A short internal name for the photo. This may not always appear on the website, but it helps identify the photo in Sanity.

Example:

```txt
Studio portrait black and white
```

### Image
Upload the photo here.

Recommended:

- JPG or WebP
- at least 1600px wide if possible
- avoid extremely small images
- avoid uploading unnecessarily huge files when possible

The website automatically crops images to fit the gallery layout, so portrait, landscape, and square images are all okay.

### Image Alt Text
Required. A short description for accessibility.

Example:

```txt
Black and white portrait of a model in studio lighting
```

### Caption
Optional. A short note about the photo.

This may be used later if captions or a lightbox are added.

### Published
Controls whether the photo appears on the live website.

- On: visible on the website
- Off: hidden from the website

Use this if you want to prepare a photo but not show it yet.

### Ordering Photos
The Photos section supports drag-and-drop ordering.

If ordering looks incorrect for new content, use the list menu and choose **Reset Order**.

---

## 4. Film Projects

Film Projects control the film/directing section of the website.

Each project is one film item.

### Title
The film/project title.

Example:

```txt
Project Name
```

### Description
A short description of the project.

Good things to include:

- what the project is
- mood or concept
- role/context
- any important details

### Cover Image
The main large image shown for the film project.

Recommended:

- landscape/wide image
- strong visual frame
- high quality

### Cover Image Alt Text
Required. A short description of the cover image.

Example:

```txt
Wide still from a short film showing a subject walking through a city at night
```

### Stills / Gallery Images
Additional images shown below the cover image.

Recommended:

- add at least 3 stills when possible
- use high-quality frames from the project
- landscape images usually work best

### Still Image Alt Text
Required for each still.

Example:

```txt
Behind the scenes still of camera setup on location
```

### Watch URL
The external link where visitors can watch the film.

Supported examples:

```txt
https://vimeo.com/...
https://youtube.com/watch?v=...
```

The website opens this link in a new tab.

### Year
Optional. The project year.

Example:

```txt
2024
```

### Role
Optional. Your role on the project.

Examples:

```txt
Director
Cinematographer
Editor
Director / DP
```

### Client
Optional. The client, brand, artist, or organization connected to the project.

Example:

```txt
Nike
```

### Published
Controls whether the film project appears on the live website.

- On: visible on the website
- Off: hidden from the website

### Ordering Film Projects
The Film Projects section supports drag-and-drop ordering.

If ordering looks incorrect for new content, use the list menu and choose **Reset Order**.

---

## 5. Publishing workflow

Sanity saves changes as you edit, but the live website only shows documents that are marked as published.

For Photos and Film Projects:

1. Add/edit the content.
2. Make sure `Published` is turned on.
3. Refresh the live website.

The website updates from Sanity automatically. A Netlify deploy is not needed for normal content edits.

---

## 6. Best practices

### Images

- Use clear, high-quality images.
- Avoid uploading tiny images because they may look blurry.
- Keep alt text short but descriptive.
- The website will crop images automatically to fit the layout.

### Videos

- Upload videos to YouTube, Vimeo, or another video platform.
- Paste the public watch link into `Watch URL`.
- Do not upload video files directly to Sanity for this site.

### Published toggle

Use `Published` to control what is live.

Turn it off if:

- the item is unfinished
- you want to hide it temporarily
- you are preparing content for later

---

## 7. What not to change

Do not delete content unless you are sure you no longer need it.

If you are unsure, turn `Published` off instead of deleting.

Do not change technical project settings in Sanity Manage unless instructed by the developer.
