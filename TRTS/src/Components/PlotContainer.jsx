function PlotContainer( {children} ) {
    return (
        <div className="col-span-10 col-start-3 h-full w-full grid grid-cols-10">
            {children}
        </div>
    )
}

export default PlotContainer;