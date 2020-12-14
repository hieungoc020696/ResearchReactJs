const actions = {
  //#region const
  // Create
  CREATE_GET: 'VENDOR/CREATE_GET',
  CREATE_GET_ERROR: 'VENDOR/CREATE_GET_ERROR',
  CREATE_SET: 'VENDOR/CREATE_SET',
  CREATE_SET_SUCCESS: 'VENDOR/CREATE_SET_SUCCESS',
  CREATE_POST: 'VENDOR/CREATE_POST',
  CREATE_POST_SUCCESS: 'VENDOR/CREATE_POST_SUCCESS',
  CREATE_POST_ERROR: 'VENDOR/CREATE_POST_ERROR',
  CREATE_CLOSE: 'VENDOR/CREATE_CLOSE',
  CREATE_RESET_ERROR: 'VENDOR/CREATE_RESET_ERROR',
  CREATE_RESET: 'VENDOR/CREATE_RESET',

  CREATE_VISIBLE_SUBMIT: 'VENDOR/CREATE_VISIBLE_SUBMIT',
  CREATE_RESET_VISIBLE_SUBMIT: 'VENDOR/CREATE_RESET_VISIBLE_SUBMIT',

  // Edit
  EDIT_GET: 'VENDOR/EDIT_GET',
  EDIT_GET_ERROR: 'VENDOR/EDIT_GET_ERROR',
  EDIT_SET: 'VENDOR/EDIT_SET',
  EDIT_SET_SUCCESS: 'VENDOR/EDIT_SET_SUCCESS',
  EDIT_POST: 'VENDOR/EDIT_POST',
  EDIT_POST_SUCCESS: 'VENDOR/EDIT_POST_SUCCESS',
  EDIT_POST_ERROR: 'VENDOR/EDIT_POST_ERROR',
  EDIT_CLOSE: 'VENDOR/EDIT_CLOSE',
  EDIT_RESET_ERROR: 'VENDOR/EDIT_RESET_ERROR',
  EDIT_RESET: 'VENDOR/EDIT_RESET',

  EDIT_VISIBLE_SUBMIT: 'VENDOR/EDIT_VISIBLE_SUBMIT',
  EDIT_RESET_VISIBLE_SUBMIT: 'VENDOR/EDIT_RESET_VISIBLE_SUBMIT',

  // Deletes
  DELETES_GET: 'VENDOR/DELETES_GET',
  DELETES_POST: 'VENDOR/DELETES_POST',
  DELETES_POST_SUCCESS: 'VENDOR/DELETES_POST_SUCCESS',
  DELETES_POST_ERROR: 'VENDOR/DELETES_POST_ERROR',
  DELETES_CLOSE: 'VENDOR/DELETES_CLOSE',
  DELETES_RESET: 'VENDOR/DELETES_RESET',

  // Activates/Deactivates
  ACTIVATES_POST: 'VENDOR/ACTIVATES_POST',
  ACTIVATES_POST_SUCCESS: 'VENDOR/ACTIVATES_POST_SUCCESS',
  ACTIVATES_POST_ERROR: 'VENDOR/ACTIVATES_POST_ERROR',
  ACTIVATES_RESET: 'VENDOR/ACTIVATES_RESET',

  // Grid
  GRD_LOADING: 'VENDOR/GRD_LOADING',
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
  createVisibleSubmit: (visible) => ({
    type: actions.CREATE_VISIBLE_SUBMIT,
    payload: visible,
  }),
  createResetVisibleSubmit: () => ({
    type: actions.CREATE_RESET_VISIBLE_SUBMIT,
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
  editVisibleSubmit: (visible) => ({
    type: actions.EDIT_VISIBLE_SUBMIT,
    payload: visible,
  }),
  editResetVisibleSubmit: () => ({
    type: actions.EDIT_RESET_VISIBLE_SUBMIT,
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
