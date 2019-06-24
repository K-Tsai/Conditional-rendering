import React from 'react';

class Accordion extends React.Component {
	
  render() {
		const buttons = this.props.sections.map((section, index) => (
			<button key = {index}>
				{section.title}
			</button>
		))
		return (
			<div>
				<ul>
					<li>
						{buttons}
					</li>
				</ul>
			</div>
		)
  }
}

export default Accordion;