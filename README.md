# The Imperial Green

A multi-page, responsive boutique hotel website designed to present property information, room options, guest experiences and booking access through a clean, hospitality-focused interface.

## Overview

The Imperial Green is a frontend website concept for a boutique hotel in Nainital. It features an editorial visual style, responsive navigation, accommodation sections, a photo gallery and links to an external booking platform.

## Features

- **Multi-page layout** — dedicated pages for the hotel, property, rooms, experiences, gallery and contact information.
- **Responsive navigation** — desktop navigation and a collapsible mobile menu.
- **Interactive booking interface** — date and guest selection with redirection to an external booking provider.
- **Room showcases** — accommodation cards with descriptions and amenities.
- **Gallery lightbox** — image viewing with next/previous navigation and keyboard controls.
- **Scroll interactions** — sticky header, active navigation states and reveal animations.
- **Responsive styling** — layouts adapted for different screen sizes.
- **Contact interface** — contact information and a form UI.

## Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Page structure |
| CSS3 | Styling, layouts and responsive design |
| JavaScript | Navigation, interactions and UI behavior |

No frontend framework or backend framework is used.

## Pages

| Page | Description |
|---|---|
| `index.html` | Homepage, hotel overview and featured sections |
| `about.html` | Hotel story and information |
| `property.html` | Property overview |
| `rooms.html` | Room types and accommodation details |
| `experiences.html` | Activities and guest experiences |
| `gallery.html` | Image gallery |
| `contact.html` | Contact information and enquiry interface |
| `policies.html` | Hotel policies and related information |

## Interactive Components

- Sticky header that changes appearance while scrolling.
- Mobile navigation toggle.
- Booking date defaults and checkout-date validation.
- External booking-page redirection.
- Gallery lightbox with keyboard navigation.
- Scroll-triggered reveal animations.
- Active navigation updates based on visible sections.

## Project Structure

```text
imperial-green/
├── index.html
├── about.html
├── property.html
├── rooms.html
├── experiences.html
├── gallery.html
├── contact.html
├── policies.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── images/
└── README.md
```

## Getting Started

No package installation or build process is required.

1. Clone the repository:

```bash
git clone https://github.com/autistickyrios/imperial-green.git
```

2. Navigate into the project:

```bash
cd imperial-green
```

3. Open `index.html` in your browser.

For a more reliable local development experience, use the Live Server extension in Visual Studio Code.

## Current Scope

This repository contains a static frontend implementation.

- Booking actions redirect to an external booking platform.
- The website does not include its own booking backend.
- The contact form interface should not be assumed to submit enquiries to a server.
- Hotel images and contact information should be verified and replaced with actual property assets before production use.

## License

See the repository for licensing information.

---

Built by [Hitesh Prajapati](https://github.com/autistickyrios).
