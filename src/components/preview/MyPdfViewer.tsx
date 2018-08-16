import React from 'react';
import PDF from 'react-pdf-js';
import NoticeStore from '@models/notice'
import PdfBodyTag from './MyPdfViewer.css'

interface MyPdfViewerStates {
  page: any,
  pages: any,
}

class MypdfView extends React.Component<{}, MyPdfViewerStates>{
  constructor(props) {
    super(props)
    this.state = {
      page: 1,
      pages: 1
    };
  }
  pdfdir: any;

  onDocumentComplete = (pages) => {
    //console.log(pages);
    this.setState({ page: 1, pages });
  }

  handlePrevious = () => {
    this.setState({ page: this.state.page - 1 });
  }

  handleNext = () => {
    this.setState({ page: this.state.page + 1 });
  }

  renderPagination = (page, pages) => {
    let previousButton = <li className="previous" onClick={this.handlePrevious.bind(this)}><a> Previous</a></li>;
    // if (page === 1) {
    //   previousButton = <li className="previous disabled"><a><i className="fa fa-arrow-left"></i> Previous</a></li>;
    // }
    let nextButton = <li className="next" onClick={this.handleNext.bind(this)}><a>Next</a></li>;
    // if (page === pages) {
    //   nextButton = <li className="next disabled"><a>Next <i className="fa fa-arrow-right"></i></a></li>;
    // }
    return (
      <div>
        <ul className="pager">
          {previousButton}
          {nextButton}
        </ul>
      </div>
    );
  }
  renderPDF = (page, pages, pdfdir) => {
    let url = this.pdfdir;
    let onDocumentComplete = this.onDocumentComplete;
    return (<PDF
      file={url}
      onDocumentComplete={onDocumentComplete}
      page={1} />)
  }

  componentWillMount() {
    let notice = NoticeStore.getNotice();
    let urlTitle = notice['id'];//获取文件名字 
    if (urlTitle) {     //验证ID是否存在  保证 开发状态下 刷新页面会默认显示
      let pdfAddress = './pdfs/' + urlTitle + '.pdf';
      //let pdfAddress = './pdfs/' + '1' + '.pdf';
      this.pdfdir = require(`${pdfAddress}`);
    }
    else {
      this.pdfdir = require('./pdfs/1.pdf');
    }
  }
  render() {
    let pagination = null;
    let pdfContent2 = null;
    if (this.state.pages) {
      pagination = this.renderPagination(this.state.page, this.state.pages);
      pdfContent2 = this.renderPDF(this.state.page, this.state.pages, this.pdfdir);
    }


    //console.log('current' + this.state.page);

    // let tmp = <PDF
    //   file={url}
    //   onDocumentComplete={onDocumentComplete}
    //   page={1}
    // />
    // let tmp1 = <PDF
    //   file={url}
    //   onDocumentComplete={onDocumentComplete}
    //   page={2}
    // />

    // let temp = <PDF
    //   file={url}
    //   onDocumentComplete={onDocumentComplete}
    //   page={1}
    // />
    // var pdfContent = <PDF
    //   file={url}
    //   onDocumentComplete={onDocumentComplete}
    //   page={1} />

    // var pdfContent2 = pdfContent <PDF
    //   file={url}
    //   onDocumentComplete={onDocumentComplete}
    //   page={2} />

    // var pdfContent2 = `{<PDF
    //  file={url}
    //  onDocumentComplete={onDocumentComplete}
    //  page={1} /><PDF
    //  file={url}
    //  onDocumentComplete={onDocumentComplete}
    //  page={2} />}`;
    //}
    // document.getElementsByClassName("pdfContainer").innerHTML=pdfContent2;
    //     document.getElementsByClassName('pdfContainer').
    // let pdfContentTotal;
    // console.log(this.state.pages);
    // for (var i = 1; i <= 8; i++) {

    //   // pdfContent += '={ i }';
    //   // console.log(pdfContent);
    //   pdfContentTotal += pdfContent;
    // }
    // console.log(pdfContentTotal + i);

    // console.log(tmp);
    return (
      <PdfBodyTag>
        <div className="pdfContainer">
          {/* <PDF
    file={this.pdfdir}
    onDocumentComplete={this.onDocumentComplete}
    page={this.state.page}
  /> */}
          {pdfContent2}
          {pagination}
        </div>
      </PdfBodyTag >
    )
  }
}

export default MypdfView;