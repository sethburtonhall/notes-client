const config = {
  s3: {
    REGION: 'us-east-1',
    BUCKET: 'notes-image-upload'
  },
  apiGateway: {
    REGION: 'us-east-1',
    URL: 'https://2e60ocye68.execute-api.us-east-1.amazonaws.com/prod'
  },
  cognito: {
    REGION: 'us-east-1',
    USER_POOL_ID: 'us-east-1_up5LyaZGS',
    APP_CLIENT_ID: '6e4hpfv9vrgj187mpq6k479kcq',
    IDENTITY_POOL_ID: 'us-east-1:2bb2416f-9538-465c-9cd6-4923c6f47f22'
  },
  MAX_ATTACHMENT_SIZE: 5000000
};

export default config;
