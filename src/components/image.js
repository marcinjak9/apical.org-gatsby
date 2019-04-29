import React from 'react'
import UploadCareImage, { getImageUrl } from 'uploadcare-react'

const Image = (props) => {
  const { src } = props
  return <UploadCareImage src={src} {...props} preview />
}

export const rawImageLink = (src, config) => getImageUrl(src, {
  preview: true,
  ...config,
})

export default Image
