import React from 'react';
import { render, screen } from '@testing-library/react';
import InputText from '../InputText';

describe('InputText', () => {
    it('should render', () => {
        const { asFragment } = render(<InputText placeholder="placeholder" label="label"/>);
        expect(asFragment()).toMatchSnapshot();
    });
});