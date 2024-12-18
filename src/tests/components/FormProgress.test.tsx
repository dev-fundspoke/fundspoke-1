import { render, screen } from '@testing-library/react';
import FormProgress from '../../components/FormProgress';

describe('FormProgress', () => {
  it('renders correctly', () => {
    const steps = [
      { title: 'Step 1' },
      { title: 'Step 2' },
      { title: 'Step 3' },
    ];
    
    render(<FormProgress current={0} steps={steps} />);
    expect(screen.getByText('Step 1')).toBeInTheDocument();
  });
});