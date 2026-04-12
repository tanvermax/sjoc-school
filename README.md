# 🎓 Sunatul Jamaat of Ontario Canada (SJOC)

A high-performance, responsive educational platform built for **Sunatul Jamaat of Ontario Canada**. This project features a modern "Google Blue" (`#4185F4`) aesthetic, smooth Framer Motion animations, and a fully accessible UI powered by Shadcn/ui.

---

## ✨ Key Features

* **⚡ Modern Tech Stack**: Built with React 18 and TypeScript for type-safe, scalable development.
* **🎨 Custom UI/UX**: Professional design using the `#4185F4` color palette with custom Fraunces & Inter typography.
* **📱 Fully Responsive**: Seamless experience across mobile (iPhone/Android), tablet, and desktop devices.
* **🎭 Smooth Animations**: Dynamic Hero sliders and scroll-reveal sections using Framer Motion.
* **🧩 Modular Architecture**: Clean, reusable components including FAQ Accordions, Interactive Hero sections, and a glassmorphism Navbar.

http://googleusercontent.com/map_location_reference/1
* **🗺️ Integrated Location**: Embedded Google Maps interface for the [Sunatul Jamaat of Ontario Canada](http://googleusercontent.com/map_location_reference/0) campus.

---

## 🚀 Tech Stack

| Category         | Technology                           |
| :--------------- | :----------------------------------- |
| **Frontend** | React 18, TypeScript                |
| **Styling** | Tailwind CSS                        |
| **Components** | Shadcn/ui, Lucide React             |
| **Animations** | Framer Motion                       |
| **Icons** | Lucide React, React Icons (Ti, Fa)  |

---

## 🛠️ Installation & Setup

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/your-username/sjoc-project.git](https://github.com/your-username/sjoc-project.git)
    ```

2.  **Install dependencies**
    ```bash
    pnpm install
    # or
    npm install
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    ```

4.  **Build for production**
    ```bash
    npm run build
    ```

---

## 📁 Project Structure

```text
src/
├── components/
│   ├── ui/             # Shadcn reusable components (Accordion, Button, etc.)
│   ├── HeroSection.tsx # Dynamic animated hero slider
│   ├── Navbar.tsx      # Responsive glassmorphism navigation
│   ├── AboutSchool.tsx # Section with visual stacks and community stats
│   ├── SchoolStats.tsx # Achievement counters with #4185F4 theme
│   ├── TeachersSlider.tsx # Responsive teacher profiles carousel
│   ├── FAQSection.tsx  # Accessible accordion section via Shadcn
│   └── ContactUs.tsx   # Contact form with Integrated Map interface
├── assets/             # Images and global styles
└── App.tsx             # Main application entry