import axios from 'axios';

axios.defaults.baseURL = 'https://6482021129fa1c5c50327789.mockapi.io/contacts/';

export const addContactApi = async contact => {
  return await axios.post('contacts', contact).then(res => {
    const { data } = res;
    return data;
  });
};

export const getContactApi = async () => {
  return await axios.get('contacts').then(res => {
    const { data } = res;
    return data;
  });
};

export const removeContactApi = async id => {
  return await axios.delete(`contacts/${id}`).then(res => res.data);
};
