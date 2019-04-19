import React from 'react';


class IndexiFrame extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <iframe src={this.props.url} frameBorder={0} style={{ width: 400, height: 300 }} ></iframe>
      </div>
    )
  }
}

export default IndexiFrame;