# isoassistant-website

Marketing website for ISO Assistant.

The application source code is maintained in a private repository.

## Contact form

The contact and demo request forms submit through Resend. Demo requests at `/request-demo`
require a name and email address; company and areas of interest are optional. They arrive
in the same inbox with an `ISO Assistant demo request` subject and the visitor's reply address.

Set these environment variables before using it:

- `RESEND_API_KEY`
- `CONTACT_FORM_FROM`
- `CONTACT_FORM_TO` (optional, defaults to `info@isoassistant.com`)
