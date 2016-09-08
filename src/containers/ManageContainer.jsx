import React from 'react'
import {connect} from 'react-redux'
import DocumentTitle from 'react-document-title'
import {push} from 'redux-router'


const ManageContainer = React.createClass({
	render: function() {
		return (
				<DocumentTitle title="ManageContainer">
					<div>
						Test
					</div>
				</DocumentTitle>
		)
	}
})

function mapStateToProps(state) {
	return {
		
	}
}

function mapDispatchToProps(dispatch) {
	return {
		
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageContainer)
