export const FONT_FAMILY = {
  regular: 'Inter_400Regular',
  medium: 'Inter_500Medium',
  semiBold: 'Inter_600SemiBold',
  bold: 'Inter_700Bold',
};

export const FONT_SIZE = {
  xs: 12,
  xsl: 13,
  sm: 14,
  lmd: 15,
  md: 16,
  xmd: 18,
  lg: 20,
  xl: 24,
  '2xl': 30,
};

export const FONT = {
  h1: {
    fontFamily: FONT_FAMILY.bold,
    fontSize: FONT_SIZE['2xl'],
  },
  h2: {
    fontFamily: FONT_FAMILY.semiBold,
    fontSize: FONT_SIZE.xl,
  },
  h3: {
    fontFamily: FONT_FAMILY.semiBold,
    fontSize: FONT_SIZE.lg,
  },
  body: {
    fontFamily: FONT_FAMILY.regular,
    fontSize: FONT_SIZE.md,
  },
  caption: {
    fontFamily: FONT_FAMILY.medium,
    fontSize: FONT_SIZE.sm,
  },
  small: {
    fontFamily: FONT_FAMILY.regular,
    fontSize: FONT_SIZE.xs,
  },
};