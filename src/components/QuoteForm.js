import React, { Component } from 'react';
import { addQuote } from '../actions/quotes';

export class QuoteForm extends Component {

  constructor(props) {
    this.state = {
      content: '',
      author: ''
    };
  };

  handleOnChange = event => {
    const {name, value} = event.target;
     this.setState({
     [name]: value
   });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    const quote = {
      id: uuid(),
      content: this.state.content,
      author: this.state.author,
      votes: 0
    }
    this.props.addQuote(this.state);
    this.setState({
      content: '',
      author: ''
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="panel panel-default">
              <div className="panel-body">
                <form className="form-horizontal" onSubmit={this.handleOnSubmit}>
                  <div className="form-group">
                    <label htmlFor="content" className="col-md-4 control-label">Quote</label>
                    <div className="col-md-5">
                      <textarea
                        name="content"
                        className="form-control"
                        value={this.state.content}
                        onChange={this.handleOnChange}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="author" className="col-md-4 control-label">Author</label>
                    <div className="col-md-5">
                      <input
                        name="author"
                        className="form-control"
                        type="text"
                        value={this.state.author}
                        onChange={this.handleOnChange}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-6 col-md-offset-4">
                      <button type="submit" className="btn btn-default">Add</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//add arguments to connect as needed
//const { addQuote } = actions;
export default connect(null, { addQuote })(QuoteForm);
