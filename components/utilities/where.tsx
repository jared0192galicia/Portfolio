export default function Where({ children, condition }: any) {
  return <>{condition && children}</>;
}
