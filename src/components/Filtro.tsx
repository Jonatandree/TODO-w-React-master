//Filtro para las tareas por

import { useState , useEffect } from 'react';

import { IFiltro, IFiltroFormProps } from '../interfaces/IFiltro'

function Filtro(props: IFiltroFormProps) {

    const [errores, setErrores] = useState<string[]>([])

    const validateForm = () => {
        
        let newError: string[] = [];
        
    }
  
    return (        
        <form>
            <table>
                
                <td>
                    <label>Equipo:</label>
                </td>
                <tr>
                    <td>
                        <select id="equipo" name="team" value={props.task.team} onChange={props.onChangeSelect} className="filterTeam" >
                            <option value="">Seleccione un equipo</option>
                            {props.teams.map((team) => {
                                return <option key={team} value={team} >{team} </option>
                            })}
                        </select>
                    </td>
                </tr>
            
            </table>      
        </form>        
    );

}

export default Filtro;