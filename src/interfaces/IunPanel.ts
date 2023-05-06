import React from "react";


export interface IPanels {
    id: number;
    name: string;
    status: string;
 
}
export interface IPanelFormProps {
    panel: IPanels;
    onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSave: () => void;
}