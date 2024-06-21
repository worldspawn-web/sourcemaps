import './Background.css';

interface BackgroundProps {
  children: React.ReactNode;
}

export const Background: React.FC<BackgroundProps> = ({ children }) => (
  <div>{children}</div>
);
