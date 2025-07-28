# Frontend - Prueba técnica: Autenticación de usuarios

Este es el frontend de una aplicación fullstack creada con **Angular 17+ standalone components**. Permite registrar, iniciar sesión y administrar usuarios autenticados.

##  Tecnologías

- Angular (Standalone Components)
- Angular Material
- RxJS
- Bootstrap (opcional para estilos)
- JWT (token guardado en `localStorage`)

##  Cómo ejecutar

1. Clona el repositorio (si aún no lo has hecho):

```bash
git clone https://github.com/camolano85/Prueba-t-cnica-autenticaci-n-de-usuarios.git
cd Prueba-t-cnica-autenticaci-n-de-usuarios/frontend
```

2. Instala dependencias:

```bash
npm install
```

3. Levanta el servidor de desarrollo:

```bash
ng serve
```

Abre tu navegador en `http://localhost:4200`

---

##  Funcionalidades

-  Formulario de registro
-  Formulario de inicio de sesión
-  Autenticación con JWT
-  Token se guarda en `localStorage`
-  Dashboard con usuarios registrados
-  Editar y eliminar usuarios (con token válido)
-  Cierre de sesión
-  Rutas protegidas

---

##  Estructura general

```
frontend/
├── src/
│   ├── app/
│   │   ├── components/
│   │   ├── pages/
│   │   │   ├── login/
│   │   │   ├── register/
│   │   │   ├── dashboard/
│   │   ├── services/
│   │   │   ├── auth.service.ts
│   │   │   ├── user.service.ts
│   │   ├── interceptors/
│   │   │   ├── token.interceptor.ts
│   │   ├── app.routes.ts
│   │   └── app.config.ts
│   └── main.ts
```

##  Recomendaciones

- Asegúrate de que el backend esté corriendo en `http://localhost:3000`
- Si cambias la URL del backend, actualízala en `auth.service.ts` y `user.service.ts`
