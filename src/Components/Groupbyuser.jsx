import { Container, ListGroup, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const GroupingBy = () => {
  const userordering = useSelector((state) => {
    return state.group.data.content;
  });
  console.log(userordering[0][0].nickname);
  if (userordering) {
    return (
      <div className="colorsite vh-100">
        <Container>
          <Row>
            <ListGroup className="mt-5">
              {userordering.map((list) => {
                return (
                  <ListGroup.Item className="mt-2">
                    <a href="">{list[0].nickname}</a>
                  </ListGroup.Item>
                );
              })}
            </ListGroup>
          </Row>
        </Container>
      </div>
    );
  }
};
export default GroupingBy;
