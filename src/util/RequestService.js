import request from 'request';
import bluebird from 'bluebird';
import AppConstants from './AppConstants';

class RequestService {
	
	github(path, dir=true){
		
		let base = "https://api.github.com/repos/bibleexchange/courses/contents";
		
		/*
		if(dir===77){
			base = "https://raw.githubusercontent.com/bibleexchange/courses/master";
		}
		*/
		
		let URL = base+path;
		
		return this.get(URL);
	}

///MASTER SEND GET REQUEST:
  get(url){	  
	console.log(url);
	    return new bluebird( (resolve, reject) => {
		  request.get(
			{
			  url: url,
			  json: true
			},
			(err, response, body) => {
			  if(err){
				return reject(err);
			  }
			  if(body.errors){
				return reject(body.errors);
			  }
			  if(response.statusCode >= 400){
				return reject(body);
			  }
			  return resolve(body);
			}
		  );
		});
	  }  
}

export default new RequestService();