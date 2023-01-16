import { useState } from "react";
import FormComponent from "./components/form/FormComponent";
import Contacts from "./components/contacts/Contacts";
import { addInfo, updateInfo } from "./utils/functions";
import "./utils/firebase";

const initialValues = {
    username: "",
    phoneNumber: "",
    gender: "",
};

function App() {
    const [info, setInfo] = useState(initialValues);

    const handleFormSubmit = () => {
        if (info.id) {
            updateInfo(info);
        } else {
            addInfo(info);
        }
        setInfo(initialValues);
    };

    const handleEdit = (id, username, phoneNumber, gender) => {
        setInfo({ id, username, phoneNumber, gender });
    };

    return (
        <div className="App">
            <FormComponent
                info={info}
                setInfo={setInfo}
                handleFormSubmit={handleFormSubmit}
            />
            <Contacts handleEdit={handleEdit} />
        </div>
    );
}

export default App;
