import { History, BrowserHistoryBuildOptions } from 'history';

declare module '@ofm/history' {
    export const history : History;

    export function resetHistory(options: BrowserHistoryBuildOptions): History;
}
