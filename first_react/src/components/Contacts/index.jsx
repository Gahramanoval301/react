import axios from "axios"
import styles from "./index.module.css"
import React, { useEffect, useState } from "react"
const url = 'https://652f73380b8d8ddac0b27d03.mockapi.io/api/v2/Contacts'


const Contacts =()=>{
const [contacts, setContacts] = useState([])
    useEffect(()=>{
        axios.get(url).then(({data})=>{
            setContacts(data)
        })
    },[])
return(
    <div className="contacts-container">
        {
            contacts.map((contact)=>{
                return(
                    <div key={contact.id} className={styles.avatar}>
                        <h1>{contact.name}</h1>
                        <hr></hr>
                        <p>{contact.avatar}</p>
                        <div>
                        <button>slm</button>
                        <button>lml</button>
                        </div>
                    </div>
                )
            })
        }
    </div>
)
}
export default Contacts