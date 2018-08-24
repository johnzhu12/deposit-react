import React from 'react';
import { Document } from 'react-pdf/dist/entry.webpack';
// import NoticeStore from '@models/notice'
import PdfBodyTag from './MyPdfViewer.css'


interface MyPdfViewerProps {
  myPdf: any
}

class MypdfView extends React.Component<MyPdfViewerProps, {}>{
  constructor(props) {
    super(props)

  }


  render() {
    return (
      <PdfBodyTag>
        <div className="pdfContainer">
          <Document file="http://127.0.0.1:8080/demo.pdf" />
        </div>

      </PdfBodyTag >
    )
  }
}


export default MypdfView;