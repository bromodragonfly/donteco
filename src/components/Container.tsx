import React, { useEffect, useState } from 'react'
import { Error } from '../pages/error/index'
import { Widget } from './Widget'
import shedule from '../mock/schedule.json'
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
interface ContainerProps {
    containers: container[]
    style: container
}

const getStyleHandler = (data: container) => {
    return {
        width: data.width,
        height: data.height,
        background: data.color,
        left: data.x + 'px',
        top: data.y + 'px',
        animation: data.effect === 'crossfade' ? 'show 1s alternate' : 'none',
    }
}
const key = 'order'
const widgets = shedule.widgets.sort((widget1, widget2) =>
    widget1[key] > widget2[key] ? 1 : -1
)

export const Container = ({ containers, style }: ContainerProps) => {
    const [isPlayNextImage, setPlayNextImage] = useState(false)
    let valueTimeout: number = 0
    let stop = false
    const changeContent = (value: number) => {
        return (valueTimeout = value)
    }

    const stopContent = (value: boolean) => (stop = value)

    useEffect(() => {
        let timer1 = setTimeout(
            () => setPlayNextImage(!isPlayNextImage),
            valueTimeout
        )

        return () => {
            clearTimeout(timer1)
        }
    }, [isPlayNextImage])
    return (
        <div className="container" style={getStyleHandler(style)}>
            {widgets.map(() => {
                const widget = widgets.shift()
                if (widget) {
                    const container = containers.find(
                        (item) => item.id === widget.containerId
                    )
                    if (container) {
                        return (
                            <Widget
                                key={widget.id}
                                widget={widget}
                                container={container}
                                changeContent={changeContent}
                                stopContent={stopContent}
                            ></Widget>
                        )
                    }
                } else {
                    return <Error></Error>
                }
            })}
        </div>
    )
}

