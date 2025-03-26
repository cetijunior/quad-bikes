# Bovilla Quads 🚵‍♂️🌄

A dynamic React-based website built for **Bovilla Quad Adventures** – offering off-road ATV experiences around the stunning Bovilla Reservoir in Albania.

---

## 🚀 Overview

This is a full-stack-ready **frontend project** focused on promoting an adventure business, with responsive UI, dynamic animations, and a clear booking flow. The project includes custom hero sections, a visual gallery, a contact system, and multi-language support.

---

## 📁 Project Structure

/src │ ├── assets/ # Static images & icons ├── components/ │ ├── layout/ # Navbar, Footer, Background visuals │ └── services/ # Service detail components │ ├── pages/ │ ├── landing/ │ │ ├── HeroSection.jsx │ │ ├── ServicesSection.jsx │ │ ├── TestimonialsSection.jsx │ │ ├── PricingSection.jsx │ │ └── ContactPreview.jsx │ ├── Gallery.jsx # Masonry-style image layout with lightbox │ ├── Contact.jsx # Full contact page with map, form, socials │ ├── About.jsx │ └── Booking.jsx │ ├── i18n/ # Language files (EN, AL) ├── App.jsx └── main.jsx

![Hero](https://github.com/user-attachments/assets/517857f5-3607-43ab-9a57-132e670b7598)


![Trails](https://github.com/user-attachments/assets/f388d24f-a593-4096-96da-6d45bcb8c5de)


![Deals](https://github.com/user-attachments/assets/b11bdd43-9c1d-4fd3-bfd9-681040788c4d)


![CTA](https://github.com/user-attachments/assets/5c534fc0-efa9-41fa-ae88-02587815b174)


![Footer](https://github.com/user-attachments/assets/85dac86c-ce1c-40d6-8c08-9ff114125d9b)


![Booking](https://github.com/user-attachments/assets/32cf72d3-299d-4176-9c2b-e88368d70b3f)


![About](https://github.com/user-attachments/assets/8a2117ab-99b3-4508-8b91-82d6d8517e92)


![Gallery](https://github.com/user-attachments/assets/2f301c1b-98a8-4606-996e-87f0b78faa94)


![ContactPage](https://github.com/user-attachments/assets/8820528b-292e-4849-95bc-b5b64cf0251c)



---

## 🎨 Color Scheme

| Element             | Color                | Use Case                    |
|---------------------|----------------------|-----------------------------|
| Primary Orange      | `#f97316`            | Buttons, Highlights         |
| Soft Orange BG      | `#fff7ed` / `orange-50` | Section backgrounds        |
| Text Primary        | `#1f2937` (gray-800) | Headings, paragraphs        |
| White               | `#ffffff`            | Backgrounds, form elements  |
| Accent Green        | `#22c55e`            | WhatsApp, success highlights|

---

## ⚙️ Features

- ✅ Fully responsive on all devices
- ✅ Hero section with animated background image
- ✅ Custom Masonry gallery with lightbox
- ✅ Sticky and animated contact page sidebar
- ✅ Multi-language support with `react-i18next`
- ✅ Modern mobile menu with slide-in animation
- ✅ Reusable components and animation variants via `framer-motion`
- ✅ Contact form with phone, email, WhatsApp links, and Google Maps embed

---

## 📦 Dependencies

- `react-router-dom`
- `framer-motion`
- `react-icons`
- `react-i18next`
- `yet-another-react-lightbox`

---

## 🛠️ Setup

```bash
npm install
npm run dev


📌 Notes
Make sure all images are placed correctly under /public/images/

For Lightbox to work, ensure correct installation of:
- npm install yet-another-react-lightbox --legacy-peer-deps
