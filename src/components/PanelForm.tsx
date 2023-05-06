import { SetStateAction } from 'react';
import { useState , useEffect } from 'react';


import { IPanels, IPanelFormProps } from '../interfaces/IunPanel'

function PanelForm(props: IPanelFormProps) {

    const [nam, setNam]=useState("");
    const [listNam, setlistNam]=useState<string[]>(["Todo"]);
    const [botonVisible, setBotonVisible] = useState(false);

    const [errores, setErrores] = useState<string[]>([])
    
    const validateForm = () => {
        let newError: string[] = [];
        if(listNam.includes(nam.toLowerCase().trim()) ) {            
            newError = [...newError, 'este panel ya existe ']           
        }

        if( newError.length === 0 ) {
            props.onSave()
            listNam.push(nam.toLowerCase().trim())
            setlistNam(listNam)
            setErrores([]) 
        }else{
            setErrores([...newError])   
            
        }
        
    }
    const handleNombreChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setNam(event.target.value);
        if (event.target.value !== "" ) {
          setBotonVisible(true);
        } else {
          setBotonVisible(false);
        }
      };

    return (        
        <form>
            <table>
                <tr>
                    <td> <label htmlFor="taskName">Panel</label> </td>
                </tr>

                <tr>
                    <td> <input  type="text" onChange= {(event) => {props.onChangeInput(event); handleNombreChange(event);} } name="name" placeholder='New panel' value={nam} autoComplete='off' /> </td>
                </tr>            

            </table> 
            <td> 
                {botonVisible && <button type="button" onClick={ validateForm }  >Añadir</button>}
                { errores.length > 0 && (
                    <div>
                        <div className="">   
                            { errores.map((error) => {
                                return <p>{error}</p>
                            })}                                                                 
                        </div>
                    </div>
                ) }
            </td>       
        </form>        
    );

}

export default PanelForm;