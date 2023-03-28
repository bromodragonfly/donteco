import styled from 'styled-components'

interface Wrapper {
    color: string
    effect: string
    wrapperId: number
    children?: React.ReactNode
}

export const MainWrapper = styled.div<Wrapper>`
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.color};
    overfloy: hidden;
`
