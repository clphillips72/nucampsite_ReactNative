
// This file has all of the possible action objects that can be dispatched to reducers to let the application
// know the current state, including when we are loading data, adding data, and when our fetching of data has
// failed for some reason.  

export const CAMPSITES_LOADING = 'CAMPSITES_LOADING';
export const ADD_CAMPSITES = 'ADD_CAMPSITES';
export const CAMPSITES_FAILED = 'CAMPSITES_FAILED';

export const ADD_COMMENTS = 'ADD_COMMENTS';
export const COMMENTS_FAILED = 'COMMENTS_FAILED';

export const PROMOTIONS_LOADING = 'PROMOTIONS_LOADING';
export const ADD_PROMOTIONS = 'ADD_PROMOTIONS';
export const PROMOTIONS_FAILED = 'PROMOTIONS_FAILED';

export const PARTNERS_LOADING = 'PARTNERS_LOADING';
export const ADD_PARTNERS = 'ADD_PARTNERS';
export const PARTNERS_FAILED = 'PARTNERS_FAILED';