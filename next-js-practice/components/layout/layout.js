import MainHeader from './main-header';

function Layout({ children }) {
  return (
    <>
      <MainHeader></MainHeader>
      <main>{children}</main>
    </>
  );
}

export default Layout;
