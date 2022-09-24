export const getColorCode = (value: string) => {
  if (value.indexOf('#') > -1 || /rgb/.test(value)) {
    return value;
  }

  return `var(--${value})`;
};

export const getBadge = (name: string) => {
  let value: string;
  let icon: string;
  switch (name) {
    case 'เหมือนใหม่':
      value = 'new';
      icon = 'crown-icon';
      break;
    case 'สภาพดี':
      value = 'good';
      icon = 'thump-up';
      break;
    default:
      value = 'middle';
      icon = 'star-icon';
      break;
  }
  return {
    color: `var(--${value}-badge)`,
    icon,
  };
};

export default { getColorCode, getBadge };
