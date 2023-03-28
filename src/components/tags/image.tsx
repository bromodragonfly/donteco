import React, { useEffect } from 'react'
import styled, { css, keyframes } from 'styled-components'
import { getContent } from '../../utils'
interface image {
    order: number
    objectFit: string
    value: number
    untilDone: boolean
    src: string
    fileName: string
}
interface ImageProps {
    fileName: string
    width: number
    height: number
    // objectFit: string
    // changeIsWait: Function
}
interface Style {
    objectFit: string
}
// выводить его название, id, id контейнера и название файла

export const Image = ({ fileName, width, height }: ImageProps) => {
    const img = getContent(fileName)
    console.log(fileName)
    return (
        <img
            width={width}
            height={height}
            // style={{ objectFit: objectFit ? objectFit : 'fill' }}
            alt="sex"
            src={img}
        />
    )
}

