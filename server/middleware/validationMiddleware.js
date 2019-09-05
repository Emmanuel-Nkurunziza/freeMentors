import Joi from '@hapi/joi';
import Schemas from '../helpers/validationHelper';

export const validate=(req, res, next) => {
	
	const _supportedMethods = ['post', 'put', 'patch']; // post', 'put', 'patch' can request data validation
	const route = req.route.path;
	const method = req.method.toLowerCase();

	if (_supportedMethods.includes(method) && Schemas[route] != undefined) {
		
		const schema = Schemas[route];   // schema for the current route
		if (schema) {
			
			return Joi.validate(req.body, schema, (error, data) => {     // Validate req.body
				if (error) {
					return res.status(404).send({ 'status': 404, 'error': error.details[0].message });
				} else {
					
					req.body = data;  //Replace req.body  after validation
					next();
				}
			});
		}
	}
	next();
};