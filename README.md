# tpp-lib-ui

Librería de componentes Angular compartidos de TPP para los microfrontends.

## Requisitos previos

- Angular >= 21.2 (peers: `@angular/core`, `@angular/common`, `@angular/router` `^21.2.0`)
- Los componentes de error usan íconos Tabler (`ti-*`); el host debe importar
  el webfont de `@tabler/icons-webfont` en sus estilos globales (estándar en los MFs TPP)

## Instalación

Agregar en `package.json`:

```json
"dependencies": {
  "tpp-lib-ui": "github:ahuapayatpp/tpp-lib-ui"
}
```

Luego:

```bash
npm install
```

## Componentes disponibles

| Selector | Clase | Inputs | Descripción |
|---|---|---|---|
| `<tpp-loading-state>` | `LoadingStateComponent` | `size: 'sm' \| 'md' \| 'lg'` | Indicador de carga |
| `<tpp-unauthorized>` | `UnauthorizedComponent` | `showButton`, `buttonText`, `homeRoute` | 401 - No autorizado |
| `<tpp-not-found>` | `NotFoundComponent` | `showButton`, `buttonText`, `homeRoute` | 404 - No encontrado |
| `<tpp-server-error>` | `ServerErrorComponent` | `showButton`, `buttonText`, `homeRoute` | 500 - Error del servidor |
| `<tpp-table-state>` | `TableStateComponent` | `type` (`loading` \| `empty` \| `no-results` \| `error`), `title`, `description`, `retry` | Estado de tabla (carga, vacío, sin resultados, error) |
| `<tpp-video-tutorial-modal>` | `VideoTutorialModalComponent` | `url`, `visible` | Modal de video tutorial |
| `<tpp-search>` | `SearchComponent` | `placeholder` | Buscador con autocompletado |
| `<tpp-confirmation-modal>` | `ConfirmationModalComponent` | `titulo`, `mensaje`, `tipo` (`success` \| `error` \| `warning`), `labelCancelar`, `labelConfirmar`, `labelConfirmarCargando`, `procesando`, `visible` | Modal de confirmación (éxito, error, advertencia) |
| `<tpp-summary-card>` | `SummaryCardComponent` | `resumen: SummaryCard` | Tarjeta resumen con título, cantidad, unidad e ícono |

## Uso

Los componentes son **standalone**, se importan desde el paquete:

```typescript
import { LoadingStateComponent } from 'tpp-lib-ui';
```

En un template:

```html
<tpp-loading-state size="md" />
```

En rutas:

```typescript
import { UnauthorizedComponent, NotFoundComponent } from 'tpp-lib-ui';

export const routes: Routes = [
  { path: 'unauthorized', component: UnauthorizedComponent },
  { path: 'not-found',    component: NotFoundComponent },
];
```

Con inputs:

```html
<tpp-unauthorized
  [showButton]="false"
  buttonText="Volver al módulo"
  homeRoute="/listado-base" />
```

Estados de tabla:

```html
<tpp-table-state type="loading" />
<tpp-table-state type="empty" />
<tpp-table-state type="no-results" />
<tpp-table-state type="error" (retry)="reintentarCarga()" />
```

## Desarrollo

1. Clonar `tpp-lib-ui-source`
2. `npm install`
3. `ng build tpp-lib-ui` (genera `dist/`)
4. Agregar componentes en `projects/tpp-lib-ui/src/lib/components/` y exportarlos en `public-api.ts`
5. Publicar cambios: `.\publish.ps1`

## Roadmap

- Migrar componentes del shared actual (loading, table-loading, buscador, modales…)
- Servicios y pipes compartidos
- Integración con `tpp-theme-ui`
