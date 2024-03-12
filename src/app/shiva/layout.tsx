


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <h1>Inner layout Item</h1>
          {children}
    
    </>
      
        
       
  );
}
