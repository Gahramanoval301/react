import axios from 'axios'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PageContainer from '../../PageContainer'

const _url = 'http://localhost:3000/contacts'
const buttonContainerStyle = {
    display: 'flex',
    gap: '5px'
}
const imgStyle = {
    width: '128px',
    height: '128px',
    objectFit: 'cover',
    objectPosition: 'center'
}
const deleteBtnStyle = {
    border: '1px solid navy',
    borderRadius: '5px',
    padding: '5px',
    backgroundColor: 'aliceblue',
    margin: '5px 0px',
    cursor: 'pointer',
}
const buttonStyle = {
    cursor: 'pointer',
    backgroundColor: 'navy',
    color: 'white',
    fontWeigth: 'bold',
    fontFamily: 'monospace',
    border: 'none',
    borderRadius: '10px',
    boxShadow: '0 0 10px gray',
    padding: '10px 15px',
    margin: '1.2rem'
}
const contactCardStyle = {
    border: '1px solid',
    maxWidth: '20vw',
    padding: '5px 10px',
    boxShadow: '0 0 10px gray',
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'start',
    alignItems: 'start'
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
    }, [contacts])
    return (
        <PageContainer>
            <button style={buttonStyle} onClick={() => dispatch({ type: 'add_contact' })} >add contact</button>
            <div style={containerStyle} className='container'>
                {
                    contacts.map(({ id, age, name, photo }) => {
                        return (
                            <div key={id} style={contactCardStyle} className='contact-card'>
                                <p>{name} <span>{age}</span></p>
                                <img style={imgStyle} src={photo} alt={`${name}'s photo`} />
                                <div style={buttonContainerStyle} className='buttonContainer'>
                                    <button style={deleteBtnStyle} onClick={() => {
                                        dispatch({
                                            type: 'delete_contact',
                                            payload: id
                                        })
                                    }}>❌</button>
                                    <button style={deleteBtnStyle} onClick={() => {
                                        dispatch({
                                            type: 'edit_contact',
                                            payload: { id, name, age, photo }
                                        })
                                    }}>🖊</button>
                                </div>
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