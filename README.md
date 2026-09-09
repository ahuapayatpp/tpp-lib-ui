# tpp-lib-ui
- Descripción: librería de componentes Angular compartidos de TPP (Microfrontends)

## Requisitos previos
- Angular >= 21.2 (peers: @angular/core, @angular/common, @angular/router ^21.2.0)
- Nota: los componentes de error usan íconos Tabler (ti-*) → el host debe importar
  el webfont de @tabler/icons-webfont en estilos globales (estándar en los MFs TPP)

## Instalación
- Vía package.json (recomendado):
  "tpp-lib-ui": "github:ahuapayatpp/tpp-lib-ui#v0.1.0"
  + npm install
- Vía comando:
  npm install github:ahuapayatpp/tpp-lib-ui#v0.1.0

## Contenido (v0.1.0)
Tabla: selector · clase · input(s) · descripción
- tpp-loading · LoadingComponent · size ('sm'|'md'|'lg') · indicador de carga
- tpp-unauthorized · UnauthorizedComponent · showButton, buttonText, homeRoute · 401
- tpp-not-found · NotFoundComponent · showButton, buttonText, homeRoute · 404
- tpp-server-error · ServerErrorComponent · showButton, buttonText, homeRoute · 500

## Uso
- Import del paquete (import { LoadingComponent } from 'tpp-lib-ui')
- En template: <tpp-loading size="md" />
- En rutas: component: UnauthorizedComponent (son standalone)
- Inputs vinculables: [showButton]="false", [buttonText]="...", [homeRoute]="'/listado-base'"

## Actualizar versión
- Cambiar el tag (#v0.1.0 → #v0.2.0) en package.json y npm install

## Desarrollo (para el equipo)
- Clonar tpp-web-workspace, instalar deps, ng build tpp-lib-ui
- Estructura (src/lib/components, services, pipes a futuro), public-api.ts
- Cómo publicar una versión (build → sync dist → tag → push)

## Roadmap
- Migrar componentes actuales de shared (loading, table-loading, buscador, modales…)
- Servicios y pipes compartidos · integración de tpp-theme-ui
