import "./Datastyles.css"
function Data({country,recovered,today}){
    return(
        <>
        <div className="section">
            <div className="first">
                <div className="one cards">
                    <h3>Country</h3>
                    <h1>{country}</h1>
                </div>
                <div className="two cards">
                <h3>Total Recovered</h3>
                    <h1>{recovered}</h1>
                </div>
                <div className="three cards">
                <h3>Today Cases</h3>
                    <h1>{today}</h1>
                </div>
            </div>
            <div className="second">
                <div className="fourth cards">
                <h3>Total Death</h3>
                    <h1>India</h1>
                </div>
                <div className="fifth cards">
                <h3>Total Active</h3>
                    <h1>India</h1>
                </div>
                <div className="sixth cards">
                <h3>Case per million</h3>
                    <h1>India</h1>
                </div>
            </div>
        </div>
        
        
        
        </>
      

    )
}
export default Data;