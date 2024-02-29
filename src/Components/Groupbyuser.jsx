import { Col, Container, ListGroup, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import ClientOrderDetail from "./Clientorderbo";

const GroupingBy = () => {
  const userordering = useSelector((state) => {
    return state.group.data.content;
  });
  const user = useSelector((state) => {
    return state.users.data;
  });

  if (userordering && user.role === "ADMIN") {
    return (
      <div className="colorsite vh-100">
        <Container className="list mt-5">
          <Row>
            {userordering.map((list) => {
              return (
                <Col lg={6} md={12} key={list[0].idUser}>
                  <ClientOrderDetail detail={list} />
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    );
  } else {
    return (
      <div className="colorsite vh-100">
        <Container>
          <Row>
            
          </Row>
        </Container>
      </div>
    );
  }
};
export default GroupingBy;
