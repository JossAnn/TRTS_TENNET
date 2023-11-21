function Plane( {children} ) {
    return (
        <div className="col-span-8 col-start-2 grid grid-cols-8 w-full h-[80%] relative top-[10%]">
            {children}
        </div>
    )
}

export default Plane;