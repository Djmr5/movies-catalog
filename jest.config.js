module.export = {
    preset: 'ts.jest',
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.tsx$': 'ts-jest',
        '^.+\\.jsx$': 'babel-jest',
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
}
