import React from 'react';
import PDF from 'react-pdf-js';
import NoticeStore from '@models/notice'
import PdfBodyTag from './MyPdfViewer.css'

interface MyPdfViewerProps {
  myPdf: any
}
interface MyPdfViewerStates {
  page: any,
  pages: any,
}
class MypdfView extends React.Component<MyPdfViewerProps, MyPdfViewerStates>{
  constructor(props) {
    super(props)
    this.state = {
      page: 1,
      pages: 1
    };
  }
  pdfdir: any;

  onDocumentComplete = (pages) => {
    console.log(pages);
    this.setState({ page: 1, pages });
  }

  handlePrevious = () => {
    this.setState({ page: this.state.page - 1 });
  }

  handleNext = () => {
    this.setState({ page: this.state.page + 1 });
  }

  renderPagination = (page, pages) => {
    let previousButton = <li className="previous" onClick={this.handlePrevious.bind(this)}><a> 上一页</a></li>;
    if (page === 1) {
      previousButton = <li className="liDisabled"><a>上一页</a></li>;
    }
    let nextButton = <li className="next" onClick={this.handleNext.bind(this)}><a>下一页</a></li>;
    if (page === pages) {
      nextButton = <li className="liDisabled"><a>下一页</a></li>;
    }
    if (pages === 1) {
      nextButton = <li className="liDisabled"><a>下一页</a></li>;
    }
    return (
      <div>
        <ul className="pager">
          {previousButton}
          {nextButton}
        </ul>
      </div>
    );
  }

  componentWillMount() {
    let notice = NoticeStore.getNotice();
    let urlTitle = notice['id'];//获取文件名字 
    if (urlTitle) {     //验证ID是否存在  保证 开发状态下 刷新页面会默认显示
      let pdfAddress = './pdfs/' + urlTitle + '.pdf';
      //let pdfAddress = './pdfs/' + '2' + '.pdf';
      this.pdfdir = require(`${pdfAddress}`);
    }
    else {
      this.pdfdir = require('./pdfs/2.pdf');
    }
  }
  render() {
    //console.log(this.state.pages);
    let pagination = null;
    if (this.state.pages) {
      pagination = this.renderPagination(this.state.page, this.state.pages);
    }

    // console.log(this.state.pages);
    // for (var i = 1; i < this.state.pages; i++) {
    //   var tmp = `<PDF
    //     file=${this.pdfdir}
    //     onDocumentComplete=${this.onDocumentComplete}
    //     page=${{ i }}/>`
    //   console.log(tmp);
    // }

    return (
      <PdfBodyTag>
        <div className="pdfContainer">
          <PDF
            file={this.props.myPdf} //后端返回的值
            onDocumentComplete={this.onDocumentComplete}
            page={this.state.page}
          />
        </div>
        {pagination}
      </PdfBodyTag >
    )
  }
}

export default MypdfView;