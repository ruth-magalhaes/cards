function Card(anime) {

    return (
        <div className="card">
               <img src={imagem} alt={titulo} />
            <h1>{anime.titulo || "Default"}</h1>
            <p>{anime.paragrafo || "Default"}</p>

        </div>
    )
}

export default Card