export const radioSizes = {
  small: 16,
  big: 20,
} as const;

export type RadioSizeType = keyof typeof radioSizes;
