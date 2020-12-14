const actions = {
  //#region const

  // Create
  CREATE_GET: 'PAYMENT_TERM/CREATE_GET',
  CREATE_GET_ERROR: 'PAYMENT_TERM/CREATE_GET_ERROR',
  CREATE_SET: 'PAYMENT_TERM/CREATE_SET',
  CREATE_SET_SUCCESS: 'PAYMENT_TERM/CREATE_SET_SUCCESS',
  CREATE_POST: 'PAYMENT_TERM/CREATE_POST',
  CREATE_POST_SUCCESS: 'PAYMENT_TERM/CREATE_POST_SUCCESS',
  CREATE_POST_ERROR: 'PAYMENT_TERM/CREATE_POST_ERROR',
  CREATE_CLOSE: 'PAYMENT_TERM/CREATE_CLOSE',
  CREATE_RESET_ERROR: 'PAYMENT_TERM/CREATE_RESET_ERROR',
  CREATE_RESET: 'PAYMENT_TERM/CREATE_RESET',

  // Edit
  EDIT_GET: 'PAYMENT_TERM/EDIT_GET',
  EDIT_GET_ERROR: 'PAYMENT_TERM/EDIT_GET_ERROR',
  EDIT_SET: 'PAYMENT_TERM/EDIT_SET',
  EDIT_SET_SUCCESS: 'PAYMENT_TERM/EDIT_SET_SUCCESS',
  EDIT_POST: 'PAYMENT_TERM/EDIT_POST',
  EDIT_POST_SUCCESS: 'PAYMENT_TERM/EDIT_POST_SUCCESS',
  EDIT_POST_ERROR: 'PAYMENT_TERM/EDIT_POST_ERROR',
  EDIT_CLOSE: 'PAYMENT_TERM/EDIT_CLOSE',
  EDIT_RESET_ERROR: 'PAYMENT_TERM/EDIT_RESET_ERROR',
  EDIT_RESET: 'PAYMENT_TERM/EDIT_RESET',

  // Deletes
  DELETES_GET: 'PAYMENT_TERM/DELETES_GET',
  DELETES_POST: 'PAYMENT_TERM/DELETES_POST',
  DELETES_POST_SUCCESS: 'PAYMENT_TERM/DELETES_POST_SUCCESS',
  DELETES_POST_ERROR: 'PAYMENT_TERM/DELETES_POST_ERROR',
  DELETES_CLOSE: 'PAYMENT_TERM/DELETES_CLOSE',
  DELETES_RESET: 'PAYMENT_TERM/DELETES_RESET',

  // Activates/Deactivates
  ACTIVATES_POST: 'PAYMENT_TERM/ACTIVATES_POST',
  ACTIVATES_POST_SUCCESS: 'PAYMENT_TERM/ACTIVATES_POST_SUCCESS',
  ACTIVATES_POST_ERROR: 'PAYMENT_TERM/ACTIVATES_POST_ERROR',
  ACTIVATES_RESET: 'PAYMENT_TERM/ACTIVATES_RESET',

  // Grid
  GRD_LOADING: 'PAYMENT_TERM/GRD_LOADING',
  //#endregion

  //#region Create
  createGet: () => ({
    type: actions.CREATE_GET,
  }),
  createGetError: (error) => ({
    type: actions.CREATE_GET_ERROR,
    payload: error,
  }),
  createSet: (model) => ({
    type: actions.CREATE_SET,
    payload: model,
  }),
  createSetSuccess: () => ({
    type: actions.CREATE_SET_SUCCESS,
  }),
  createPost: (model) => ({
    type: actions.CREATE_POST,
    payload: model,
  }),
  createPostSuccess: (result) => ({
    type: actions.CREATE_POST_SUCCESS,
    payload: result,
  }),
  createPostError: (error) => ({
    type: actions.CREATE_POST_ERROR,
    payload: error,
  }),
  createClose: () => ({
    type: actions.CREATE_CLOSE,
  }),
  createResetError: () => ({
    type: actions.CREATE_RESET_ERROR,
  }),
  createReset: () => ({
    type: actions.CREATE_RESET,
  }),
  //#endregion

  //#region Edit
  editGet: (id) => ({
    type: actions.EDIT_GET,
    payload: id,
  }),
  editGetError: (error) => ({
    type: actions.EDIT_GET_ERROR,
    payload: error,
  }),
  editSet: (model) => ({
    type: actions.EDIT_SET,
    payload: model,
  }),
  editSetSuccess: () => ({
    type: actions.EDIT_SET_SUCCESS,
  }),
  editPost: (model) => ({
    type: actions.EDIT_POST,
    payload: model,
  }),
  editPostSuccess: (result) => ({
    type: actions.EDIT_POST_SUCCESS,
    payload: result,
  }),
  editPostError: (error) => ({
    type: actions.EDIT_POST_ERROR,
    payload: error,
  }),
  editClose: () => ({
    type: actions.EDIT_CLOSE,
  }),
  editResetError: () => ({
    type: actions.EDIT_RESET_ERROR,
  }),
  editReset: () => ({
    type: actions.EDIT_RESET,
  }),
  //#endregion

  //#region Deletes
  deletesGet: () => ({
    type: actions.DELETES_GET,
  }),
  deletesPost: (ids) => ({
    type: actions.DELETES_POST,
    payload: ids,
  }),
  deletesPostSuccess: (result) => ({
    type: actions.DELETES_POST_SUCCESS,
    payload: result,
  }),
  deletesPostError: (error) => ({
    type: actions.DELETES_POST_ERROR,
    payload: error,
  }),
  deletesClose: () => ({
    type: actions.DELETES_CLOSE,
  }),
  deletesReset: () => ({
    type: actions.DELETES_RESET,
  }),
  //#endregion

  //#region Activates
  activatesPost: (ids, active) => ({
    type: actions.ACTIVATES_POST,
    payload: { ids: ids, active: active },
  }),
  activatesPostSuccess: (result) => ({
    type: actions.ACTIVATES_POST_SUCCESS,
    payload: result,
  }),
  activatesPostError: (error) => ({
    type: actions.ACTIVATES_POST_ERROR,
    payload: error,
  }),
  activatesReset: () => ({
    type: actions.ACTIVATES_RESET,
  }),
  //#endregion

  // Grid
  grdLoading: (loading) => ({
    type: actions.GRD_LOADING,
    payload: loading,
  }),
};

export default actions;
