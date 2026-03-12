interface SwapRotateProps {
  className?: string;
  active?: boolean;
  swapEffect?: 'rotate' | 'flip' | 'scale';
  offElement?: React.ReactNode;
  onElement?: React.ReactNode;
}

export const SwapElements = (props: SwapRotateProps) => {
  const { className, active, offElement, onElement, swapEffect } = props;

  return (
    <label className={`swap swap-${swapEffect} ${className}`}>
      <input type="checkbox" checked={active} readOnly />
      <span className="swap-on">{offElement}</span>
      <span className="swap-off">{onElement}</span>
    </label>
  );
};

/* Tailwind include
  swap-rotate swap-flip swap-scale
*/
