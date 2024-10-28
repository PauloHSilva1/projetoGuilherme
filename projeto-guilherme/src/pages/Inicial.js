import { Typography } from '@mui/material'
import Button from '@mui/material/Button'
import React,{useState} from 'react'

    
function Inicial(){
    const [questoes,setQuestoes] = useState(false)
    const questaoHandle= async()=>{
        setQuestoes(true)
    }
    return(
    <div>
    <Button onClick={questaoHandle} style={{marginLeft:'40vw', marginTop:'60vh'}} variant='contained' color='secondary'>Gerar questões</Button>
    <Button style={{marginLeft:'1vw', marginTop:'60vh'}} variant='contained' color='secondary'>Analisar simulado</Button>
    {questoes && <Typography>Entendi</Typography>}
    </div>
    )
}
export default Inicial