import axios from 'axios'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PageContainer from '../../PageContainer'

const _url = 'http://localhost:3000/contacts'

const contactCardStyle = {
    border: '1px solid',
    maxWidth: '20vw',
    padding: '5px 10px',
    boxShadow: '0 0 10px gray'
    }
const containerStyle = {
    display: 'flex',
    gap: '1.5rem',
    flexFlow: 'row wrap',
    margin: '1rem 2rem'
}
const ContactsWithRedux = ({ contacts, dispatch }) => {
    useEffect(() => {
        axios.get(_url).then(({ data }) => { dispatch({ type: 'get_contacts', payload: data }) })
    }, [])
    console.log('conytacts', contacts);
    return (
        <PageContainer>
            <div style={containerStyle}>
                {
                    contacts.map(({ id, age, name, photo }) => {
                        return (
                            <div key={id} style={contactCardStyle}>
                                <p>{name} <span>{age}</span></p>
                                <img src={photo} alt={`${name}'s photo`} />

                            </div>
                        )
                    })
                }
            </div>
        </PageContainer >
    )
}
const mapStoreToProps = (store) => store
export default connect(mapStoreToProps)(ContactsWithRedux)