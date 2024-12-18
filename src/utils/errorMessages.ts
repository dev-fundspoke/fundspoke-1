// Centralized error messages for consistency
export const ERROR_MESSAGES = {
  FORM: {
    SUBMISSION: 'Failed to submit form',
    VALIDATION: 'Please check your input and try again',
    FILE_UPLOAD: 'Failed to upload file',
  },
  AUTH: {
    UNAUTHORIZED: 'You are not authorized to perform this action',
    SESSION_EXPIRED: 'Your session has expired',
  },
  API: {
    NETWORK: 'Network error occurred',
    SERVER: 'Server error occurred',
    TIMEOUT: 'Request timed out',
  },
} as const;