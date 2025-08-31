interface IButton {
  title?: string;
  type?: 'submit' | 'reset' | 'button';
  className?: string;
  classDactive?: boolean;
  icon?: React.ReactNode | React.ReactElement;
  onClick?: () => void;
  disabled?: boolean;
}

const Button = ({ title, type, className, icon, onClick, disabled, classDactive }: IButton) => {
  return (
    <div>
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`${
          classDactive === true
            ? ''
            : 'flex items-center gap-2 rounded-2xl px-6 py-3 shadow-md hover:scale-105 transition'
        } ${className}`}
      >
        {icon} {title}
      </button>
    </div>
  );
};

export default Button;
