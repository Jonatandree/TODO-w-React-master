import { useState } from 'react';

import { IPanel} from '../interfaces/IPanel';
import Card from './Card'


function Panel(props:IPanel ){
    const [botonVisible, setBotonVisible] = useState(true);
    

    const validateForm = () => { 

        if(props.panel.name==="TODO"){
            return setBotonVisible(false);
              
        }

    }

    
    return (

        <div className="columna">
            
            <div className="">
                <h2 onClick={ validateForm} className="panel-titulo"> { props.panel.name } </h2>
            </div>
            {botonVisible &&<button  className="delete-btn" onClick={ () =>{ props.deletePanel( props.panel.id )}} >Eliminar</button>}


            {  
                props.tasks.map((task) => {
                    return (
                        <Card 
                            task={task} 
                            changeStatus={props.changeStatus} 
                            deleteTask={props.deleteTask}
                        />
                    )
                })
            }




            
 

        </div>
 
    )
}

export default Panel;