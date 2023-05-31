"use strict";

const  app = require("../app");
const PORT = 3000;

// listen 명령어 사용해서 서버 띄울 수 있음
app.listen(PORT, () => {
    console.log("서버 가동");
});