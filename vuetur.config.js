module.exports = {
    projects: [
        './packages/repo2', // Shorthand for specifying only the project root location
        {
            root: './docker/web/src',
            package: './package.json',
            tsconfig: './tsconfig.json',
            globalComponents: [
            ]
        }
        ]
}