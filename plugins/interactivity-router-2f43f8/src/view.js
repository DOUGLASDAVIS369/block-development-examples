import { store } from '@wordpress/interactivity';

const { state } = store( 'router-2f43f8', {
	state: {
		urlRegionDisplay: window.location.href,
	},
	actions: {
		*navigate( e ) {
			e.preventDefault();
			const { actions } = yield import(
				'@wordpress/interactivity-router'
			);
			state.urlRegionDisplay = e.target.href;
			yield actions.navigate( e.target.href );
		},
	},
} );
