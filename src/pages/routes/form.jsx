import { useState } from "react"


export default function Form() {

  //Var to form

  const [ circuitName, setCircuitName ] = useState("")
  const [ demand_kVA, setDemand_kVA ] = useState(0)
  const [ lineVoltage , setLineVoltage ] = useState(0)
  const [ powerFactor, setPowerFactor ] = useState(0.92)
  const [ conductorLengthMeters, setConductorLengthMeters ] = useState(0)
  const [ conductorCrossSectionMM, setConductorCrossSectionMM ] = useState(0)

  const [ circuitElements, setCircuitElements ] = useState([])


  async function saveCircuitElement(){
    await fetch('/api/form',{
      method:'POST',
      body:JSON.stringify({
        circuitName,
        demand_kVA,
        lineVoltage,
        powerFactor,
        conductorLengthMeters,
        conductorCrossSectionMM
      })
    })

    setCircuitName("")
    setDemand_kVA(0)
    setLineVoltage(0)
    setPowerFactor(0)
    setConductorLengthMeters(0)
    setConductorCrossSectionMM(0)

    const resp = await fetch('/api/form')
    const circuitElements = await resp.json()
    setCircuitElements(circuitElements)

  }

  function renderizarCircuitElements(){
    return circuitElements.map((circuitElement, i) => {
      return <li key={i}> O circuito {circuitElement.circuitName} que trabalha com a demanda máxima de { circuitElement.demand_kVA } kVA. Onde 
      a tensão fase terra do empreendimento é {circuitElement.lineVoltage}V. {circuitElement.conductorLengthMeters} metros é o comprimento dos 
      condutores. Foi dimensionando uma seção de {circuitElement.conductorCrossSectionMM} metros. 
       </li> 
    })
  }

  return (
    
    <div className="styleInputs" >
      
      <h1>
        Voltage drop calculation
      </h1>
      
      <div >
      <input type="text" value={circuitName} placeholder="Coloque o nome do cicuito. Ex: Circuito 1" onChange={ e => setCircuitName(e.target.value)}></input>
      
      </div>
      <div className="InputWithUnit" >
          <input type="number" value={demand_kVA} placeholder="Coloque o valor da demanda. Ex: 50" onChange={ e => setDemand_kVA(+e.target.value)}></input> 
          <span> kVA</span>
      </div>

      <div className="InputWithUnit" >
          <input type="number" value={lineVoltage} placeholder="Coloque o valor de tensão de linha Ex: 220" onChange={ e => setLineVoltage(+e.target.value)}></input> 
          <span> V</span>
      </div>

      <div className="InputWithUnit" >
          <input type="number" value={powerFactor} placeholder="Coloque o valor do Fator de potencia Ex: 1" onChange={ e => setPowerFactor(+e.target.value)}></input>
      </div>

      <div className="InputWithUnit" >
          <input type="number" value={conductorLengthMeters} placeholder="Qual o tamanho do condutor ? Ex: 20" onChange={ e => setConductorLengthMeters(+e.target.value)}></input> 
          <span> m</span>
      </div>

      <div className="InputWithUnit" >
          <input type="number" value={conductorCrossSectionMM} placeholder="Qual a seção do condutor ? Ex: 6" onChange={ e => setConductorCrossSectionMM(+e.target.value)}></input> 
          <span> mm²</span>
      </div>
    <button onClick={saveCircuitElement } > Save </button>

    <ul> { renderizarCircuitElements() } </ul>

    </div>
  )





}