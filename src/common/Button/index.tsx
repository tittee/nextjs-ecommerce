import React from 'react';
import { clsx } from 'clsx';
import { ButtonProps } from 'interfaces/common';
import { getColorCode } from 'lib/helper';
import useStyles from 'hooks/useStyles';

const ButtonCommon = ({
  style = {
    textColor: 'grayDark',
    backgroundColor: 'white',
  },
  hoverStyle = {
    textColor: 'white',
    backgroundColor: 'grayDark',
  },
  buttonSize = 'normal',
  buttonLabel,
  buttonType,
  isDisabled = false,
  isFullWidth = false,
  btnStyle = '',
  fontWeight = 'bold',
  onClick,
}: ButtonProps) => {
  const textColor = style?.textColor ? getColorCode(style.textColor) : 'white';
  const backgroundColor = style?.backgroundColor
    ? getColorCode(style.backgroundColor)
    : 'var(--button)';

  const hoverTextColor = hoverStyle?.textColor
    ? getColorCode(hoverStyle.textColor)
    : 'var(--white)';

  const hoverBackgroundColor = hoverStyle?.backgroundColor
    ? getColorCode(hoverStyle.backgroundColor)
    : 'var(--buttonHover)';

  const outlineBorderColor = style?.backgroundColor
    ? getColorCode(style.backgroundColor)
    : 'var(--button)';

  const hoverOutlineBorderColor = hoverStyle?.backgroundColor
    ? getColorCode(hoverStyle.backgroundColor)
    : 'var(--buttonHover)';

  const outlineTextColor = style?.textColor ? getColorCode(style.textColor) : 'var(--button)';

  const hoverOutlineTextColor = hoverStyle?.textColor
    ? getColorCode(hoverStyle.textColor)
    : 'var(--button)';

  const linkTextColor = style?.textColor ? getColorCode(style.textColor) : 'var(--button)';

  const hoverLinkTextColor = hoverStyle?.textColor
    ? getColorCode(hoverStyle.textColor)
    : 'var(--buttonHover)';

  const getButtonStyles = () => {
    switch (buttonType) {
      case 'outline':
        return {
          defaultStyles: {
            color: isDisabled ? 'var(--outlineTextColor)' : outlineTextColor,
            outline: 'none',
            borderWidth: '1px',
            borderColor: outlineBorderColor,
          },
          hoverStyles: {
            backgroundColor: 'var(--white)',
            color: isDisabled ? 'var(--buttonDisabledTextColor)' : hoverOutlineTextColor,
            borderColor: isDisabled ? 'var(--buttonDisabledBorder)' : hoverOutlineBorderColor,
          },
        };

      case 'link':
        return {
          defaultStyles: {
            color: isDisabled ? 'var(--buttonDisabledTextColor)' : linkTextColor,
            outline: 'none',
            borderWidth: '0',
          },
          hoverStyles: {
            color: isDisabled ? 'var(--buttonDisabledTextColor)' : hoverLinkTextColor,
          },
        };

      default:
        return {
          defaultStyles: {
            backgroundColor: isDisabled ? 'var(--buttonDisabledBg)' : backgroundColor,
            color: isDisabled ? 'var(--white)' : textColor,
            outline: 'none',
            border: 0,
          },
          hoverStyles: {
            backgroundColor: isDisabled ? 'var(--buttonDisbled)' : hoverBackgroundColor,
            color: isDisabled ? 'var(--white)' : hoverTextColor,
          },
        };
    }
  };

  const getMinWidth = () => {
    return { minWidth: '6rem' };
  };

  const getButtonPadding = () => {
    if (buttonSize === 'normal') {
      if (buttonType === 'outline') {
        return { padding: '0.844rem 4rem' };
      }
      return { padding: '0.844rem 4.219rem' };
    }
    return { padding: '0.925rem 4.219rem' };
  };

  /**
   * all props that will be coming at runtime should be set with inline styling
   */
  const defaultBaseStyles = {
    cursor: isDisabled ? 'not-allow' : 'pointer',
    fontWeight,
    ...getMinWidth(),
    ...getButtonPadding(),
    ...(buttonSize === 'normal'
      ? {
          fontSize: '1rem',
          lineHeight: '1.3125rem',
          width: 'auto',
        }
      : {
          fontSize: '0.75rem',
          lineHeight: '0.9375rem',
        }),
    ...(isFullWidth && { width: '100%' }),
  };

  const { styles, handleMouseOut, handleMouseEnter } = useStyles(getButtonStyles());

  return (
    <button
      style={{
        ...defaultBaseStyles,
        ...styles,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseOut={handleMouseOut}
      className={clsx(
        'cursor-pointer uppercase h-auto rounded-[0.625rem] disabled:cursor-not-allowed',
        btnStyle
      )}
      onClick={onClick}
      disabled={isDisabled}
    >
      {buttonLabel}
    </button>
  );
};

export default ButtonCommon;
