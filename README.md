# Inventory Dashboard: A Full-Stack Management System

<p align="center">
  
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-14.x-black?style=for-the-badge&logo=nextdotjs" alt="Next.js">
  <img src="https://img.shields.io/badge/Supabase-DB%20&%20Auth-3ecf8e?style=for-the-badge&logo=supabase" alt="Supabase">
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.x-06B6D4?style=for-the-badge&logo=tailwindcss" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript" alt="TypeScript">
  <img src="https://img.shields.io/github/license/AaryaRai01/Inventory-Management-System?style=for-the-badge" alt="License">
</p>

---

## 📖 Overview

Welcome to the Inventory Dashboard! This is a comprehensive, full-stack application designed to provide a seamless and intuitive experience for managing product inventory. Built for a GitHub community project, it serves as a robust example of modern web development practices, integrating a powerful frontend with a scalable backend.

Whether you're tracking stock for a small business or learning full-stack development, this project provides all the essential features in a clean, professional, and highly responsive interface.

https://inventory-management-system-h59lub4rd-aarya-rais-projects.vercel.app/

---

## ✨ Key Features

This project is packed with features designed for a great user experience and robust functionality:

-   **🖥️ Modern Dashboard UI:** A sleek, professional interface built with Tailwind CSS, ensuring a beautiful experience on all devices.
-   **⚡ Full CRUD Functionality:** Create, read, update, and delete products with ease through an intuitive user interface.
-   **🔄 Real-time Data Synchronization:** Leverages Supabase for a real-time PostgreSQL database, ensuring data is always up-to-date.
-   **🧩 Integrated API Layer:** All backend logic is handled by dedicated Next.js API Routes, creating a clear separation between client and server.
-   **🚦 Dynamic Stock Status Indicators:** Automatically displays product availability ("In Stock", "Low Stock", "Out of Stock") with color-coded badges for quick insights.
-   **📝 Interactive Modals & Forms:** A clean, collapsible form for adding new products and an elegant modal for editing existing ones without leaving the page.
-   **📱 Fully Responsive:** The layout is optimized for desktops, tablets, and mobile devices.

---

## 🏛️ Architecture & Tech Stack

This project uses a modern, powerful, and scalable tech stack. The architecture is designed to be efficient and easy for new contributors to understand.

| Category      | Technology                                                                                                   | Purpose                                                                                |
| :------------ | :----------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------- |
| **Framework** | [**Next.js (App Router)**](https://nextjs.org/)                                                              | Provides a full-stack solution with React Server Components, API routes, and routing.  |
| **Database** | [**Supabase (PostgreSQL)**](https://supabase.io/)                                                            | Acts as the backend, providing a database, and auto-generated APIs.                    |
| **Styling** | [**Tailwind CSS**](https://tailwindcss.com/)                                                                 | A utility-first CSS framework for rapidly building beautiful, custom user interfaces.    |
| **Language** | [**TypeScript**](https://www.typescriptlang.org/)                                                            | Adds static typing to JavaScript, improving code quality and developer experience.     |
| **Deployment**| [**Vercel**](https://vercel.com/)                                                                            | The recommended platform for deploying Next.js applications with ease.                 |

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Ensure you have the following installed on your machine:
-   [Node.js](https://nodejs.org/en/) (v18.0 or later)
-   [npm](https://www.npmjs.com/) (comes with Node.js)
-   [Git](https://git-scm.com/)

### Installation & Setup

1.  **Clone the Repository**
    ```bash
    git clone [https://github.com/AaryaRai01/Inventory-Management-System.git](https://github.com/AaryaRai01/Inventory-Management-System.git)
    cd Inventory-Management-System
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Set Up Your Supabase Backend**
    -   Go to [supabase.com](https://supabase.com) and create a new project.
    -   Inside your project, navigate to the **SQL Editor**.
    -   Run the following schema to create the `products` table:
        ```sql
        CREATE TABLE products (
          id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
          name TEXT NOT NULL,
          price NUMERIC(10, 2) NOT NULL,
          quantity INT NOT NULL,
          category TEXT,
          created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
        );
        ```

4.  **Configure Environment Variables**
    -   In the root of your project, create a new file named `.env.local`.
    -   In your Supabase project, go to **Project Settings > API**.
    -   Copy your **Project URL** and **`anon` public key**.
    -   Paste them into your `.env.local` file like this:
        ```env
        NEXT_PUBLIC_SUPABASE_URL=YOUR_SUPABASE_PROJECT_URL
        NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
        ```

5.  **Run the Development Server**
    ```bash
    npm run dev
    ```
    Your application should now be running at `http://localhost:3000`.

## 🌐 API Endpoints

The backend is handled by Next.js API routes. Here are the available endpoints:

| Method | Path                  | Description                      |
| :----- | :-------------------- | :------------------------------- |
| `GET`  | `/api/products`       | Fetches a list of all products.  |
| `POST` | `/api/products`       | Creates a new product.           |
| `PUT`  | `/api/products/[id]`  | Updates a specific product by ID.|
| `DELETE`| `/api/products/[id]`  | Deletes a specific product by ID.|

## 📄 License

This project is distributed under the MIT License. See the `LICENSE` file for more information.
