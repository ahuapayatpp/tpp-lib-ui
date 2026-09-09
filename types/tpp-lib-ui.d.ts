import * as _angular_core from '@angular/core';

declare class NotFoundComponent {
    private router;
    showButton: _angular_core.InputSignal<boolean>;
    buttonText: _angular_core.InputSignal<string>;
    homeRoute: _angular_core.InputSignal<string>;
    goHome(): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<NotFoundComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<NotFoundComponent, "tpp-not-found", never, { "showButton": { "alias": "showButton"; "required": false; "isSignal": true; }; "buttonText": { "alias": "buttonText"; "required": false; "isSignal": true; }; "homeRoute": { "alias": "homeRoute"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}

declare class UnauthorizedComponent {
    private router;
    showButton: _angular_core.InputSignal<boolean>;
    buttonText: _angular_core.InputSignal<string>;
    homeRoute: _angular_core.InputSignal<string>;
    goHome(): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<UnauthorizedComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<UnauthorizedComponent, "tpp-unauthorized", never, { "showButton": { "alias": "showButton"; "required": false; "isSignal": true; }; "buttonText": { "alias": "buttonText"; "required": false; "isSignal": true; }; "homeRoute": { "alias": "homeRoute"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}

declare class ServerErrorComponent {
    private router;
    showButton: _angular_core.InputSignal<boolean>;
    buttonText: _angular_core.InputSignal<string>;
    homeRoute: _angular_core.InputSignal<string>;
    goHome(): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<ServerErrorComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<ServerErrorComponent, "tpp-server-error", never, { "showButton": { "alias": "showButton"; "required": false; "isSignal": true; }; "buttonText": { "alias": "buttonText"; "required": false; "isSignal": true; }; "homeRoute": { "alias": "homeRoute"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}

declare class LoadingComponent {
    size: _angular_core.InputSignal<"sm" | "md" | "lg">;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<LoadingComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<LoadingComponent, "tpp-loading", never, { "size": { "alias": "size"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}

type TipoEstadoTabla = 'cargando' | 'vacio' | 'sin-resultados' | 'error';
interface ConfiguracionEstadoTabla {
    icono: string;
    titulo: string;
    descripcion: string;
}
declare class TableStateComponent {
    type: _angular_core.InputSignal<TipoEstadoTabla>;
    titulo: _angular_core.InputSignal<string>;
    descripcion: _angular_core.InputSignal<string>;
    reintentar: _angular_core.OutputEmitterRef<void>;
    cargando: _angular_core.Signal<boolean>;
    mostrarReintentar: _angular_core.Signal<boolean>;
    configuracion: _angular_core.Signal<ConfiguracionEstadoTabla>;
    tituloMostrado: _angular_core.Signal<string>;
    descripcionMostrada: _angular_core.Signal<string>;
    obtenerConfiguracion(tipo: TipoEstadoTabla): ConfiguracionEstadoTabla;
    private readonly estadoConfig;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<TableStateComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<TableStateComponent, "tpp-table-state", never, { "type": { "alias": "type"; "required": false; "isSignal": true; }; "titulo": { "alias": "titulo"; "required": false; "isSignal": true; }; "descripcion": { "alias": "descripcion"; "required": false; "isSignal": true; }; }, { "reintentar": "reintentar"; }, never, never, true, never>;
}

export { LoadingComponent, NotFoundComponent, ServerErrorComponent, TableStateComponent, UnauthorizedComponent };
export type { TipoEstadoTabla };
