import CMS from 'netlify-cms'
import PagePreview from './preview-templates/PagePreview'

CMS.registerPreviewStyle('styles/zoom.css')
CMS.registerPreviewTemplate('page', PagePreview)
