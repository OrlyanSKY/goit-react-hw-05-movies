import { StyledLink } from 'components/StyledLink/StyledLink.styled';
const NotFound = () => {
  return (
    <>
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <p style={{ fontSize: 40, color: '#010101' }}>It's empty page</p>
        <StyledLink to="/">Go to home page</StyledLink>
      </div>
    </>
  );
};

export default NotFound;
