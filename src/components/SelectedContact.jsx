import { useState } from "react";
import App from "../App";
import ContactRow from "./ContactRow";
import React from "react";
import { useEffect } from "react";

export default function SelectedContact({
  selectedContactId,
  setSelectedContactId,
}) {
  const [contact, setContact] = useState(null);
  useEffect(() => {
    async function fetchContacts() {
      try {
        const response = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
        );
        const data = await response.json();
        setContact(data);
        console.log(contact);
      } catch (error) {
        console.error(
          "It looks like when you Fetched from the API it did not work",
          err
        );
      }
    }
    fetchContacts();
  }, []);

  return (
    <tr
      onClick={() => {
        setSelectedContactId(contact.id);
      }}
    >
      <td>{contact?.name}</td>
      <td>{contact?.email}</td>
      <td>{contact?.phone}</td>
    </tr>
  );
}
