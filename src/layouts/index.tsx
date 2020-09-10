import styled from "@emotion/styled";

interface Props {
  children: React.ReactElement;
}

const Layout: React.FC<Props> = (props) => {
  return (
    <Container>
      <Contents data-test="contents">
        {props.children}
      </Contents>
    </Container>
  );
};

const Container = styled.div`
  max-width: 736px;
  margin: 0 auto;
`;

const Contents = styled.section`
  padding: 24px 16px;
`;

export default Layout;
