# Front-end Additional Setup Notes

Please add the following information to client/.env file:

```bash
SKIP_PREFLIGHT_CHECK=true
REACT_APP_AWS_ACCESS_KEY_ID={access_key_here}
REACT_APP_AWS_SECRET_ACCESS_KEY={access_key_here}
REACT_APP_AWS_REGION=us-east-1
REACT_APP_AWS_BUCKET_NAME=react-aws-s3

REACT_APP_FIREBASE_API_KEY={key_here}
REACT_APP_FIREBASE_AUTH_DOMAIN={domain_here}.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID={project_id_here}
REACT_APP_FIREBASE_STORAGE_BUCKET={bucket_here}
REACT_APP_FIREBASE_MESSAGING_SENDER_ID={id_here}
REACT_APP_FIREBASE_APP_ID={id_here}
REACT_APP_FIREBASE_MEASUREMENT_ID={id_here}

```