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
Andrew Michael Perez
```

The homepage displays each part of the name on its own line and right-aligns the name block. Two- and three-part names are supported.

### Initials / Logo Text

The short text shown in the top-left navigation and used by the default favicon.

Example:

```txt
AP
```

Keep this short, ideally 2–4 characters.

### Role Label

The short description shown below the homepage profile image on small screens and near the profile image on larger screens.

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

### Favicon

Optional. The small browser/tab icon for the website.

Accepted formats:

```txt
.ico, .png, .svg, .gif, .jpg, .jpeg, .webp
```

If no favicon is uploaded, the site automatically uses a fallback favicon with the initials/logo text, such as `AP`.

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

Film Projects control the film/video section of the website.

Each Film Project can contain one main video plus optional additional videos. On the website, visitors see a large embedded video player and a horizontal video selector carousel.

### Title

The film/project title.

Example:

```txt
Project Name
```

This is used as the project-level title and as fallback text if a video does not have its own title/details.

### Description

A short project-level description.

Good things to include:

- what the project is
- mood or concept
- role/context
- any important details

This is used as fallback text if a selected video does not have its own description.

### Cover Image

The fallback image for the project.

Recommended:

- landscape/wide image
- strong visual frame
- high quality

The cover image is shown if a video link cannot be embedded, and it is also used as a fallback thumbnail for video tabs that do not have their own thumbnail.

### Cover Image Alt Text

Required. A short description of the cover image.

Example:

```txt
Wide still from a short film showing a subject walking through a city at night
```

### Watch URL

The main video link for the project.

Supported embed examples:

```txt
https://vimeo.com/...
https://youtube.com/watch?v=...
https://youtu.be/...
https://youtube.com/shorts/...
```

If the URL is YouTube or Vimeo, the website renders it as an embedded video player. The selected video can also be opened externally using the **Open Selected Video** link.

### Additional Videos

Optional. Add more videos here when a project has multiple cuts, reels, trailers, behind-the-scenes videos, or related work.

Each additional video appears as a selectable tab in the horizontal carousel below the main video player. The carousel is designed to handle larger collections, including 10–12 videos.

Each video includes:

#### Video Title

The title shown on the selector tab and in the details section when selected.

Example:

```txt
Director Cut
```

Long titles are automatically shortened in the tab so the layout does not break.

#### Video URL

The YouTube or Vimeo link for this specific video.

Examples:

```txt
https://youtube.com/watch?v=...
https://vimeo.com/...
```

#### Thumbnail / Still Image

Optional still image shown in the video selector tab.

Recommended:

- landscape/wide image
- high-quality frame from the video
- visually distinct from other video thumbnails

If this is left blank, the project cover image is used instead.

#### Thumbnail Alt Text

Required when uploading a thumbnail. A short accessibility description of the still image.

Example:

```txt
Still frame of the lead subject standing under red studio lighting
```

#### Video Description

Optional. The description shown below the player when this video is selected.

If left blank, the project-level description is used.

#### Video Year

Optional. The year shown in the selected video details.

If left blank, the project-level year is used.

#### Video Role

Optional. Your role for this specific video.

If left blank, the project-level role is used.

#### Video Client

Optional. The client/brand/artist for this specific video.

If left blank, the project-level client is used.

### Project Year

Optional. The project-level year.

Example:

```txt
2024
```

Used as fallback details for videos that do not have their own year.

### Project Role

Optional. Your project-level role.

Examples:

```txt
Director
Cinematographer
Editor
Director / DP
```

Used as fallback details for videos that do not have their own role.

### Project Client

Optional. The project-level client, brand, artist, or organization.

Example:

```txt
Nike
```

Used as fallback details for videos that do not have their own client.

### Published

Controls whether the film project appears on the live website.

- On: visible on the website
- Off: hidden from the website

### Ordering Film Projects

The Film Projects section supports drag-and-drop ordering.

If ordering looks incorrect for new content, use the list menu and choose **Reset Order**.

---

## 5. Publishing workflow

Sanity saves changes as you edit, but the live website only shows Photos and Film Projects that are marked as published.

For Photos and Film Projects:

1. Add/edit the content.
2. Make sure `Published` is turned on.
3. Refresh the live website.

The website updates from Sanity automatically. A deploy is not needed for normal content edits.

---

## 6. Best practices

### Images

- Use clear, high-quality images.
- Avoid uploading tiny images because they may look blurry.
- Keep alt text short but descriptive.
- Landscape images work best for film cover images and video thumbnails.
- The photography gallery will crop images automatically to fit the layout.

### Videos

- Upload videos to YouTube or Vimeo.
- Paste the public watch link into `Watch URL` or an additional video's `Video URL`.
- Do not upload video files directly to Sanity for this site.
- For multiple videos in one project, add them under **Additional Videos** and upload a still/thumbnail for each one when possible.

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
