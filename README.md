# 🏢 TechCorp Portal - Sistema de Gestión Empresarial

![React](https://img.shields.io/badge/React-19.2.4-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Rspack](https://img.shields.io/badge/Rspack-1.2.0-FF6B6B?style=for-the-badge&logo=webpack&logoColor=white)
![Module Federation](https://img.shields.io/badge/Module%20Federation-0.8.9-4338CA?style=for-the-badge&logo=webpack&logoColor=white)
![Netlify](https://img.shields.io/badge/Netlify-Ready-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)

## 📋 Descripción

**TechCorp Portal** es una aplicación empresarial moderna construida con arquitectura de **microfrontends** utilizando **Module Federation**. El sistema permite gestionar productos, usuarios y compras de manera independiente, con cada módulo funcionando como una aplicación autónoma que se integra dinámicamente en el portal principal.

### 🎯 Características Principales

- ✅ **Arquitectura de Microfrontends** - Módulos independientes y escalables
- ✅ **Module Federation** - Carga dinámica de componentes remotos
- ✅ **React 19** - Última versión con mejoras de rendimiento
- ✅ **TypeScript** - Tipado fuerte para mayor seguridad
- ✅ **Styled Components** - Estilos CSS-in-JS con tematización
- ✅ **Rspack** - Build tool ultrarrápido (compatible con Webpack)
- ✅ **Diseño Responsive** - Adaptable a todos los dispositivos
- ✅ **Deploy en Netlify** - Configuración lista para producción

---

## 🏗️ Arquitectura del Sistema

El proyecto está dividido en **4 módulos principales**:

```
TechCorp Portal
│
├── 🏠 main (Host Application)          - Puerto 3000
│   └── Aplicación principal que orquesta los microfrontends
│
├── 📦 moduleProducts                    - Puerto 3002
│   └── Gestión de productos e inventario
│
├── 👤 moduleUser                        - Puerto 3001
│   └── Gestión de usuarios y perfiles
│
└── 🛒 modulePurchases                   - Puerto 3003
    └── Gestión de compras y carrito
```

### 🔗 Integración de Módulos

Cada módulo remoto expone componentes que son consumidos por la aplicación principal mediante **Module Federation**:

```typescript
// Configuración en main/module-federation.config.ts
remotes: {
  moduleProducts: "http://localhost:3002/mf-manifest.json",
  moduleUser: "http://localhost:3001/mf-manifest.json",
  modulePurchases: "http://localhost:3003/mf-manifest.json"
}
```

---

## 📦 Módulos del Sistema

### 🏠 Main (Aplicación Principal)

**Puerto:** `3000`

El módulo principal actúa como orquestador y contenedor de todos los microfrontends. Características:

- 🎨 Dashboard unificado con navegación entre módulos
- 📊 Panel de estadísticas en tiempo real
- 🎯 Sistema de navegación por pestañas
- 🌐 Header global con información de usuario
- 📱 Diseño responsive y moderno

**Componentes principales:**
- `App.tsx` - Contenedor principal con lazy loading de módulos remotos
- Sistema de navegación con React Icons
- Integración de Styled Components para UI consistente

---

### 📦 Module Products (Gestión de Productos)

**Puerto:** `3002`  
**Componente exportado:** `Products`

Módulo dedicado a la gestión completa del inventario y productos.

**Características:**
- ✅ Visualización de productos en grid responsive
- ✅ Filtrado por categorías y disponibilidad
- ✅ Tarjetas de producto con diseño profesional (`CardProducto`)
- ✅ Sistema de ratings con estrellas
- ✅ Indicadores de stock y precios
- ✅ Badges para ofertas y destacados

**Datos mostrados:**
- 📊 Total de productos: **487 items**
- 💰 Valor total del inventario
- 📈 Productos disponibles vs agotados
- 🏷️ Categorías: Electrónica, Ropa, Hogar, Deportes, Juguetes, Libros, Alimentos

**Ejemplo de producto:**
```tsx
{
  id: 1,
  name: "Laptop Dell XPS 13",
  price: 1299.99,
  category: "Electrónica",
  stock: 15,
  rating: 4.8,
  available: true,
  featured: true
}
```

---

### 👤 Module User (Gestión de Usuarios)

**Puerto:** `3001`  
**Componente exportado:** `User`

Módulo para administrar usuarios, perfiles y métricas de actividad.

**Características:**
- ✅ Lista de usuarios con información detallada
- ✅ Perfiles de usuario estilizados (`PerfilUsuario`)
- ✅ Indicadores de estado (activo/inactivo)
- ✅ Información de contacto y empresa
- ✅ Métricas de compras por usuario
- ✅ Badges de rol y membresía

**Datos mostrados:**
- 👥 Total de usuarios: **150 usuarios**
- 📧 Email y teléfono de contacto
- 🏢 Empresa y ubicación
- 📅 Fecha de registro
- 🛒 Total de compras realizadas
- ⭐ Rating promedio de satisfacción

**Ejemplo de usuario:**
```tsx
{
  id: 1,
  name: "Ana García",
  email: "ana.garcia@company.com",
  company: "TechCorp SA",
  location: "Madrid, España",
  totalPurchases: 23,
  active: true,
  memberSince: "2023-01-15"
}
```

---

### 🛒 Module Purchases (Gestión de Compras)

**Puerto:** `3003`  
**Componente exportado:** `Cart`

Módulo completo para gestionar el carrito de compras y transacciones.

**Características:**
- ✅ Carrito de compras interactivo
- ✅ Lista de compras históricas
- ✅ Modal de detalle de compra
- ✅ Gestión de cantidades (agregar/quitar)
- ✅ Cálculo automático de subtotales y total
- ✅ Estados de compra (Completada, Pendiente, Enviada, Cancelada)
- ✅ Sistema de resumen de compra

**Funcionalidades:**
- ➕ Agregar productos al carrito
- ➖ Reducir cantidades
- 🗑️ Eliminar productos del carrito
- 💳 Ver detalles completos de compras
- 📊 Estadísticas de compras totales
- 📅 Historial con fechas y estados

**Datos mostrados:**
- 🛒 Total de compras: **523 compras**
- 💰 Valor total de transacciones
- 📦 Productos en carrito actual
- 📜 Historial de compras con detalles completos

**Ejemplo de compra:**
```tsx
{
  id: 1,
  user: "Ana García",
  date: "2025-02-10",
  total: 1599.99,
  status: "Completada",
  items: [
    { product: "Laptop Dell XPS 13", quantity: 1, price: 1299.99 },
    { product: "Mouse Logitech MX", quantity: 2, price: 150.00 }
  ]
}
```

---

## 🛠️ Tecnologías Utilizadas

### Core
- **React 19.2.4** - Framework de UI
- **TypeScript 5.7.3** - Tipado estático
- **Rspack 1.2.0** - Build tool de alto rendimiento

### Module Federation
- **@module-federation/enhanced 0.8.9** - Sistema de microfrontends
- **Zephyr Rspack Plugin** - Soporte para Module Federation en Rspack

### Estilizado
- **Styled Components 6.1.13** - CSS-in-JS
- **React Icons 5.0.1** - Biblioteca de iconos

### Desarrollo
- **pnpm** - Gestor de paquetes rápido
- **Concurrently** - Ejecución paralela de scripts
- **Cross-env** - Variables de entorno multiplataforma

### Deploy
- **Netlify** - Hosting y despliegue continuo
- Configuración lista para producción con CORS

---

## 🚀 Instalación y Configuración

### Prerrequisitos

- **Node.js** >= 18.x
- **pnpm** >= 8.x (recomendado)

```bash
# Instalar pnpm globalmente
npm install -g pnpm
```

### Instalación

```bash
# 1. Clonar el repositorio
git clone <tu-repositorio>
cd actividad3

# 2. Instalar todas las dependencias (principal + módulos)
pnpm run install:all
```

Este comando instalará las dependencias en:
- ✅ Proyecto raíz
- ✅ `main/`
- ✅ `moduleProducts/`
- ✅ `moduleUser/`
- ✅ `modulePurchases/`

---

## 🎮 Uso y Comandos

### Modo Desarrollo

#### Iniciar todos los módulos simultáneamente (Recomendado)

```bash
pnpm run dev
```

Esto iniciará los 4 servidores en paralelo:
- 🏠 Main: http://localhost:3000
- 👤 Users: http://localhost:3001
- 📦 Products: http://localhost:3002
- 🛒 Purchases: http://localhost:3003

#### Iniciar módulos individuales

```bash
# Solo la aplicación principal
pnpm run dev:main

# Solo el módulo de productos
pnpm run dev:products

# Solo el módulo de usuarios
pnpm run dev:users

# Solo el módulo de compras
pnpm run dev:purchases
```

### Modo Producción

```bash
# Construir todos los módulos
pnpm run build

# O construir individualmente
pnpm run build:main
pnpm run build:products
pnpm run build:users
pnpm run build:purchases
```

---

## 📁 Estructura del Proyecto

```
actividad3/
│
├── 📄 package.json                 # Configuración raíz con scripts
├── 📄 pnpm-lock.yaml              # Lock file de dependencias
├── 📄 netlify.toml                # Configuración de Netlify global
├── 📄 .gitignore                  # Archivos ignorados por Git
│
├── 🏠 main/                       # Aplicación principal (Host)
│   ├── src/
│   │   ├── App.tsx               # Componente principal con navegación
│   │   ├── index.ts              # Punto de entrada
│   │   ├── index.css             # Estilos globales
│   │   └── custom.d.ts           # Tipos personalizados
│   ├── @mf-types/                # Tipos de Module Federation
│   ├── module-federation.config.ts
│   ├── rspack.config.ts
│   ├── package.json
│   └── netlify.toml
│
├── 📦 moduleProducts/             # Módulo de productos
│   ├── src/
│   │   ├── App.tsx
│   │   ├── Products.tsx          # Componente principal exportado
│   │   └── index.ts
│   ├── module-federation.config.ts
│   ├── rspack.config.ts
│   ├── package.json
│   └── netlify.toml
│
├── 👤 moduleUser/                 # Módulo de usuarios
│   ├── src/
│   │   ├── App.tsx
│   │   ├── User.tsx              # Componente principal exportado
│   │   └── index.ts
│   ├── module-federation.config.ts
│   ├── rspack.config.ts
│   ├── package.json
│   └── netlify.toml
│
└── 🛒 modulePurchases/            # Módulo de compras
    ├── src/
    │   ├── App.tsx
    │   ├── Cart.tsx              # Componente principal exportado
    │   └── index.ts
    ├── module-federation.config.ts
    ├── rspack.config.ts
    ├── package.json
    └── netlify.toml
```

---

## 🎨 Componentes Styled Components

El proyecto utiliza **Styled Components** para crear componentes reutilizables y estilizados:

### Componentes Principales Exportados

#### 📦 CardProducto (moduleProducts)
```tsx
import { CardProducto } from 'moduleProducts/Products';

// Tarjeta de producto con diseño profesional
// Incluye: imagen, precio, stock, rating, categoría
```

#### 👤 PerfilUsuario (moduleUser)
```tsx
import { PerfilUsuario } from 'moduleUser/User';

// Tarjeta de perfil de usuario
// Incluye: avatar, nombre, email, empresa, estadísticas
```

### Características de los Componentes

- ✅ Diseño consistente con gradientes y sombras
- ✅ Efectos hover interactivos
- ✅ Animaciones suaves con keyframes
- ✅ Responsive design
- ✅ Iconos de React Icons integrados

---

## 🌐 Deploy en Netlify

Cada módulo puede ser desplegado independientemente en Netlify.

### Configuración Individual

Cada carpeta (`main/`, `moduleProducts/`, `moduleUser/`, `modulePurchases/`) contiene su propio `netlify.toml`:

```toml
[build]
  command = "pnpm install && pnpm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/*"
  [headers.values]
    Access-Control-Allow-Origin = "*"
```

### Pasos para Deploy

1. **Crear 4 sitios en Netlify** (uno por cada módulo)
2. **Configurar cada sitio:**
   - Base directory: `main`, `moduleProducts`, `moduleUser`, o `modulePurchases`
   - Build command: `pnpm install && pnpm run build`
   - Publish directory: `dist`
3. **Actualizar URLs** en `main/module-federation.config.ts` con las URLs de Netlify
4. **Deploy automático** con cada push a la rama principal

---

## 🔧 Solución de Problemas

### Puerto en uso

Si obtienes el error `EADDRINUSE`:

```bash
# Windows - Encontrar proceso en el puerto
netstat -ano | findstr :3000

# Matar el proceso
taskkill /PID <número_de_proceso> /F
```

### Módulos remotos no cargan

1. Asegúrate de que todos los servidores estén corriendo
2. Verifica las URLs en `module-federation.config.ts`
3. Revisa la consola del navegador para errores CORS

### Dependencias desactualizadas

```bash
# Actualizar todas las dependencias
pnpm run install:all

# Limpiar caché si es necesario
pnpm store prune
```

---

## 📊 Métricas del Proyecto

- **Total de componentes:** 50+
- **Líneas de código:** ~3,000+
- **Módulos:** 4 independientes
- **Productos de ejemplo:** 487
- **Usuarios de ejemplo:** 150
- **Compras de ejemplo:** 523
- **Tiempo de build:** ~30s (promedio)
- **Tamaño del bundle (main):** ~500KB

---

## 🎯 Requisitos Cumplidos de la Actividad

✅ **Arquitectura de Microfrontends** con Module Federation  
✅ **Mínimo 3 módulos remotos** (Products, User, Purchases)  
✅ **Componentes exportados** (CardProducto, PerfilUsuario)  
✅ **Styled Components** para estilizado  
✅ **TypeScript** en todos los módulos  
✅ **Diseño responsive** y moderno  
✅ **Configuración de deploy** en Netlify  
✅ **Scripts de desarrollo** unificados  
✅ **Documentación completa**  

---

## 👥 Contribución

Este proyecto fue desarrollado como parte de una actividad académica.

### Autores
- **Tu Nombre** - Desarrollo e implementación

---

## 📝 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

---

## 📚 Recursos Adicionales

- [Module Federation Documentation](https://module-federation.github.io/)
- [Rspack Documentation](https://rspack.dev/)
- [React 19 Documentation](https://react.dev/)
- [Styled Components](https://styled-components.com/)
- [Netlify Docs](https://docs.netlify.com/)

---

## 🚀 Futuras Mejoras

- [ ] Agregar autenticación con JWT
- [ ] Implementar estado global con Zustand/Redux
- [ ] Añadir tests unitarios con Vitest
- [ ] Integrar backend API REST
- [ ] Implementar server-side rendering (SSR)
- [ ] Agregar PWA capabilities
- [ ] Sistema de notificaciones en tiempo real
- [ ] Dashboard de analytics

---

<div align="center">

**¡Gracias por revisar este proyecto!** 🎉

Si tienes preguntas o sugerencias, no dudes en abrir un issue.

**⭐ Si te gustó este proyecto, dale una estrella en GitHub ⭐**

</div>
