const conteinerTotal = document.querySelector('.conteiner-gasolina');

const gasolina = document.querySelector('#value');
const kmInicial = document.getElementById('inicialkm');
const kmFinal = document.getElementById('finalkm');
const Litros_abs = document.getElementById('litros-abs');

const btn_calcular = document.querySelector('.btn-frente');
const btn_voltarAll = document.querySelector('.btn-costas');

// TABELA 2 -  TRAS
let value_gas = document.getElementById('valor-comb');
let litros_abastecido = document.getElementById('litros-abs1');
let total_kilometros = document.getElementById('km_dodadoss');
let km_l = document.getElementById('kilometrosLitros');
let kk = document.getElementById('ki');
let totalCash = document.getElementById('value-total-dimdim');
let idavolta = document.getElementById('idavolta');

btn_voltarAll.addEventListener('click',()=>{
    conteinerTotal.classList.remove('mostrar-resultado')
    value_gas.innerText = ''
    litros_abastecido.innerText = ''
    total_kilometros.innerText = ''
    km_l.innerText = ''
    kk.innerText = ''
    totalCash.innerHTML = ''
    const idae_volta_viagem = ''
    idavolta.innerHTML = ''

})


// calcula quantos kilometros foram rodados
const calculokm = ()=>{
    x = kmFinal.value
    y = kmInicial.value   
    
    return (x - y )
}


// quantos kilometros faz por litro
const fazPorKilometro = ()=>{
    const kilometros = calculokm()
    const kmLitros = Litros_abs.value

    resultado = (kilometros / kmLitros).toFixed(1)
    return resultado
}
//  valor gasto por kilometro
const calculoPorLitro = ()=>{
    const valorGasolina = parseFloat(gasolina.value)
    const calc = fazPorKilometro()

    const result = (valorGasolina / calc).toFixed(2)
    return result 
}



const gastoTotalViagem = ()=>{
    const kmRodado = calculokm()
    const gasPorKm = calculoPorLitro() 
    const result = (gasPorKm * kmRodado).toFixed(2)
    return result
}


const AnaliseTotal = ()=>{
    value_gas.innerText = `R$ ${gasolina.value}`
    litros_abastecido.innerText = `${Litros_abs.value} L`
    total_kilometros.innerText = `${calculokm()} Km`
    km_l.innerText = `${fazPorKilometro()} Km/L`
    kk.innerText = `R$ ${calculoPorLitro()} p/Km`
    totalCash.innerHTML = `R$ ${gastoTotalViagem()}`
    const idae_volta_viagem = (gastoTotalViagem() * 2).toFixed(2)
    idavolta.innerHTML = `R$ ${idae_volta_viagem}`
    
}

function main (){
    calculoPorLitro()
    fazPorKilometro()   
    gastoTotalViagem() 
}


btn_calcular.addEventListener('click', (e)=>{
    e.preventDefault()
    
    if(gasolina.value.length === 0 || kmFinal.value.length === 0 || kmInicial.value.length === 0 || Litros_abs.value.length === 0  ){
        
        alert('preencha todos os campos')
        return
    }
    if(calculokm()< 0){
        alert('Verifique os dados [ km não pode ser Negativo]')
        return
    }
    const addClass = ()=>{
        conteinerTotal.classList.add('mostrar-resultado')
    }
    addClass()
    main()
    AnaliseTotal()
})





