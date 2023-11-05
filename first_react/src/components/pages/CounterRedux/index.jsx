import React from 'react'
import { connect } from 'react-redux'
import PageContainer from '../../PageContainer'

const CounterRedux = () => {
    return (
        <PageContainer>
            <div>CounterRedux</div>
        </PageContainer>
    )
}
const mapStoreToProps = (store) => store
console.log(connect(mapStoreToProps)(CounterRedux));
export default connect(mapStoreToProps)(CounterRedux)