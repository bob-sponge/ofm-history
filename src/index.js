import { createBrowserHistory } from 'history';

let history = createBrowserHistory(); // eslint-disable-line

function resetHistory(props) {
    history = createBrowserHistory(props);
    return history;
}

export {
    history,
    resetHistory
};
