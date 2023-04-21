import { http } from '../services/config'

export default	{

	salvar:(produto)=>{
		return http.post('',produto);
  },
    
	atualizar:(identificardor, produto)=>{
		return http.put('' + identificardor , produto);
  },

  listar:()=>{
		return http.get('')
  },
    
	apagar:(produto)=>{
		return http.delete('' + produto)
	}
}