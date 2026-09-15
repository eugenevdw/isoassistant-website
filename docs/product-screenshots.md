# Product screenshots

The images in `public/images/product/current/` were captured from the current
ISO Assistant demo workspace on 15 September 2026.

## Standards examples

| Page | Primary screenshot | Supporting workflow |
| --- | --- | --- |
| ISO 9001 | Quality NCR for an out-of-tolerance bore (NCR-0001) | 5 Whys, corrective actions and linked instruction/training |
| ISO 13485 | Illustrative supplier NCR entry for a missing device lot identifier | Existing manufacturing traceability training (TR-0004), explicitly captioned as a manufacturing demo |
| ISO 14001 | Environmental Aspects & Impacts register | Chemical handling aspect, impact and mitigation (ENV-0002) |
| ISO 45001 | Hazards & OH&S Risks register | Vehicle movement controls and implementation status (OHS-0001) |
| ISO 22000 | Illustrative Food Safety NCR entry for an allergen-label issue | Containment shown in the entry form |

The ISO 13485 and ISO 22000 entry examples use illustrative text in the real
application form. They were not saved as records. Other screenshots show existing
demo records. The captures were cropped, not reconstructed or generated.

Shared feature screenshots also cover the current dashboard, incident register,
incident detail, work instruction, audit summary, risk, objective and review action.

## Refreshing captures

- Use a demo workspace and inspect the visible record before capturing.
- Exclude company names from both the account header and record content. Work
  instructions and meeting titles can repeat the name inside the page.
- Capture from a settled page at the top. A sticky header can appear inside a
  document-coordinate crop when the page is scrolled.
- Use focused crops for lower sections and inspect every final image. Check for
  company-name text with OCR as well as visually.
- Keep captions and alternative text specific to what the image actually shows.
- Keep illustrative form entries clearly captioned and discard them after capture.
- Preserve the entire image in thumbnails; use `aspectRatio` for taller workflow
  examples. The shared screenshot component opens the full image on click.
