import { useFetch, deleteInfo } from '../../utils/functions';
import { Icon, Table } from "semantic-ui-react";


const Contacts = ({ handleEdit }) => {
    const { isLoading, contactList } = useFetch();

    return (
        <div>
            <h2 className="contact-header">Contacts</h2>
            <Table size='large' className="table">
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell textAlign="center">Username</Table.HeaderCell>
                        <Table.HeaderCell textAlign="center">Phone Number</Table.HeaderCell>
                        <Table.HeaderCell textAlign="center">Gender</Table.HeaderCell>
                        <Table.HeaderCell textAlign="center">Delete</Table.HeaderCell>
                        <Table.HeaderCell textAlign="center">Edit</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {contactList?.map((item, index) => (
                        <Table.Row key={index}>
                            <Table.Cell textAlign="center">
                                {item.username}
                            </Table.Cell>
                            <Table.Cell textAlign="center">
                                {item.phoneNumber}
                            </Table.Cell>
                            <Table.Cell textAlign="center">
                                {item.gender}
                            </Table.Cell>
                            <Table.Cell textAlign="center" className="delete" onClick={() => deleteInfo(item.id)}>
                                <Icon name="delete" />
                            </Table.Cell>
                            <Table.Cell textAlign="center" className="edit" onClick={() => handleEdit(item.id, item.username, item.phoneNumber, item.gender)}>
                                <Icon name="edit" />
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </div>
    );
};

export default Contacts;