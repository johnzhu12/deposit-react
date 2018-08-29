import React from 'react';
import { Document, Page, Outline } from 'react-pdf/dist/entry.webpack';
// import NoticeStore from '@models/notice'
import PdfBodyTag from './MyPdfViewer.css'
import { Pagination } from 'antd';


interface MyPdfViewerProps {
  myPdf: any
}
interface MyPdfViewerState {
  pagination: any
}
class MypdfView extends React.Component<MyPdfViewerProps, MyPdfViewerState>{
  constructor(props) {
    super(props)
    this.state = {
      pagination: { //分页
        current: 1,
        total: 0,
        showQuickJumper: true,
        onChange: this.changePage.bind(this)
      }
    }
  }
  changePage(pageNo) {
    let pagination = Object.assign({}, this.state.pagination, { current: pageNo })
    this.setState({
      pagination: pagination
    })
  }
  onLoadSuccess(pdf) {
    let pagination = Object.assign({}, this.state.pagination, { total: pdf.numPages })
    console.log('pagination：', pagination)
    this.setState({
      pagination: pagination
    });
  }
  onSourceSuccess() {
    console.log('Document source retreived!')
  }

  pageOnloadSuccess(page) {
    // alert('Now displaying a page number ' + page.pageNumber + '!')
  }
  // customTextRenderer({ str, itemIndex }) {
  //   return (<mark>{str}</mark>)
  // }
  render() {
    const { pagination } = this.state;
    console.log('pagination2：', pagination)
    return (
      <PdfBodyTag>
        <div className="pdfContainer">
          <Document
            file="http://127.0.0.1:8080/1.pdf"
            onLoadSuccess={this.onLoadSuccess.bind(this)}
            onSourceSuccess={this.onSourceSuccess}
          >
            <Page
              pageNumber={pagination.current}
              onLoadSuccess={this.pageOnloadSuccess}
            // customTextRenderer={this.customTextRenderer}
            />
            {/* <Outline /> */}

          </Document>
        </div>
        <Pagination
          total={pagination.total}
          pageSize={1}
          defaultCurrent={pagination.current}
          current={pagination.current}
          onChange={pagination.onChange}
        />
      </PdfBodyTag >

    )
  }
}


export default MypdfView;