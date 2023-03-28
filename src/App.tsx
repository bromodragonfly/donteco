import React from 'react'
import { Error } from './pages/error'
import shedule from './mock/schedule.json'
import { Container } from './components/Container'

const containersList = shedule.containers.filter((item) => item.parentId)

const wrapperContainer = shedule.containers.find((item) => !item.parentId)

function App() {
    return (
        <div className='App'>
            {!wrapperContainer ? (
                <Error></Error>
            ) : (
                <Container
                    style={wrapperContainer}
                    containers={containersList}
                ></Container>
            )}
        </div>
    )
}

export default App
