import app from "./app-setup.js";

const port = process.env.PORT 



app.listen(port, () => {
    console.log('Server started on port ' + port);
});



process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  // Don't call process.exit()
});


process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  // Don't call process.exit()
});