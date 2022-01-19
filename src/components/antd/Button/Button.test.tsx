import { render, screen } from '@testing-library/react';
import React from 'react';
import Button from 'src/components/antd/Button/Button';

describe('Test Button ', () => {
    render(<Button />);
    it(`works and renders`, () => {
        expect(screen.getByTestId('button')).toBeTruthy();
    });
});
