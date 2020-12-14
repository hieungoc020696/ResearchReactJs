import actions from './actions';

const initState = {
  loading: false,
  init: {
    error: null,
  },
  create: {
    modelGet: null,
    modelPost: null,
    result: null,
    error: null,
    loading: false,
    visible: false,
    data: {
      stateProvince: {
        data: [],
        loading: false,
        error: null,
      },
      district: {
        data: [],
        loading: false,
        error: null,
      },
    },
  },
  edit: {
    modelGet: null,
    modelPost: null,
    result: null,
    error: null,
    loading: false,
    visible: false,
    data: {
      stateProvince: {
        data: [],
        loading: false,
        error: null,
      },
      district: {
        data: [],
        loading: false,
        error: null,
      },
    },
  },
  deletes: {
    modelPost: null,
    result: null,
    error: null,
    loading: false,
    visible: false,
  },
  activates: {
    modelPost: null,
    result: null,
    error: null,
  },
  grd: {
    loading: false,
  },
  search: {
    countries: [],
    stateProvince: {
      data: [],
      loading: false,
      error: null,
    },
    district: {
      data: [],
      loading: false,
      error: null,
    },
  },
};

export default function reducer(state = initState, action) {
  switch (action.type) {
    //#region Init
    case actions.INIT_GET:
      return {
        ...state,
        loading: true,
        init: {
          ...state.init,
        },
      };
    case actions.INIT_GET_ERROR:
      return {
        ...state,
        loading: false,
        init: {
          error: action.payload,
        },
      };
    case actions.INIT_SET:
      return {
        ...state,
        loading: true,
        search: {
          ...state.search,
          countries: action.payload.countries,
        },
      };
    case actions.INIT_SET_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case actions.INIT_RESET:
      return {
        ...state,
        init: { ...initState.init },
        search: {
          countries: [],
          stateProvince: {
            data: [],
            loading: false,
          },
          district: {
            data: [],
            loading: false,
          },
        },
      };
    //#endregion

    //#region Create
    case actions.CREATE_GET:
      return {
        ...state,
        loading: true,
        create: {
          ...state.create,
          loading: false,
          visible: false,
        },
      };
    case actions.CREATE_GET_ERROR:
      return {
        ...state,
        loading: false,
        create: {
          ...state.create,
          error: action.payload,
          loading: false,
          visible: false,
        },
      };
    case actions.CREATE_SET:
      return {
        ...state,
        loading: true,
        create: {
          ...state.create,
          modelGet: action.payload,
          loading: false,
          visible: true,
        },
      };
    case actions.CREATE_SET_SUCCESS:
      return {
        ...state,
        loading: false,
        create: {
          ...state.create,
          loading: false,
          visible: true,
        },
      };
    case actions.CREATE_POST:
      return {
        ...state,
        loading: false,
        create: {
          ...state.create,
          modelPost: action.payload,
          loading: true,
          visible: true,
        },
      };
    case actions.CREATE_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        create: {
          ...state.create,
          result: action.payload,
          loading: false,
          visible: false,
        },
      };
    case actions.CREATE_POST_ERROR:
      return {
        ...state,
        loading: false,
        create: {
          ...state.create,
          error: action.payload,
          loading: false,
          visible: true,
        },
      };
    case actions.CREATE_CLOSE:
      return {
        ...state,
        loading: false,
        create: {
          ...state.create,
          loading: false,
          visible: false,
        },
      };
    case actions.CREATE_RESET_ERROR:
      return {
        ...state,
        create: {
          ...state.create,
          error: null,
        },
      };
    case actions.CREATE_RESET:
      return {
        ...state,
        create: { ...initState.create },
      };

    // Country => StateProvince
    case actions.CREATE_COUNTRY_CHANGE:
      return {
        ...state,
        create: {
          ...state.create,
          data: {
            ...state.create.data,
            stateProvince: {
              ...state.create.data.stateProvince,
              data: [],
              loading: true,
            },
          },
        },
      };
    case actions.CREATE_STATE_PROVINCE_SET:
      return {
        ...state,
        create: {
          ...state.create,
          data: {
            ...state.create.data,
            stateProvince: {
              ...state.create.data.stateProvince,
              data: action.payload,
            },
          },
        },
      };
    case actions.CREATE_STATE_PROVINCE_SET_SUCCESS:
      return {
        ...state,
        create: {
          ...state.create,
          data: {
            ...state.create.data,
            stateProvince: {
              ...state.create.data.stateProvince,
              loading: false,
            },
          },
        },
      };
    case actions.CREATE_STATE_PROVINCE_SET_ERROR:
      return {
        ...state,
        create: {
          ...state.create,
          data: {
            ...state.create.data,
            stateProvince: {
              ...state.create.data.stateProvince,
              loading: false,
              data: [],
              error: action.payload,
            },
          },
        },
      };

    case actions.CREATE_STATE_PROVINCE_RESET_ERROR:
      return {
        ...state,
        create: {
          ...state.create,
          data: {
            ...state.create.data,
            stateProvince: {
              ...state.create.data.stateProvince,
              error: null,
            },
          },
        },
      };
    // StateProvince => District
    case actions.CREATE_STATE_PROVINCE_CHANGE:
      return {
        ...state,
        create: {
          ...state.create,
          data: {
            ...state.create.data,
            district: {
              ...state.create.data.district,
              data: [],
              loading: true,
            },
          },
        },
      };
    case actions.CREATE_DISTRICT_SET:
      return {
        ...state,
        create: {
          ...state.create,
          data: {
            ...state.create.data,
            district: {
              ...state.create.data.district,
              data: action.payload,
            },
          },
        },
      };
    case actions.CREATE_DISTRICT_SET_SUCCESS:
      return {
        ...state,
        create: {
          ...state.create,
          data: {
            ...state.create.data,
            district: {
              ...state.create.data.district,
              loading: false,
            },
          },
        },
      };
    case actions.CREATE_DISTRICT_SET_ERROR:
      return {
        ...state,
        create: {
          ...state.create,
          data: {
            ...state.create.data,
            district: {
              ...state.create.data.district,
              loading: false,
              data: [],
              error: action.payload,
            },
          },
        },
      };
    case actions.CREATE_DISTRICT_RESET_ERROR:
      return {
        ...state,
        create: {
          ...state.create,
          data: {
            ...state.create.data,
            district: {
              ...state.create.data.district,
              error: null,
            },
          },
        },
      };
    //#endregion

    //#region Edit
    case actions.EDIT_GET:
      return {
        ...state,
        loading: true,
        edit: {
          ...state.edit,
          loading: false,
          visible: false,
        },
      };
    case actions.EDIT_GET_ERROR:
      return {
        ...state,
        loading: false,
        edit: {
          ...state.edit,
          error: action.payload,
          loading: false,
          visible: false,
        },
      };
    case actions.EDIT_SET:
      return {
        ...state,
        loading: true,
        edit: {
          ...state.edit,
          modelGet: action.payload,
          data: {
            ...state.edit.data,
            stateProvince: {
              data: action.payload.SelectStateProvinces,
              loading: false,
            },
            district: {
              data: action.payload.SelectDistricts,
              loading: false,
            },
          },
          loading: false,
          visible: true,
        },
      };
    case actions.EDIT_SET_SUCCESS:
      return {
        ...state,
        loading: false,
        edit: {
          ...state.edit,
          loading: false,
          visible: true,
        },
      };
    case actions.EDIT_POST:
      return {
        ...state,
        loading: false,
        edit: {
          ...state.edit,
          modelPost: action.payload,
          loading: true,
          visible: true,
        },
      };
    case actions.EDIT_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        edit: {
          ...state.edit,
          result: action.payload,
          loading: false,
          visible: false,
        },
      };
    case actions.EDIT_POST_ERROR:
      return {
        ...state,
        loading: false,
        edit: {
          ...state.edit,
          error: action.payload,
          loading: false,
          visible: true,
        },
      };
    case actions.EDIT_CLOSE:
      return {
        ...state,
        loading: false,
        edit: {
          ...state.edit,
          loading: false,
          visible: false,
        },
      };
    case actions.EDIT_RESET_ERROR:
      return {
        ...state,
        edit: {
          ...state.edit,
          error: null,
        },
      };
    case actions.EDIT_RESET:
      return {
        ...state,
        edit: { ...initState.edit },
      };

    // Country => StateProvince
    case actions.EDIT_COUNTRY_CHANGE:
      return {
        ...state,
        edit: {
          ...state.edit,
          data: {
            ...state.edit.data,
            stateProvince: {
              ...state.edit.data.stateProvince,
              data: [],
              loading: true,
            },
          },
        },
      };
    case actions.EDIT_STATE_PROVINCE_SET:
      return {
        ...state,
        edit: {
          ...state.edit,
          data: {
            ...state.edit.data,
            stateProvince: {
              ...state.edit.data.stateProvince,
              data: action.payload,
            },
          },
        },
      };
    case actions.EDIT_STATE_PROVINCE_SET_SUCCESS:
      return {
        ...state,
        edit: {
          ...state.edit,
          data: {
            ...state.edit.data,
            stateProvince: {
              ...state.edit.data.stateProvince,
              loading: false,
            },
          },
        },
      };
    case actions.EDIT_STATE_PROVINCE_SET_ERROR:
      return {
        ...state,
        edit: {
          ...state.edit,
          data: {
            ...state.edit.data,
            stateProvince: {
              ...state.edit.data.stateProvince,
              loading: false,
              data: [],
              error: action.payload,
            },
          },
        },
      };
    case actions.EDIT_STATE_PROVINCE_RESET_ERROR:
      return {
        ...state,
        edit: {
          ...state.edit,
          data: {
            ...state.edit.data,
            stateProvince: {
              ...state.edit.data.stateProvince,
              error: null,
            },
          },
        },
      };

    // StateProvince => District
    case actions.EDIT_STATE_PROVINCE_CHANGE:
      return {
        ...state,
        edit: {
          ...state.edit,
          data: {
            ...state.edit.data,
            district: {
              ...state.edit.data.district,
              data: [],
              loading: true,
            },
          },
        },
      };
    case actions.EDIT_DISTRICT_SET:
      return {
        ...state,
        edit: {
          ...state.edit,
          data: {
            ...state.edit.data,
            district: {
              ...state.edit.data.district,
              data: action.payload,
            },
          },
        },
      };
    case actions.EDIT_DISTRICT_SET_SUCCESS:
      return {
        ...state,
        edit: {
          ...state.edit,
          data: {
            ...state.edit.data,
            district: {
              ...state.edit.data.district,
              loading: false,
            },
          },
        },
      };
    case actions.EDIT_DISTRICT_SET_ERROR:
      return {
        ...state,
        edit: {
          ...state.edit,
          data: {
            ...state.edit.data,
            district: {
              ...state.edit.data.district,
              loading: false,
              data: [],
              error: action.payload,
            },
          },
        },
      };
    case actions.EDIT_DISTRICT_RESET_ERROR:
      return {
        ...state,
        edit: {
          ...state.edit,
          data: {
            ...state.edit.data,
            district: {
              ...state.edit.data.district,
              error: null,
            },
          },
        },
      };
    //#endregion

    //#region Deletes
    case actions.DELETES_GET:
      return {
        ...state,
        loading: false,
        deletes: {
          ...state.deletes,
          loading: false,
          visible: true,
        },
      };
    case actions.DELETES_POST:
      return {
        ...state,
        loading: false,
        deletes: {
          ...state.deletes,
          modelPost: action.payload,
          loading: true,
          visible: true,
        },
      };
    case actions.DELETES_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        deletes: {
          ...state.deletes,
          result: action.payload,
          loading: false,
          visible: false,
        },
      };
    case actions.DELETES_POST_ERROR:
      return {
        ...state,
        loading: false,
        deletes: {
          ...state.deletes,
          error: action.payload,
          loading: false,
          visible: true,
        },
      };
    case actions.DELETES_CLOSE:
      return {
        ...state,
        loading: false,
        deletes: {
          ...state.deletes,
          loading: false,
          visible: false,
        },
      };
    case actions.DELETES_RESET:
      return {
        ...state,
        deletes: { ...initState.deletes },
      };
    //#endregion

    //#region Activates/Deactivates
    case actions.ACTIVATES_POST:
      return {
        ...state,
        loading: true,
        activates: {
          ...state.activates,
          modelPost: action.payload,
        },
      };
    case actions.ACTIVATES_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        activates: {
          ...state.activates,
          result: action.payload,
        },
      };
    case actions.ACTIVATES_POST_ERROR:
      return {
        ...state,
        loading: false,
        activates: {
          ...state.activates,
          error: action.payload,
        },
      };
    case actions.ACTIVATES_RESET:
      return {
        ...state,
        activates: { ...initState.activates },
      };
    //#endregion

    // Grid
    case actions.GRD_LOADING:
      return {
        ...state,
        grd: {
          loading: action.payload,
        },
      };

    //#region Search
    // Country => StateProvince
    case actions.SEARCH_COUNTRY_CHANGE:
      return {
        ...state,
        search: {
          ...state.search,
          stateProvince: {
            ...state.search.stateProvince,
            data: [],
            loading: true,
          },
        },
      };
    case actions.SEARCH_STATE_PROVINCE_SET:
      return {
        ...state,
        search: {
          ...state.search,
          stateProvince: {
            ...state.search.stateProvince,
            data: action.payload,
          },
        },
      };
    case actions.SEARCH_STATE_PROVINCE_SET_SUCCESS:
      return {
        ...state,
        search: {
          ...state.search,
          stateProvince: {
            ...state.search.stateProvince,
            loading: false,
          },
        },
      };
    case actions.SEARCH_STATE_PROVINCE_SET_ERROR:
      return {
        ...state,
        search: {
          ...state.search,
          stateProvince: {
            ...state.search.stateProvince,
            loading: false,
            data: [],
            error: action.payload,
          },
        },
      };
    case actions.SEARCH_STATE_PROVINCE_RESET_ERROR:
      return {
        ...state,
        search: {
          ...state.search,
          stateProvince: {
            data: [],
            loading: false,
            error: null,
          },
        },
      };
    // StateProvince => District
    case actions.SEARCH_STATE_PROVINCE_CHANGE:
      return {
        ...state,
        search: {
          ...state.search,
          district: {
            ...state.search.district,
            data: [],
            loading: true,
          },
        },
      };
    case actions.SEARCH_DISTRICT_SET:
      return {
        ...state,
        search: {
          ...state.search,
          district: {
            ...state.search.district,
            data: action.payload,
          },
        },
      };
    case actions.SEARCH_DISTRICT_SET_SUCCESS:
      return {
        ...state,
        search: {
          ...state.search,
          district: {
            ...state.search.district,
            loading: false,
          },
        },
      };
    case actions.SEARCH_DISTRICT_SET_ERROR:
      return {
        ...state,
        search: {
          ...state.search,
          district: {
            ...state.search.district,
            loading: false,
            data: [],
            error: action.payload,
          },
        },
      };
    case actions.SEARCH_DISTRICT_RESET_ERROR:
      return {
        ...state,
        search: {
          ...state.search,
          district: {
            ...state.search.district,
            error: null,
          },
        },
      };
    //#endregion

    default:
      return state;
  }
  //#endregion
}
