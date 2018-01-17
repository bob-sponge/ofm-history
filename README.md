# ajax

```
describe('test resetHistory', () => {
    test('resetHistory', async () => {
        const location = { pathname: '/abc' };
        expect(history.createHref(location)).toEqual('/abc');
        resetHistory({
            basename: '/api',
        });
        expect(history.createHref(location)).toEqual('/api/abc');
    });
});
```

# related
[history](https://www.npmjs.com/package/history)
