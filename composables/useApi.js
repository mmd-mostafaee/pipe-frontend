const snackbar = ref({
    show: false,
    text: '',
    color: '',
    timeout: 5000,
})

export const useApi = () => {
    const config = useRuntimeConfig()

    const showNotification = (message, color = 'error') => {
        snackbar.value = {
            show: true,
            text: message,
            color,
            timeout: 5000,
        }
        console.log('api', snackbar.value)
    }

    const handleError = (error) => {
        let errorMessage = 'An unexpected error occurred'

        if (error.response) {
            // Handle different response status codes
            const status = error.response.status
            const data = error.response._data

            switch (status) {
                case 400:
                    // Handle validation errors
                    if (data.detail) {
                        errorMessage = data.detail
                    } else if (typeof data === 'object') {
                        // Handle DRF validation errors format
                        const errors = Object.entries(data)
                            .map(([key, value]) => `${key}: ${Array.isArray(value) ? value[0] : value}`)
                            .join(', ')
                        errorMessage = errors || 'Validation error'
                    }
                    break
                case 401:
                    errorMessage = 'Authentication required'
                    // Optional: Redirect to login or handle token expiration
                    break
                case 403:
                    errorMessage = 'You do not have permission to perform this action'
                    break
                case 404:
                    errorMessage = 'Resource not found'
                    break
                case 500:
                    errorMessage = 'Server error. Please try again later'
                    break
                default:
                    errorMessage = data?.detail || 'An error occurred'
            }
        } else if (error.message) {
            errorMessage = error.message
        }

        showNotification(errorMessage)
        throw error
    }

    const fetchApi = async (endpoint, options = {}) => {
        try {
            const data = await $fetch(endpoint, {
                baseURL: config.public.API_BASE_URL,
                ...options,
                onRequest({ options }) {
                    const token = localStorage.getItem('authToken')
                    if (token) {
                        options.headers = {
                            ...options.headers,
                            Authorization: `Bearer ${token}`,
                        }
                    }
                },
                onResponse({ response }) {
                    // Show success notification for specific operations if needed
                    if (options.showSuccess) {
                        showNotification(options.successMessage || 'Operation successful', 'success')
                    }
                },
                onResponseError(error) {
                    handleError(error)
                },
            })
            return data
        } catch (error) {
            handleError(error)
        }
    }

    return {
        fetchApi,
        snackbar,
        showNotification,
    }
}
