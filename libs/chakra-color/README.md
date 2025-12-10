# chakra-color

Color mode hooks for Chakra UI v3 with next-themes integration.

## Installation

This library is part of the Nx monorepo and uses `next-themes` for color mode management.

## Usage

### Full Color Mode Support (Light/Dark)

For applications that support both light and dark modes:

```tsx
import { useColorMode, useColorModeValue } from 'chakra-color'

function MyComponent() {
  const { colorMode, toggleColorMode } = useColorMode()
  const bgColor = useColorModeValue('white', 'black')

  return (
    <Box bg={bgColor}>
      <Button onClick={toggleColorMode}>Toggle {colorMode === 'dark' ? 'Light' : 'Dark'} Mode</Button>
    </Box>
  )
}
```

### Dark-Only Mode

For applications that are dark-only:

```tsx
import { useColorMode, useColorModeValue } from 'chakra-color/dark-only'

function MyComponent() {
  const { colorMode } = useColorMode() // Always returns 'dark'
  const bgColor = useColorModeValue('white', 'black') // Always returns 'black'

  return <Box bg={bgColor}>Dark mode only</Box>
}
```

## API

### `useColorMode()`

Returns an object with:

- `colorMode`: `'light' | 'dark'` - Current color mode
- `toggleColorMode()`: Function to toggle between light and dark
- `setColorMode(theme)`: Function to set a specific color mode

### `useColorModeValue<T>(lightValue: T, darkValue: T): T`

Returns the appropriate value based on the current color mode.

- During SSR, returns `lightValue` (for full mode) or `darkValue` (for dark-only mode)

## Dependencies

- `next-themes`: ^0.4.6
- `react`: Required peer dependency
