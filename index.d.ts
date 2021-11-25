import { PathLike } from 'fs';

export = giancarl021__locate;

declare module giancarl021__locate{
    export default function (pathToFile: PathLike, useCWD?: boolean): PathLike;
}