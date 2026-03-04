declare global {
    interface Window {
        Kakao: {
            init: (key: string) => void;
            isInitialized: () => boolean;
            Share: {
                sendDefault: (options: object) => void;
            };
        };
        kakao: {
            maps: {
                LatLng: new (lat: number, lng: number) => object;
                Map: new (container: HTMLElement, options: object) => object;
                Marker: new (options: object) => { setMap: (map: object) => void };
                load: (callback: () => void) => void;
            };
        };
    }
}

export {};
