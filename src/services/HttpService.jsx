import axios from 'axios';
import { notifyError, notifySuccess, notifyWarning, notifyInfo } from '../../src/components/utilities/toastNotifications';

axios.interceptors.response.use(null, error => {

    const expectedError =
        error.response && (error.response.status >= 400 && error.response.status < 500)

    if (!expectedError) {
        // Log it here
        notifyError('🚨 Some unexpected error occured')
    }

    return Promise.reject(error);
})

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete
}


