export interface ButtonPropTypes {
    text: string;
    className?: string;
    variant: ButtonVariant;
    size: ButtonSizes;
    onClick:() => void;
}

export enum ButtonVariant {
    Solid = 'solid',
    Outline = 'outline',
    Ghost = 'ghost',
}

export enum ButtonSizes {
    Small = 'xs',
    Medium = 'sm',
    Large = 'md',
    Larger = 'lg',
}