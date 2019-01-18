import server from "./app";

// if (!module.parent) server.listen(3000);
// console.log('app running on port ', 3000);

const port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log('app running on port 3000')
});
