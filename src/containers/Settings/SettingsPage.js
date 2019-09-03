import React from 'react'

import { Header} from "../../components"

const themes =[
    {label : "Padrâo"},
    {label:"Clássico"}
]
const SettingsPage =()=>{
    <div>
<Header>Temas</Header>
<div className="themes">
{themes.map (themes=>(
    <div className="themes_item">
        <p>{themes.label}</p>
        </div>
))}
<div className="themes">
    <div className="themes__item">
        <p>Padrão</p>
    </div>
</div>
<div className="themes">
    <div className="themes__item">
        <p>Clássico</p>
    </div>
</div>
</div>
}
export default SettingsPage;
36 4:57