module.exports = {
    roots: ['<rootDir>'],
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    testMatch: ['<rootDir>/src/**/?(*.)test.{ts,tsx}'], // looks for your test
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    testPathIgnorePatterns: ['/node_modules/', '/dist/'],
    setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
};
