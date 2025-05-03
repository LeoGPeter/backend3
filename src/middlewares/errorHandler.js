export function errorHandler(err, req, res, next) {
    console.error(err);
  
    const status = err.code || 500;
    const message = err.message || 'Internal Server Error';
  
    res.status(status).json({
      status: 'error',
      error: {
        name: err.name,
        message,
        cause: err.cause || null,
      },
    });
  }