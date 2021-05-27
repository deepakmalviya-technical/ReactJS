import {Card,ListGroup,ListGroupItem,Modal,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import moment from "moment";

import { apiUrl } from '../helpers/urlConfig';

function CustomerCard(props) {
    const {show,handleClose,customerDetail} = props;
    return (
        <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Customer Detail</Modal.Title>
                    </Modal.Header>
                            <Card.Img
                                variant="top"
                                style={{width:"280px", height: "310px"}}
                                src={`${apiUrl}/${customerDetail.profilePicture}`}
                            />
                    <Modal.Body>
                        <Card >
                            <Card.Body>
                                <Card.Title>{customerDetail.firstName} {customerDetail.lastName}</Card.Title>
                                <Card.Subtitle> {customerDetail.occupation} </Card.Subtitle>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>{customerDetail.bio}</ListGroupItem>
                                <ListGroupItem>{ moment(customerDetail.dob).format('DD-MM-YYYY')}</ListGroupItem>
                                <ListGroupItem>{customerDetail.status}</ListGroupItem>
                            </ListGroup>
                            <Card.Body>
                                <Link to={`/edit/${customerDetail._id}`}>Edit</Link>
                            </Card.Body>
                        </Card>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}> Close </Button>
                    </Modal.Footer>
            </Modal>
    )
}
export default CustomerCard;