export function ClientGuide() {
  return (
    <main style={{maxWidth: 900, margin: '0 auto', padding: '2rem', lineHeight: 1.6}}>
      <h1>Andrew Perez Portfolio — Editing Guide</h1>

      <p>
        Use this Studio to update the website without editing code. Normal content edits do not require a
        Netlify deploy.
      </p>

      <h2>Site Settings</h2>
      <p>This controls general profile and contact content used across the website.</p>
      <ul>
        <li><strong>Artist Name:</strong> Full display name shown on the homepage.</li>
        <li><strong>Initials / Logo Text:</strong> Short text shown in the top-left navigation.</li>
        <li><strong>Role Label:</strong> Short description near the homepage profile image.</li>
        <li><strong>Profile Image:</strong> Portrait/profile image shown on the homepage.</li>
        <li><strong>Alt Text:</strong> Required image description for accessibility.</li>
        <li><strong>Contact Email:</strong> Email shown in the contact section.</li>
        <li><strong>Instagram / YouTube URL:</strong> Full profile links, including https://.</li>
      </ul>

      <h2>Photos</h2>
      <p>Each Photo document is one image in the photography gallery.</p>
      <ul>
        <li><strong>Title:</strong> Internal name to help identify the photo.</li>
        <li><strong>Image:</strong> The uploaded gallery photo.</li>
        <li><strong>Alt Text:</strong> Required accessibility description.</li>
        <li><strong>Caption:</strong> Optional note for future use.</li>
        <li><strong>Published:</strong> Turn on to show the photo live. Turn off to hide it.</li>
      </ul>
      <p>Photos can be reordered with drag-and-drop in the Photos list.</p>

      <h2>Film Projects</h2>
      <p>Each Film Project document is one project in the film section.</p>
      <ul>
        <li><strong>Title:</strong> Project title shown on the website.</li>
        <li><strong>Description:</strong> Short project description/details.</li>
        <li><strong>Cover Image:</strong> Main large image. Wide images work best.</li>
        <li><strong>Stills / Gallery Images:</strong> Additional images shown below the cover.</li>
        <li><strong>Watch URL:</strong> YouTube, Vimeo, or external watch link. Do not upload videos here.</li>
        <li><strong>Year / Role / Client:</strong> Optional project metadata.</li>
        <li><strong>Published:</strong> Turn on to show the project live. Turn off to hide it.</li>
      </ul>
      <p>Film projects can be reordered with drag-and-drop in the Film Projects list.</p>

      <h2>Best Practices</h2>
      <ul>
        <li>Use high-quality images when possible.</li>
        <li>Keep alt text short but descriptive.</li>
        <li>Use Vimeo/YouTube links for videos instead of uploading video files.</li>
        <li>If unsure about deleting something, turn Published off instead.</li>
      </ul>
    </main>
  )
}
