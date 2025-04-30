type OverlayProps = {
    children: React.ReactNode;
  };
  
  const Overlay = ({ children }: OverlayProps) => {
    return (
      <div className="fixed inset-0">
        {children}
      </div>
    );
  };
  
  export default Overlay;