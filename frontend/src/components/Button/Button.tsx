type ButtonProps = {
  children: React.ReactNode;
};

const Button = ({ children }: ButtonProps) => {
  //   const {} = useContainer();
  return <button>{children}</button>;
};

export default Button;
