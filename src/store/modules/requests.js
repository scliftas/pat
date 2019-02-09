import axios from 'axios';

// state
export const state = {
  methods: ['GET', 'POST'],
  request: {
      method: 'GET',
      url: '',
      data: [
          {
            key: '',
            value: ''
          }
      ],
      headers: [
          {
              key: '',
              value: ''
          }
      ],
      crossDomain: true,
      withCredentials: true
  },
  response: false,
  error: false
}

// getters
export const getters = {
    methods: state => state.methods,
    request: state => state.request,
    response: state => state.response,
    error: state => state.error
}

export const mutations = {
    STORE_METHOD (state, { method }) {
        state.request.method = method;
    },
    
    STORE_URL (state, { url }) {
        state.request.url = url;
    },

    STORE_DATUM_KEY(state, { data }) {
        state.request.data[data.index].key = data.value;
    },

    STORE_DATUM_VALUE(state, { data }) {
        state.request.data[data.index].value = data.value;
    },

    STORE_HEADER_KEY(state, { data }) {
        state.request.headers[data.index].key = data.value;
    },

    STORE_HEADER_VALUE(state, { data }) {
        state.request.headers[data.index].value = data.value;
    },

    CLEAR_DATUM (state, { index }) {
        state.request.data.splice(index, 1);
    },

    CLEAR_HEADER (state, { index }) {
        state.request.headers.splice(index, 1);
    },

    ADD_EMPTY_DATUM (state) {
        state.request.data.push({
            key: '',
            value: ''
        });
    },

    ADD_EMPTY_HEADER (state) {
        state.request.headers.push({
            key: '',
            value: ''
        });
    },

    STORE_RESPONSE (state, { response }) {
        state.response = response;
    },

    CLEAR_RESPONSE (state) {
        state.response = false;
    },

    STORE_ERROR (state, { error }) {
        state.error = error;
    },

    CLEAR_ERROR (state) {
        state.error = false;
    }
}

export const actions = {
    storeRequest ({ commit }, request) {
        commit('STORE_REQUEST', { request: request });
    },

    storeURL({ commit }, url) {
        commit('STORE_URL', { url: url});
    },

    storeMethod({ commit, state }, method) {
        if (state.methods.includes(method)) commit('STORE_METHOD', { method: method });
    },

    checkKey({ commit, state }, data) {
        let type = getType(data);

        commit(`STORE_${type}_KEY`, { data: data });

        if (datumIsEmpty(state, data.type, data.index)) commit(`CLEAR_${type}`, { index: data.index });

        if (datumIsFull(state, data.type, data.index)) commit(`ADD_EMPTY_${type}`);
    },

    checkValue({ commit, state }, data) {
        let type = getType(data);

        commit(`STORE_${type}_VALUE`, { data: data });

        if (datumIsEmpty(state, data.type, data.index)) commit(`CLEAR_${type}`, { index: data.index });

        if (datumIsFull(state, data.type, data.index)) commit(`ADD_EMPTY_${type}`);
    },

    makeRequest ({ commit, state }) {
        commit('CLEAR_RESPONSE');
        commit('CLEAR_ERROR');

        const request = JSON.parse(JSON.stringify(state.request));

        if (request.url === '') return commit('STORE_ERROR', { error: 'URL is required!' });

        request.data = transformArrayInput(request.data);
        request.headers = transformArrayInput(request.headers);

        if (request.method === 'GET') {
            request.params = request.data;
            delete request.data;
        }

        axios(request).then((response) => {
            commit('STORE_RESPONSE', { response: response })
        }).catch((error) => {
            commit('STORE_ERROR', { error: error });
        });
    }
}

export const getType = (data) => {
    let type = 'DATUM';

    switch (data.type) {
        case 'data':
        default:
            type = 'DATUM';
            break;
        case 'headers':
            type = 'HEADER';
            break;
    }
    
    return type;
}

export const datumIsEmpty = (state, type, index) => {
    const requestProperty = state.request[type];

    return requestProperty[index].key === '' && requestProperty[index].value === '' && requestProperty.length > 1;
}

export const datumIsFull = (state, type, index) => {
    const requestProperty = state.request[type];
    const dataLength = requestProperty.length - 1;
    const indexIsFull = requestProperty[index].key !== '' && requestProperty[index].value !== '';
    const dataIsFull = requestProperty[dataLength].key !== '' && requestProperty[dataLength].value !== '';

    return indexIsFull && dataIsFull;
}

export const transformArrayInput = (arr) => {
    return arr.reduce((acc, { key, value }) => key === '' ? acc : {...acc, [key]: value}, {});
}