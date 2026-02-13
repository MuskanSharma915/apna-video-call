let IS_PROD = true;

const server = IS_PROD
  ? "https://apna-video-call-0x66.onrender.com"
  : "http://localhost:8000";

export default server;
