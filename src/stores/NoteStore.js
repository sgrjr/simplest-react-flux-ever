import ActionTypes from '../util/ActionTypes';
import BaseStore from './BaseStore';
import marked from 'marked';

class NoteStore extends BaseStore {
	
	constructor(){
		super();
		this.subscribe(() => this._registerToActions.bind(this));
		
		this._name = false;
		this._url = false;
		this._body = false;
		this._reference = false;
		this._error = false;
		this._loading = true;
		
		this.meta = {
			name : "NoteStore"
		};
		
	}
	
	 _registerToActions(payload) {
 
		  switch(payload.type){			  
			
			case ActionTypes.GITHUB_FILE_FETCH:
				this.logChange(payload);
				this._error = false;
				this._loading = true;
				this.emitChange();
			  break;
			
			case ActionTypes.GITHUB_FILE_SUCCESS:
				this.logChange(payload);
				this._name = payload.action.body.name;
				this._body = this._getBody(payload.action.body);
				this._loading = false;
				this._error = false;
				this.emitChange();
			  break;
			
			case ActionTypes.GITHUB_FILE_FAILED:
				this.logChange(payload);
				this._error = payload.action.error;
				this._loading = false;
				this.emitChange();
			  break;	
			
			default:
			  return true;
		  }
	  }
	  
	 getAll(){

		const x = {
			body:this._body,
			error: this._error,
			loading:this._loading
			};
		
		return x;
	}
	
	_getBody(file){
		
		 switch(file.name.split('.')[1]){			  
			
			case 'md':
				return {__html:  this._base64(file.content)};
			  break;

			case 'html':
				return {__html:  this._base64(file.content, false)};
			  break;
			
			default:
			  return false;
		  }
	}
	
	_base64(encoded, isMarkDown=true) {
		
		if(isMarkDown){
			return this._createMarkup(atob(encoded));
		}else{			
			return atob(encoded);
		}
	}

	 _createMarkup(markup) { 
				
		let m = markup.replace(/([A-Za-z]+) ([0-9]+):([0-9]+)|([0-9]+)* ([A-Za-z]+) ([0-9]+):([0-9]*)|([A-Za-z]+) ([A-Za-z]+) ([0-9]+):([0-9]*)|([A-Za-z]+) ([of]+) ([A-Za-z]+) ([0-9]+)([:0-9]*)/g,'[$1$8$9$12$13$14$4$5 $2$10$15$6:$3$11$16$7](/bible/$1$8$9$12$13$14$4$5/$2$10$15$6/$3$11$16$7)');
	
		return marked(m); 
	}
}

export default new NoteStore();