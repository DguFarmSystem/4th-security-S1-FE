import React from 'react';

interface SwitchProps {
  id?: string;
  isOn: boolean;
  handleToggle: () => void;
  disabled?: boolean;
  onLabel?: string; // Text for 'on' state (e.g., from Figma 13:19)
  offLabel?: string; // Text for 'off' state (e.g., from Figma 13:18, 13:22)
}

const Switch: React.FC<SwitchProps> = ({
  id,
  isOn,
  handleToggle,
  disabled = false,
  onLabel = 'ON', // 기본값을 대문자로 변경하여 가시성 확보
  offLabel = 'OFF',
}) => {
  const scaleFactor = 1.0;
  const originalSwitchWidth = 83;
  const originalSwitchHeight = 39;
  const originalEllipseDiameter = 28.56;
  const originalPadding = 2;
  const originalLabelFontSize = 14.65;
  const originalLabelOffset = 10;

  const switchWidth = originalSwitchWidth * scaleFactor;
  const switchHeight = originalSwitchHeight * scaleFactor;
  const ellipseDiameter = originalEllipseDiameter * scaleFactor;
  const padding = originalPadding * scaleFactor;
  const labelFontSize = originalLabelFontSize * scaleFactor;
  const labelOffset = originalLabelOffset * scaleFactor;
  const borderRadius = 24.41 * scaleFactor;

  const switchBaseClasses = 'relative inline-flex items-center cursor-pointer transition-all duration-200 ease-in-out';
  const disabledBaseClasses = 'opacity-60 cursor-not-allowed';

  const currentBgColor = isOn ? (disabled ? 'bg-[#a8cbbc]' : 'bg-[#ff9500]') : 'bg-transparent';
  const currentBorderClasses = isOn ? '' : `border border-solid ${disabled ? 'border-[#a5abb3]' : 'border-[#ff9500]'}`;

  const switchDynamicStyle: React.CSSProperties = {
    width: `${switchWidth}px`,
    height: `${switchHeight}px`,
    borderRadius: `${borderRadius}px`,
    padding: `${padding}px`,
  };

  const ellipseDynamicStyle: React.CSSProperties = {
    width: `${ellipseDiameter}px`,
    height: `${ellipseDiameter}px`,
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    transition: 'left 0.2s ease-in-out',
    left: isOn ? `calc(100% - ${ellipseDiameter}px - ${padding}px)` : `${padding}px`,
  };

  const ellipseBgColor = isOn ? 'bg-white' : (disabled ? 'bg-[#a5abb3]' : 'bg-[#ff9500]');

  const labelDynamicStyle: React.CSSProperties = {
    fontSize: `${labelFontSize}px`,
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    fontWeight: 600, // Figma: fontWeight 600 (SemiBold) for labels
  };

  const onLabelColor = isOn ? (disabled ? 'text-[#343434]' : 'text-white') : 'text-transparent';
  const offLabelColor = !isOn ? (disabled ? 'text-[#A5ABB3]' : 'text-[#ff9500]') : 'text-transparent';

  return (
    <div 
      id={id}
      className={`
        ${switchBaseClasses}
        ${currentBgColor}
        ${currentBorderClasses}
        ${disabled ? disabledBaseClasses : ''}
      `.trim().replace(/\s+/g, ' ')}
      style={switchDynamicStyle}
      onClick={!disabled ? handleToggle : undefined}
      role="switch"
      aria-checked={isOn}
      aria-disabled={disabled}
    >
      <span 
        style={{...labelDynamicStyle, left: `${labelOffset}px`}}
        className={`${onLabelColor}`.trim().replace(/\s+/g, ' ')}
      >
        {onLabel}
      </span>
      <span 
        style={{...labelDynamicStyle, right: `${labelOffset}px`}}
        className={`${offLabelColor}`.trim().replace(/\s+/g, ' ')}
      >
        {offLabel}
      </span>
      <div 
        className={`rounded-full ${ellipseBgColor}`.trim().replace(/\s+/g, ' ')}
        style={ellipseDynamicStyle}
      ></div>
    </div>
  );
};

export default Switch; 