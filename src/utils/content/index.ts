import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.jpg'
import img4 from '../../assets/img4.jpg'
import video1 from '../../assets/video1.mp4'
import video2 from '../../assets/video2.mp4'

enum FileNames {
    img1 = 'img1.jpg',
    img2 = 'img2.png',
    img3 = 'img3.jpg',
    img4 = 'img4.jpg',
    video1 = 'video1.mp4',
    video2 = 'video2.mp4',
}
export function getContent(fileName: string): string {
    switch (fileName) {
        case FileNames.img1:
            return img1
        case FileNames.img2:
            return img2
        case FileNames.img3:
            return img3
        case FileNames.img4:
            return img4
        case FileNames.video1:
            return video1
        case FileNames.video2:
            return video2

        default:
            return ''
    }
}

