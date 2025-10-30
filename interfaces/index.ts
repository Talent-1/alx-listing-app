//interface for card prop

export interface CardProps {
  title: string;
  description?: string;
  imageSrc?: string;
  href?: string;
}

// interface for button props

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
    variant?: string;
    size?: string;
}

// interface for header and navbar component

export interface HeaderProps {
  // Placeholder for when we add user state later
  userLoggedIn?: boolean;
}