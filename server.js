import http from 'http';
import app from './app.js';

const PORT = 5000;

const server = http.createServer(app);

server.listen(PORT,err=>{
    if(err) throw err;
    console.log(`Server is running on port ${PORT}`);
})