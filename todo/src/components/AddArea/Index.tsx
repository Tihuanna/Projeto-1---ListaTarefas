import * as C from './styles';
import { useState, KeyboardEvent } from 'react';


type Props ={
    onEnter: (taskName: string) => void;

}
export const AddArea= ({onEnter}: Props) => {

    const handleKeyUp = (e: KeyboardEvent) =>{
        if(e.code === 'Enter' && input !== ''){
                onEnter(input);
                setInput('')
        }
        
    }

    const[input, setInput] = useState('');

    return(
        <C.Container>
            <div className="image">➕ </div>     
            <input
                type="text"
                placeholder="Adicionar tarefa"
                value = {input}
                onChange={e => setInput(e.target.value)}
                onKeyUp={handleKeyUp}
                />
            </C.Container>
    );

}