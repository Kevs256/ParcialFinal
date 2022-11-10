const Precio = () =>{
    return(
        <div className="container" id="search-layout">
			<aside className="price-filter">
				<form className="aside-form" id="aside-filter">
					<div className="form-group">
						<label className="form__label" htmlFor="price-range">Precio</label>
						<input className="form__range" type="range" name="price-range" id="price-range" step="1" />
					</div>
					<div className="form-group form-group--fifty-container">
						<div className="form-group--fifty">
							<label className="form__label" htmlFor="from">Desde: </label>
							<input type="number" className="form__input" placeholder="0€" id="from-input" step="1" />
						</div>
						<div className="form-group--fifty">
							<label className="form__label" htmlFor="from">Hasta: </label>
							<input type="number" className="form__input" placeholder="100€" id="to-input" step="1" />
						</div>
					</div>
					<button className="btn btn--green btn--block" type="submit">Filtrar</button>
				</form>
			</aside>
			<section className="container products" id="productsSection"></section>
		</div>
    )
}

export default Precio