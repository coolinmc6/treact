

## Optional / Required Props
- If you look in `Button.tsx`, if the user passes in a `loading` prop, it must ALSO have a
`loadingText` prop. It's pretty cool - it has the props that I'm expecting plus a two
potential loadingProps forms.

```tsx
type CommonProps = {
  variant: 'primary' | 'secondary' | 'danger';
  children: React.ReactNode;
  rootClassName?: string;
  onClick?: () => void;
}

type LoadingProps = {
  loading: boolean;
  loadingText: string;
} | {
  loading: never;
  loadingText: never;
}

type ButtonProps = LoadingProps & CommonProps;
```