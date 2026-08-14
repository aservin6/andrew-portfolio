import { defineArrayMember, defineField, defineType } from "sanity";

const block = (key: string, text: string, style = "normal") => ({
  _key: key,
  _type: "block",
  children: [
    {
      _key: `${key}-text`,
      _type: "span",
      marks: [],
      text,
    },
  ],
  markDefs: [],
  style,
});

const bullet = (key: string, text: string) => ({
  ...block(key, text),
  level: 1,
  listItem: "bullet",
});

export const clientGuide = defineType({
  name: "clientGuide",
  title: "Client Guide",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "content",
      title: "Guide Content",
      description:
        "Edit this guide to update the instructions shown to the client in Sanity Studio.",
      type: "array",
      of: [defineArrayMember({ type: "block" })],
      validation: (rule) => rule.required(),
    }),
  ],
  initialValue: {
    title: "Andrew Perez Portfolio — Editing Guide",
    content: [
      block(
        "intro",
        "Use this Studio to update the website without editing code. Normal content edits do not require a Netlify deploy.",
      ),
      block("site-settings-heading", "Site Settings", "h2"),
      block(
        "site-settings-intro",
        "This controls general profile and contact content used across the website.",
      ),
      bullet(
        "artist-name",
        "Artist Name: Full display name shown on the homepage.",
      ),
      bullet(
        "initials",
        "Initials / Logo Text: Short text shown in the top-left navigation.",
      ),
      bullet(
        "role-label",
        "Role Label: Short description near the homepage profile image.",
      ),
      bullet(
        "profile-image",
        "Profile Image: Portrait/profile image shown on the homepage.",
      ),
      bullet(
        "alt-text",
        "Alt Text: Required image description for accessibility.",
      ),
      bullet(
        "contact-email",
        "Contact Email: Email shown in the contact section.",
      ),
      bullet(
        "social-urls",
        "Instagram / YouTube URL: Full profile links, including https://.",
      ),
      block("photos-heading", "Photos", "h2"),
      block(
        "photos-intro",
        "Each Photo document is one image in the photography gallery.",
      ),
      bullet("photo-title", "Title: Internal name to help identify the photo."),
      bullet("photo-image", "Image: The uploaded gallery photo."),
      bullet("photo-alt-text", "Alt Text: Required accessibility description."),
      bullet("caption", "Caption: Optional note for future use."),
      bullet(
        "photo-published",
        "Published: Turn on to show the photo live. Turn off to hide it.",
      ),
      block(
        "photo-ordering",
        "Photos can be reordered with drag-and-drop in the Photos list.",
      ),
      block("film-heading", "Film Projects", "h2"),
      block(
        "film-intro",
        "Each Film Project document is one project in the film section.",
      ),
      bullet("film-title", "Title: Project title shown on the website."),
      bullet("description", "Description: Short project description/details."),
      bullet(
        "cover-image",
        "Cover Image: Main large image. Wide images work best.",
      ),
      bullet(
        "additional-videos",
        "Additional Videos: Optional video links and thumbnails shown below the main player.",
      ),
      bullet(
        "watch-url",
        "Watch URL: YouTube, Vimeo, or external watch link. Do not upload videos here.",
      ),
      bullet(
        "project-details",
        "Year / Role / Client: Optional project metadata.",
      ),
      bullet(
        "film-published",
        "Published: Turn on to show the project live. Turn off to hide it.",
      ),
      block(
        "film-ordering",
        "Film projects can be reordered with drag-and-drop in the Film Projects list.",
      ),
      block("best-practices-heading", "Best Practices", "h2"),
      bullet("quality-images", "Use high-quality images when possible."),
      bullet("descriptive-alt", "Keep alt text short but descriptive."),
      bullet(
        "video-hosting",
        "Use Vimeo/YouTube links for videos instead of uploading video files.",
      ),
      bullet(
        "hide-not-delete",
        "If unsure about deleting something, turn Published off instead.",
      ),
    ],
  },
  preview: {
    select: {
      title: "title",
    },
  },
});
