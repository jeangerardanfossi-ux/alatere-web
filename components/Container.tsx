import { Box, BoxExtendedProps } from 'grommet';

/** Largeur de contenu max + marges latérales cohérentes sur tout le site. */
export const MAX_WIDTH = 1200;

export default function Container({
  children,
  ...rest
}: BoxExtendedProps & { children: React.ReactNode }) {
  return (
    <Box
      width={{ max: `${MAX_WIDTH}px` }}
      margin="auto"
      pad={{ horizontal: 'medium' }}
      style={{ width: '100%' }}
      {...rest}
    >
      {children}
    </Box>
  );
}
