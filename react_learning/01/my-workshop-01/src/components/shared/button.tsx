type StatusButtonProps = {
  isOnline: boolean;
  onToggle: () => void;
};

const StatusButton = ({ isOnline, onToggle }: StatusButtonProps) => {
  return (
      <button
          className={`font-semibold cursor-pointer w-20 text-white transition-colors rounded-3xl duration-300 ${
              isOnline ? 'bg-green-400' : 'bg-red-400'
          }`}
          onClick={onToggle}
      >
          {isOnline ? 'Online' : 'Offline'}
      </button>
  );
};

export default StatusButton;