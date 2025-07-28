# Backend - Prueba técnica: Autenticación de usuarios

Este es el backend de una aplicación fullstack para gestión y autenticación de usuarios. Está construido con **Node.js**, **Express** y **MongoDB**.

## Tecnologías

- Node.js
- Express
- MongoDB + Mongoose
- JSON Web Tokens (JWT)
- Bcrypt

## Cómo ejecutar

1. Clona el repositorio (si aún no lo has hecho):

```bash
git clone https://github.com/camolano85/Prueba-t-cnica-autenticaci-n-de-usuarios.git
cd Prueba-t-cnica-autenticaci-n-de-usuarios/backend
```

2. Instala dependencias:

```bash
npm install
```

3. Crea un archivo `.env` (opcional si tienes valores por defecto):

```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/usuariosdb
JWT_SECRET=miclavesecreta
```

4. Inicia el servidor:

```bash
npm run dev
```

El servidor quedará corriendo en: `http://localhost:3000/`

## 📡 Endpoints disponibles

| Método | Ruta                 | Descripción                             |
|--------|----------------------|-----------------------------------------|
| POST   | /api/auth/login      | Iniciar sesión con email y contraseña   |
| POST   | /api/usuarios        | Crear nuevo usuario                     |
| GET    | /api/usuarios        | Obtener lista de usuarios (protegido)   |
| PUT    | /api/usuarios/:id    | Actualizar usuario por ID (protegido)   |
| DELETE | /api/usuarios/:id    | Eliminar usuario por ID (protegido)     |

##  Autenticación

- Se usa JWT. Para acceder a rutas protegidas, debes enviar el token en el header:

```
Authorization: Bearer <token>
```

##  Estructura de carpetas

```
backend/
├── controllers/
│   └── userController.js
├── middlewares/
│   └── auth.js
├── models/
│   └── user.js
├── routes/
│   └── auth.js
│   └── userRoutes.js
├── server.js
└── package.json
```
