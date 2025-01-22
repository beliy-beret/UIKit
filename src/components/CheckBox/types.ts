export const checkboxSizes = {
  small: 16,
  big: 20,
} as const;

export type CheckBoxSizeType = keyof typeof checkboxSizes;
