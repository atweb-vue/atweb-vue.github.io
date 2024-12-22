declare module 'butterchurn';
declare module '#webamp-lazy' {
    export type * from '@/external/webamp/built/types/js/types';
    export * from '@/external/webamp/built/types/js/webampLazy';
    import Webamp from '@/external/webamp/built/types/js/webampLazy';
    export default WebampLazy;
}
