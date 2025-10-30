# 🏡 ALX Listing App: Airbnb Clone Scaffold

## 🚀 Project Overview

The **ALX Listing App** is a foundational structure for a modern, production-ready Airbnb clone. This initial milestone focuses on establishing a clean, scalable codebase using modern web technologies to ensure a solid foundation for future feature development.

This project uses the **Next.js Pages Router** structure.

---

## 🎯 Learning Objectives (Milestone 1)

This milestone was designed to strengthen expertise in modern web application development by focusing on professional scaffolding and componentization:

* **Next.js Scaffolding:** Gained hands-on experience setting up a Next.js project tailored for production readiness.
* **TypeScript Implementation:** Implemented TypeScript for type safety and reusable interfaces to enhance code maintainability and robustness.
* **TailwindCSS Configuration:** Configured TailwindCSS for building responsive, accessible, and visually appealing UI components.
* **Project Structure:** Structured the Next.js project following industry-standard best practices, ensuring scalability and readability.
* **Reusable Components:** Created foundational reusable components (`Button`, `Card`, `Header`) and organized assets effectively.

---

## ⚙️ Technical Stack

| Tool | Version / Purpose |
| :--- | :--- |
| **Framework** | Next.js (v13+, Pages Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS (v4+) |
| **Linting** | ESLint |
| **Runtime** | Node.js (v16+) |

---

## 📂 Folder Structure

The project follows a standard Next.js Pages Router structure, with dedicated folders for non-route-specific logic and assets to maximize clarity and scalability.

---

## 🔑 Key Components and Interfaces

### Reusable Components

* **`components/Header.tsx`**: The global application navigation bar, utilizing the `Button` component.
* **`components/Button.tsx`**: A highly reusable button component supporting different `variant` and `size` props.
* **`components/Card.tsx`**: A generic container component, serving as the foundation for the future Listing Card UI.

### Type Safety

* **`interfaces/index.ts`**: Contains central TypeScript interfaces to ensure consistency across the application:
  * `ButtonProps`: Extends native HTML button attributes.
    * `CardProps`: Defines the core data structure for a listing card (`id`, `title`, `imageSrc`, etc.).
    * `HeaderProps`: Interface for the global header component.

---

## ▶️ Getting Started

### Prerequisites

* **Node.js** (version 16 or higher)
* **npm** or **yarn**

### Installation

1. **Clone the repository (if applicable):**

    ```bash
    git clone https://github.com/Talent-1/alx-listing-app.git alx-listing-app
    cd alx-listing-app
    ```

2. **Install dependencies:**

    ```bash
    npm install
    # OR
    yarn install
    ```

### Running the Project Locally

To run the application in development mode:

```bash
npm run dev
# OR
yarn dev
The application will be accessible at: http://localhost:3000
