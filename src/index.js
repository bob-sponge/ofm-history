import createHistory from 'history/createBrowserHistory';

let history = createHistory(); // eslint-disable-line

function resetHistory(props) {
    history = createHistory(props);
    return history;
}

export {
    history,
    resetHistory
};
