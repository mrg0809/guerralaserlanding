# Guerra Laser - Landing Page "En Renovación"

Landing page moderna y responsiva para sitios web en construcción o renovación.

## 🚀 Características

- ✨ **Diseño Moderno**: Interfaz minimalista con degradado animado
- 📱 **Totalmente Responsiva**: Optimizada para móviles, tablets y escritorio
- ⏱️ **Contador Regresivo**: Cuenta regresiva dinámica hasta la fecha de lanzamiento
- 🎨 **Animaciones Suaves**: Efectos de entrada y hover en todos los elementos
- 📧 **Información de Contacto**: Sección clara con email, teléfono y ubicación
- 🌐 **Redes Sociales**: Iconos con enlaces a Instagram, Facebook, TikTok y Email
- 🎯 **Call-to-Action**: Botón destacado para captar suscripciones
- 🖼️ **Logo Personalizable**: Espacio para tu logo de marca

## 📁 Estructura de Archivos

```
guerralaserlanding/
├── index.html          # Estructura HTML principal
├── styles.css          # Estilos y animaciones
├── script.js           # Funcionalidad del contador regresivo
├── logo-placeholder.svg # Logo placeholder (reemplazar con tu logo)
└── README.md           # Este archivo
```

## 🛠️ Personalización

### 1. Logo

Reemplaza el archivo `logo-placeholder.svg` con tu propio logo. Formatos recomendados: PNG, SVG o JPG.

```html
<!-- En index.html, línea ~22 -->
<img src="tu-logo.png" alt="Tu Logo" class="logo" id="site-logo">
```

### 2. Colores de Marca

Modifica los colores en `styles.css`:

```css
/* Color principal del degradado */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Cambia #667eea y #764ba2 por los colores de tu marca */
```

### 3. Información de Contacto

Actualiza los datos de contacto en `index.html`:

```html
<!-- Sección de Contacto, líneas ~68-82 -->
<span>tu_email@ejemplo.com</span>        <!-- Tu email -->
<span>+XX XXX XXX XXXX</span>            <!-- Tu teléfono -->
<span>Tu Ciudad, Tu País</span>          <!-- Tu ubicación -->
```

### 4. Redes Sociales

Actualiza los enlaces en `index.html`:

```html
<!-- Sección de Redes Sociales, líneas ~95-120 -->
<a href="https://instagram.com/tuusuario">      <!-- Tu Instagram -->
<a href="https://facebook.com/tupagina">        <!-- Tu Facebook -->
<a href="https://tiktok.com/@tuusuario">        <!-- Tu TikTok -->
<a href="mailto:tu_email@ejemplo.com">          <!-- Tu Email -->
```

### 5. Fecha del Contador Regresivo

Por defecto, el contador cuenta 30 días desde la fecha actual. Para establecer una fecha específica:

**Opción A: Fecha específica**

En `script.js`, línea ~17, descomenta y modifica:

```javascript
const targetDate = new Date('2024-12-15T23:59:59').getTime();
```

**Opción B: Días desde hoy**

En `script.js`, modifica la función `getTargetDate()`:

```javascript
function getTargetDate() {
    const now = new Date();
    const target = new Date(now.getTime() + (60 * 24 * 60 * 60 * 1000)); // 60 días
    return target;
}
```

### 6. Textos y Títulos

Personaliza todos los textos en `index.html`:

```html
<!-- Título principal, línea ~28 -->
<h1 class="main-title">Estamos en Renovación</h1>

<!-- Subtítulo, línea ~31 -->
<p class="subtitle">Estamos trabajando para ofrecerte una experiencia increíble...</p>

<!-- Botón CTA, línea ~87 -->
<a href="mailto:tu_email@ejemplo.com" class="cta-button">
    Suscríbete para Novedades
</a>
```

### 7. Fuente Tipográfica

La página usa **Poppins** de Google Fonts. Para cambiar la fuente:

1. Visita [Google Fonts](https://fonts.google.com/)
2. Selecciona tu fuente preferida
3. Copia el `<link>` en el `<head>` de `index.html`
4. Actualiza la regla CSS en `styles.css`:

```css
body {
    font-family: 'Tu-Fuente', sans-serif;
}
```

## 🎨 Personalización del Fondo Animado

### Opción 1: Cambiar Colores del Degradado

En `styles.css`, línea ~25:

```css
.background-animation {
    background: linear-gradient(135deg, #color1 0%, #color2 50%, #color3 100%);
}
```

### Opción 2: Habilitar Partículas Flotantes

En `script.js`, descomenta las líneas 78-115 para activar el efecto de partículas.

## 📱 Compatibilidad

- ✅ Chrome, Firefox, Safari, Edge (últimas versiones)
- ✅ iOS Safari (iOS 12+)
- ✅ Chrome Mobile (Android 8+)
- ✅ Responsive breakpoints: 480px, 768px, 1200px

## 🚀 Implementación

### Opción 1: Servir Archivos Estáticos

Simplemente sube los archivos a tu servidor web o hosting:

```bash
# Estructura en el servidor
/public_html/
├── index.html
├── styles.css
├── script.js
└── logo-placeholder.svg
```

### Opción 2: GitHub Pages

1. Sube los archivos a un repositorio de GitHub
2. Ve a Settings > Pages
3. Selecciona la rama `main` y carpeta `/root`
4. Tu sitio estará disponible en: `https://tuusuario.github.io/tu-repo/`

### Opción 3: Netlify/Vercel

1. Conecta tu repositorio de GitHub
2. El deploy es automático
3. Obtienes un dominio gratuito

## 🔧 Desarrollo Local

Para probar localmente:

```bash
# Python 3
python3 -m http.server 8080

# Node.js (http-server)
npx http-server -p 8080

# PHP
php -S localhost:8080
```

Luego abre: `http://localhost:8080`

## 📝 Notas Importantes

- **No requiere compilación**: Todo es HTML/CSS/JS estático
- **Sin dependencias**: No usa librerías externas (excepto Google Fonts opcional)
- **Iconos SVG**: Todos los iconos están embebidos como SVG inline
- **SEO Friendly**: Incluye meta tags básicos
- **Accesibilidad**: Incluye atributos ARIA y alt text

## 🎯 Casos de Uso

- Sitios web en construcción
- Lanzamientos de productos
- Renovación de sitios existentes
- Eventos y conferencias
- Páginas de "Próximamente"

## 📄 Licencia

Este código es de uso libre. Puedes modificarlo y usarlo para proyectos personales o comerciales.

## 🤝 Soporte

Para consultas o personalizaciones adicionales, contacta a través de los canales especificados en la página.

---

**Hecho con ❤️ para Guerra Laser**

