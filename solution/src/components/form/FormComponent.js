import { Form, Grid, Segment, Button } from 'semantic-ui-react';
import { options } from '../../utils/constants';

const FormComponent = ({ info, setInfo, handleFormSubmit }) => {
    const handeInputChange = (e) => {
        const { name, value } = e.target;
        setInfo({ ...info, [name]: value })
    }
    const handeOptionChange = (e, values) => {
        const { name, value } = values;
        setInfo({ ...info, [name]: value })
    }


    return (
        <Grid textAlign='center' verticalAlign='middle'>
            <Grid.Column style={{ width: 300 }}>
                <Segment piled>
                    Clarusway
                </Segment>
                <Segment>
                    <h2 className='design header'> Add Contact </h2>
                </Segment>
                <Segment>
                    <Form size='large' onSubmit={handleFormSubmit}>
                        <Form.Input
                            name="username"
                            icon="user"
                            iconPosition="left"
                            placeholder="Name"
                            value={info.username}
                            onChange={handeInputChange}
                            fluid
                            required
                        />
                        <Form.Input
                            name="phoneNumber"
                            icon="phone"
                            iconPosition="left"
                            placeholder="Phone Number"
                            value={info.phoneNumber}
                            onChange={handeInputChange}
                            fluid
                            required
                        />
                        <Form.Dropdown
                            name="gender"
                            options={options}
                            placeholder="Gender"
                            value={info.gender}
                            onChange={handeOptionChange}
                            selection
                            fluid
                            required
                        />
                        <Button color="teal" fluid size="large">
                            {info.id ? 'Update' : 'Add'}
                        </Button>
                    </Form>
                </Segment>
            </Grid.Column>
        </Grid>
    )
}

export default FormComponent;