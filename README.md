# AI-Enhanced-Application-Portal
This project demonstrates a full-stack application portal that combines modern frontend engineering, API-driven backend architecture, and AI-powered features to enhance user experience and workflow efficiency.

# Online AI-Enhanced Application Portal – Django + React

This is a sample Django + React project demonstrating an **online AI-Enhanced application portal** with:

- Multi-step application form  
- Save as draft  
- Retrieve draft when user returns  
- Submit application  
- Lock application in read-only mode  
- External API integration (Salesforce/Google Document AI placeholder)  
- Modern React with data-loading patterns  

This repo was created as a code sample for a **Django + React Developer** role.

---

## 🏗 Backend (Django + DRF)

The backend provides:

- `/api/applications/` – Create & update draft applications  
- `/api/applications/{id}/submit/` – Submit and sync to CRM  
- Input validation  
- Read-only after submission  
- External service hooks (`sync_to_crm`, `extract_data_from_document`)

Backend code is inside: `backend/`

---

## 🎨 Frontend (React)

The frontend provides:

- Multi-step application UI  
- Save draft  
- Submit  
- Read-only UI when `status = "submitted"`

Frontend code is inside: `frontend/`.

---

## 🧩 Folder Structure
