# TypeScript Student Table Project

## 📌 Project Overview

This project demonstrates **TypeScript basics** by:

- Creating a `Student` interface.
- Defining two student objects.
- Rendering a dynamic HTML table showing each student's **first name** and **location** using **Vanilla JavaScript**.

The project uses **Webpack** for bundling, **TypeScript** for type safety, and follows **ESLint** rules for clean code.

---

## 📂 Folder Structure

```
task_0/
│── js/
│   └── main.ts           # Main TypeScript file with logic
│── dist/                 # Webpack build output
│── package.json          # Project dependencies and scripts
│── package-lock.json
│── .eslintrc.js          # ESLint configuration for TypeScript
│── tsconfig.json         # TypeScript compiler configuration
│── webpack.config.js     # Webpack configuration
│── README.md             # Project documentation
```

---

## 🛠 Technologies Used

- **TypeScript**
- **Webpack**
- **ESLint** (`@typescript-eslint`)
- **HTML5**
- **JavaScript (Vanilla)**

---

## ⚙️ Installation & Setup

1️⃣ **Clone the Repository**

```bash
git clone <your-repo-url>
cd task_0
```

2️⃣ **Install Dependencies**

```bash
npm install
```

3️⃣ **Run in Development Mode**

```bash
npm run start-dev
```

This will start the **Webpack Dev Server** and open the project in your browser.

4️⃣ **Build for Production**

```bash
npm run build
```

The output will be inside the **`dist`** folder.

---

## 📜 TypeScript Interface

The `Student` interface defines:

```ts
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}
```

---

## 🖼 Output

When running the project, a table is dynamically created showing:

| First Name | Location |
| ---------- | -------- |
| John       | London   |
| Jane       | Paris    |

---

## ✅ Requirements Met

- **No TypeScript compile errors** (`No type errors found`).
- Used **TypeScript** for all variables and logic.
- Follows **ESLint recommended rules**.
- Fully functional **Webpack** build.

---
