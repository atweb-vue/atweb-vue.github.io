interface Props {
    averageTrackLength: string;
    numberOfTracks: number;
    playlistLengthSeconds: number;
    playlistLengthMinutes: number;
    tracks: string[];
}
export declare const getAsDataURI: (text: string) => string;
export declare const createPlaylistURL: (props: Props) => string;
export {};
