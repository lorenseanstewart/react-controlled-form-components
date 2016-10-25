import React from 'react';

const Select = (props) => (
	<div className="form-group">
		<select
			value={props.selectedOption}
			onChange={props.controlFunc}
			className="form-select">
			<option>{props.placeholder}</option>
			{props.options.map(option => {
				return (
					<option
						key={option}
						value={option}>{option}</option>
				);
			})}
		</select>
	</div>
);

Select.propTypes = {
	name: React.PropTypes.string.isRequired,
	options: React.PropTypes.array.isRequired,
	selectedOption: React.PropTypes.string,
	controlFunc: React.PropTypes.func.isRequired,
	placeholder: React.PropTypes.string
};

export default Select;