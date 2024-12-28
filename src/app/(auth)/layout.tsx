interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div>
      <nav className="w-full bg-red-500">Auth navbar</nav>
      {children}
    </div>
  );
};

export default AuthLayout;
