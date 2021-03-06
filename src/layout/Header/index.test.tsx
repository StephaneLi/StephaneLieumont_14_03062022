import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom'
import '../../config/config.jest'
import Header from '.';


describe('When call Header layout', () => {
  test('Should render component', () => {
    render(
      <Router>
        <Header />
      </Router>      
    )

    const headerComponent = screen.getByTestId('header')

    expect(headerComponent).toBeInTheDocument()
  });
})