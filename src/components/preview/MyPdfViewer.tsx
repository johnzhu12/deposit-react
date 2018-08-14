import React from 'react';
import PDF from 'react-pdf-js';
// import { observer } from 'mobx-react'
import NoticeStore from '@models/notice'

// observer
interface MyPdfViewerStates {
  page: any,
  pages: any
}




class MyPdfViewer extends React.Component<{}, MyPdfViewerStates> {
  constructor(props) {
    super(props)
    // this.state = {
    //   page: '',
    //   pages: ''
    // }
  }
  pdfdir: any;
  // onDocumentComplete = (pages) => {
  //   this.setState({ page: 1, pages });
  // }

  // handlePrevious = () => {
  //   this.setState({ page: this.state.page - 1 });
  // }

  // handleNext = () => {
  //   this.setState({ page: this.state.page + 1 });
  // }

  componentWillMount() {
    var notice = NoticeStore.getNotice();
    console.log('我是notice对象数据', notice)
    var urlId = notice['id'];
    if (urlId) {
      console.log(urlId)
      // const pdfAddress = 'pdfs/' + urlId + '.pdf';
      this.pdfdir = require(`./pdfs/${urlId}.pdf`);
    } else {
      this.pdfdir = require('./pdfs/1.pdf');
    }

  }

  renderPagination = (page, pages) => {
    // let previousButton = <li className="previous" onClick={this.handlePrevious}><a href="#"><i className="fa fa-arrow-left"></i> Previous</a></li>;
    // if (page === 1) {
    //   previousButton = <li className="previous disabled"><a href="#"><i className="fa fa-arrow-left"></i> Previous</a></li>;
    // }
    // let nextButton = <li className="next" onClick={this.handleNext}><a href="#">Next <i className="fa fa-arrow-right"></i></a></li>;
    // if (page === pages) {
    //   nextButton = <li className="next disabled"><a href="#">Next <i className="fa fa-arrow-right"></i></a></li>;
    // }
    return (
      <nav>
        <ul className="pager">
          {/* {previousButton}
          {nextButton} */}
        </ul>
      </nav>
    );
  }

  render() {
    // let pagination = null;
    // if (this.state.pages) {
    //   pagination = this.renderPagination(this.state.page, this.state.pages);
    // }
    return (
      <div>
        <PDF
          file={this.pdfdir}
        // onDocumentComplete={this.onDocumentComplete}
        // page={this.state.page}
        />
        {/* {pagination} */}
      </div>
    )
  }
}

export default MyPdfViewer;