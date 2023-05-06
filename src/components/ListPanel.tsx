import { useState } from 'react';

import { IListPanelProps } from '../interfaces/IListPanel'
import { IPanelFormProps } from '../interfaces/IunPanel'


import Panel from './Panel'
import { IPanel } from '../interfaces/IPanel';
//props.tasks.filter(task=> task.status === "Completed" )

function ListPanel(props: IListPanelProps & IPanel ) {

    return (
        <div className="columnas">
           
            {  
                props.panels.map((task) => {

                
                    return (
                        
                            <><Panel
                                panel={task}
                                tasks={props.tasks.filter(task => task.status === "TODO")}
                                changeStatuss={props.changeStatus}
                                deletePanel={props.deletePanel}
                                changeStatus={props.changeStatus}
                                 deleteTask={props.deleteTask}
                             />
                            </>
                        
                    )


                    
                })
            }
        </div>
    )
}

export default ListPanel;