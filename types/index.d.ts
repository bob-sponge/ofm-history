import { History, BrowserHistoryBuildOptions } from 'history';

declare module '@siesam/history' {
    export const history : History;

    export function resetHistory(options: BrowserHistoryBuildOptions): History;
}
