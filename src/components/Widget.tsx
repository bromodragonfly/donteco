import React, { useEffect, useState } from 'react'
import { Error } from '../pages/error'
import { Video } from './tags/video'
import { Image } from './tags/image'

interface widgetProps {
    widget: WidgetInterFace
    container: container
    changeContent: Function
    stopContent: Function
}
interface container {
    id: number
    parentId: number | null
    x: number
    y: number
    width: number
    height: number
    effect: string
    color: string
}
export interface WidgetInterFace {
    type: string
    id: number
    name: string
    duration: {
        value: number
        untilDone: boolean
    }
    objectFit: string
    fileName: string
    order: number
    mute?: boolean
}

enum WidgetTypes {
    video = 'video',
    image = 'image',
}
const getStyleHandler = (data: container) => {
    return {
        width: data.width,
        height: data.height,
        background: data.color,
        left: data.x + 'px',
        top: data.y + 'px',
        animation: data.effect === 'crossfade' ? 'show 1s alternate' : 'none',
        // 'object-fit': fit,
    }
}
//нужно сделать очередь виджетов
export function Widget(props: widgetProps): JSX.Element {
    const widget = props.widget
    const container = props.container

    switch (widget.type) {
        case WidgetTypes.image:
            if (widget.duration.untilDone) {
                props.stopContent(widget.duration.untilDone)
            }
            if (widget.duration.value) {
                props.changeContent(widget.duration.value)
            }

            return (
                <div className="container" style={getStyleHandler(container)}>
                    <Image
                        width={container.width}
                        height={container.height}
                        fileName={widget.fileName}
                    ></Image>
                </div>
            )

        case WidgetTypes.video:
            return (
                <div className="container" style={getStyleHandler(container)}>
                    <Video fileName={widget.fileName}></Video>
                </div>
            )

        default:
            return <Error></Error>
    }
}

