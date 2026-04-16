export function ProductCard({ name, idade, category, image, estilo }) {
    return (
        <div className="product-card">
            <img src={image} alt={name} width={150} />
        
            <div>
                <h1>{name}</h1>
                <p><strong>Idade:</strong> {idade} anos</p>
                <p><strong>Estilo:</strong> {estilo}</p>
                <small>Categoria: {category}</small>
            </div>
        </div>
    );
}
