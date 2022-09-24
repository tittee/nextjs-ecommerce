export interface ImageProps {
  alt: string;
  width: number;
  height: number;
  src: string;
}

export interface LinkProps {
  href?: string;
}

export interface ButtonStyleProps {
  textColor?: string;
  backgroundColor?: string;
}

export interface ButtonProps {
  style: ButtonStyleProps;
  hoverStyle: ButtonStyleProps;
  buttonSize?: 'normal' | 'small';
  buttonType?: 'primary' | 'secondary' | 'outline' | 'link';
  isDisabled?: boolean;
  buttonLabel?: string;
  buttonUrl?: string;
  isFullWidth?: boolean;
  fontWeight?: string;
  onClick?: () => void;
  btnStyle?: string;
}

export interface HeadingProps {
  textColor?: string;
  style?: object;
}
