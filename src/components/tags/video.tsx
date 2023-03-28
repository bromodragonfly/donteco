import styled from 'styled-components'
import { getContent } from '../../utils'
interface VideoProps {
    fileName: string
}
const VideoStyled = styled.video`
    width: 100px;
    heigh: 100px;
`

export const Video = (props: VideoProps) => {
    console.log(props.fileName)
    return (
        <video
            className="video"
            src={getContent(props.fileName)}
            controls
            autoPlay
        ></video>
    )
}

