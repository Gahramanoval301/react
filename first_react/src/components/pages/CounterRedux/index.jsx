import React from 'react'
import { connect } from 'react-redux'
import PageContainer from '../../PageContainer'
import { buttonStyle } from '../AlionFollowers';

const divStyle = {
    border: '1px solid',
    padding: '20px',
    textAlign: 'center',
    fontSize: '20px',
}
const CounterRedux = ({ count, dispatch }) => {
    console.log('props-count', count);
    return (
        <PageContainer>
            <div style={divStyle}>
                <h1>{count}</h1>
                <button onClick={() => { dispatch({ type: 'inc', payload: count }) }}
                    style={buttonStyle}>+</button>
                <button onClick={() => { dispatch({ type: 'dec', payload: count }) }}
                    style={buttonStyle}>-</button>
            </div>
        </PageContainer>
    )
}
const mapStoreToProps = (store) => store
console.log(connect(mapStoreToProps)(CounterRedux));
export default connect(mapStoreToProps)(CounterRedux) //currying