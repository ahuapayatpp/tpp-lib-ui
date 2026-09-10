import * as _angular_core from '@angular/core';

declare class LoadingStateComponent {
    size: _angular_core.InputSignal<"sm" | "md" | "lg">;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<LoadingStateComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<LoadingStateComponent, "tpp-loading-state", never, { "size": { "alias": "size"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}

declare class NotFoundComponent {
    private router;
    showButton: _angular_core.InputSignal<boolean>;
    buttonText: _angular_core.InputSignal<string>;
    homeRoute: _angular_core.InputSignal<string>;
    goHome(): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<NotFoundComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<NotFoundComponent, "tpp-not-found", never, { "showButton": { "alias": "showButton"; "required": false; "isSignal": true; }; "buttonText": { "alias": "buttonText"; "required": false; "isSignal": true; }; "homeRoute": { "alias": "homeRoute"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
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

type TableStateType = 'loading' | 'empty' | 'no-results' | 'error';
interface TableStateConfig {
    icon: string;
    title: string;
    description: string;
}
declare class TableStateComponent {
    type: _angular_core.InputSignal<TableStateType>;
    title: _angular_core.InputSignal<string>;
    description: _angular_core.InputSignal<string>;
    retry: _angular_core.OutputEmitterRef<void>;
    isLoading: _angular_core.Signal<boolean>;
    showRetry: _angular_core.Signal<boolean>;
    config: _angular_core.Signal<TableStateConfig>;
    displayedTitle: _angular_core.Signal<string>;
    displayedDescription: _angular_core.Signal<string>;
    getConfig(type: TableStateType): TableStateConfig;
    private readonly stateConfig;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<TableStateComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<TableStateComponent, "tpp-table-state", never, { "type": { "alias": "type"; "required": false; "isSignal": true; }; "title": { "alias": "title"; "required": false; "isSignal": true; }; "description": { "alias": "description"; "required": false; "isSignal": true; }; }, { "retry": "retry"; }, never, never, true, never>;
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

declare class VideoTutorialModalComponent {
    url: _angular_core.InputSignal<string>;
    visible: _angular_core.ModelSignal<boolean>;
    cargandoVideo: _angular_core.WritableSignal<boolean>;
    constructor();
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<VideoTutorialModalComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<VideoTutorialModalComponent, "tpp-video-tutorial-modal", never, { "url": { "alias": "url"; "required": true; "isSignal": true; }; "visible": { "alias": "visible"; "required": false; "isSignal": true; }; }, { "visible": "visibleChange"; }, never, never, true, never>;
}

export { LoadingStateComponent, NotFoundComponent, ServerErrorComponent, TableStateComponent, UnauthorizedComponent, VideoTutorialModalComponent };
export type { TableStateType };
