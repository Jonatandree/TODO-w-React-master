import React from "react";

export interface IFiltro {
    id: number;
    team?: string;
}

export interface IFiltroFormProps {
    task: IFiltro;
    teams: string[];
    onChangeSelect: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}