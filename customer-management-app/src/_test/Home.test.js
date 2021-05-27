import { render,screen } from '@testing-library/react';
import React from 'react';
import Home from '../components/Home';

test('Show Home on Home page', () => {
    render(<Home />)
    const HomeText = screen.getByText('Customer Management');
    expect(HomeText).toBeInTheDocument();
})