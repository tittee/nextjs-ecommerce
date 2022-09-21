export const getColorCode = (value: string) => {
  if (value.indexOf('#') > -1 || /rgb/.test(value)) {
    return value;
  }

  return `var(--${value})`;
};

export default { getColorCode };
