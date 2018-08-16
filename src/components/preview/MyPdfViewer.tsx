import React from 'react';
import PDF from 'react-pdf-js';
import NoticeStore from '@models/notice'

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
      <nav>
        <ul className="pager">
          {previousButton}
          {nextButton}
        </ul>
      </nav>
    );

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
    if (this.state.pages) {
      pagination = this.renderPagination(this.state.page, this.state.pages);
    }
    //console.log('current' + this.state.page);
    return (

      <div>
        <PDF
          file={this.pdfdir}
          onDocumentComplete={this.onDocumentComplete}
          page={this.state.page}
        />
        {pagination}
      </div>
    )
  }
}

export default MypdfView;