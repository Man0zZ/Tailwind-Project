module.exports = {
    plugins: [
        require('postcss-uncss')({
            html: [
                './layouts/index.html',
            ]
        }),
    ]
}