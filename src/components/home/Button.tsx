/**
 * Button component with variant, loadingText, and rootClassName props.
 * variant can be either primary, secondary, or danger
 * loadingText is the text that will be displayed when the button is loading
 * rootClassName is the className that will be applied to the root element
 */
import React from 'react';
import '../../styles/home.css';
import Loader from '../../assets/loader.gif';

type CommonProps = {
  variant: 'primary' | 'secondary' | 'danger';
  children: React.ReactNode;
  rootClassName?: string;
  onClick?: () => void;
}

type LoadingProps = {
  loading: boolean;
  loadingText: string;
} | {
  loading: never;
  loadingText: never;
}

type ButtonProps = LoadingProps & CommonProps;

// Button component
export const Button = ({ variant, loadingText, rootClassName, children, onClick, loading }: ButtonProps) => {
  const className = `button ${rootClassName ? rootClassName : ''} ${`button-${variant}`}`;
  return (
    <button className={className} onClick={onClick} disabled={loading}>
      {loading ? <>
        <img src={Loader} alt="loader" className="loader" />
        {loadingText}
      </> : children}
    </button>
  );
}

export default Button;