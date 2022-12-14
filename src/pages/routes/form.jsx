import { useState } from "react"


export default function Form() {

  //Var to form

  const [circuitName, setCircuitName] = useState("")
  const [demand_kVA, setDemand_kVA] = useState()
  const [lineVoltage, setLineVoltage] = useState()
  const [powerFactor, setPowerFactor] = useState()
  const [conductorLengthMeters, setConductorLengthMeters] = useState()
  const [conductorCrossSectionMM, setConductorCrossSectionMM] = useState()
  const [ currentNom, setCurrentNom] = useState(0)
  
  

  const [circuitElements, setCircuitElements] = useState([])


  async function saveCircuitElement() {
  
    let varCurrentNom = (((demand_kVA * 1000)/(lineVoltage * Math.sqrt(3))/powerFactor))
    let varConductorCrossSectionsMinimun = ((Math.sqrt(3) * conductorLengthMeters * varCurrentNom) / (lineVoltage * (2/100) * 56))
    let varRespConductorCrossSection = ""

    if( varConductorCrossSectionsMinimun > conductorCrossSectionMM ){
         varRespConductorCrossSection = "Condutor não atende !"
    }else if( varConductorCrossSectionsMinimun <= conductorCrossSectionMM ){
         varRespConductorCrossSection = "Condutor atende o circuito!"
    }


    await fetch('/api/form', {
      method: 'POST',
      body: JSON.stringify({
        circuitName,
        demand_kVA,
        lineVoltage,
        powerFactor,
        conductorLengthMeters,
        conductorCrossSectionMM,
        currentNom : varCurrentNom,
        conductorCrossSectionMinimun : varConductorCrossSectionsMinimun,
        respConductorCrossSection : varRespConductorCrossSection  
      })
    })

    
    setCurrentNom("")
    setCircuitName("")
    setDemand_kVA("")
    setLineVoltage("")
    setPowerFactor("")
    setConductorLengthMeters("")
    setConductorCrossSectionMM("")

    const resp = await fetch('/api/form')
    const circuitElements = await resp.json()
    setCircuitElements(circuitElements)

  }

  function renderizarCircuitElements() {
    return circuitElements.map((circuitElement, i) => {
      return <> <li key={i}> O circuito {circuitElement.circuitName} que trabalha com a demanda máxima de {circuitElement.demand_kVA} kVA. Onde
        a tensão fase terra do empreendimento é {circuitElement.lineVoltage}V. {circuitElement.conductorLengthMeters} metros é o comprimento dos
        condutores. Foi dimensionando uma seção de {circuitElement.conductorCrossSectionMM} metros. 
       
        A corrente nominal é {circuitElement.currentNom.toFixed(2) } A.
        A seção teorica mínima para o circuito é { circuitElement.conductorCrossSectionMinimun.toFixed(2) } mm². 

        { circuitElement.respConductorCrossSection }

      </li> 
      
      </>
    })
    
  }

  return (

    <div className="styleInputs" >
      <div className="cabecario"> 
        <h1>
          Voltage drop calculation
        </h1>
       </div>
      
      <form  >
        <div class="field" >
          <label for="namecircuit" >
            <i class="far fa-envelope" > Circuit name : </i>
             </label>
          <input type="text" name="namecircuit" value={circuitName} placeholder="Ex: 1º circuito" onChange={e => setCircuitName(e.target.value)}></input> 
        </div>
      <div class="field">
      <label for="demand_in_kVA" >
            <i class="far fa-envelope" > Demand in kVA : </i>
             </label>
        <div className="InputWithUnit" >
          <input type="number" name="demand_in_kVA" value={demand_kVA} placeholder="Ex: 50 kVA" onChange={e => setDemand_kVA(+e.target.value)}></input>
          <span>  kVA</span>
        </div>
      </div> 
     <div class="field" >
       <label for="linevoltage" >
          <i class="far fa-envelope"> Line Voltage :</i>
       </label>
        <div className="InputWithUnit" >
          <input type="number" name="linevoltage" value={lineVoltage} placeholder="Ex: 220 V" onChange={e => setLineVoltage(+e.target.value)}></input>
          <span>  V</span>
        </div>

        <div class="field">
        </div>
        <label for="powerfactor" >
          <i class="far fa-envelope" > Power Factor :</i> 
          </label> 
        <div className="InputWithUnit" >
          <input type="number" name="powerfactor"  value={powerFactor} placeholder="Ex: 1 " onChange={e => setPowerFactor(+e.target.value)}></input>
        </div>

        </div>
        <div class="field" >
          <label for="conductorlengthmeters" >
            <i class="far fa-envelope">Conductor length in meters</i>
          </label>
        <div className="InputWithUnit" >
          <input type="number" name="conductorlengthmeters" value={conductorLengthMeters} placeholder="Ex: 20 m" onChange={e => setConductorLengthMeters(+e.target.value)}></input>
          <span>  m</span>
        </div>
        </div>
        <div class="field" >
          <label for="conductorcrosssectionmm" >
            <i class="far fa-envelope">Conductor cross section in mm²</i>
          </label>
        <div className="InputWithUnit" >
          <input type="number" name="conductorcrosssectionmm"  value={conductorCrossSectionMM} placeholder="Ex: 6 mm²" onChange={e => setConductorCrossSectionMM(+e.target.value)}></input>
          <span> mm²</span>
        </div>
        </div>
      </form>
      <button onClick={saveCircuitElement} type="reset" > Save </button>

      <ul> {renderizarCircuitElements()} </ul>

    </div>
  )





}
