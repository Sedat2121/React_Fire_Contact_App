import { useState, useEffect } from "react";

import {
    getDatabase,
    ref,
    push,
    set,
    onValue,
    query,
    remove,
    update,
} from "firebase/database";

// Add a Contact
export const addInfo = (info) => {
    const db = getDatabase();
    const dbRef = ref(db, "contact");
    const contactRef = push(dbRef);
    set(contactRef, {
        username: info.username,
        phoneNumber: info.phoneNumber,
        gender: info.gender,
    });
};

// Fetch Contatcs
export const useFetch = () => {
    const [contactList, setContactList] = useState();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        const db = getDatabase();
        const dbRef = ref(db, "contact");
        onValue(query(dbRef), (snapshot) => {
            const contacts = snapshot.val();
            const contactArray = [];
            for (let id in contacts) {
                contactArray.push({ id, ...contacts[id] });
            }
            setContactList(contactArray);
            setIsLoading(false);
        });
    }, []);
    return { isLoading, contactList };
};
// Delete a Contact
export const deleteInfo = (id) => {
    const db = getDatabase();
    const dbRef = ref(db, "contact/" + id);
    remove(dbRef);
};

// Update a Contact
export const updateInfo = (info) => {
    const db = getDatabase();
    const updates = {};
    updates["contact/" + info.id] = info;
    return update(ref(db), updates);
};
