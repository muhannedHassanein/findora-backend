# Findora Backend

**Project:** Real Estate Management Platform (Backend)  
**Description:**  
Backend for managing real estate projects. Supports multiple companies, admins, employees, and clients. Admins create projects, employees add units, all APIs are JWT protected.

---

## Endpoints

### Authentication
- **POST /api/auth/register** → Register a new user (admin, employee, client)
- **POST /api/auth/login** → Login and receive JWT token
- **POST /api/auth/forgot-password** → Generate password reset token
- **POST /api/auth/reset-password/:token** → Reset password using token

### Projects
- **POST /api/projects** → Create a new project (Admin only)
- **GET /api/projects** → Get all projects

### Units
- **POST /api/units** → Create a new unit inside a project (Employee/Admin)
- **GET /api/units/:projectId** → Get all units of a project
- **PUT /api/units/:unitId** → Update a unit
- **DELETE /api/units/:unitId** → Delete a unit
