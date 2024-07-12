import './Background.scss';

interface BackgroundProps {
  children: React.ReactNode;
}

export const Background: React.FC<BackgroundProps> = ({ children }) => (
  <div id="background">{children}</div>
);
