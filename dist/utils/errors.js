"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleError = exports.ValidationError = void 0;
class ValidationError extends Error {
}
exports.ValidationError = ValidationError;
const handleError = (err, req, res, next) => {
    console.error(err);
    res.status(err instanceof ValidationError ? 400 : 500).render('error', {
        message: err instanceof ValidationError
            ? err.message
            : 'We are sorry. Please try again later.',
    });
};
exports.handleError = handleError;
//# sourceMappingURL=errors.js.map