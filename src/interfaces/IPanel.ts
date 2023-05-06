import { IPanels } from "./IunPanel";
import { ITask } from "./ITask";

export interface IPanel {

    panel: IPanels;
    tasks: ITask[];
    changeStatuss: (id: number, status: string) => void;
    deletePanel: (id: number) => void;
    changeStatus: (id: number, status: string) => void;
    deleteTask: (id: number) => void;
}
