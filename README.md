# 🌿 DrGreen – Plant Disease Detection

DrGreen is a full-stack web application that allows users to upload images of plants and receive predictions about possible diseases using machine learning. The application is built with a Django REST backend and a React frontend, and supports modern deployment practices.

---

## 📸 Project Preview

<!-- 👉 Replace with actual image paths -->
![Homepage Screenshot](screenshots/Screenshot%202025-06-29%20163005.png)
![Prediction Result](screenshots/Screenshot%202025-06-29%20163535.png)

---

## 📸 Features

- Upload plant leaf images
- Predict plant disease using a trained ML model
- User-friendly interface built with React
- Django REST API backend
- Modular structure for easy development and deployment

---

## 🛠️ Tech Stack

- **Frontend:** React, Vite
- **Backend:** Django, Django REST Framework
- **ML:** TensorFlow/Keras model (if applicable)
- **Database:** SQLite (default, configurable)
- **Deployment Ready:** Vercel (frontend), Render/Heroku (backend)

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Devansh-Kushwaha/DrGreen-Plant-Disease-Detection.git
cd DrGreen-Plant-Disease-Detection
```

---

## 🧠 Backend Setup (Django)

### 🔧 Install Dependencies

Create a virtual environment and activate it:

```bash
python -m venv venv
source venv/bin/activate       # On Windows: venv\Scripts\activate
```

Install packages:

```bash
pip install -r requirements.txt
```

---

### ⚙️ Run Migrations

```bash
python manage.py migrate
```

---

### ▶️ Start the Django Server

```bash
python manage.py runserver
```

The API will be live at:  
👉 `http://127.0.0.1:8000/`

---

## 🎨 Frontend Setup (React)

Open a new terminal window/tab and navigate to the frontend folder:

```bash
cd frontend
npm install
```

---

### ▶️ Start React App

```bash
npm run dev
```

The frontend will be available at:  
👉 `http://localhost:5173/` (or the port shown in terminal)

---

## 🧪 Using the Application

1. Upload an image of a plant leaf
2. The backend will process the image and run the ML model
3. Results will be displayed on the frontend with the predicted disease (if any)

---

## 📁 Project Structure

```
DrGreen-Plant-Disease-Detection/
│
├── frontend/               # React frontend
│   ├── src/
│   └── public/
│
├── drgreen_backend/        # Django backend app
├── media/                  # Uploaded images
├── model/                  # ML model and related utilities
├── requirements.txt
└── manage.py
```

---

## ✅ To-Do / Future Work

- Add user login and dashboard
- Improve ML model accuracy
- Support more plants for detection

---

## 🤝 Contributing

Pull requests and feedback are welcome!  
If you'd like to contribute, please fork the repo and submit a PR.

---
## 📄 License

This project is licensed under the [MIT License](LICENSE).

