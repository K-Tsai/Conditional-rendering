import React from 'react';

class Accordion extends React.Component {

  render() {
		return (
			<ul>
				<li>
					<button>
						{this.props.title}
					</button>
				</li>
			</ul>
		)
  }
}

export default Accordion;