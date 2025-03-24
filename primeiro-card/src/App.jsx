import './App.css'
import Card from "./Card"





function App() {


  return (
    <>
<Card imagem={narutoImg} titulo={"Naruto"} paragrafo={"Determinado, corajoso e nunca desiste dos amigos!"} />
<Card titulo={kakashiImg} paragrafo={"Estrategista e calculista, mas protetor com seus alunos!"} />
<Card titulo={gaaraImg} paragrafo={"Superou seus traumas e se tornou um líder sábio!"} />
<Card titulo={itachiImg} paragrafo={"Inteligente, calmo e extremamente estratégico!"} />
    </>
  )
}

export default App
